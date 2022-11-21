//! Add the current year to the copyright statement in the footer.
// Declare & define a variable that gets the current year from the browser.
let currentYear = new Date().getFullYear();

// Update the #copyrightYear span to display the current year.
document.querySelector("#copyrightYear").innerHTML = currentYear;

//! Load the Blog articles dynamically using JavaScript custom objects.
// Get the current path of the HTML document.
let currentURL = window.location.pathname;

// Extract the HTML filename from the current path as a string.
let fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);

// Check if the current page is the blog page.
if (fileName == "blog.html") {

    // Create a custom Article JavaScript object.
    class Article {
        constructor(title, meta, excerpt) {
            this.title = title;
            this.meta = meta;
            this.excerpt = excerpt;
        }
    }

    // Create an array of articles containing Article objects.
    let articlesArray = [];
    articlesArray.push(new Article("How To Get Ready for a Snorkeling Trip", "By: User | Published 11/3/2022", "So you’ve decided that you want to go on a snorkeling tour but you’re not sure if you are prepared for the adventure. Well in this article, we’ll cover everything you need to know before your next snorkeling trip. We’ll also cover some excellent techniques to increase your swimming ability and your ability to hold your breath. With the proper equipment, improved swimming and breath-holding skills, you will be well prepared for your next snorkeling adventure and get the most out of the time you spend exploring the underwater world."));
    articlesArray.push(new Article("Top 5 Places To Visit in Rome", "By: User | Published 1/15/2022", "So you want to visit Rome, Italy but you don’t know what places to visit, restaurants to dine in or venues to see. Well, we’ve got you covered with our Top 5 Places To Visit in Rome. Unlike other travel blogs, we’ll break down our list into different categories of places to visit so you can make the most of your next trip to Rome. If you’re ready to plan your next trip then you’re in the right place. Read more to see our list of the Top 5 Places to visit in Rome, Italy!"));
    articlesArray.push(new Article("Top 10 Places To Visit in Paris", "By: User | Published 12/15/2022", "So you want to visit Paris, France but you don’t know what places to visit, restaurants to dine in or venues to see. Well, we’ve got you covered with our Top 10 Places To Visit in Paris. Unlike other travel blogs, we’ll break down our list into different categories of places to visit so you can make the most of your next trip to Paris. If you’re ready to plan your next trip then you’re in the right place. Read more to see our list of the Top 10 Places to visit in Paris, France!"));

    // Get the list of Article Card component titles, metas, and excerpt elements from the blog page.
    let titles = document.querySelectorAll(".article__card-title");
    let metas = document.querySelectorAll(".article__card-meta");
    let excerpts = document.querySelectorAll(".article__card-excerpt");

    // Update the Article Card components on the blog page with Article object data.
    for (let i = 0; i < 3; i++) {
        titles[i].innerHTML = articlesArray[i].title;
        metas[i].innerHTML = articlesArray[i].meta;
        excerpts[i].innerHTML = articlesArray[i].excerpt;
    }
}

//! Highlight the current page link in the header and footer menus.
// Get a list of all header menu links.
let headerLinks = document.querySelectorAll(".header__menu-link");

// For each header link check if the href attribute matches the current URL.
headerLinks.forEach(headerLink => {
    // If the header link href matches the current url and isn't the button in the header.
    if (headerLink.href === document.URL && !headerLink.classList.contains("header__menu-link--button")) {
        // Add the CSS class that highlights the header link.
        headerLink.classList.add("header__menu-link--current");
    }
});

// Get a list of all footer menu links.
let footerLinks = document.querySelectorAll(".footer__menu-link");

// For each footer link check if the href attribute matches the current URL.
footerLinks.forEach(footerLink => {
    // If the footer link href matches the current url.
    if (footerLink.href === document.URL) {
        // Add the CSS class that highlights the footer link.
        footerLink.classList.add("footer__menu-link--current");
    }
});