# Copilot Instructions for Flip The Coin Project

## Project Overview
- This is a static, responsive web project for the "Flip The Coin" challenge from devchallenges.io.
- The project consists of a single-page web app with HTML, CSS, and static assets. There is no build system or JavaScript logic present by default.
- The main goal is to visually match the provided designs for desktop, tablet, and mobile, found in the `/design` folder.

## Key Files and Structure
- `index.html`: Main HTML file. Structure your content here.
- `styles.css`: All styling is handled here. Use CSS Flexbox and media queries for responsiveness.
- `/design/`: Contains JPG design references for different breakpoints.
- `/resources/`: Contains SVG and image assets (e.g., coin faces, favicon, shadows).
- `README.md` and `README_template.md`: Project documentation. Update `README.md` to reflect your implementation.

## Development Patterns
- Use semantic HTML elements for structure (e.g., `<main>`, `<section>`, `<button>`).
- Follow the color palette and spacing as closely as possible to the design images.
- Use Flexbox for layout and alignment. See `body` and `h1` rules in `styles.css` for examples.
- Add media queries in `styles.css` to handle responsiveness for mobile, tablet, and desktop.
- Reference assets from `/resources` using relative paths in HTML and CSS.

## Workflow
- No build or test scripts are present; open `index.html` directly in your browser to preview changes.
- Optimize and resize assets in `/resources` as needed for performance.
- When finished, deploy to a static host (e.g., GitHub Pages, Vercel, Netlify).
- Update `README.md` using `README_template.md` as a guide.

## Conventions
- Keep all styles in `styles.css` (no inline styles or external frameworks unless added intentionally).
- Match the design as closely as possible, but use best judgment for font sizes, spacing, and breakpoints.
- Use only the assets provided in `/resources` unless otherwise specified.

## Example Patterns
- Example: To add a responsive section, use a `<section>` in `index.html` and style with a media query in `styles.css`.
- Example: To use an SVG asset, reference it as `<img src="resources/heads.svg" alt="Heads">`.

## Additional Notes
- There are no external dependencies or package managers by default.
- If you add JavaScript or other files, document their purpose in `README.md`.
- For any project-specific questions, refer to the challenge description or `/design` images.

---

If any conventions or workflows are unclear, please request clarification or examples from the project maintainer.
