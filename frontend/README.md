# Kinez - Kindergarten School React JS Template

**Kinez** is a premium, modern, and beautiful React JS template specifically designed for kindergartens, preschools, child care facilities, nursery schools, and early learning centers. Built with **React 19**, **TypeScript**, and **Vite** for blazing fast performance, it offers a visual-rich and highly engaging user experience.

The template utilizes standard styling along with advanced interactions like GSAP scroll triggers, custom cursor follower, 3D card tilt effects, and CSS scroll animations.

---

## Key Features

- **Modern & Premium Design**: Visual-rich layout utilizing curated color palettes, elegant typography, and rounded cards matching school aesthetics.
- **3 Home Page Variations**: Choose between three unique homepage layouts crafted for different styles.
- **16+ Inner Pages**: Comprehensive range of pages including About, Programs, Events, Team, Testimonials, Blog, and Contact.
- **React 19 & TypeScript**: Built with the latest React version and full type safety.
- **Vite Build Tool**: Fast developer environment with hot module replacement (HMR) and highly optimized production builds.
- **GSAP & ScrollTrigger Animations**: Advanced split-text reveals, scroll-linked triggers, and smooth layout entry animations.
- **3D Tilt Hover Effects**: Interactive card tilts powered by Vanilla-Tilt.
- **WOW.js Reveal Animations**: Smooth fade-in effects triggered on scroll.
- **Swiper Slider**: Modern, fully responsive, and touch-enabled sliders.
- **Bootstrap 5 Grid**: Fully responsive layout matching all modern screen sizes and devices.
- **Functional Contact Form**: Pre-configured React controlled state inputs and submission handler.
- **Fully Documented**: Standard structure with clean, readable, and well-commented code.

---

## Technologies Used

- **React** (v19)
- **TypeScript** (v5)
- **Vite** (v5)
- **React Router DOM** (v7)
- **GSAP** (GreenSock Animation Platform)
- **Vanilla-Tilt**
- **WOW.js** & **Animate.css**
- **Swiper**
- **Bootstrap 5** (CSS Grid framework)

---

## Getting Started

Follow these simple steps to set up and run the template locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (Node 18+ is recommended).

### Installation Steps

1. **Extract** the downloaded `.zip` package.
2. Open your terminal/command prompt and navigate to the project directory:
   ```bash
   cd kinez-reactjs
   ```
3. Install all dependencies:
   ```bash
   npm install
   ```

### Running the Project

- **Development Server**: Run the following command to start the template locally in development mode:
  ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

- **Production Build**: Generate optimized files for production/hosting:
  ```bash
  npm run build
  ```
  The production-ready assets will be generated inside the `dist/` directory.

- **Preview Build**: Preview the production bundle locally:
  ```bash
  npm run preview
  ```

---

## File and Folder Structure

```text
kinez-reactjs/
├── public/              # Static assets (images, icons, etc.)
└── src/
    ├── components/      # React components grouped by page and feature
    │   ├── common/      # Reusable components (Header, Footer, Breadcrumb, Cursor, Tilt, etc.)
    │   ├── homes/       # Home page variations (Home 1, Home 2, Home 3)
    │   ├── inner-pages/ # All inner pages (About, Programs, Events, Team, Testimonials)
    │   └── contact/     # Contact page components and forms
    ├── data/            # Local data files (menu data, program data, event data)
    ├── hooks/           # Custom React hooks
    ├── layouts/         # Layout components (Wrapper, Header layouts, Mobile menus)
    ├── styles/          # Main stylesheets and styles custom tokens
    ├── types/           # TypeScript interfaces and type declarations
    ├── utils/           # Utility functions and helper methods
    ├── App.tsx          # Main App routing configuration
    └── main.tsx         # React root mounting file
```

---

## Page Inventory

The template contains the following pages and routes:

| Route Path | Description |
| :--- | :--- |
| `/` | Home Page 01 |
| `/home-2` | Home Page 02 |
| `/home-3` | Home Page 03 |
| `/about` | About Us Page |
| `/team` | Our Team |
| `/team-details` | Single Teacher/Team Member Details |
| `/testimonial` | Client/Parent Testimonials |
| `/coming-soon` | Coming Soon Page |
| `/program` | Programs Listing |
| `/program-details` | Single Program Details |
| `/event` | Events Listing |
| `/event-details` | Single Event Details |
| `/blog` | Blog Listing |
| `/blog-standard` | Blog Standard Layout |
| `/blog-details` | Blog Single Post Details |
| `/contact` | Contact Page with Form |
| `*` | 404 Error Page |

---

## Support & Customization

If you face any issues while setting up this template or need custom edits, feel free to contact us via our ThemeForest profile support page. We are always happy to assist you!
