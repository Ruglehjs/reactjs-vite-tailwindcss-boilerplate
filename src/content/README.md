# Content Organization

This folder contains all JSON content files organized by page/section hierarchy for better maintainability and scalability.

## Folder Structure

```
src/content/
├── Home/                   # Home page content
│   ├── hero.json          # Hero section content
│   ├── services.json      # Services overview content  
│   └── pricing.json       # Pricing section content
├── Services/              # Services page content
│   └── services-hero.json # Services page hero content
├── Plans/                 # Plans page content
│   └── plans.json         # All pricing plans content
├── About/                 # About page content (future)
├── Contact/               # Contact page content (future)
├── Portfolio/             # Portfolio page content (future)
└── common/                # Shared content across pages
    └── navigation.json    # Navigation menu content
```

## Usage Guidelines

### 1. Page-Specific Content
- Each page has its own folder containing related JSON files
- Use descriptive filenames that match component names
- Keep page-specific content separate from shared content

### 2. Shared Content
- Common elements like navigation, footer, etc. go in `common/`
- Use this for content that appears across multiple pages
- Helps maintain consistency across the site

### 3. Import Patterns
```typescript
// Page-specific content
import heroContent from 'content/Home/hero.json'
import servicesContent from 'content/Home/services.json'

// Shared content  
import navigationContent from 'content/common/navigation.json'
```

### 4. JSON Structure
All JSON files should follow the established patterns:
- Include proper TypeScript interfaces in `src/types/`
- Use consistent naming conventions
- Include metadata like images, alt text, etc.
- Structure data for easy component consumption

## Benefits

1. **Better Organization**: Content is logically grouped by page/feature
2. **Easier Maintenance**: Changes to specific pages are isolated
3. **Improved Scalability**: Adding new pages doesn't clutter the root
4. **Clear Dependencies**: Easy to see what content a page uses
5. **Reduced Conflicts**: Multiple developers can work on different pages
6. **Better Performance**: Only load content needed for specific pages 