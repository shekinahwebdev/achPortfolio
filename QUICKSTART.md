# Quick Start Guide

## Installation & Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization Checklist

- [ ] Update name and contact info in `src/lib/constants.ts`
- [ ] Replace placeholder images with your own
- [ ] Update About section content in `src/app/sections/About.tsx`
- [ ] Update Services in `src/app/sections/Services.tsx`
- [ ] Add your projects in `src/app/sections/Projects.tsx`
- [ ] Update social media links in `src/components/Footer.tsx`
- [ ] Customize colors in `tailwind.config.ts` if desired
- [ ] Set up contact form backend (optional)

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Netlify: Connect your GitHub repo directly
- GitHub Pages: `npm run build && npm export`

## Need Help?

Refer to [README.md](./README.md) for detailed documentation and feature explanations.
