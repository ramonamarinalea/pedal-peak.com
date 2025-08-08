# Subdomain Setup Guide

## Current Implementation

The Piedmont adventure and Crete cycling camp are currently accessible as:
- `/piedmont` - Piedmont Adventure page
- `/crete` - Crete Training Camp page

Both pages are fully integrated with the Pedal Peak design system and feature:
- Consistent navigation and styling
- Grayscale-to-color image transitions on hover
- Adapted content from the original projects
- All images copied to `public/images/piedmont/` and `public/images/crete/`

## For True Subdomain Setup

To make these accessible as `piedmont.pedal-peak.com` and `crete.pedal-peak.com`, you would need:

### 1. DNS Configuration
Add CNAME records in your DNS provider:
```
piedmont.pedal-peak.com -> pedal-peak.com
crete.pedal-peak.com -> pedal-peak.com
```

### 2. Next.js Configuration
Update `next.config.ts` to handle subdomain routing:
```typescript
const nextConfig: NextConfig = {
  output: "export",
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/piedmont',
        has: [
          {
            type: 'host',
            value: 'piedmont.pedal-peak.com',
          },
        ],
      },
      {
        source: '/',
        destination: '/crete',
        has: [
          {
            type: 'host',
            value: 'crete.pedal-peak.com',
          },
        ],
      },
    ]
  },
  // ... other config
};
```

### 3. Vercel Configuration (if using Vercel)
Add domains in Vercel dashboard:
- Add `piedmont.pedal-peak.com`
- Add `crete.pedal-peak.com`

## Current Status
✅ Pages are fully functional at `/piedmont` and `/crete`
✅ All images and content migrated
✅ Design system fully applied
✅ Navigation updated with adventure links
✅ Build process working correctly

Both cycling adventures are now seamlessly integrated into the main Pedal Peak website!