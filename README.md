# Personal Website

This is the source code for my personal website, hosted at [https://gx-ai-architect.github.io](https://gx-ai-architect.github.io)

## Setup

This is a static website built with HTML, CSS, and vanilla JavaScript. No build process required!

## Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace the following placeholders:
- `[Your Name]` - Your full name
- `[Your Location]` - Your city/location
- `your.email@example.com` - Your email address
- Update the meta description in the `<head>` section

### 2. Add Profile Picture

- Add your profile picture as `profile.jpg` in the root directory
- Recommended size: 400x400 pixels or larger (square)
- Supported formats: JPG, PNG

### 3. Update Content Sections

#### About Section
Edit the paragraphs in the `#about` section with your professional summary and background.

#### Recent Updates
Add your latest achievements, publications, or news in the `#news` section.

#### Experience
Update the experience items with your work history. Copy the `.experience-item` div to add more positions.

#### Projects
Update the project cards in the `#projects` section. Each project should have:
- Project name
- Description
- Links to GitHub/Demo

#### Skills
Update the skills categories with your technical expertise.

### 4. Customize Colors

Edit the CSS variables in `style.css` to change the color scheme:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --link-color: #3498db;
    /* ... more variables */
}
```

## Local Development

Simply open `index.html` in your browser to preview the site locally.

For a local server (recommended):
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`

## Deployment

This site is automatically deployed via GitHub Pages from the main branch.

Any push to the main branch will update the live site at https://gx-ai-architect.github.io

## License

Feel free to use this template for your own personal website!
