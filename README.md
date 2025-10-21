# 🌐 Nelty Website

The **Nelty Website** is a modern, responsive static website built using **HTML**, **CSS**, and **JavaScript**.  
It showcases Nelty's services, contact information, and company details in a clean and professional design.

---

## 🚀 Features

- ⚡ **Fast and lightweight** — optimized for performance  
- 📱 **Responsive design** — works seamlessly across devices  
- 🎨 **Modern layout and typography** — clean and visually appealing  
- 🌐 **SEO-friendly** — structured for better search engine visibility  
- 🔧 **Easy to maintain** — simple static architecture

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Styling** | Custom CSS (no frameworks) |
| **Deployment** | GitHub Pages / Netlify / AWS S3 |

---

## 📁 Project Structure

The project follows a clear and organized structure for easy maintenance and scalability:

```plaintext
nelty-website/
├── images/              # Image assets directory
│   └── IT_images/      # IT-related imagery and icons
│
├── about.html          # About page - company information and team
├── contact.html        # Contact page - forms and contact details
├── index.html          # Home page - main landing page
├── services.html       # Services page - IT consulting offerings
├── mobile-menu.js      # Mobile navigation functionality
├── styles.css          # Global stylesheet with organized sections
├── .gitignore         # Git ignored files configuration
├── LICENSE            # MIT License information
└── README.md          # Project documentation
```

### 📑 Code Structure and Conventions

#### HTML Files

- Each HTML file follows a consistent structure
- Uses semantic HTML5 elements
- Includes proper meta tags and SEO elements
- Follows accessibility best practices

#### CSS Organization (`styles.css`)

The stylesheet is organized into logical sections:

1. General Styles
2. Header & Navigation
3. Hero Section
4. Content Sections
5. Service Cards
6. Testimonials
7. Footer
8. Back to Top Button
9. Mobile Navigation
10. Responsive Design

#### JavaScript (`mobile-menu.js`)

- Handles mobile menu functionality
- Uses event delegation for performance
- Includes accessibility features
- Follows clean code principles

### 🎨 Naming Conventions

- **HTML IDs**: Camel case (e.g., `mainNav`, `menuToggle`)
- **CSS Classes**: Kebab case (e.g., `hero-content`, `service-cards`)
- **File Names**: Lowercase with hyphens (e.g., `mobile-menu.js`)
- **Image Files**: Descriptive names, lowercase with hyphens

### 🛠️ Common Customizations

The website is designed to be easily customizable. Here are some common modifications:

#### 🎨 Changing Brand Colors

```css
/* In styles.css */
:root {
    --primary-color: #6a0dad;    /* Main brand color */
    --light-color: #d8b3ff;      /* Light accent color */
    --dark-color: #4e008e;       /* Dark accent color */
    --bg-color: #f2f0f7;         /* Background color */
}
```

#### 📏 Modifying Layout

```css
/* Adjust card layout */
.service-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

/* Change section spacing */
.section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}
```

#### 🔤 Typography Changes

```css
/* Update fonts */
body {
    font-family: 'Your-Font-Name', sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

h1, h2, h3 {
    font-family: 'Your-Heading-Font', serif;
}
```

#### 📱 Responsive Breakpoints

```css
/* Tablet breakpoint */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
}

/* Mobile breakpoint */
@media (max-width: 480px) {
    html {
        font-size: 14px;
    }
}

---

## ⚙️ Setup

To run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nelty-website.git
Open the project folder

bash
Copy code
cd nelty-website
Open index.html directly in your web browser.

## 🌍 Deployment

You can deploy this website easily using:

- GitHub Pages
- Netlify
- Vercel
- AWS S3

### GitHub Pages Deployment

1. Go to your repository's Settings
2. Navigate to Pages
3. Under Source, select the main branch
4. Set the folder to /root and click Save

Your website will be live at:  
👉 https://yourusername.github.io/nelty-website

## 🧑‍💻 Contributing

Contributions are welcome! If you'd like to suggest improvements or report a bug, please open a GitHub Issue.

### Steps to Contribute

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes and open a Pull Request

## 📄 License

This project is licensed under the MIT License.  
See the LICENSE file for more details.

## 💬 Contact

**Nelty Team**  
📧 Email: [contact@nelty.com](mailto:contact@nelty.com)  
🌐 Website: [www.nelty.com](https://www.nelty.com)

## 🧾 Issue Templates

We provide a standard issue template for bug reports and feature requests. You can find it at:  
`.github/ISSUE_TEMPLATE/general_issue.md`

### General Issue Template

```yaml
name: General Issue
about: Report a bug, request a feature, or ask a question about the Nelty Website
title: "[Issue] "
labels: "triage"
assignees: ""
---

### 📝 Description

<!-- Provide a clear and concise description of the issue or feature request -->

### 🪲 Bug Report

#### Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. See error

#### Expected Behavior

<!-- Describe what you expected to happen -->

#### Actual Behavior

<!-- Describe what actually happened -->

#### Screenshots or Logs

<!-- Add screenshots, console logs, or error traces if applicable -->

### 🚀 Feature Request

#### Desired Feature

<!-- What new functionality would you like to see? -->

#### Justification

<!-- Explain why this feature is important or beneficial -->

### 💻 Environment

| Detail  | Value                          |
|---------|--------------------------------|
| Browser | e.g., Chrome 120, Safari 17    |
| OS      | e.g., macOS, Windows 11        |
| Device  | e.g., Laptop, iPhone, Android  |

### ✅ Additional Context

<!-- Add any other relevant context, screenshots, or notes -->

---
Thank you for helping improve the Nelty Website! 💪
```
