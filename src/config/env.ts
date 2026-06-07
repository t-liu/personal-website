// src/config/env.ts
export const config = {
  cloudinaryBaseUrl: import.meta.env.VITE_CLOUDINARY_BASE_URL || 'https://res.cloudinary.com/decbhr3np/image/upload/f_auto,q_auto',
  formspreeEndpoint: 'https://formspree.io/f/mldwoogl',
  jokeApiUrl: 'https://icanhazdadjoke.com',
  resumeUrl: 'https://resume.thomasliu.click',
  socialLinks: 
    [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thomas-liu-tech',
        icon: ['fab', 'linkedin'],
        ariaLabel: 'Visit my LinkedIn profile'
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/tliu301',
        icon: ['fab', 'twitter'],
        ariaLabel: 'Visit my Twitter page'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/t-liu',
        icon: ['fab', 'github'],
        ariaLabel: 'Visit my GitHub page'
      },
      {
        label: 'Email',
        url:
          'mailto:thomas.s.liu@gmail.com?subject=Hey%20T-Liu%2C%20I%20I%20Found%20You%20on%20the%20Internet',
        icon: ['far', 'envelope'],
        ariaLabel: 'Send me an email'
      },
    ],
  } as const