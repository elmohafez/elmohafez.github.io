/* Scroll Spy */
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});
/* Scroll Spy END */

// HEADER

/* add background to navbar with scrool */
var x = window.matchMedia("(max-width: 992px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function myFunction(x) {
  /* Check the size of webpage*/
  if (x.matches) {
    // If media query matches
  } else {
    /* Scroll code */
    function fade() {
      var header = document.querySelector("#header");
      var headerBtn = document.querySelector("#headerBtn");
      var btnColor = document.querySelector("#btnColor");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.background = "#433725";
        header.style.borderBottom = "2px solid #d1b271";
        headerBtn.style.background = "#ffffff";
        btnColor.style.color = "#d2b06b";
      } else {
        header.style.background = "transparent";
        header.style.borderBottom = "none";
        headerBtn.style.background = "transparent";
        btnColor.style.color = "#ffffff";
      }
    }
    window.onscroll = function () {
      fade();
    };
    function scrollUp() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
}
/* add background to navbar with scrool END */

// page init
jQuery(function () {
  menu.init();
});

// menu for small devices
var body = $("body"),
  menu = {
    config: {
      trigger: jQuery(".nav-opener"),
      open: false,
    },
    init: function () {
      this.config.trigger.click(this.toggle.bind(this));
    },
    toggle: function () {
      if (this.config.open) {
        $("#header").removeClass("nav-active");
      } else {
        $("#header").addClass("nav-active");
      }
      this.config.open = !this.config.open;
    },
  };
// HEADER END

// MAINSECTION
/* Model */
$(document).ready(function () {
  var url = $("#modelVideo").attr("src");
  var bol1 = false;
  $(".btn-close").click(function () {
    $("#modelVideo").attr("src", "");
    bol1 = true;
  });
  $(".plus").click(function () {
    if (bol1 == true) {
      $("#modelVideo").attr("src", url);
      bol1 = false;
    } else {
    }
  });
});
// MAINSECTION END

// COMMENT SECTION
/* Swiper Section */
var Commentswiper = new Swiper(".comment-swiper-container", {
  // autoHeight: true,
  effect: "coverflow",
  slidesPerView: "auto",
  centeredSlides: true,
  loop: "true",
  spaceBetween: 30,
  pagination: {
    el: ".comment-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".comment-swiper-button-next",
    prevEl: ".comment-swiper-button-prev",
  },
});
/* Swiper ///////////////////*/
// COMMENT SECTION END

// Q SECTION
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 5,
    slideShadows: true,
  },
  /*  navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});
// Q SECTION END

// Ipad Section
// Ipad
var swiper = new Swiper(".ipad-swiper-container", {
  effect: "coverflow",
  direction: "horizontal",
  grabCursor: true,
  loop: true,
  autoplay: true,
  speed: 1000,
  pagination: {
    el: ".ipad-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".ipad-swiper-button-next",
    prevEl: ".ipad-swiper-button-prev",
  },
});
// Ipad Section END
