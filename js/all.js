
$("document").ready(function () {
  //scrollTop
  $(".top a i").click(function (event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  //lightbox
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
  //swiper
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 6000,
    },
    direction:'horizontal',

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
