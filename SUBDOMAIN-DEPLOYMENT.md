# Subdomain Deployment Guide

## Current Setup

The project now includes subdomain pages accessible at:
- `/piedmont` - Piedmont Adventure 
- `/crete` - Crete Training Camp
- `/designsystem` - Design System (existing)

## For True Subdomain Access (piedmont.pedal-peak.com, crete.pedal-peak.com)

### Option 1: DNS + GitHub Pages Configuration

1. **DNS Setup** - Add these CNAME records in your DNS provider:
   ```
   piedmont.pedal-peak.com -> pedal-peak.com
   crete.pedal-peak.com -> pedal-peak.com
   design.pedal-peak.com -> pedal-peak.com
   ```

2. **GitHub Repository Settings**:
   - Go to Settings → Pages
   - Add custom domains:
     - `piedmont.pedal-peak.com`
     - `crete.pedal-peak.com`
   - GitHub will verify domain ownership

3. **Server Configuration** (if using custom hosting):
   ```nginx
   # Nginx example
   server {
       server_name piedmont.pedal-peak.com;
       root /var/www/pedal-peak/public/piedmont;
   }
   
   server {
       server_name crete.pedal-peak.com;
       root /var/www/pedal-peak/public/crete;
   }
   ```

### Option 2: Separate Repositories (Recommended for GitHub Pages)

Create separate repositories:
1. `piedmont-pedal-peak` → deployed to `piedmont.pedal-peak.com`
2. `crete-pedal-peak` → deployed to `crete.pedal-peak.com`

Each with their respective content and GitHub Pages enabled.

### Option 3: Branch-based Deployment

1. Create branches: `gh-pages-piedmont`, `gh-pages-crete`
2. Configure GitHub Pages to deploy from different branches
3. Use different custom domains for each branch

## Current Working Implementation

✅ **What's Ready:**
- Both pages are built and functional at `/piedmont` and `/crete`
- All images and assets properly organized
- Consistent design system applied
- GitHub Actions workflow created for automated deployment

✅ **Access URLs (once deployed):**
- Main site: `https://pedal-peak.com`
- Piedmont: `https://pedal-peak.com/piedmont` 
- Crete: `https://pedal-peak.com/crete`
- Design System: `https://pedal-peak.com/designsystem`

## Next Steps to Enable Subdomains

1. **Enable GitHub Pages** in repository settings if not already done
2. **Add DNS CNAME records** for subdomain routing
3. **Configure custom domains** in GitHub Pages settings
4. **Test deployment** with the GitHub Actions workflow

The foundation is completely ready - it's just a matter of DNS and GitHub Pages configuration!