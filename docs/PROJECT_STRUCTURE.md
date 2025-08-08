# Project Structure

This document outlines the organized structure of the Pedal Peak website project.

## Directory Structure

```
pedal-peak-website/
├── src/                      # Source code
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── bikebox/          # Bike box rental page
│   │   ├── crete/            # Crete cycling destination
│   │   ├── piedmont/         # Piedmont cycling destination
│   │   └── routes/           # Routes browser page
│   ├── components/           # React components
│   │   ├── ui/               # UI components (buttons, etc.)
│   │   ├── legacy/           # Legacy JSX components (to be refactored)
│   │   └── *.tsx             # Main components
│   ├── lib/                  # Utility functions and configs
│   ├── styles/               # Global styles
│   │   ├── globals.css       # Global CSS
│   │   ├── animations.css    # Animation styles
│   │   └── pedal-peak-design-system.css  # Design system
│   ├── actions/              # Server actions
│   └── __tests__/            # Test files
├── public/                   # Static assets
│   ├── images/               # All images
│   │   ├── crete/            # Crete destination images
│   │   ├── piedmont/         # Piedmont destination images
│   │   └── *.jpeg/jpg        # General cycling images
│   ├── fonts/                # Font files (Satoshi)
│   └── favicon/              # Favicon files
├── docs/                     # Documentation
│   ├── previews/             # HTML preview files
│   └── *.md                  # Documentation markdown files
├── scripts/                  # Utility scripts
│   ├── copy-images.sh        # Image copying script
│   └── start-server.sh       # Server startup script
├── drizzle/                  # Database migrations
├── related-projects/         # Related but separate projects
│   └── piedmont_adventure/   # Piedmont adventure site
├── README.md                 # Main project README
├── CLAUDE.md                 # Claude AI assistance guide
├── package.json              # Node.js dependencies
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── .gitignore                # Git ignore rules
```

## Key Points

1. **Source Code**: All application code is in `src/` following Next.js App Router conventions
2. **Static Assets**: All public assets are in `public/` with organized subdirectories
3. **Documentation**: All docs are in `docs/` except README.md and CLAUDE.md
4. **Scripts**: Utility scripts are in `scripts/`
5. **Related Projects**: Separate but related projects are in `related-projects/`
6. **Legacy Components**: Old JSX components are preserved in `src/components/legacy/` for reference

## Development

- Run `npm run dev` to start the development server
- Run `npm run build` to create a production build
- Run `npm run lint` to check code quality
- Run `npm test` to run tests

## Clean Structure Benefits

- Clear separation of concerns
- No duplicate files or folders
- Organized documentation
- Easy to navigate and maintain
- Follows Next.js best practices