# Portfolio 2025 - Complete Project Structure

## Root Level

```
portfolio-new/
├── .git/                          # Git repository
├── .gitignore                     # Git ignore file
├── .next/                         # Next.js build output
├── COMPONENTS_STRUCTURE.md        # Components documentation
├── GEMINI.md                      # Gemini documentation
├── README.md                      # Project README
├── README.pdf                     # Project README in PDF
├── eslint.config.mjs              # ESLint configuration
├── jsconfig.json                  # JavaScript configuration
├── next.config.mjs                # Next.js configuration
├── package.json                   # Project dependencies
├── package-lock.json              # Dependency lock file
├── postcss.config.mjs             # PostCSS configuration
├── public/                        # Static assets
└── src/                           # Source code
```

## Public Assets (`/public`)

```
public/
├── favicon/
│   ├── dark.png                   # Dark mode favicon
│   └── light.png                  # Light mode favicon
├── documents/
│   └── Vishal_Kumar_Resume_frontend.pdf
├── images/
│   ├── company/
│   │   ├── bi hub.png
│   │   ├── cling.png
│   │   ├── cloudily.png
│   │   └── udyog.png
│   └── project carousel/
│       ├── claudio.jpg
│       ├── delta.jpg
│       ├── pawel.jpg
│       ├── rene.jpg
│       ├── sample.png
│       ├── amurtam/
│       │   ├── amurtamBanner.png
│       │   └── gallery/
│       │       ├── features.png
│       │       ├── hero.png
│       │       ├── iphone.png
│       │       ├── landscapetablet.png
│       │       ├── process.png
│       │       ├── tablet.png
│       │       └── testimonial.png
│       ├── crypto-tracker/
│       │   └── cryptoBanner.png
│       └── trailor-ride/
│           ├── trailorBanner.png
│           ├── trailorRideBanner.png
│           └── gallery/
│               ├── coumminity-bentogrid.png
│               ├── mobile.png
│               ├── mobileBrands.png
│               ├── mobile_community.png
│               └── tablet_hero.png
└── SVG Assets
    ├── file.svg
    ├── globe.svg
    ├── next.svg
    └── window.svg
```

## Source Code (`/src`)

```
src/
└── app/
    ├── globals.css                # Global CSS styles
    ├── layout.js                  # Root layout component
    ├── page.js                    # Home page
    ├── components/                # React components
    ├── constants/                 # Application constants
    ├── hooks/                     # Custom React hooks
    ├── lib/                       # Utilities and services
    ├── project/                   # Project detail routes
    └── redux/                     # Redux store configuration
```

## Components (`/src/app/components`)

### Atoms (Basic UI Components)

```
atoms/
├── animation/
│   ├── DigitSlideCounter.js       # Counter with sliding animation
│   ├── MinimalDigitCounter.js     # Minimal digit counter
│   ├── SimpleDigitAnimation.js    # Simple digit animation
│   ├── YearCounter.js             # Year counter component
│   └── index.js                   # Exports
├── button/
│   ├── Button.js                  # Basic button component
│   ├── DownloadButton.js          # Download button variant
│   ├── GhostButton.js             # Ghost button style
│   ├── GhostSmokeButton.js        # Ghost smoke effect button
│   ├── GhostSmokeDramaticButton.js # Dramatic smoke effect button
│   ├── button.css                 # Button styles
│   └── index.js                   # Exports
├── form/
│   ├── Input.js                   # Input field component
│   ├── Radio.js                   # Radio button component
│   ├── TextArea.js                # Textarea component
│   └── index.js                   # Exports
├── icons/
│   ├── Icon.js                    # Icon component
│   └── index.js                   # Exports
├── images/
│   └── logo/
│       ├── VKR.js                 # VKR logo component
│       └── logo.css               # Logo styles
├── loaders/
│   ├── LoaderDot.js               # Dot loader
│   ├── LoaderMessage.js           # Message loader
│   ├── LoaderParticles.js         # Particle loader
│   ├── LoaderProgress.js          # Progress loader
│   ├── LoaderRing.js              # Ring loader
│   ├── LoaderShimmer.js           # Shimmer loader
│   ├── LoaderText.js              # Text loader
│   └── loading.js                 # Loading utilities
├── special-button/
│   ├── AdvancedCircularShineButton.js     # Advanced circular shine
│   ├── AdvancedShinyButton.js             # Advanced shiny effect
│   ├── CircularShineButton.js             # Circular shine button
│   ├── ContinuousShineButton.js           # Continuous shine effect
│   ├── DoubleShineButton.js               # Double shine effect
│   ├── SimpleCircularShineButton.js       # Simple circular shine
│   ├── SparkleShineButton.js              # Sparkle shine effect
│   └── index.js                           # Exports
├── theme-toggle/
│   └── DarkModeToggle.js          # Dark mode toggle component
├── typography/
│   ├── Heading/
│   │   ├── Heading.js             # Main heading component
│   │   ├── Heading.css            # Heading styles
│   │   ├── HeadingTwo.js          # Heading level 2
│   │   └── ProjectHeader.js       # Project header variant
│   ├── Paragraph.js               # Paragraph component
│   ├── Text.js                    # Text component
│   └── index.js                   # Exports
└── UI/                            # Additional UI components
```

### Molecules (Composite Components)

```
molecules/
├── animation-background/
│   ├── ShaderBackground.js        # Shader-based background
│   └── TopGradientWave.js         # Top gradient wave animation
├── cards/
│   ├── GlowingCard.js             # Glowing card effect
│   └── GlowingCornerHover.js      # Glowing corner on hover
├── carousel/                      # Carousel components
├── menu/
│   ├── DropdownMenu.js            # Dropdown menu component
│   ├── SideMenu.js                # Side menu component
│   └── index.js                   # Exports
├── navigation/
│   └── SocialLinks.js             # Social media links
└── index.js                       # Exports
```

### Organisms (Complex Components)

```
organisms/
├── ContactForm.js                 # Contact form
├── ProjectDetailSection.js        # Project detail section
├── ProjectsCarousel.js            # Projects carousel
├── SkillsCarousel.js              # Skills carousel
├── SkillsCategory.js              # Skills category component
├── aboutMe/
│   ├── aboutMe.js                 # About me section
│   ├── ActionButtons.js           # Action buttons
│   ├── BackgroundDecoration.js    # Background decoration
│   ├── FeatureCard.js             # Feature card
│   └── FeatureCardsGrid.js        # Feature cards grid
├── banner/
│   ├── Banner.js                  # Banner component
│   ├── Banner.css                 # Banner styles
│   ├── CardSlideUpLoop.js         # Card slide-up animation
│   └── index.js                   # Exports
├── education/
│   ├── AnimatedDot.js             # Animated dot
│   ├── ConnectionLine.js          # Connection line
│   ├── DesktopTimeline.js         # Desktop timeline view
│   ├── EducationHeader.js         # Education header
│   ├── MobileAnimatedDot.js       # Mobile animated dot
│   ├── MobileConnectionLine.js    # Mobile connection line
│   ├── MobileTimeline.js          # Mobile timeline view
│   ├── TimelineCard.js            # Timeline card component
│   ├── education.js               # Education section
│   └── index.js                   # Exports
├── experience/
│   ├── CardContent.js             # Work experience card content
│   ├── Experience.js              # Main experience section
│   ├── WorkExperienceCard.js      # Work experience card
│   ├── WorkExperienceDots.js      # Experience navigation dots
│   ├── WorkExperienceNavigation.js # Navigation component
│   ├── WorkExperienceTimeline.js  # Experience timeline
│   └── index.js                   # Exports
├── navbar/
│   ├── DarkModeToggle.js          # Dark mode toggle in navbar
│   ├── DesktopNav.js              # Desktop navigation
│   ├── DownloadResume.js          # Download resume button
│   ├── LoadingNavbar.js           # Loading state navbar
│   ├── MobileHamburger.js         # Mobile hamburger menu
│   ├── Navbar.js                  # Main navbar component
│   ├── SocialLinks.js             # Navbar social links
│   └── index.js                   # Exports
├── projectCarousel/
│   ├── CarouselProjects.js        # Main carousel
│   ├── Desktop/
│   │   ├── DesktopContent.js      # Desktop carousel content
│   │   ├── DesktopNavigationButtons.js # Navigation buttons
│   │   ├── DesktopSlideItem.js    # Slide item component
│   │   └── index.js               # Exports
│   └── Mobile/
│       ├── MobileBackgroundImage.js # Mobile background image
│       ├── MobileContent.js       # Mobile carousel content
│       ├── MobileNavigationButtons.js # Mobile nav buttons
│       └── index.js               # Exports
├── projectDetail/
│   ├── ChallengesSolutionsSection.js # Challenges & solutions
│   ├── FinalCTASection.js         # Final call-to-action
│   ├── KeyFeaturesSection.js      # Key features section
│   ├── LearningOutcomesSection.js # Learning outcomes
│   ├── PagesStructureSection.js   # Pages structure info
│   ├── PerformanceMetricsSection.js # Performance metrics
│   ├── ProgressBar.js             # Progress bar component
│   ├── ProjectFloatingNav.js      # Floating navigation
│   ├── ProjectHeroSection.js      # Project hero section
│   ├── ProjectLoadingState.js     # Loading state
│   ├── ProjectNotFoundState.js    # Not found state
│   ├── ProjectOverviewSection.js  # Project overview
│   ├── TechStackSection.js        # Tech stack section
│   ├── VisualShowcaseSection.js   # Visual showcase
│   ├── utils.js                   # Utility functions
│   └── index.js                   # Exports
├── techStacks/
│   ├── Tech.js                    # Tech stack display
│   ├── TechCategoryCard.js        # Tech category card
│   └── TechSkillItem.js           # Tech skill item
└── tickerTech/
    ├── TickerItem.js              # Ticker item component
    ├── TickerTech.js              # Main ticker component
    └── TickerTrack.js             # Ticker track/timeline
```

### Templates (Page-level Components)

```
templates/
├── AboutTemplate.js               # About page template
├── ContactTemplate.js             # Contact page template
├── HomeTemplate.js                # Home page template
├── ProjectDetailTemplate.js       # Project detail page template
├── ProjectsTemplate.js            # Projects page template
└── SkillsTemplate.js              # Skills page template
```

### Layout Components

```
layout/
├── Main.js                        # Main layout wrapper
├── SeparateSection.js             # Separate section component
├── Footer/
│   ├── BottomFooter.js            # Bottom footer section
│   ├── Connect.js                 # Connect section
│   ├── EngravedBackground.js      # Engraved background
│   ├── Footer.js                  # Main footer component
│   ├── QuickLinks.js              # Quick links section
│   └── Resources.js               # Resources section
└── index.js                       # Exports
```

## Core Directories

### Constants (`/src/app/constants`)

```
constants/
├── index.js                       # Main constants export
└── menu.js                        # Menu configuration
```

### Hooks (`/src/app/hooks`)

```
hooks/
└── useDarkMode.js                 # Dark mode hook
```

### Library (`/src/app/lib`)

```
lib/
├── data/
│   ├── educationData.js           # Education timeline data
│   ├── index.js                   # Data exports
│   ├── menu.js                    # Menu data
│   ├── ProjectCarouselData.js     # Project carousel data
│   ├── techStack.js               # Tech stack data
│   ├── techTickerItems.js         # Tech ticker data
│   └── workExperience.js          # Work experience data
├── services/
│   └── githubService.js           # GitHub API service
└── utils/
    ├── getIconColor.js            # Icon color utility
    ├── getStatusColor.js          # Status color utility
    ├── iconMappings.js            # Icon mapping configuration
    └── index.js                   # Utils exports
```

### Project Routes (`/src/app/project`)

```
project/
└── [project_id]/
    ├── page.js                    # Dynamic project page
    └── ProjectDetailPage.js       # Project detail component
```

### Redux (`/src/app/redux`)

```
redux/
├── clientProvider.js              # Client provider wrapper
├── store.js                       # Redux store configuration
└── featuresSlice/
    ├── themeSlice.js              # Theme state slice
    └── UISlice.js                 # UI state slice
```

## Configuration Files

- **eslint.config.mjs** - ESLint configuration for code linting
- **jsconfig.json** - JavaScript project configuration for paths
- **next.config.mjs** - Next.js configuration (build, images, etc.)
- **postcss.config.mjs** - PostCSS configuration for CSS processing
- **package.json** - Project dependencies and scripts

## Summary

This is a **Next.js portfolio website** built with the following structure:

- **Atomic Design Pattern**: Components organized into atoms, molecules, organisms, and templates
- **Component-Based Architecture**: Reusable components for various UI elements
- **Redux State Management**: Global state management for theme and UI
- **Dynamic Routing**: Project detail pages using dynamic routes
- **Dark Mode Support**: Theme switching capabilities
- **Responsive Design**: Desktop and mobile-specific component variants
- **Animation-Heavy**: Multiple animation components and effects
- **Data-Driven**: Separate data layer for content management
- **Service Layer**: External API integration (GitHub)
