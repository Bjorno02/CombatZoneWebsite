/**
 * Event data - centralized event information
 * 
 * In production, this would come from a CMS or API.
 * For now, this provides a single source of truth for event data.
 */

export interface UpcomingEvent {
  id: number;
  date: string;
  day: string;
  venue: string;
  location: string;
}

export interface PastEvent {
  id: number;
  date: string;
  venue: string;
  fights: number;
}

// Next featured event
export const FEATURED_EVENT = {
  id: 91,
  name: "Combat Zone 91",
  date: "February 21, 2026",
  day: "Saturday",
  doorsOpen: "6:00 PM",
  firstFight: "7:00 PM",
  venue: "SNHU Arena",
  location: "Manchester, NH",
} as const;

// Upcoming events schedule
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  { 
    id: 92, 
    date: "May 16, 2026", 
    day: "Saturday", 
    venue: "SNHU Arena", 
    location: "Manchester, NH" 
  },
  { 
    id: 93, 
    date: "August 22, 2026", 
    day: "Saturday", 
    venue: "SNHU Arena", 
    location: "Manchester, NH" 
  },
  { 
    id: 94, 
    date: "November 7, 2026", 
    day: "Saturday", 
    venue: "SNHU Arena", 
    location: "Manchester, NH" 
  },
];

// Past events archive (placeholder data)
export const PAST_EVENTS: PastEvent[] = [
  { id: 90, date: "November 2025", venue: "SNHU Arena", fights: 12 },
  { id: 89, date: "August 2025", venue: "SNHU Arena", fights: 11 },
  { id: 88, date: "May 2025", venue: "SNHU Arena", fights: 12 },
  { id: 87, date: "February 2025", venue: "SNHU Arena", fights: 10 },
  { id: 86, date: "November 2024", venue: "SNHU Arena", fights: 11 },
  { id: 85, date: "August 2024", venue: "SNHU Arena", fights: 12 },
];

// Stats for display
export const EVENT_STATS = {
  totalEvents: 90,
  yearsRunning: 24,
  totalFights: 1000,
  totalChampions: 50,
} as const;
