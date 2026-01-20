# Combat Zone MMA Website

Official website for Combat Zone MMA, New England's longest-running MMA promotion since 2000. Owned and operated by UFC fighter Calvin Kattar.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS 4
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Build:** Vite 7
- **Routing:** Wouter
- **State:** TanStack Query

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL (optional, for database features)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/combatzone-mma.git
cd combatzone-mma

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run check` | Run TypeScript type checking |
| `npm run db:push` | Push database schema changes |

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Page layout components (Navbar, Footer, etc.)
│   │   │   ├── ui/         # Base UI components (Button, Card, etc.)
│   │   │   ├── home/       # Homepage-specific components
│   │   │   ├── events/     # Event-related components
│   │   │   └── media/      # Media components (YouTube feed, etc.)
│   │   ├── data/           # Static data and constants
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and helpers
│   │   ├── pages/          # Page components (route-level)
│   │   └── types/          # TypeScript type definitions
│   └── index.html          # HTML entry point
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite middleware for dev
├── shared/                 # Shared types/utilities
└── attached_assets/        # Static assets (images, etc.)
```

## Architecture

### Component Hierarchy

```
App
├── ErrorBoundary           # Catches and displays errors gracefully
├── QueryClientProvider     # TanStack Query for data fetching
└── Router
    └── PageLayout          # Common layout wrapper
        ├── SkipToContent   # Accessibility skip link
        ├── Navbar          # Navigation header
        ├── main            # Page content
        └── Footer          # Site footer
```

### Key Components

- **`SectionHero`** - Consistent hero component for section pages (Events, Sponsors, etc.)
- **`PageHero`** - Generic hero component for standalone pages
- **`LazyImage`** - Image component with lazy loading and placeholders
- **`ErrorBoundary`** - Catches errors and shows recovery UI

### Data Flow

- Static data lives in `client/src/data/` (events, sponsors, packages)
- SEO configuration in `client/src/hooks/useSEO.ts`
- External URLs centralized in `client/src/lib/constants.ts`

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Prefer functional components with hooks
- Use Tailwind CSS for styling (no CSS modules)
- Follow component naming: `PascalCase.tsx`

### Adding a New Page

1. Create page component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Add SEO config in `client/src/hooks/useSEO.ts`
4. Use `PageLayout` wrapper for consistent layout

```tsx
import { PageLayout } from "@/components/layout/PageLayout";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

export default function NewPage() {
  useSEO(SEO_CONFIG.newPage);
  
  return (
    <PageLayout>
      {/* Page content */}
    </PageLayout>
  );
}
```

### Adding Section Subpages

For pages within a dropdown section (Events, Sponsors, etc.), use `SectionHero`:

```tsx
import { SectionHero } from "@/components/layout/SectionHero";

<SectionHero
  label="Section Label"
  title="PAGE\nTITLE"
  highlightWord="TITLE"
  description="Page description here"
  breadcrumbs={[
    { label: "Parent", href: "/parent" },
    { label: "Current Page" },
  ]}
/>
```

### Image Usage

Use `LazyImage` for better performance:

```tsx
import { LazyImage } from "@/components/ui/lazy-image";

<LazyImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  aspectRatio="16/9"
  placeholder="skeleton"
/>
```

## Accessibility

This site follows WCAG 2.1 Level AA guidelines:

- Skip-to-content link for keyboard navigation
- Semantic HTML structure with landmarks
- Focus-visible styles for keyboard users
- Alt text required on all images
- Color contrast meets AA standards

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/combatzone

# External Services (optional)
YOUTUBE_API_KEY=your_api_key
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in `dist/`:
- `dist/public/` - Static frontend assets
- `dist/index.cjs` - Node.js server bundle

### Run Production Server

```bash
npm run start
```

## Contributing

1. Create a feature branch from `main`
2. Make changes following code style guidelines
3. Ensure TypeScript checks pass (`npm run check`)
4. Submit a pull request with clear description

## License

MIT License - see LICENSE file for details.

---

**Combat Zone MMA** - Est. 2000 - New England's Premier MMA Promotion
