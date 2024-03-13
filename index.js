let pastScroll = 0;

document.addEventListener(
  "scroll",
  throttle(() => {
    scrollFunction();
  }, 500)
);

function scrollFunction() {
  let scroll = getCurrentScroll();
  console.log(pastScroll - scroll);
  pastScroll = scroll;
}

function getCurrentScroll() {
  return window.scrollY || document.documentElement.scrollTop;
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
