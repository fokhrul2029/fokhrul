// Animation On Scroll------------
AOS.init();
// Preloader---------
const loader = document.querySelector(".loader");
window.onload = () => {
  loader.classList.add("disppear");
};
// Navigation Js-----------
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#logo").style.fontSize = "20px ";
  } else {
    document.querySelector("#logo").style.fontSize = "35px ";
  }
};
var triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", function (event) {
    tabTrigger.show(event);
  });
});
// Typed.js / js for Typing on Text
var typed = new Typed(".typing", {
  strings: [
    "Programming.",
    "Frontend Development.",
    "Modern JavaScript.",
    "React-Js.",
    "Clear Code Design.",
  ],
  typeSpeed: 60,
  loop: true,
  backSpeed: 60,
});
// Owl Carousel Js

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    nav: true,
    navText: `◀▶`,
    dots: false,
    dotsEach: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
