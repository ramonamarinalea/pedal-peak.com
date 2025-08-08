# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Pedal Peak**, a cycling community website built with Next.js 15 and React 19. The site features cycling routes, events, bike box rental services, and community engagement. It's designed with a minimalistic black and white aesthetic using the Satoshi font and includes cycling photography throughout.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with Turbopack (preferred for development)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run preview` - Build and start together

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run typecheck` - Type-check without emitting files
- `npm run format:check` - Check Prettier formatting
- `npm run format:write` - Auto-format with Prettier

### Testing
- `npm test` - Run Jest unit tests (config in config/jest.config.js)
- `npm test:watch` - Run tests in watch mode
- `npm run e2e` - Run Playwright end-to-end tests (config in config/playwright.config.ts)
- `npm run e2e:ui` - Run e2e tests with UI

### Configuration
All configuration files are organized in the `config/` directory:
- `config/eslint.config.mjs` - ESLint configuration
- `config/prettier.config.js` - Prettier formatting
- `config/jest.config.js` & `config/jest.setup.js` - Testing setup
- `config/playwright.config.ts` - E2E testing
- `config/commitlint.config.cjs` - Commit message linting
- `config/components.json` - Shadcn/UI components
- `config/drizzle.config.ts` - Database configuration

## Architecture

### Site Structure
The website consists of three main pages:
1. **Homepage** (`/`) - Hero section, route gallery, rides info, bike box preview, community links
2. **Routes Page** (`/routes`) - Interactive route browser with filtering, search, and Strava embeds
3. **Bike Box Page** (`/bikebox`) - Detailed bike box rental information and pricing

### Key Technical Details

**Font System**: Uses locally hosted Satoshi Variable font (`public/fonts/Satoshi-Variable.woff2`) loaded via Next.js `localFont`. The font path is configured in `layout.tsx` with CSS variable `--font-satoshi`.

**Image Strategy**: All cycling images are stored in `public/images/` with specific naming:
- `tarmac.jpeg` - Road cycling routes
- `gravel.jpeg` - Gravel/off-road routes  
- `bikepacking.jpeg` - Multi-day adventures
- `bikeboxreal.jpeg` - Actual bike box product photo
- Various `IMG_*.jpeg` files - Additional cycling photography

**Design System**: Consistent black and white aesthetic with:
- All images use `grayscale` filter by default
- Hover effects reveal color (`hover:grayscale-0`)
- Black buttons with white text for CTAs
- Minimal color palette focusing on typography and imagery

**Navigation**: Uses Next.js App Router with:
- `/` - Homepage with anchor links to sections
- `/routes` - Dedicated routes page with client-side filtering
- `/bikebox` - Bike box rental page with pricing tiers

### Component Architecture

**Reusable Components**:
- `Logo` - Custom SVG logo (circle with vertical line)
- `buttonVariants` - Consistent button styling via class-variance-authority
- Shared header/footer across all pages

**Page-Specific Features**:
- Routes page uses client-side state for search/filtering
- Strava route embeds via iframe
- Responsive grid layouts for route cards
- Contact integration via `mailto:` links to `ramona.furter@icloud.com`

### Styling
Built with Tailwind CSS 4 using utility classes throughout. No custom CSS except for:
- Font loading in `layout.tsx`
- Animation keyframes in `src/styles/animations.css` (for any bike animations)

### Contact Information
All contact forms and booking links use `ramona.furter@icloud.com` as the primary contact email.

## Development Notes

**Server Issues**: If localhost connection fails, there are static HTML preview files available in the root directory for testing designs.

**Image Management**: When adding new cycling images, place them in `public/images/` and follow the naming convention for route types (tarmac, gravel, bikepacking).

**Route Data**: The routes page currently uses sample data in `routesData` array. In production, this should be connected to actual Strava route data from the 380+ routes in `/Users/ramonafurter/strava_route_urls.txt`.

**Responsive Design**: All components are mobile-first with responsive breakpoints using Tailwind's `md:` and `lg:` prefixes.