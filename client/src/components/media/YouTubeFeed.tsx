import { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";
import type { YouTubeVideo, YouTubeApiResponse } from "@/types";
import { YOUTUBE_CHANNEL_URL } from "@/lib/constants";

export function YouTubeFeed() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/youtube/videos");

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch videos");
        }

        const data = (await response.json()) as YouTubeApiResponse;
        setVideos(data.videos || []);
      } catch (error: unknown) {
        console.error("Error fetching YouTube videos:", error);
        const errorMessage = error instanceof Error ? error.message : "Failed to load videos";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="aspect-video bg-neutral-200 mb-3 rounded-lg"></div>
            <div className="h-4 bg-neutral-200 rounded mb-2"></div>
            <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 bg-neutral-100 rounded-lg">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <PlayCircle className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-2">Watch Our Videos</h3>
          <p className="text-neutral-600 mb-6">
            Check out fight highlights, interviews, and behind-the-scenes content on our YouTube
            channel.
          </p>
          <a
            href="https://www.youtube.com/@CombatZoneMMA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 font-bold uppercase tracking-wider px-6 py-3 transition-colors"
          >
            <PlayCircle size={20} />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-12 bg-neutral-100 rounded-lg">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <PlayCircle className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-[Chakra_Petch] uppercase mb-2">Watch Our Videos</h3>
          <p className="text-neutral-600 mb-6">
            Check out fight highlights, interviews, and behind-the-scenes content on our YouTube
            channel.
          </p>
          <a
            href="https://www.youtube.com/@CombatZoneMMA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 font-bold uppercase tracking-wider px-6 py-3 transition-colors"
          >
            <PlayCircle size={20} />
            Visit YouTube Channel
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {videos.map((video) => (
        <a
          key={video.id}
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer"
        >
          <div className="aspect-video bg-neutral-200 mb-3 relative rounded-lg overflow-hidden border-2 border-neutral-200 group-hover:border-primary transition-all">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <PlayCircle className="text-white w-12 h-12" />
            </div>
          </div>
          <h3 className="font-bold font-[Chakra_Petch] uppercase group-hover:text-primary leading-tight line-clamp-2 text-sm md:text-base">
            {video.title}
          </h3>
          <span className="text-xs text-neutral-500 font-bold uppercase mt-1 block group-hover:text-neutral-600 transition-colors">
            {new Date(video.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </a>
      ))}
    </div>
  );
}
