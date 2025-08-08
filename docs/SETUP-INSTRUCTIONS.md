# Pedal Peak Website Setup Instructions

## Project Location
Your new project is located at: `/Users/ramonafurter/Projects/Web-Development/pedal-peak-website`

## Images
All 6 images have been copied to the `public/images` folder:
- pedalpeak image1.jpg (Hero section)
- pedalpeak image2.jpg (Rides & Events)
- pedalpeak image3.jpg (Tarmac Routes)
- pedalpeak image4.jpg (Dirt Trails)
- pedalpeak image5.jpg (Bikepacking)
- pedalpeak image6.jpg (Bike Box)

## Font Setup (Satoshi)

### Option 1: Download Satoshi Font
1. Download Satoshi font from: https://www.fontshare.com/fonts/satoshi
2. Copy the font files to: `/public/fonts/`
3. Update the layout.tsx file to use the local font (code is already prepared)

### Option 2: Use Web Font
Add this to your `app/layout.tsx` before the metadata:

```typescript
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.woff2',
      weight: '300 900',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});
```

Then update the body className to include the font:
```tsx
<body className={cn("min-h-screen font-sans", satoshi.variable)} style={{ fontFamily: "var(--font-satoshi)" }}>
```

## Running the Project

1. Navigate to the project folder:
```bash
cd /Users/ramonafurter/Projects/Web-Development/pedal-peak-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## Features Implemented

- **Custom Logo**: Circle with vertical line as requested
- **Lowercase branding**: "pedal peak" in lowercase throughout
- **Purple accent color**: #8b5cf6 (matching localhost links)
- **Animated bike**: Moves from left to right on dividers
- **Beautiful images**: All 6 images integrated throughout the site
- **Responsive design**: Works on all devices
- **Fixed header**: Stays on top while scrolling
- **Image hover effects**: Subtle zoom on route type images

## For Framer Export

The design is ready to be recreated in Framer:
1. Use the custom logo SVG component
2. Apply Satoshi font when available
3. Use the purple accent color (#8b5cf6)
4. Implement the bike animation using Framer's animation tools
5. Add your actual Strava club and WhatsApp links