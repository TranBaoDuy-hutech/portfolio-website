# Tran Bao Duy — Developer Portfolio

A personal, bilingual portfolio website introducing **Tran Bao Duy**, an Information Technology Engineer specializing in Software Engineering and Full-Stack Development.

The website presents professional experience, technical skills, selected projects, certificates, and contact information in a **Premium Dark Tech** interface.

## Overview

- Responsive portfolio for desktop, tablet, and mobile screens.
- English and Vietnamese language switch.
- Hero section with animated technology orbit around the profile avatar.
- About, Experience, Skills, Projects, Certificates, and Contact sections.
- Downloadable CV in PDF format.
- Scroll progress indicator and subtle hover / motion effects.
- Copy-email shortcut when the browser supports the Clipboard API.
- Reduced-motion support for visitors who prefer less animation.

## Technology Stack

| Area | Technologies |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3 |
| Interactivity | Vanilla JavaScript |
| UI framework | Bootstrap 5.3.2 |
| Scroll animations | AOS 2.3.4 |
| Typography | Google Fonts — Inter |

The project is a static website. It does not require a backend, database, package manager, or build step to run.

## Project Structure

```text
portfolio/
├── index.html              # Main portfolio page and page content
├── styles.css              # Main styles and Premium Dark Tech theme
├── language.css            # Language-switch related styles
├── language.js             # English / Vietnamese language handling
├── premium.js              # Scroll progress and copy-email interactions
├── TRANBAODUY_DEV_CV.pdf   # Downloadable CV
├── images/
│   ├── BDUY.jpg            # Profile image used by the page
│   ├── BDUY1.png           # Additional portfolio image asset
│   └── BDUY2.jpg           # Additional portfolio image asset
└── README.md
```

## Run Locally

No installation is required.

### Option 1 — Visual Studio Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2 — Python HTTP server

If Python is installed, open a terminal in the project directory and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser. Running a local HTTP server is recommended for a more consistent browser environment.

## Customization

### Update portfolio content

Edit the relevant sections in `index.html`:

- Hero introduction and professional title.
- About Me.
- Work Experience.
- Technical Skills.
- Projects.
- Certificates.
- Contact details.

Keep the existing section IDs and important class names when changing the markup because the styles and scripts use these selectors.

### Update language content

Edit `language.js` to update Vietnamese translations and language-switch behavior.

The selected language is stored in the browser's `localStorage` under `portfolio-language`.

### Update appearance

Edit `styles.css` for the main layout, responsive behavior, and Premium Dark Tech visual system. Edit `language.css` for language-toggle styling.

### Update profile image and CV

- Replace `images/BDUY.jpg` to change the hero avatar. Keep the filename or update the image path in `index.html`.
- Replace `TRANBAODUY_DEV_CV.pdf` to update the downloadable CV. Keep the filename or update the corresponding link in `index.html`.

### Additional interactions

`premium.js` contains the reading-progress indicator and the optional copy-email button. The copy-email shortcut is added only when a mail link exists and the browser exposes the Clipboard API in a secure context.

## External Dependencies

The page loads these resources from CDNs:

- [Bootstrap 5.3.2](https://getbootstrap.com/)
- [AOS 2.3.4](https://michalsnik.github.io/aos/)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

An internet connection is required for these external resources to load. The local HTML, CSS, JavaScript, images, and CV remain in this repository.

## Deployment

This is a static website and can be hosted on any static web hosting service.

For GitHub Pages:

1. Push the project to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Select the deployment branch and the root folder.
4. Save the settings and wait for GitHub Pages to publish the site.

Make sure `index.html`, the CSS and JavaScript files, the `images/` directory, and the CV PDF are included in the published source.

## Notes

- Preserve the existing content and links when updating the visual design.
- Keep asset paths relative to the project root so the site works when deployed under a repository subpath.
- Test the English and Vietnamese modes and check the layout at mobile and desktop widths after making changes.

---

Designed and developed by **Tran Bao Duy**.
