import type { Express } from "express";
import { type Server } from "http";
import type { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";

// ===================
// CONSTANTS
// ===================

const RATE_LIMIT = {
  API: { windowMs: 15 * 60 * 1000, max: 100 }, // 100 req / 15 min
  YOUTUBE: { windowMs: 60 * 1000, max: 10 }, // 10 req / 1 min
  CONTACT: { windowMs: 60 * 60 * 1000, max: 5 }, // 5 req / 1 hour
} as const;

// ===================
// UTILITY FUNCTIONS
// ===================

/**
 * Sanitize string input to prevent XSS
 * Removes HTML tags and trims whitespace
 */
function sanitizeString(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/[<>]/g, "") // Remove any remaining angle brackets
    .trim();
}

/**
 * Async handler wrapper to catch errors in async routes
 */
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// ===================
// RATE LIMITERS
// ===================

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: RATE_LIMIT.API.windowMs,
  max: RATE_LIMIT.API.max,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
  // Use default keyGenerator (handles IPv6 properly)
});

// Stricter limiter for YouTube API (preserves quota)
const youtubeLimiter = rateLimit({
  windowMs: RATE_LIMIT.YOUTUBE.windowMs,
  max: RATE_LIMIT.YOUTUBE.max,
  message: { error: "Too many video requests, please try again shortly." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Contact form limiter - prevent spam
const contactLimiter = rateLimit({
  windowMs: RATE_LIMIT.CONTACT.windowMs,
  max: RATE_LIMIT.CONTACT.max,
  message: { error: "Too many contact submissions. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ===================
// VALIDATION SCHEMAS
// ===================

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long").trim(),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long").trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(100)
    .trim()
    .toLowerCase(),
  subject: z.enum(["general", "fighter", "sponsorship", "media"], {
    errorMap: () => ({ message: "Please select a valid subject" }),
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long")
    .trim(),
});

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  // Apply general rate limiter to all API routes
  app.use("/api", apiLimiter);

  // ===================
  // CONTACT FORM ENDPOINT
  // ===================
  app.post(
    "/api/contact",
    contactLimiter,
    asyncHandler(async (req: Request, res: Response) => {
      try {
        // Validate request body
        const validatedData = contactSchema.parse(req.body);

        // Sanitize all string inputs for XSS prevention
        const sanitizedData = {
          firstName: sanitizeString(validatedData.firstName),
          lastName: sanitizeString(validatedData.lastName),
          email: validatedData.email.toLowerCase().trim(), // Email already validated by Zod
          subject: validatedData.subject, // Enum, no sanitization needed
          message: sanitizeString(validatedData.message),
        };

        // Log sanitized data (never log raw user input)
        console.log("[CONTACT] Form submission:", {
          ...sanitizedData,
          ip: req.ip,
          timestamp: new Date().toISOString(),
          userAgent: req.get("User-Agent")?.substring(0, 100), // Truncate for safety
        });

        // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
        // await sendEmail({
        //   to: "info@combatzonemma.com",
        //   subject: `[${sanitizedData.subject}] Contact from ${sanitizedData.firstName} ${sanitizedData.lastName}`,
        //   body: sanitizedData.message,
        //   replyTo: sanitizedData.email,
        // });

        res.status(200).json({
          success: true,
          message: "Thank you for your message. We'll be in touch soon.",
        });
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Validation error - return sanitized details
          res.status(400).json({
            error: "Validation failed",
            details: error.errors.map((e) => ({
              field: e.path.join("."),
              message: e.message,
            })),
          });
        } else {
          console.error("[CONTACT] Form error:", error);
          res.status(500).json({ error: "Failed to process your request. Please try again." });
        }
      }
    })
  );

  // ===================
  // YOUTUBE API ENDPOINT
  // ===================
  app.get(
    "/api/youtube/videos",
    youtubeLimiter,
    asyncHandler(async (_req: Request, res: Response) => {
      const apiKey = process.env.YOUTUBE_API_KEY;

      if (!apiKey) {
        // Return fallback data when API key isn't configured
        res.json({
          videos: [],
          message: "YouTube API not configured - visit channel directly",
        });
        return;
      }

      // Step 1: Get the channel ID from the handle
      const channelHandle = "CombatZoneMMA"; // Without the @
      let channelId = process.env.YOUTUBE_CHANNEL_ID;

      if (!channelId) {
        // Look up channel ID from handle
        console.log("[YOUTUBE] Looking up channel ID for handle:", channelHandle);
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(channelHandle)}&key=${encodeURIComponent(apiKey)}`
        );

        if (channelResponse.ok) {
          const channelData = (await channelResponse.json()) as { items?: Array<{ id: string }> };
          channelId = channelData.items?.[0]?.id;
          console.log("[YOUTUBE] Found channel ID:", channelId);
        }
      }

      if (!channelId) {
        console.error("[YOUTUBE] Could not find channel ID");
        res.json({ videos: [], message: "Channel not found" });
        return;
      }

      // Step 2: Get recent videos (fetch more to filter out shorts)
      console.log("[YOUTUBE] Fetching videos for channel:", channelId);
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(channelId)}&order=date&type=video&maxResults=12&key=${encodeURIComponent(apiKey)}`
      );

      if (!videosResponse.ok) {
        const errorData = (await videosResponse.json()) as { error?: { message?: string } };
        console.error("[YOUTUBE] API error:", JSON.stringify(errorData, null, 2));
        throw new Error(
          errorData.error?.message || `YouTube API error: ${videosResponse.statusText}`
        );
      }

      interface YouTubeResponse {
        items?: Array<{
          id: { videoId: string };
          snippet: {
            title: string;
            thumbnails: {
              medium?: { url: string };
              high?: { url: string };
              default: { url: string };
            };
            publishedAt: string;
            description: string;
          };
        }>;
        error?: { message?: string };
      }

      // Log the raw response for debugging
      const rawResponse = await videosResponse.text();
      console.log("[YOUTUBE] Raw API response:", rawResponse.substring(0, 1000));

      const videosData = JSON.parse(rawResponse) as YouTubeResponse;
      console.log("[YOUTUBE] API response items count:", videosData.items?.length ?? 0);

      // Transform and filter out shorts (shorts usually have #shorts in title)
      const allVideos = (videosData.items ?? []).map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails.high?.url ??
          item.snippet.thumbnails.medium?.url ??
          item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description,
      }));

      // Filter out shorts and take the first 6
      const videos = allVideos
        .filter((video) => {
          const titleLower = video.title.toLowerCase();
          return !titleLower.includes("#shorts") && !titleLower.includes("#short");
        })
        .slice(0, 6);

      console.log(
        "[YOUTUBE] Returning",
        videos.length,
        "videos (filtered from",
        allVideos.length,
        ")"
      );

      res.json({ videos });
    })
  );

  // ===================
  // HEALTH CHECK ENDPOINT
  // ===================
  // Minimal response - don't expose server internals
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  return httpServer;
}
