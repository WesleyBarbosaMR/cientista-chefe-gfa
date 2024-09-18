console.log("3");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  spaceBetween: 25,
  slidesPerView: 3,

  breakpoints: {
    0 : {
      slidesPerView: 1
    },
    768 : {
      slidesPerView: 2
    },
    1024 : {
      slidesPerView: 3
    }
  }
  
});
