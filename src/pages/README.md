# Pages Structure

This directory contains all the page-specific components organized by their respective pages.

## Structure

```
src/pages/
├── Home/
│   ├── index.tsx          # Main Home page component
│   ├── HeroSection/       # Hero section component
│   ├── ServicesSection/   # Services overview component
│   └── PricingSection/    # Pricing section component
├── Services/
│   ├── index.tsx          # Main Services page component
│   ├── ServicesHero/      # Services page hero
│   └── ServicesShowcase/  # Services display component
├── Plans/
│   └── index.tsx          # Main Plans page component
└── README.md              # This file
```

## Shared Components

The following components remain in the main `src/components/` directory as they are shared across multiple pages:

- `Navigation/` - Site navigation (header/menu)
- `ui/` - Reusable UI components (buttons, animations, etc.)
- `Avatar/` - User avatar component
- `App.tsx` - Main app component

## Images Added

### Services Page
- **Hero Background**: Creative team working on marketing strategies
- **Content Creation**: Creative content and design tools
- **Strategic Marketing**: Business charts and strategy planning
- **BTL Marketing**: Event and activation setups
- **Additional Services Background**: Team collaboration

### Plans Page
- **Hero Background**: Pricing and business planning workspace

## Usage

Import pages like this:
```tsx
import Home from 'pages/Home'
import Services from 'pages/Services'
import Plans from 'pages/Plans'
```

Page-specific components are now self-contained within their respective folders and use relative imports. 