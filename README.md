# Personal Website

A modern, responsive personal portfolio website built with Vue.js 3. Originally designed in Webflow and converted to a dynamic Vue.js application while maintaining the original design aesthetic.

## ✨ Features

- **Vue.js 3** with Composition API and Options API
- **Vue Router** for seamless SPA navigation
- **Vite** for lightning-fast development and optimized builds
- **Responsive design** maintained from original Webflow design
- **Component-based architecture** for maintainability
- **Contact form** with Formspree integration
- **Mobile-friendly navigation** with hamburger menu
- **Cloudinary integration** for optimized image delivery
- **Interactive elements** including animated handwave and joke API
- **SEO optimized** with proper meta tags and Open Graph support
- **Performance optimized** with code splitting and lazy loading

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.vue      # Header navigation with mobile menu
│   ├── SideNavigation.vue  # Desktop side navigation
│   ├── Footer.vue          # Footer with social links
│   ├── Home.vue           # Home page with portfolio and jokes
│   └── About.vue          # About page with contact form
├── composables/
│   └── useJoke.js         # Reusable joke API composable
├── config/
│   └── env.js             # Centralized configuration
├── assets/
│   └── style.css          # Main styles (converted from original)
├── App.vue                # Root component
└── main.js                # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Cloudinary account (for image optimization)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/t-liu/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env file in root directory
VITE_CLOUDINARY_BASE_URL=https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## 🔧 Architecture Improvements

### Modern Vue.js Patterns
- **Composables**: Reusable logic with `useJoke` composable
- **Centralized Configuration**: All URLs and endpoints in `config/env.js`
- **Component Composition**: Mix of Composition API and Options API
- **Error Handling**: Proper error states and loading indicators

### Performance Optimizations
- **Code Splitting**: Vendor and FontAwesome chunks separated
- **Tree Shaking**: Unused code eliminated in production
- **Image Optimization**: Cloudinary integration for responsive images
- **Bundle Analysis**: Optimized build configuration


## 🚀 Deployment

The built files will be in the `dist/` directory after running `npm run build`. Deploy to any static hosting service:

- **AWS S3 + CloudFront** (Current)
- **Netlify** with automatic deployments
- **Vercel** with zero-config deployment
- **GitHub Pages** for simple hosting

### Environment Variables

Create a `.env` file with:
```env
VITE_CLOUDINARY_BASE_URL=https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload
```

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, SEO)
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- ESLint configuration (recommended)
- Prettier formatting (recommended)
- Vue 3 best practices
- Responsive design principles

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Author

**Thomas S. Liu**
- LinkedIn: [thomas-liu-tech](https://www.linkedin.com/in/thomas-liu-tech)
- GitHub: [t-liu](https://github.com/t-liu)
- Email: thomas.s.liu@gmail.com