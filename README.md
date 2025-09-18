# AbdulAlim Mohamed's Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean and professional design with attention to detail
- **Responsive**: Fully responsive design that looks great on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Animations**: Smooth animations and transitions using Framer Motion
- **Section-Based Architecture**: Each section is a separate component for better maintainability
- **Interactive Elements**: Interactive UI elements for better user experience
- **Animated Background**: Dynamic background with particles and gradient effects

## Tech Stack

- **Next.js 15**: React framework for server-side rendering and static site generation
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development
- **Framer Motion**: Animation library for React
- **TypeScript**: For type safety and better developer experience

## Sections

1. **Hero**: Introduction and call-to-action
2. **About**: Personal information and background
3. **Experience**: Work history and professional experience
4. **Skills**: Technical skills and competencies
5. **Projects**: Showcase of personal and professional projects
6. **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── public/           # Static assets
├── src/              # Source code
│   ├── app/          # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/   # React components
│   │   ├── sections/     # Section components
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   └── contact.tsx
│   │   ├── animated-background.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
├── .gitignore       # Git ignore file
├── next.config.ts   # Next.js configuration
├── package.json     # Project dependencies
├── postcss.config.mjs # PostCSS configuration
├── tsconfig.json    # TypeScript configuration
└── README.md        # Project documentation
```

## Customization

### Changing Colors

The color scheme can be modified in `src/app/globals.css` by updating the CSS variables in the `:root` and `.dark` selectors.

### Adding New Sections

1. Create a new component in the `src/components/sections/` directory
2. Import and add the component to `src/app/page.tsx`

### Modifying Content

Most of the content is stored directly in the components. To update your information:

1. Edit the corresponding section component
2. Update the text, links, or other content as needed

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other static site hosting platform.

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure your deployment settings
4. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Resume content from AbdulAlim Mohamed
- Icons from various sources including Heroicons
- Inspiration from modern portfolio designs
