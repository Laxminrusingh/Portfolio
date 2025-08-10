# Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean and professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Smooth scrolling navigation with active state indicators
- **Animated Components**: Beautiful animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information
- **Skills Display**: Interactive skills section with progress bars
- **Experience Timeline**: Professional experience timeline with achievements
- **Education Section**: Academic journey with timeline design

## 📋 Sections

1. **Home**: Hero section with introduction and call-to-action
2. **Skills**: Technical and soft skills with progress indicators
3. **Education**: Academic background with timeline
4. **Experience**: Work history with achievements and technologies
5. **Projects**: Portfolio of projects with filtering options
6. **Contact**: Contact form and information

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **CSS3**: Modern CSS with Flexbox and Grid
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Customization

### Personal Information
Update the following files with your personal information:

- **Home Page**: `src/pages/Home.js` - Update name, description, and stats
- **Skills Page**: `src/pages/Skills.js` - Update skills and proficiency levels
- **Education Page**: `src/pages/Education.js` - Update educational background
- **Experience Page**: `src/pages/Experience.js` - Update work experience
- **Projects Page**: `src/pages/Projects.js` - Update project details
- **Contact Page**: `src/pages/Contact.js` - Update contact information

### Styling
- **Colors**: Update the gradient colors in CSS files (currently using purple/blue theme)
- **Fonts**: Change fonts in `src/index.css` (currently using Poppins)
- **Layout**: Modify grid layouts and spacing in individual CSS files

### Images
- Replace placeholder images with your own photos
- Update project screenshots in the Projects section
- Add your profile picture in the Home section

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation component
│   ├── Navbar.css
│   ├── Footer.js       # Footer component
│   └── Footer.css
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── Home.css
│   ├── Skills.js       # Skills page
│   ├── Skills.css
│   ├── Education.js    # Education page
│   ├── Education.css
│   ├── Experience.js   # Experience page
│   ├── Experience.css
│   ├── Projects.js     # Projects page
│   ├── Projects.css
│   ├── Contact.js      # Contact page
│   └── Contact.css
├── App.js              # Main app component
├── App.css             # App styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features Explained

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting

### Animations
- Page transitions using Framer Motion
- Scroll-triggered animations
- Hover effects on cards and buttons

### Contact Form
- Form validation
- Loading states
- Success/error messages
- Responsive design

### Project Filtering
- Filter projects by category
- Smooth transitions between filters
- Project cards with hover effects

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy Coding! 🎉** 