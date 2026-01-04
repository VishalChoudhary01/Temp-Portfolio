# Component Usage & Import Tracking Report

**Generated:** January 4, 2026  
**Scope:** Complete project-wide component usage analysis

---

## 📊 ACTIVELY USED COMPONENTS (By Usage Count)

### High Usage Components (5+ imports/usages)

#### 1. **Heading** (Generic Heading Component)

- **File:** `src/app/components/atoms/typography/Heading/Heading.js`
- **Import Locations:** 10+ places
- **Usage:**
  - `src/app/components/organisms/work-experience/WorkExperience.js` - ✓ (Work section heading)
  - `src/app/components/templates/SkillsTemplate.js` - ✓ (Skills heading with subheading)
  - `src/app/components/organisms/ProjectsCarousel.js` - ✓ (Projects heading with subheading)
  - `src/app/components/organisms/education/education.js` - ✓ (Education heading with subheading)
  - Project detail section headings (multiple locations)
- **Usage Count:** ~10+
- **Status:** ✅ ESSENTIAL - Core component for all section headings

#### 2. **GlowingCard**

- **File:** `src/app/components/molecules/cards/GlowingCard.js`
- **Usage Locations:**
  - `src/app/components/organisms/techStacks/TechCategoryCard.js` - ✓
  - `src/app/components/organisms/work-experience/ExperienceCard.js` - ✓
  - `src/app/components/organisms/banner/ProjectHeroSection.js` - ✓ (tech badges)
  - Project detail tech stack section - ✓
- **Usage Count:** 4+
- **Status:** ✅ CRITICAL - Core card styling component

#### 3. **motion/react** (Framer Motion)

- **Library:** `node_modules/motion`
- **Usage Count:** 50+ components across the project
- **Import Locations:** Nearly every animated component
- **Status:** ✅ ESSENTIAL - Core animation library

#### 4. **Image** (Next.js Image)

- **Library:** `next/image`
- **Usage Count:** 10+ locations
- **Import Locations:**
  - Project carousel slides
  - Visual showcase sections
  - Gallery images
- **Status:** ✅ ESSENTIAL - Image optimization

#### 5. **ProjectHeader**

- **File:** `src/app/components/atoms/typography/Heading/ProjectHeader.js`
- **Usage Locations:**
  - `src/app/components/organisms/banner/Banner.js` - ✓
  - `src/app/components/organisms/projectDetail/ProjectHeroSection.js` - ✓
  - Project detail pages
- **Usage Count:** 3+
- **Status:** ✅ IMPORTANT - Project title styling

#### 6. **NameHeading**

- **File:** `src/app/components/atoms/typography/Heading/NameHeading/NameHeading.js`
- **Usage Locations:**
  - `src/app/components/organisms/banner/Banner.js` - ✓ (Main hero name/title)
- **Usage Count:** 2+
- **Status:** ✅ IMPORTANT - Hero section branding

---

### Medium Usage Components (2-4 imports)

#### 7. **DoubleShineButton** (ONLY special button used)

- **File:** `src/app/components/atoms/special-button/DoubleShineButton.js`
- **Usage Locations:**
  - `src/app/components/organisms/projectDetail/ProjectHeroSection.js` - ✓ (Live Demo, Source Code, Design buttons)
  - `src/app/components/organisms/projectDetail/FinalCTASection.js` - ✓
- **Usage Count:** 2+ locations
- **Status:** ✅ ACTIVE - Only special button variant in use

#### 8. **GhostButton** (ONLY ghost variant used)

- **File:** `src/app/components/atoms/button/GhostButton.js`
- **Usage Locations:**
  - `src/app/components/organisms/projectCarousel/Desktop/DesktopContent.js` - ✓
  - `src/app/components/organisms/projectCarousel/Mobile/MobileContent.js` - ✓
- **Usage Count:** 2+ locations
- **Status:** ✅ ACTIVE - Button styling component

#### 9. **Tech** (Skills Grid Component)

- **File:** `src/app/components/organisms/techStacks/Tech.js`
- **Usage Locations:**
  - `src/app/components/templates/SkillsTemplate.js` - ✓
- **Usage Count:** 1+ locations (nested component)
- **Status:** ✅ ACTIVE - Core skills display component
- **Sub-components:**
  - `TechCategoryCard.js` - Used by Tech.js
  - `TechSkillItem.js` - Used by TechCategoryCard

#### 10. **TickerTech** (Animated tech ticker)

- **File:** `src/app/components/organisms/tickerTech/TickerTech.js`
- **Usage Locations:**
  - `src/app/components/templates/SkillsTemplate.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Scrolling tech display

#### 11. **CarouselProjects** (Projects carousel)

- **File:** `src/app/components/organisms/projectCarousel/CarouselProjects.js`
- **Usage Locations:**
  - `src/app/components/organisms/ProjectsCarousel.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Main projects display
- **Sub-components:**
  - `DesktopSlideItem.js` - Desktop carousel slides
  - `DesktopContent.js` - Desktop slide content
  - `MobileContent.js` - Mobile slide content
  - `DesktopNavigationButtons.js` - Carousel controls

#### 12. **Banner** (Hero section)

- **File:** `src/app/components/organisms/banner/Banner.js`
- **Usage Locations:**
  - `src/app/components/layout/Main.js` - ✓
  - Root page layout
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Main hero section
- **Sub-components:**
  - `CardSlideUpLoop.js`
  - `AboutMe.js` - Nested in Banner

#### 13. **WorkExperience** (Experience section)

- **File:** `src/app/components/organisms/work-experience/WorkExperience.js`
- **Usage Locations:**
  - `src/app/components/layout/Main.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Work experience display
- **Sub-components:**
  - `ExperienceCard.js`
  - `ExperienceList.js`
  - `ExperienceTabs.js`

#### 14. **Education** (Education timeline)

- **File:** `src/app/components/organisms/education/education.js`
- **Usage Locations:**
  - `src/app/components/layout/Main.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Education display
- **Sub-components:**
  - `DesktopTimeline.js`
  - `MobileTimeline.js`
  - `EducationHeader.js`

#### 15. **ProjectsCarousel** (Projects section container)

- **File:** `src/app/components/organisms/ProjectsCarousel.js`
- **Usage Locations:**
  - `src/app/components/layout/Main.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Projects section wrapper

#### 16. **Main** (Page layout container)

- **File:** `src/app/components/layout/Main.js`
- **Usage Locations:**
  - `src/app/page.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Main page structure
- **Imports:** Education, Skills, ProjectsCarousel, WorkExperience

#### 17. **Navbar** (Top navigation)

- **File:** `src/app/components/navbar/Navbar.js`
- **Usage Locations:**
  - `src/app/page.js` - ✓
  - Root page layout
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Navigation bar
- **Sub-components:**
  - `SocialLinks.js` (with aria-label fix ✓)
  - Floating navigation on project detail pages

#### 18. **Footer** (Page footer)

- **File:** `src/app/components/layout/Footer/`
- **Usage Locations:**
  - `src/app/layout.js` - ✓
- **Usage Count:** 1 location
- **Status:** ✅ ACTIVE - Global footer
- **Sub-components:**
  - `Footer.js`
  - `Connect.js`
  - `Resources.js`
  - `Socials.js`

#### 19. **ProjectDetailPage Components** (Multiple)

- **Usage Locations:** All in `src/app/project/[project_id]/`
- **Active Components:**
  - `ProjectHeroSection.js` - ✓
  - `ProjectOverviewSection.js` - ✓
  - `KeyFeaturesSection.js` - ✓
  - `TechStackSection.js` - ✓
  - `VisualShowcaseSection.js` - ✓ (with priority image fix ✓)
  - `ChallengesSolutionsSection.js` - ✓
  - `FinalCTASection.js` - ✓
  - `PerformanceMetricsSection.js` - ✓
  - `LearningOutcomesSection.js` - ✓
  - `PagesStructureSection.js` - ✓
  - `ProjectNavigation.js` - ✓
- **Status:** ✅ ESSENTIAL - Complete project detail page structure

---

## ❌ UNUSED/EMPTY COMPONENTS (Cleanup Candidates)

### **EMPTY FILES (0 code/minimal content)**

| File                                                    | Lines | Status | Recommendation |
| ------------------------------------------------------- | ----- | ------ | -------------- |
| `src/app/components/templates/AboutTemplate.js`         | 0     | EMPTY  | 🔴 DELETE      |
| `src/app/components/templates/ContactTemplate.js`       | 0     | EMPTY  | 🔴 DELETE      |
| `src/app/components/templates/HomeTemplate.js`          | 0     | EMPTY  | 🔴 DELETE      |
| `src/app/components/templates/ProjectDetailTemplate.js` | 0     | EMPTY  | 🔴 DELETE      |
| `src/app/components/templates/ProjectsTemplate.js`      | 0     | EMPTY  | 🔴 DELETE      |

---

### **UNUSED BUTTON COMPONENTS** (Never imported)

| Component                   | File                    | Lines | Usage          | Status    |
| --------------------------- | ----------------------- | ----- | -------------- | --------- |
| AdvancedShinyButton         | `atoms/special-button/` | 100+  | Never imported | 🔴 DELETE |
| AdvancedCircularShineButton | `atoms/special-button/` | 77    | Never imported | 🔴 DELETE |
| CircularShineButton         | `atoms/special-button/` | 50+   | Never imported | 🔴 DELETE |
| SimpleCircularShineButton   | `atoms/special-button/` | 23    | Never imported | 🔴 DELETE |
| ContinuousShineButton       | `atoms/special-button/` | 26    | Never imported | 🔴 DELETE |
| SparkleShineButton          | `atoms/special-button/` | 26    | Never imported | 🔴 DELETE |
| GhostSmokeButton            | `atoms/button/`         | 185   | Never imported | 🔴 DELETE |
| GhostSmokeDramaticButton    | `atoms/button/`         | 153   | Never imported | 🔴 DELETE |

**Note:** Only `DoubleShineButton` and `GhostButton` are actively used.

---

### **UNUSED ANIMATION COMPONENTS** (Exported but never used)

| Component            | File               | Import Status     | Usage          | Status    |
| -------------------- | ------------------ | ----------------- | -------------- | --------- |
| SimpleDigitAnimation | `atoms/animation/` | Exported in index | Never imported | 🟡 REVIEW |
| MinimalDigitCounter  | `atoms/animation/` | Exported in index | Never imported | 🟡 REVIEW |
| YearCounter          | `atoms/animation/` | Exported in index | Never imported | 🟡 REVIEW |

**Note:** `DigitSlideCounter` appears to be used in some places.

---

### **UNUSED BACKGROUND COMPONENTS**

| Component       | File                              | Usage          | Status    |
| --------------- | --------------------------------- | -------------- | --------- |
| TopGradientWave | `molecules/animation-background/` | Never imported | 🟡 REVIEW |

---

### **UNUSED FORM COMPONENTS** (Basic form fields)

| Component | File                     | Usage               | Status    |
| --------- | ------------------------ | ------------------- | --------- |
| Input     | `atoms/form/Input.js`    | Not in contact form | 🟡 REVIEW |
| Radio     | `atoms/form/Radio.js`    | Not in contact form | 🟡 REVIEW |
| TextArea  | `atoms/form/TextArea.js` | Not in contact form | 🟡 REVIEW |

---

### **EMPTY FOLDERS**

| Folder                                   | Status | Recommendation |
| ---------------------------------------- | ------ | -------------- |
| `src/app/components/atoms/UI/`           | Empty  | 🔴 DELETE      |
| `src/app/components/molecules/carousel/` | Empty  | 🔴 DELETE      |

---

## 📈 COMPONENT HIERARCHY TREE

```
src/app/
├── page.js (MAIN PAGE)
│   ├── Navbar ✓
│   ├── Banner ✓
│   │   ├── CardSlideUpLoop ✓
│   │   ├── AboutMe ✓
│   │   ├── ProjectHeader (level=1) ✓
│   │   └── NameHeading ✓
│   └── Main ✓
│       ├── Banner (rendered twice)
│       ├── Education ✓
│       │   ├── DesktopTimeline ✓
│       │   └── MobileTimeline ✓
│       ├── Skills (SkillsTemplate) ✓
│       │   ├── TickerTech ✓
│       │   │   └── TickerTrack + TickerItem
│       │   └── Tech ✓
│       │       └── TechCategoryCard ✓
│       │           └── TechSkillItem ✓
│       ├── WorkExperience ✓
│       │   ├── ExperienceList ✓
│       │   └── ExperienceCard ✓
│       │       └── ExperienceTabs ✓
│       └── ProjectsCarousel ✓
│           └── CarouselProjects ✓
│               ├── DesktopSlideItem ✓
│               │   └── DesktopContent ✓
│               └── MobileContent ✓
│
├── project/[project_id]/page.js
│   └── ProjectDetailPage ✓
│       ├── ProjectFloatingNav ✓
│       ├── ProjectHeroSection ✓
│       ├── ProjectOverviewSection ✓
│       ├── KeyFeaturesSection ✓
│       ├── TechStackSection ✓
│       ├── VisualShowcaseSection ✓ (with priority images)
│       ├── ChallengesSolutionsSection ✓
│       ├── FinalCTASection ✓
│       ├── PerformanceMetricsSection ✓
│       ├── LearningOutcomesSection ✓
│       └── PagesStructureSection ✓
│
└── layout.js
    ├── FaviconSwitcher ✓
    ├── Skip-to-content link ✓ (NEW - accessibility)
    ├── ClientProvider ✓
    └── Footer ✓
        ├── Connect ✓
        ├── Resources ✓
        └── Socials ✓
```

---

## 🔧 IMPROVEMENTS APPLIED (Recent)

✅ **Accessibility Fixes:**

1. Added `aria-label` to SocialLinks component
2. Added `aria-hidden="true"` to icon elements
3. Added skip-to-content link to RootLayout
4. Added `<main id="main-content">` landmark in layout
5. Made ProjectHeader heading level configurable (level prop)

✅ **Performance Fixes:**

1. Added `priority` attribute to first image in VisualShowcaseSection
2. Added `quality={85}` for optimized image loading

---

## 📊 USAGE STATISTICS

| Category                | Count | Status    |
| ----------------------- | ----- | --------- |
| **Active Components**   | 25+   | ✅ In Use |
| **Empty Files**         | 5     | 🔴 Delete |
| **Unused Buttons**      | 8     | 🔴 Delete |
| **Unused Animations**   | 3     | 🟡 Review |
| **Unused Other**        | 3     | 🟡 Review |
| **Empty Folders**       | 2     | 🔴 Delete |
| **Total Cleanup Items** | ~24   | -         |

---

## 🎯 CLEANUP ACTION PLAN

### Phase 1: High Priority (DELETE)

```bash
rm -rf src/app/components/templates/AboutTemplate.js
rm -rf src/app/components/templates/ContactTemplate.js
rm -rf src/app/components/templates/HomeTemplate.js
rm -rf src/app/components/templates/ProjectDetailTemplate.js
rm -rf src/app/components/templates/ProjectsTemplate.js
rm -rf src/app/components/atoms/UI/
rm -rf src/app/components/molecules/carousel/
rm -rf src/app/components/atoms/special-button/AdvancedShinyButton.js
rm -rf src/app/components/atoms/special-button/AdvancedCircularShineButton.js
rm -rf src/app/components/atoms/special-button/CircularShineButton.js
rm -rf src/app/components/atoms/special-button/SimpleCircularShineButton.js
rm -rf src/app/components/atoms/special-button/ContinuousShineButton.js
rm -rf src/app/components/atoms/special-button/SparkleShineButton.js
rm -rf src/app/components/atoms/button/GhostSmokeButton.js
rm -rf src/app/components/atoms/button/GhostSmokeDramaticButton.js
```

### Phase 2: Medium Priority (REVIEW)

- Confirm if `SimpleDigitAnimation`, `MinimalDigitCounter`, `YearCounter` are needed
- Confirm if `TopGradientWave` should be used somewhere
- Decide on form components (`Input`, `Radio`, `TextArea`) usage

### Phase 3: Update Exports

Remove deleted components from index.js files in:

- `src/app/components/atoms/special-button/index.js`
- `src/app/components/atoms/button/index.js`
- `src/app/components/atoms/animation/index.js` (if removing animations)

---

## 📝 Notes

- Most unused components are variations/alternatives created during initial component library setup
- The project uses a well-organized atomic design structure but has many unused variants
- No "dead code" functions or hooks detected - most unused items are component files
- Consider consolidating button variants in the future if more are needed
- Form components should either be integrated into a contact form or removed
