# Professional Chauffeur Service Sri Lanka

A fully static, mobile-first chauffeur service website built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- **Mobile-first design** - Fully responsive on all devices
- **8 Pages**: Home, About, Vehicles, Services, Tour Packages, Gallery, Reviews, Contact
- **Static content only** - No database, no Supabase, no API routes
- **Clean UI** - Soft shadows, rounded cards, tourist-friendly design
- **Floating WhatsApp button** - Easy contact on any page
- **SEO-friendly** - Proper metadata for each page
- **Fast loading** - Static export optimized

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS 3.3
- TypeScript
- Static Export

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will create a static export in the `out` folder.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with Navbar & Footer
│   │   ├── page.tsx             # Home page
│   │   ├── about/page.tsx       # About page
│   │   ├── vehicles/page.tsx    # Vehicles page
│   │   ├── services/page.tsx    # Services page
│   │   ├── tour-packages/page.tsx # Tour Packages page
│   │   ├── gallery/page.tsx     # Gallery page
│   │   ├── reviews/page.tsx     # Reviews page
│   │   └── contact/page.tsx     # Contact page with form
│   └── components/
│       ├── Navbar.tsx           # Reusable navigation
│       └── Footer.tsx           # Reusable footer
├── public/
│   └── images/                  # Placeholder for vehicle images
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── package.json
```

## Customization

### Updating Vehicle Images

Place your vehicle images in `public/images/`:

- `vehicle-1.jpg` - Toyota Prius
- `vehicle-2.jpg` - Toyota Corolla

### Updating Contact Information

Edit the contact details in:

- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

### Adding/Removing Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update the Navbar in `src/components/Navbar.tsx`

## Deployment

The site is configured for static export. Deploy the `out` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## License

MIT
