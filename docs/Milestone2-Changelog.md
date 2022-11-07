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

## [2022-11-07]

### Added
- In `docs > validation` I added additional screenshots of all modified HTML & CSS files from this week. All files successfully validated without warnings or errors.

### Changed
- In `style.css` I moved the hero background-image rule to a modifier class in preparation for different hero background images that will be required to build the remaining pages. I also migrated the destination__item IDs to respective modifier classes for the same reason.
- In `style-responsive.css` I renamed the `#rome` ID to a modifier class called `.destination__item--span-2`.
- In `index.html` I updated all modified CSS class names from the stylesheets to match the class name attributes in the HTML. For HTML semantics I wrapped the content between the `<header>` and `<footer>` tags in a `<main>` tag. I also added `<article>` tags to some of the card elements such as tour cards and destination cards.
- In `template.html` I added at least 5 HTML snippets of elements I plan to use repeatedly in order to build the additional four pages of the website next week. Each snippet is wrapped in a HTML comment that uses the Better Comments VS Code extension which is why the comments contain an extra symbol in some cases.
- In `README.md` I added my Week Two Milestone 2 Standup.
- In `.vscode > settings.json` I added `readysettravel` to the Spell Check ignore list.

## [2022-11-06 @ 4:22PM ET]

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
