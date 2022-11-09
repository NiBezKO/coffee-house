/* add header class */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  
  if (scrollPos >= 250) {
    header.classList.add ("_black");
  } else {
    header.classList.remove ("_black");
  }
}) 

/* Burger menu */

const burger = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger__content");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("_active");
  nav.classList.toggle("_active");
  burgerContent.classList.toggle("_active");
});


/* slider-swiper */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});