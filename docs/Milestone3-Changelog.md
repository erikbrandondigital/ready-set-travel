# Changelog

All notable changes to the ReadySetTravel website project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

# Entry Format

## [YYYY-mm-dd]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

---

# Changes

## [2022/11/11]

### Changed
- In `style.css` and `style-responsive.css`, I added CSS BEM modifier classes for the hero background images on each of the four secondary HTML pages. I added an additional section in the `style.css` file containing generic styling for a new section title and subtitle component I created. Since I started using the generic section component, I refactored my homepage and removed CSS classes that were specific to the tours, about us and destinations sections. I also added hover animations for buttons in the tour cards and search form and changed the destination background image urls from local files to external Unsplash.com URLs. In `style-responsive.css` I increased the min-width of the header breakpoint.
- In `index.html` I added a Home link to the header and footer nav menus. I changed all `<img src="">` attributes to use external Unsplash.com URLs instead of local image files except for the Ready Set Travel logo. I replaced any section specific BEM classes in the tours, about us and destinations sections with the generic section component I created.
- In `template.html`, I updated the header and footer snippets to include an additional nav link to the home page. I added three additional snippets for generic section components. Lastly, I updated the hero section `<section>` element to include a BEM CSS modifier class name that updates the background-image of the hero section based on the modifier class name and setting in the `style.css` file.
- In `about.html`, `blog.html`, `destinations.html` & `tours.html` I added a header component, footer component and main section to each page. I also added a hero section component for each page and a few generic section components based on the Figma Prototype. In each page, I updated the hero images and section content to match the Figma prototype for each page.

### Removed
- In `dev > readysettravel > img` folder, I removed all of the image files that were included in the original project to save storage space except for the logo image. The images that were removed were replaced with Unsplash URLs in the HTML & CSS files and are therefore no longer required.

## [2022/11/09 @ 11:49PM ET]

### Added
- Added the following new pages to the project with their initial HTML emmet abbreviations, stylesheets and scripts:
  - `about.html`
  - `blog.html`
  - `destinations.html`
  - `tours.html`
- Added `Milestone3-Changelog.md` to the `docs` folder with this initial entry.

### Changed
- In `style-.css` and `style-responsive.css` modified some CSS class names, responsive breakpoints and added a few styles to accommodate the new structure of the header and footer `<nav>` elements which now contain `<ul>` and `<li>` elements. Also added hover animations to the header and footer `<nav>` elements. Also added some styles to override browser defaults for the `<figure>` and `<figcaption>` elements in the destination items at the bottom of the homepage.
- In `index.html` I refactored the `<nav>` menus in the header and footer to include `<ul>` and `<li>` elements to improve accessibility for users utilizing screen readers. I also added `href` links for all `<a>` tags within the header & footer. I wrapped the header and footer logo images in `<a>` tags with links to the homepage too. I altered the page title to match the new page title naming scheme I used for the other new pages. And lastly, I replaced some `div` tags in the destination items with `<figure>` and `<figcaption>` elements for better HTML semantics.
- In `template.html` I copied and replaced the existing header and footer snippets with the new versions from `index.html` that now contain `<ul>` and `<li>` elements. I also Added a few comments to be included with snippets containing complete sections.
- In `docs > Milestone2-Changelog.md` updated the last changelog entry date to include the time of the final commit for Week 2.

---