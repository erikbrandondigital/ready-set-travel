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

## [2022-11-06 @ 3:45PM ET]

### Added
- In `.vscode` folder I added a workspace `settings.json` file that contains a list of ignored words for the Code Spell Checker Visual Studio Code extension.

### Changed
- In `index.html` I started refactoring the CSS class names by adding, modifying and removing existing CSS class names to match the new BEM CSS class names in `style.css` and `style-responsive.css`
- In `style.css` & `style-responsive.css` I started refactoring the CSS class names to comply with the BEM CSS class naming methodology based no my current understanding. I also removed global typography, image and box-shadow styles and took a more modular approach by applying them to individual block elements instead. This way my existing CSS will work better with my HTML snippets.

## [2022-11-05 @ 3:11PM ET]

### Changed

- In `index.html` added Iconify Icons JS file right before `</body>` & replaced icons in `<img>` tags with `<iconify-icon>` tags.
- In `style.css` added some CSS styles to turn icons in the "Why Ready Set Travel?" section into icon cards.
- In `style.css` reduced max-width of footer container to 1024px.
- In `style-responsive.css` adjusted styles to left-align social icons above 640px min width when the footer layout changes to three columns.

### Removed

- In `dev > readysettravel > img` folder removed all image files that were replaced by Iconify Icons including:
  - icon-affordable.png
  - icon-booking.png
  - icon-knowledgeable.png
  - social-facebook.png
  - social.instagram.png
  - social-twitter.png

## [2022-11-03 @ 2:10PM ET]

### Added

- In `dev > readysettravel` created `template.html` for storing HTML snippets for the prototyping phase of the project.
- In `docs` added `Milestone2-Changelog.md` for maintaining a Changelog of future changes to the project.

### Changed

- In `dev > readysettravel` modified comments formatting in `style.css` to work with Better Comments Visual Studio Code Extension.
- In `dev > readysettravel` modified comments formatting in `style-responsive.css` to work with Better Comments Visual Studio Code Extension.

---
