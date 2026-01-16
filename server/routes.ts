import type { Express } from "express";
import { createServer, type Server } from "http";
import type { Request, Response } from "express";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // YouTube API endpoint
  app.get("/api/youtube/videos", async (req: Request, res: Response) => {
    try {
      const apiKey = process.env.YOUTUBE_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ 
          error: "YouTube API key not configured. Please set YOUTUBE_API_KEY environment variable." 
        });
      }

      const channelHandle = "@CombatZoneMMA";
      
      // First, get channel ID from handle
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(channelHandle)}&type=channel&key=${apiKey}`
      );

      if (!channelResponse.ok) {
        throw new Error(`YouTube API error: ${channelResponse.statusText}`);
      }

      const channelData = await channelResponse.json();
      
      if (!channelData.items || channelData.items.length === 0) {
        return res.status(404).json({ error: "Channel not found" });
      }

      // When searching for channels, the channel ID is in the id field, not snippet.channelId
      const channelId = channelData.items[0].id.channelId;

      // Now get the latest videos from the channel
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=6&key=${apiKey}`
      );

      if (!videosResponse.ok) {
        throw new Error(`YouTube API error: ${videosResponse.statusText}`);
      }

      const videosData = await videosResponse.json() as {
        items: Array<{
          id: { videoId: string };
          snippet: {
            title: string;
            thumbnails: {
              medium?: { url: string };
              default: { url: string };
            };
            publishedAt: string;
            description: string;
          };
        }>;
      };

      // Transform the data to a cleaner format
      const videos = videosData.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
      }));

      res.json({ videos });
    } catch (error: unknown) {
      console.error("Error fetching YouTube videos:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ 
        error: "Failed to fetch YouTube videos",
        message: errorMessage 
      });
    }
  });

  return httpServer;
}

