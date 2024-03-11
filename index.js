const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

function getCurrentScroll() {
  return window.scrollY || document.documentElement.scrollTop;
}

window.onscroll = function () {
  debounce(scrollFunction(), 100);
};

function scrollFunction() {
  const nav = document.querySelector("nav");
  let scroll = getCurrentScroll();
  if (scroll > 50) {
    // console.log("min");
    nav.classList.add("small-nav");
  } else {
    // console.log("max");
    nav.classList.remove("small-nav");
  }
}

// $(function () {
//   //the shrinkHeader variable is where you tell the scroll effect to start.
//   var shrinkHeader = 70;
//   $(window).scroll(function () {
//     var scroll = getCurrentScroll();
//     if (scroll >= shrinkHeader) {
//       $(".header-box").addClass("smaller");
//     } else {
//       $(".header-box").removeClass("smaller");
//     }
//   });
//   function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//   }
// });
