/**TASK 1 ***/
let anchorElement = document.createElement("a")
anchorElement.innerText = "Hire me"
let liElement = document.createElement("li")
liElement.appendChild(anchorElement)
let addHireMe = document.getElementsByTagName("ul")[0]
addHireMe.appendChild(liElement)

const icons = document.getElementsByTagName("ul")[1]; 
icons.style.display = "none";

/***TASK 2 ***/
const searchInput = document.querySelector(".search-field > input");
searchInput.placeholder = "Search My Project";


/***TASK 3 ***/
const span = Array.from(document.querySelectorAll(".hero-left-section > p > span"));
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt. Ltd."

// Adding social media icons
socialMediaIcons.style.display = "flex";

/*** TASK 4 ***/

//Change profile image
const profileImage = document.querySelector(".hero-right-section > img")
profileImage.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

/***TASK 5 ***/
const btnContainer = document.querySelector('.hero-right-section-btns');
const addSupportBtn = document.createElement("button");
addSupportBtn.innerText = "Support Me";
btnContainer.appendChild(addSupportBtn);