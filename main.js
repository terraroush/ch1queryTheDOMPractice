// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const firstSection = document.querySelector(".article__header");
firstSection.textContent = "Welcome to the Eat Cookies All Day Long and Build Muscle and Burn Fat Blog";
// console.log(firstSection)

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const allHeaders = document.querySelectorAll(".article__header");

allHeaders[0].classList = 'article__header important';
allHeaders[1].classList = 'article__header important';


// Obtain a reference the element with a class of dashed and remove it.
const removeDashed = document.querySelector(".dashed");
console.log(removeDashed)
removeDashed.classList.remove("dashed");
// Obtain a reference the element with a class of article__footer and add the class of goldenrod it.
const turnGoldenrod = document.querySelector(".article__footer");
console.log(turnGoldenrod);
turnGoldenrod.classList.add("goldenrod");

