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

## [2022/11/20]

### Added
- In `docs > validation` I successfully validated all HTML and CSS files with no warnings or errors. I've added 8 screenshot image files to the folder showing the results.

### Changed
- In `README.md` I added my Week Four Milestone 4 Standup.
- In `script.js` I added comments to indicate different sections of the file using the Better Comments Visual Studio Code extension. I added JavaScript code that dynamically populates the blog article cards with the corresponding title, meta and excerpt text content. I added separate JavaScript code that dynamically highlights the current page that the user is on in the header and footer navigation menus by applying a BEM CSS modifier class.
- In `style.css` I added two BEM CSS modifier classes that are used to highlight the current page link in the header and footer navigation menus. The modifier class is added using JavaScript. I also removed an unnecessary CSS `background-color` rule in the `.search__input:focus-visible` rule.
- In `blog.html` I removed the hardcoded blog article card text content and replaced it with placeholder text since the blog article text content is now updated using a custom JavaScript Object in the `script.js` file.

## [2022/11/20 @ 4:25PM ET]

### Changed
- In `style.css` I changed the website color scheme for better contrast between text and background colors. Orange buttons and elements and the footer and search container background colors are now a darker shade to increase contrast with white text for better user accessibility. I also added some `hover`, `focus`, and `focus-visible` styles to the `search__input` field to add visual feedback when the search field is focused on the homepage.
- In `about.html`, `blog.html`, `destinations.html`, `index.html`, `template.html` and `tours.html`, I added `aria-hidden` attributes to all custom `<iconify-icon>` elements in the main and footer sections of each page to improve accessibility. Since the icons are loaded without labels using JS, hiding them is the best option to improve accessibility.
- In `index.html` I added a hidden label for the `search__input` field to improve accessibility for screen reader users while also preserving the original design of the field for non-screen reader users.

## [2022/11/19 @ 11:12PM ET]

### Added
- In `Milestone4-Changelog.md` I added my first changelog entry for week four.

### Changed
- In `Milestone3-Changelog.md` I updated the last entry for the week to include the time of the final commit pushed to the repo.
- In `script.js` I added some JavaScript code that will get the current year from the user's browser and insert it into the copyright statement in the footer of the website.
- In `style.css` I added a single BEM CSS class to format and style the new copyright statement that was added to the footer.
- In `style-responsive.css` I removed unnecessary repetition of `grid-template-columns` rules that were declared unnecessarily after previous `min-width` media queries. I increased the base card component image height for small to mid-size screen sizes for the tour, profile and destination cards while retaining the original height for large screen sizes. I added a BEM CSS `--span-2-cols` modifier class to the tour, profile and destination cards, to make the last card component in a group of three items, flow across both columns in a two column responsive layout. Lastly, I tweaked a few media queries and additional rules to make minor improvements to responsive layouts and design.
- In `about.html`, `blog.html`, `destinations.html`, `index.html`, `template.html` and `tours.html`, I added a copyright statement after the social icons in the footer inside of a `<p>` tag containing an additional `<span>` tag that is updated to display the current year using JavaScript.
- In `about.html`, `destinations.html`, `index.html` and `tours.html`, I added a BEM CSS `--span-2-cols` modifier class to the last card component in the `#team`, `#popular`, `#tours`, and `#trending` sections respectively that makes the last card component in a group of three items, flow across both columns in a two column responsive layout.