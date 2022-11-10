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

## [2022/11/09]

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