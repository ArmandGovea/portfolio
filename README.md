# Portfolio Website

A modern, interactive portfolio showcasing web development skills with a terminal-style hero section, smooth animations, and interactive Easter eggs.

**Live Demo:** https://armandgovea.vercel.app

---

## Features

- Terminal-Style Hero with interactive typing animation
- Dark theme with gold and cyan modern aesthetic
- Smooth animations and scroll transitions
- Interactive navigation with active tab highlighting
- Easter eggs (Konami code activation, Matrix rain effect)
- Project showcase with links to repositories
- Contact section with email and social links
- Fully responsive mobile-first design
- Zero dependencies (vanilla HTML, CSS, JavaScript)

---

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox, animations)
- Vanilla JavaScript (no frameworks)
- Vercel (hosting)
- Git & GitHub (version control)

---

## Project Structure

```
portfolio/
└── index.html      # Complete portfolio (HTML, CSS, JS in one file)
```

Single-file design for simplicity and fast deployment.

---

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ArmandGovea/portfolio.git
cd portfolio
```

2. Run locally:
```bash
# Option A: Python HTTP Server
python -m http.server 8000

# Option B: VS Code Live Server Extension
# Right-click index.html > Open with Live Server

# Open browser to http://localhost:8000
```

---

## Interactive Features

### Terminal Typing Effect

Character-by-character animation that simulates typing your introduction on page load. Creates an engaging first impression.

### Smooth Navigation

Active tab highlighting and smooth scroll to sections. Navigation bar includes links to projects and contact information.

### Easter Eggs

- **Konami Code:** Press up up down down left right left right B A
- **Matrix Rain:** Cascading green characters effect triggered by the Konami code
- Additional surprises hidden throughout the site

### Projects Section

Links to live GitHub repositories with descriptions of each project, technologies used, and direct links to deployed applications.

---

## Customization

### Colors and Theme

Edit the CSS variables at the top of the `<style>` tag in index.html:

```css
:root {
  --bg: #0B0E14;              /* Main background */
  --surface: #131826;         /* Card/section background */
  --accent-gold: #E8B94D;     /* Primary accent color */
  --accent-cyan: #5FD0D6;     /* Secondary accent color */
  --text: #E9ECF1;            /* Main text color */
  --text-muted: #8891A3;      /* Muted text */
}
```

### Terminal Text

Locate the terminal typing effect in the JavaScript section and modify the text strings to personalize your introduction.

### Projects

Update the projects section in the HTML markup with your own projects, descriptions, and links.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Deployment

### Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Go to https://vercel.com
3. Click "New Project" > Import from GitHub
4. Select your portfolio repository
5. Click Deploy

Your portfolio is live!

---

## Technical Details

### Smooth Scrolling

Smooth scroll behavior implemented with CSS `scroll-behavior: smooth` and JavaScript click handlers for navigation.

### Responsive Design

Portfolio adapts to all screen sizes using:
- CSS Flexbox and Grid
- Mobile-first approach
- Media queries for breakpoints
- Viewport-relative units

### Performance

- Lightweight (no external frameworks)
- Optimized animations (CSS transforms)
- Single HTTP request (one file)
- Fast load times on all connections

### Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy
- Keyboard navigation support
- Reduced motion preferences respected

---

## Features Explained

### Real-Time Interactions

All interactive elements respond instantly with smooth transitions and animations. No page reloads or external API calls needed.

### Konami Code

Hidden Easter egg that activates the Matrix rain effect. Enter the classic Konami code sequence to trigger it.

### Contact Integration

Direct email link and social media links for easy connection with potential clients or collaborators.

---

## Future Enhancements

- Blog section for technical writing
- Dark/light mode toggle
- Project filtering by technology
- Contact form with backend integration
- Case studies section

---

## Support

Questions or feedback?  
Contact: armandgov27@gmail.com

---

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

Built by Armand Govea - 2025