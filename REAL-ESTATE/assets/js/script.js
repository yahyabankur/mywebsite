'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

/* Services 180 rotation */

document.querySelectorAll('.card-btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');  // Find the closest card
    const cardInner = card.querySelector('.card-inner');

    // Flip the card to the back
    card.classList.add('flipped');
  });
});

document.querySelectorAll('.card-btn-back').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.closest('.card');  // Find the closest card
    const cardInner = card.querySelector('.card-inner');

    // Flip the card back to the front
    card.classList.remove('flipped');
  });
});

/* Contact us 

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  let modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
*/

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("contactModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  let modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
