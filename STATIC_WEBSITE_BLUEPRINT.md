# 🌐 Static Website Deployment Blueprint

## 📋 Project Overview

### Purpose
A lightweight, deployable static website with modern web development practices, ready for GitHub and Dokploy VPS hosting.

## 🔧 Technology Stack
- HTML5
- CSS3 (with modern layout techniques)
- Vanilla JavaScript
- GitHub Pages
- Dokploy VPS Deployment

## 🏗️ Project Structure
```
static-website/
│
├── src/
│   ├── index.html       # Main HTML file
│   ├── styles/
│   │   └── main.css     # Primary stylesheet
│   └── scripts/
│       └── app.js       # Main JavaScript file
│
├── assets/
│   ├── images/          # Website images
│   └── fonts/           # Custom fonts
│
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
│
├── nginx.conf           # Nginx configuration
├── Dockerfile           # Docker containerization
└── README.md            # Project documentation
```

## 🚀 Deployment Configuration

### GitHub Actions Workflow
```yaml
name: Deploy Static Website

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./src
```

### Dockerfile for Dokploy
```dockerfile
# Use lightweight Nginx image
FROM nginx:alpine

# Copy website files
COPY src/ /usr/share/nginx/html/

# Custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration
```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name dahalan.org www.dahalan.org;

        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }

        # Enable gzip compression
        gzip on;
        gzip_types text/plain text/css application/javascript;
    }
}
```

## 📝 Sample HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="styles/main.css">
    <link rel="icon" type="image/png" href="assets/favicon.png">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h1>Your Name</h1>
            <p>Web Developer | Designer | Creative Thinker</p>
        </section>

        <section id="about">
            <h2>About Me</h2>
            <p>Brief introduction about yourself...</p>
        </section>

        <section id="projects">
            <h2>My Projects</h2>
            <!-- Project showcase -->
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <form id="contactForm">
                <input type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>

    <script src="scripts/app.js"></script>
</body>
</html>
```

## 💅 CSS Styling (main.css)
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #f4f4f4;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: var(--background-color);
}

/* Responsive design */
@media (max-width: 768px) {
    /* Mobile-specific styles */
}
```

## 🧩 JavaScript Interactions (app.js)
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Basic form validation
        alert('Message sent! (Note: This is a placeholder)');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
```

## 🚀 Deployment Steps
1. Push code to GitHub
2. GitHub Actions will deploy to GitHub Pages
3. Dokploy will pull and deploy from GitHub repository

## 📋 Getting Started
```bash
# Clone the repository
git clone https://github.com/yourusername/static-website.git

# Open index.html in a browser
# No build step required!
```

## 🔒 Security Considerations
- Use HTTPS
- Implement Content Security Policy
- Sanitize form inputs
- Use GitHub Secrets for sensitive information

## 📊 Performance Optimization
- Minimize CSS and JS
- Use lazy loading for images
- Leverage browser caching

## 🤝 Contribution Guidelines
- Follow semantic commit messages
- Run lighthouse audit before PRs
- Maintain clean, readable code

---

### 📌 Deployment Checklist
- [ ] Configure GitHub repository
- [ ] Set up GitHub Actions
- [ ] Configure Dokploy deployment
- [ ] Test on multiple devices
- [ ] Verify SSL certificate

**Version**: 1.0.0
**Last Updated**: 2024-12-18
