Tuleshwar Sahu — Resume / Portfolio Website
A static, responsive portfolio using the existing four-file structure. It does not need npm, pnpm, Node.js, a build command, or a separate JavaScript installation.
Files in the repository root
index.html — page content and sections
style.css — dark + gold theme, responsive layout, and animation styles
script.js — mobile navigation, reveal-on-scroll behavior, and automatic footer year
README.md — setup and publishing instructions
Important
Keep all four files together in the repository root. The filenames must match exactly, including lowercase spelling. index.html loads style.css and script.js using relative paths, so do not move them into a different folder unless you also update those paths.
Publish with GitHub Pages
Open the repository and replace the contents of index.html, style.css, and script.js with the matching files from this package.
Keep or update this README.md as needed.
Commit the changes to the branch used by GitHub Pages (usually main).
Open Settings → Pages and confirm the source is the correct branch and /(root) folder.
Wait for the Pages deployment to finish, then reload the published website. If the old version remains, try a hard refresh or open it in a private tab.
Test locally
Open index.html in a browser. No build tools or package installation are required. The mobile menu and scroll reveals are handled by plain JavaScript.
Customization
Edit page text and sections in index.html.
Edit colors, spacing, layout, and responsive behavior in style.css.
Edit navigation and reveal behavior in script.js.
The page does not display a phone number or date of birth. The technology badges are CSS-rendered marks, so the core page does not depend on third-party logo image downloads.
