# 🚀 Let's Know Zim - Personal Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and passion for frontend development. Built with React, Tailwind CSS, and enhanced with smooth animations using Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC) ![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF)

## ✨ Features

- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Typewriter Effect**: Dynamic text animation showcasing my roles
- **Modern UI/UX**: Clean, professional design with gradient backgrounds
- **Interactive Elements**: Hover effects and smooth transitions
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Firebase Ready**: Configured for easy deployment to Firebase Hosting

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **Typewriter Effect 2.22.0** - Animated typing effects

### Build Tools
- **Vite 7.0.4** - Next generation frontend tooling
- **ESLint** - Code linting for consistent code quality

### Additional Libraries
- **React Icons 5.5.0** - Popular icon library
- **Firebase 12.0.0** - Backend services and hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zimalshahriar/lets-know-zim.git
   cd lets-know-zim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📁 Project Structure

```
lets-know-zim/
├── public/
│   ├── jim.png                 # Profile image
│   ├── my-pic.jpg             # Additional photos
│   ├── Résumé of Shahriar Zim.pdf  # Resume file
│   └── vite.svg               # Vite logo
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Landing section with intro
│   │   ├── About.jsx          # About me section
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Contact.jsx        # Contact information
│   │   ├── Header.jsx         # Navigation header
│   │   └── Footer.jsx         # Footer component
│   ├── data/
│   │   └── projects.js        # Projects data
│   ├── assets/
│   │   └── react.svg          # React logo
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   └── firebase.js            # Firebase configuration
├── eslint.config.js           # ESLint configuration
├── firebase.json              # Firebase deployment config
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🎨 Key Components

### Hero Section
- **Animated Introduction**: Typewriter effect showcasing roles
- **Call-to-Action Buttons**: Links to projects and GitHub
- **Responsive Layout**: Adapts to different screen sizes
- **Gradient Background**: Modern visual appeal

### Projects Section
- **Project Cards**: Showcasing key projects with technologies
- **Interactive Elements**: Hover effects and smooth transitions
- **External Links**: Direct links to GitHub repos and live demos

### About Section
- **Personal Introduction**: Background and skills
- **Professional Focus**: Frontend development expertise

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🌐 Deployment

### Firebase Hosting
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

### Other Platforms
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Optimized images and resources
- **Fast Refresh**: Hot module replacement during development
- **Modern Build**: ES modules and tree shaking

## 🔧 Customization

### Adding New Projects
Edit `src/data/projects.js` to add your projects:

```javascript
{
  title: "Your Project Name",
  description: "Project description here",
  tech: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourusername/project",
  demo: "https://your-project-demo.com"
}
```

### Styling
- Colors and themes can be customized in Tailwind CSS classes
- Component-specific styles are inline using Tailwind utilities
- Global styles are in `src/index.css`

### Animations
Framer Motion animations can be customized in individual components:
- Entrance animations
- Hover effects
- Page transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Shahriar Zim** - Frontend Developer
- **GitHub**: [zimalshahriar](https://github.com/zimalshahriar)
- **Portfolio**: [Live Demo](#)
- **Email**: [Your Email]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Vite** - For the blazing fast build tool

---

⭐ **Star this repo if you found it helpful!**

*Built with ❤️ by Zim*
