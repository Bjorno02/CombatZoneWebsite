/**
 * Sponsor data - centralized sponsor information
 * 
 * In production, this would come from a CMS or API.
 */

import sponsor1Img from "@assets/IMAGES/Sponsor1.jpg";
import sponsor2Img from "@assets/IMAGES/Sponsor2.jpg";
import sponsor3Img from "@assets/IMAGES/Sponsor3.png";
import sponsor4Img from "@assets/IMAGES/Sponsor4.jpeg";
import sponsor5Img from "@assets/IMAGES/Sponsor5.avif";
import sponsor6Img from "@assets/IMAGES/Sponsor6.jpeg";
import sponsor7Img from "@assets/IMAGES/Sponsor7.jpeg";
import sponsor8Img from "@assets/IMAGES/Sponsor8.jpg";
import sponsor9Img from "@assets/IMAGES/Sponsor9.jpg";

export interface Sponsor {
  id: number;
  name: string;
  image: string;
  url: string;
}

export const SPONSORS: Sponsor[] = [
  { id: 1, image: sponsor1Img, name: "SIG SAUER Academy", url: "https://sigsaueracademy.com/" },
  { id: 2, image: sponsor2Img, name: "Modelo USA", url: "https://www.modelousa.com/" },
  { id: 3, image: sponsor3Img, name: "Bollards Direct USA", url: "https://www.bollardsdirectusa.com/" },
  { id: 4, image: sponsor4Img, name: "GED Lawyers", url: "https://www.gedlawyers.com/" },
  { id: 5, image: sponsor5Img, name: "Goat City Transport", url: "https://goatcitytransport.com/" },
  { id: 6, image: sponsor6Img, name: "Alltown Fresh", url: "https://alltownfresh.com/" },
  { id: 7, image: sponsor7Img, name: "Brunt Workwear", url: "https://bruntworkwear.com/" },
  { id: 8, image: sponsor8Img, name: "Goat Barn Nation", url: "https://goatbarnation.com/" },
  { id: 9, image: sponsor9Img, name: "Bell and Williams", url: "https://bellandwilliams.com/" },
];

// Sponsorship packages
export interface SponsorPackage {
  name: string;
  featured: boolean;
  badge?: string;
  benefits: string[];
}

export const SPONSOR_PACKAGES: SponsorPackage[] = [
  {
    name: "Event Partner",
    featured: false,
    benefits: [
      "Logo on Event Poster",
      "Social Media Shoutouts",
      "2 VIP Tickets",
      "Website Recognition",
    ],
  },
  {
    name: "Cage Sponsor",
    featured: true,
    badge: "Most Popular",
    benefits: [
      "Logo on Cage Canvas/Pad",
      "In-Cage Announcement",
      "4 VIP Tickets",
      "Booth at Event",
      "Featured Social Content",
      "Website & Program Listing",
    ],
  },
  {
    name: "Title Sponsor",
    featured: false,
    benefits: [
      '"Presented By" Naming Rights',
      "Center Canvas Logo",
      "10 VIP Tickets (Table)",
      "Fighter Kit Branding",
      "Premium Booth Location",
      "Exclusive Media Access",
    ],
  },
];

// Sponsorship stats
export const SPONSOR_STATS = {
  liveAttendees: "5,000+",
  socialReach: "50k+",
  yearsRunning: "24+",
  eventsPerYear: 4,
} as const;
