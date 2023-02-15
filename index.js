"use strict";

console.log("Hi there");

const slider = new Swiper(".slider", {
  autoplay: {
    delay: 2000,
  },
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
