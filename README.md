# 🚀 Personal Portfolio Website

A modern, interactive personal portfolio website built with React and cutting-edge web technologies. Features smooth animations, 3D elements, and a professional contact form integrated with EmailJS.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
  - [EmailJS Setup](#emailjs-setup)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Build & Deployment](#build--deployment)
- [Scripts](#scripts)
- [Browser Support](#browser-support)
- [Performance Optimizations](#performance-optimizations)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Features
- **Responsive Design** - Fully responsive across all device sizes (mobile, tablet, desktop)
- **Modern UI/UX** - Beautiful and intuitive user interface with smooth interactions
- **Smooth Animations** - Framer Motion powered animations for engaging user experience
- **3D Elements** - React Three Fiber and COBE for interactive 3D visualizations
- **Interactive Contact Form** - Fully functional contact form with EmailJS integration
- **Dark Theme** - Professional dark-themed design with custom color schemes

### Advanced Features
- **Lazy Loading** - Code splitting for optimal performance
- **Smooth Scrolling** - Lenis integration for buttery smooth scroll experience
- **Particle Effects** - Dynamic particle animations in background
- **Flip Word Animation** - Animated text transitions
- **Orbiting Elements** - Circular animated elements with Framer Motion
- **3D Globe** - Interactive globe visualization using COBE
- **Responsive Images** - Optimized WebP images for better performance

### Page Sections
- **Navbar** - Navigation with smooth scrolling
- **Hero Section** - Eye-catching landing section with animations
- **About** - Detailed background information
- **Projects** - Portfolio of projects with detailed view
- **Experiences** - Timeline of professional experiences
- **Testimonials** - Client/colleague testimonials
- **Contact** - Functional contact form with EmailJS
- **Footer** - Links and information

---

## 🛠️ Tech Stack

### Frontend Framework & Build
- **React 19** - Latest React version for modern components
- **Vite 6** - Fast build tool and development server
- **React Router DOM 7** - Client-side routing

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind Merge** - Utility for merging Tailwind classes
- **PostCSS** - CSS transformations

### Animation & Graphics
- **Framer Motion 12** - Advanced motion library for React
- **Motion 12** - Animation utilities
- **React Three Fiber 9** - 3D graphics with Three.js
- **React Three Drei 10** - Useful helpers for React Three Fiber
- **Three.js** - 3D JavaScript library
- **COBE** - Animated globe visualization
- **Lenis** - Smooth scrolling library

### Email & Forms
- **EmailJS Browser** - Client-side email service integration

### UI Components & Icons
- **Lucide React** - Modern icon library

### Utilities
- **React Responsive** - Responsive design utilities

### Development Tools
- **ESLint** - Code quality and style checking
- **Vite Plugin React** - React support for Vite
- **Babel Plugin React Compiler** - React compiler optimization

---

## 📁 Project Structure

```
portfolio/
├── public/                           # Static assets
│   └── models/                       # 3D models
├── src/
│   ├── assets/                       # Images and static files
│   │   ├── logos/                    # Logo files
│   │   ├── projects/                 # Project images
│   │   └── socials/                  # Social media images
│   ├── components/                   # Reusable components
│   │   ├── Alert.jsx                 # Alert notification component
│   │   ├── Card.jsx                  # Generic card component
│   │   ├── CopyEmailButton.jsx       # Email copy button
│   │   ├── FlipWords.jsx             # Animated flip text
│   │   ├── Frameworks.jsx            # Tech stack display
│   │   ├── globe.jsx                 # 3D globe component
│   │   ├── HeroText.jsx              # Hero section text
│   │   ├── Loader.jsx                # Loading spinner
│   │   ├── Marquee.jsx               # Scrolling marquee
│   │   ├── OrbitingCircles.jsx       # Orbiting animation
│   │   ├── Particles.jsx             # Particle effects
│   │   ├── Project.jsx               # Project card
│   │   ├── ProjectDetails.jsx        # Project detail modal
│   │   └── Timeline.jsx              # Experience timeline
│   ├── sections/                     # Page sections
│   │   ├── About.jsx                 # About section
│   │   ├── Contact.jsx               # Contact form section
│   │   ├── Experiences.jsx           # Experience timeline
│   │   ├── Footer.jsx                # Footer section
│   │   ├── Hero.jsx                  # Hero landing section
│   │   ├── Navbar.jsx                # Navigation bar
│   │   ├── Projects.jsx              # Projects section
│   │   ├── shader-background.jsx     # WebGL shader effects
│   │   ├── smooth-scroll.jsx         # Smooth scroll handler
│   │   └── Testimonial.jsx           # Testimonials section
│   ├── constants/                    # Constants and config
│   │   └── index.js                  # Exported constants
│   ├── App.jsx                       # Main app component
│   ├── main.jsx                      # React entry point
│   ├── index.css                     # Global styles
│   └── App.css                       # App-level styles
├── .github/                          # GitHub configuration
├── eslint.config.js                  # ESLint configuration
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # Tailwind CSS config
├── postcss.config.js                 # PostCSS configuration
├── index.html                        # HTML entry point
├── package.json                      # Dependencies and scripts
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 3.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)
   - The application will auto-reload on file changes

---

## ⚙️ Configuration

### EmailJS Setup

The portfolio includes a functional contact form powered by **EmailJS**. Follow these steps to configure it:

#### Step 1: Create an EmailJS Account
1. Visit [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

#### Step 2: Set Up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the provider-specific setup instructions
5. Copy your **Service ID** (e.g., `service_79b0nyj`)

#### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Configure template with these variables:
   ```
   From Name: {{from_name}}
   To Name: {{to_name}}
   From Email: {{from_email}}
   To Email: {{to_email}}
   Message: {{message}}
   ```
4. Copy your **Template ID** (e.g., `template_17us8im`)

#### Step 4: Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `pn-Bw_mS1_QQdofuV`)

#### Step 5: Update Configuration in Contact Component

Edit [src/sections/Contact.jsx](src/sections/Contact.jsx#L31) and update these values:

```javascript
await emailjs.send(
  "service_79b0nyj",        // Your Service ID
  "template_17us8im",       // Your Template ID
  {
    from_name: formData.name,
    to_name: "Your Name",   // Change this to your name
    from_email: formData.email,
    to_email: "your-email@gmail.com",  // Change to your email
    message: formData.message,
  },
  "pn-Bw_mS1_QQdofuV",      // Your Public Key
);
```

#### Current Configuration
The contact form is currently configured with demo credentials. Update them with your actual EmailJS credentials before deployment.

### Environment Variables

Currently, all configuration is hardcoded in [Contact.jsx](src/sections/Contact.jsx). For better security in production, consider moving these to environment variables:

Create a `.env.local` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_EMAIL=your-email@gmail.com
```

Update Contact.jsx to use these variables:
```javascript
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { /* ... */ },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);
```

---

## 💻 Usage

### Navigation
- Use the navbar to navigate between sections
- Smooth scrolling is enabled for all navigation links
- Mobile-responsive hamburger menu on smaller screens

### Interactive Elements
- **Scroll Effects**: Parallax and blur animations trigger on scroll
- **3D Globe**: Hover and interact with the globe visualization
- **Project Cards**: Click on projects to view detailed information
- **Contact Form**: Fill out and submit the contact form to send emails

### Customization

#### Add Your Content
1. **Update About Section** - Edit [src/sections/About.jsx](src/sections/About.jsx)
2. **Add Projects** - Update project data in [src/constants/index.js](src/constants/index.js)
3. **Modify Experiences** - Edit [src/sections/Experiences.jsx](src/sections/Experiences.jsx)
4. **Update Social Links** - Edit [src/sections/Navbar.jsx](src/sections/Navbar.jsx)

#### Customize Styling
- **Colors**: Modify Tailwind config in [tailwind.config.js](tailwind.config.js)
- **Fonts**: Update font imports in [src/sections/Hero.jsx](src/sections/Hero.jsx)
- **Animations**: Adjust animation values in Framer Motion components

---

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Deployment Options

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Vercel automatically detects Vite and builds your project
4. Your site is deployed automatically on every push to main

#### Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

#### Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure your server to serve `index.html` for all routes

#### Docker Deployment
A Dockerfile can be created for containerized deployment:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: 3D features (Three.js, COBE) require WebGL support.

---

## ⚡ Performance Optimizations

### Implemented Optimizations
- **Code Splitting** - Lazy loading of heavy components (Projects, Experiences, etc.)
- **Image Optimization** - WebP format for better compression
- **Tree Shaking** - Unused code removal during build
- **Source Maps** - Enabled for production debugging
- **React Compiler** - Babel plugin for automatic optimization
- **Tailwind CSS 4** - Enhanced v4 with better performance

### Performance Tips
1. **Image Optimization**: Use WebP format for images
2. **Lazy Loading**: Components load only when needed
3. **Minimize Animations**: Use CSS transforms for hardware acceleration
4. **Monitor Bundle Size**: Check build output regularly
5. **Use Chrome DevTools**: Analyze performance in Chrome DevTools

---

## 🎨 Customization Guide

### Colors
Update [tailwind.config.js](tailwind.config.js):
```javascript
theme: {
  colors: {
    primary: '#1a1a1a',
    accent: '#ffffff',
    // ... your colors
  }
}
```

### Typography
Update font imports in [src/sections/Hero.jsx](src/sections/Hero.jsx):
```javascript
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap"
/>
```

### Content
- Update personal info in component files
- Replace images in `src/assets/`
- Update links in [src/sections/Navbar.jsx](src/sections/Navbar.jsx)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License. Feel free to use it for your own portfolio!

---

## 📞 Support & Contact

For questions or support, please reach out through the contact form on the website or open an issue in the repository.

---

## 🙏 Acknowledgments

- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics
- **Tailwind CSS** - Styling framework
- **EmailJS** - Email service
- **Vite** - Build tool

---

**Last Updated**: January 29, 2026
**Version**: 1.0.0
