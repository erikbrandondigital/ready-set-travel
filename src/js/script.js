// Declare & define a variable that gets the current year from the browser.
let date = new Date().getFullYear();

// Update the #copyrightYear span to display the current year.
document.querySelector("#copyrightYear").innerHTML = date;