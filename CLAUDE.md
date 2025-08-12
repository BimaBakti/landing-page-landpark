# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Laravel application with React frontend using Inertia.js, built as a landing page for "LandPark". It uses:
- Laravel 12+ as the PHP backend framework
- React 19+ with TypeScript for the frontend
- Inertia.js for seamless client-server communication
- Tailwind CSS v4 for styling
- Vite for asset bundling and development server

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

### Styling Approach
- Tailwind CSS v4 with custom configuration
- Uses `clsx` and `tailwind-merge` via `cn()` utility for conditional classes
- Dark mode support implemented in components
- Custom fonts loaded from Bunny Fonts

## Development Workflow
1. Run `composer dev` to start all services
2. Frontend changes are auto-reloaded via Vite HMR
3. Backend changes require manual server restart
4. Use `npm run lint` and `npm run types` before committing
5. Tests should be run with `composer test` to ensure proper configuration