# Personal Website - Vue.js Version

This is the Vue.js version of the personal website, converted from the original Webflow export.

## Features

- **Vue.js 3** with Composition API
- **Vue Router** for navigation
- **Vite** for fast development and building
- **Responsive design** maintained from original
- **Component-based architecture**
- **Contact form** with Formspree integration
- **Mobile-friendly navigation** with hamburger menu

## Project Structure

```
src/
├── components/
│   ├── Navigation.vue      # Header navigation with mobile menu
│   ├── SideNavigation.vue  # Desktop side navigation
│   ├── Footer.vue          # Footer with social links
│   ├── Home.vue           # Home page with portfolio
│   └── About.vue          # About page with contact form
├── assets/
│   └── style.css          # Main styles (converted from original)
├── App.vue                # Root component
└── main.js                # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Key Changes from Original

1. **Component Architecture**: Split the monolithic HTML into reusable Vue components
2. **Router-based Navigation**: Implemented Vue Router for SPA navigation
3. **Reactive Form Handling**: Contact form now uses Vue's reactive data and proper form submission
4. **Mobile Menu State**: Navigation menu state is now managed by Vue reactivity
5. **Modern Build System**: Using Vite instead of static files for better development experience

## Features Maintained

- All original styling and responsive design
- Portfolio projects display
- Contact form functionality (Formspree integration)
- Social media links
- Mobile hamburger menu
- Side navigation on desktop

## Deployment

The built files will be in the `dist/` directory after running `npm run build`. These can be deployed to any static hosting service like:

- AWS S3 + CloudFront
- Netlify
- Vercel
- GitHub Pages

## Original vs Vue Version

| Feature | Original | Vue Version |
|---------|----------|-------------|
| Structure | Static HTML | Vue Components |
| Navigation | Page reloads | SPA routing |
| JavaScript | Webflow JS | Vue reactivity |
| Build Process | None | Vite |
| Development | Direct file editing | Hot reload |

## Contact Form

The contact form uses Formspree for backend processing. The endpoint is configured in `About.vue` component.

## Browser Support

Modern browsers that support ES6+ and Vue 3. The responsive design works on all device sizes.


