# Graphic Designer Portfolio

A modern, clean, and responsive portfolio website for a graphic designer built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimal, and creative aesthetic inspired by high-end creative portfolios
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ✨ **Smooth Animations**: Beautiful transitions and animations using Framer Motion
- 🎯 **Sections Included**:
  - Hero Home Section with CTA buttons
  - About Section with skills and experience timeline
  - Services Section with service cards
  - Projects Section with filterable project gallery
  - Contact Section with contact form and information
  - Sticky Navigation with smooth scrolling
  - Modern Footer with social links
- 🌙 **Dark Mode**: Elegant dark theme with gradient accents
- ♿ **Accessible**: Semantic HTML and accessible components
- ⚡ **Performance**: Optimized for speed and performance
- 🎁 **Reusable Components**: Well-structured, modular components

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles and animations
│   │   └── sections/
│   │       ├── Home.tsx            # Hero section
│   │       ├── About.tsx           # About section with skills and experience
│   │       ├── Services.tsx        # Services section
│   │       ├── Projects.tsx        # Projects section with filtering
│   │       └── Contact.tsx         # Contact section with form
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky navbar with mobile menu
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── ServiceCard.tsx         # Service card component
│   │   ├── ProjectCard.tsx         # Project card with hover effects
│   │   └── ContactForm.tsx         # Contact form component
│   └── lib/
│       ├── animations.ts           # Animation variants
│       ├── constants.ts            # App constants
│       └── utils.ts                # Utility functions
├── public/                         # Static assets
├── tailwind.config.ts             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.js                 # Next.js configuration
└── package.json                   # Dependencies and scripts
```

## Installation

1. **Navigate to project directory**:

   ```bash
   cd graphicDesgner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## Customization

### Update Personal Information

Edit the following files to customize the portfolio with your information:

- **[src/lib/constants.ts](src/lib/constants.ts)** - Update name, email, phone, location, and skills
- **[src/app/sections/Home.tsx](src/app/sections/Home.tsx)** - Update hero section content
- **[src/app/sections/About.tsx](src/app/sections/About.tsx)** - Update bio and experience
- **[src/app/sections/Services.tsx](src/app/sections/Services.tsx)** - Modify services offered
- **[src/app/sections/Projects.tsx](src/app/sections/Projects.tsx)** - Add your projects
- **[src/components/Footer.tsx](src/components/Footer.tsx)** - Update social media links

### Replace Placeholder Images

1. Add your images to the `public` directory
2. Update image paths in components:
   - Hero/About section profile image
   - Project images in [src/app/sections/Projects.tsx](src/app/sections/Projects.tsx)

### Customize Colors and Theme

Edit [tailwind.config.ts](tailwind.config.ts) to customize:

- Color palette (currently purple and pink gradients)
- Typography settings
- Animation timings
- Spacing and sizing

### Add New Sections

1. Create a new file in `src/app/sections/`
2. Import it in [src/app/page.tsx](src/app/page.tsx)
3. Add navigation link in [src/lib/constants.ts](src/lib/constants.ts)

## Features Explained

### Navbar

- Sticky, transparent navbar that becomes solid on scroll
- Smooth scroll navigation to sections
- Mobile hamburger menu with animations
- "Let's Talk" CTA button

### Home Section

- Eye-catching hero with gradient text
- Animated background effects
- CTA buttons for projects and contact
- Statistics cards
- Floating info cards with animations

### About Section

- Profile image placeholder
- Bio and professional description
- Skills grid with check icons
- Experience timeline with animated connections
- Years of experience badge

### Services Section

- 6 service cards with icons and descriptions
- Hover effects and animations
- Consultation CTA section
- Responsive grid layout

### Projects Section

- Filterable project gallery (by category)
- Project cards with images, title, category, and description
- Smooth filtering animations
- Hover effects with overlay
- "View Project" link with arrow animation

### Contact Section

- Three contact information cards (email, phone, location)
- Contact form with validation states
- Form status messages (success/error)
- Additional availability information
- Animated form inputs

### Footer

- Social media links with icons
- Quick navigation links
- Contact information
- Copyright and legal links
- Responsive layout

## Animation Library

The project includes a collection of pre-configured animations in [src/lib/animations.ts](src/lib/animations.ts):

- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale and fade in
- `staggerContainer` - Container for staggered children
- `staggerItem` - Individual staggered item
- `hoverScale` - Hover scale effect

## Performance Optimizations

- Image optimization with Next.js Image component
- Optimized package imports using experimental config
- CSS-in-JS with Tailwind for efficient styling
- Smooth scroll behavior
- Lazy loading of sections with `whileInView`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Further Enhancement

1. **Add Blog Section**: Create a blog page with MDX support
2. **Dark/Light Mode Toggle**: Add theme switching functionality
3. **Form Backend**: Connect contact form to email service (Nodemailer, SendGrid, etc.)
4. **Testimonials Section**: Add client testimonials carousel
5. **Animation Library**: Expand animation variants
6. **SEO Optimization**: Add meta tags and structured data
7. **Analytics**: Integrate Google Analytics or Vercel Analytics
8. **CMS Integration**: Connect to Contentful, Sanity, or similar

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and connect your GitHub repository
4. Deploy with one click

### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Build and deploy static export
- **AWS Amplify**: Connect Git repository and deploy
- **DigitalOcean App Platform**: Link your repository and deploy

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please create an issue in the repository.

## Credits

- Design inspiration from modern creative portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Happy coding! 🚀**
