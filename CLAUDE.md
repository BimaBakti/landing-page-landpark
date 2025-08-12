# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Laravel application with React frontend using Inertia.js, built as a **modern landing page for "Quantum Landpark"** - an exciting riverside adventure park offering thrilling outdoor activities. It uses:
- Laravel 12+ as the PHP backend framework
- React 19+ with TypeScript for the frontend
- Inertia.js for seamless client-server communication
- Tailwind CSS v4 for styling
- Vite for asset bundling and development server

### Quantum Landpark - Project Details

**About the Business:**
- Adventure park located along a beautiful riverside location
- Main attractions include:
  - **Rafting** - Thrilling white-water rafting experiences on the river
  - **Camping** - Overnight camping facilities with scenic river views
  - **Outbound Activities** - Team building, obstacle courses, and adventure challenges
  - Additional outdoor recreational activities

**Design Requirements:**
- **Color Palette**: Primary red theme with modern gradient variations
- **Design Style**: Modern, trendy, and contemporary aesthetic
- **Target Audience**: Adventure enthusiasts, families, corporate groups
- **Mood**: Exciting, energetic, and nature-focused

**Technical Specifications:**
- React.js frontend with modern components
- Responsive design for all devices
- Integration with modern libraries for enhanced functionality
- Smooth animations and interactive elements
- Optimized for performance and user experience

**Recommended Libraries for Enhanced Features:**
```json
{
  "ui-components": [
    "@headlessui/react",
    "react-spring",
    "framer-motion",
    "react-intersection-observer"
  ],
  "icons": [
    "lucide-react",
    "react-icons",
    "@heroicons/react"
  ],
  "animations": [
    "aos (animate on scroll)",
    "lottie-react",
    "react-parallax"
  ],
  "utilities": [
    "react-hook-form",
    "react-query/tanstack-query",
    "swiper",
    "react-image-gallery"
  ]
}
```

## Development Commands

### Starting Development
- `composer dev` - Starts the full development environment (Laravel server, queue worker, and Vite dev server)
- `composer dev:ssr` - Starts development with Server-Side Rendering support
- `npm run dev` - Starts only the Vite development server
- `php artisan serve` - Starts only the Laravel development server (default: http://localhost:8000)

### Building for Production
- `npm run build` - Builds frontend assets for production
- `npm run build:ssr` - Builds assets with SSR support

### Code Quality & Testing
- `npm run lint` - Runs ESLint with auto-fix
- `npm run format` - Formats code with Prettier
- `npm run format:check` - Checks code formatting
- `npm run types` - Runs TypeScript type checking
- `composer test` - Runs PHP tests (clears config and runs PHPUnit)
- `php artisan test` - Runs Laravel tests directly

### Laravel Commands
- `php artisan migrate` - Runs database migrations
- `php artisan tinker` - Starts Laravel REPL
- `php artisan queue:work` - Starts queue worker
- `php artisan pail` - Real-time log monitoring (Laravel Pail)

## Code Architecture

### Frontend Structure
- **Entry Point**: `resources/js/app.tsx` - Inertia.js application setup
- **Pages**: `resources/js/pages/` - React page components (loaded via Inertia)
- **Components**: `resources/js/components/` - Reusable React components
- **Types**: `resources/js/types/` - TypeScript type definitions
- **Utilities**: `resources/js/lib/utils.ts` - Shared utility functions (includes `cn()` for class merging)
- **Styling**: `resources/css/app.css` - Global styles and Tailwind imports

### Backend Structure
- **Routes**: `routes/web.php` - Web routes (currently renders welcome page via Inertia)
- **Controllers**: `app/Http/Controllers/` - Laravel controllers
- **Models**: `app/Models/` - Eloquent models
- **Middleware**: `app/Http/Middleware/` - Custom middleware including Inertia request handling

### Key Configuration Files
- **Vite**: `vite.config.ts` - Bundler configuration with Laravel and React plugins
- **TypeScript**: `tsconfig.json` - Includes path aliases (`@/*` maps to `resources/js/*`)
- **ESLint**: `eslint.config.js` - Linting rules for React/TypeScript
- **Database**: Uses SQLite (`database/database.sqlite`) for development

### Inertia.js Integration
- Pages are resolved from `resources/js/pages/` directory
- Shared data includes `auth`, `ziggy` (routing), and custom properties
- Uses TypeScript interfaces in `resources/js/types/index.d.ts` for type safety
- SSR support configured via `resources/js/ssr.tsx`

### Styling Approach - Quantum Landpark Theme
- **Primary Colors**: Red-based palette with modern gradients
  - Primary Red: `#DC2626` (red-600)
  - Secondary Red: `#EF4444` (red-500) 
  - Accent Red: `#F87171` (red-400)
  - Dark Red: `#991B1B` (red-800)
- **Supporting Colors**: Natural tones (forest green, river blue, earth brown)
- Tailwind CSS v4 with custom configuration
- Uses `clsx` and `tailwind-merge` via `cn()` utility for conditional classes
- Dark mode support implemented in components
- Custom fonts loaded from Bunny Fonts
- Modern gradient backgrounds and smooth transitions

### Component Structure for Quantum Landpark
```
resources/js/components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Activities.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   └── Contact.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── ImageSlider.tsx
└── features/
    ├── BookingForm.tsx
    ├── ActivityCard.tsx
    └── PriceTable.tsx
```

## Development Workflow
1. Run `composer dev` to start all services
2. Frontend changes are auto-reloaded via Vite HMR
3. Backend changes require manual server restart
4. Use `npm run lint` and `npm run types` before committing
5. Tests should be run with `composer test` to ensure proper configuration

## Quantum Landpark Specific Guidelines

### Development Phase: UI-First Approach
**Current Priority**: Focus on creating stunning, modern UI components with static data first. Database integration and dynamic content will be implemented in later phases.

### Static Data Structure
Use hardcoded data objects in components for now:
```typescript
// Example static data structure
const ACTIVITIES_DATA = [
  {
    id: 1,
    name: "White Water Rafting",
    description: "Thrilling rafting adventure on pristine river rapids",
    image: "/images/rafting.jpg",
    price: "250000",
    duration: "3-4 hours"
  },
  // ... more activities
];

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery/rafting-1.jpg", alt: "Rafting Adventure" },
  { id: 2, src: "/images/gallery/camping-1.jpg", alt: "Riverside Camping" },
  // ... more images
];
```

### Content Priorities (Static Implementation)
1. **Hero Section**: Eye-catching design with compelling CTA buttons
2. **Activities Section**: Cards showcasing rafting, camping, outbound with mock pricing
3. **Gallery Section**: Image grid/carousel with placeholder images
4. **About Section**: Company story and location highlights
5. **Contact Section**: Static contact form (non-functional for now) and location info

### UI/UX Focus Areas
- **Visual Impact**: Bold red-themed design with modern gradients
- **Typography**: Clear hierarchy with engaging headings
- **Components**: Reusable, well-styled components
- **Animations**: Smooth transitions and hover effects
- **Responsiveness**: Mobile-first responsive design
- **Interactive Elements**: Buttons, cards, and navigation that feel modern

### Temporary Placeholder Content
- Use Lorem Ipsum or adventure-themed placeholder text
- Placeholder images from Unsplash (rafting, camping, outdoor activities)
- Mock pricing and package details
- Dummy contact information
- Sample testimonials and reviews

### Performance Considerations
- Optimize for visual appeal over data processing
- Focus on smooth animations and transitions
- Use placeholder images initially (can be replaced later)
- Implement lazy loading for better UX

### Next Phase Preparation
Structure components to easily accept props for dynamic data later:
```typescript
// Design components to accept data props
interface ActivityCardProps {
  activity: ActivityData; // Will come from API later
}
```