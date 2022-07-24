$("document").ready(function () {
  //menuDropDown
  $(".nav_menu_dropDown").click(function (event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).parent('li').siblings().find('a').removeClass('active');
    $(this).siblings(".dropDown_open").slideToggle();
    $(this).parent('li').siblings('li').find('ul').slideUp();
  });
  //m-menu show
  $('.nav i').click(function(){
    $('.m-menu').toggleClass('active');
  });
  //m-menu dropDown open
  $('.m-dropDown').click(function(){
    $(this).toggleClass('active');
    $(this).parent('li').siblings().find('a').removeClass('active');
    $(this).siblings('.m-dropDown_open').slideToggle();
    $(this).parent('li').siblings('li').find('ul').slideUp();
  });
  //scrollTop
  $(".top a").click(function (event) {
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
      delay: 5000,
    },
    direction: "horizontal",

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
