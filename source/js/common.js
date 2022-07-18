
let mainSlider = new Swiper(".index-first__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // speed: 8000,
  // autoplay: {
  //   delay: 0,
  // },
  pagination: {
        el: ".index-first__pagination",
      },
  // navigation: {
  //   nextEl: ".other-games__next",
  //   prevEl: ".other-games__prev",
  }
);





// import Select from "./select.js"

// const selectElements = document.querySelectorAll("[data-custom]")

// selectElements.forEach(selectElement => {
//   new Select(selectElement)
// })


const select = document.querySelectorAll(".select");
if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }
      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
};






// init sliders

// (function () {
//   "use strict";
//   const breakpoint = window.matchMedia("(min-width:1024px)");
//   let slider;

//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (slider !== undefined)
//       slider.destroy(true, true);

//       return;
//     } else if (breakpoint.matches === false) {
//       return enableSwiper();
//     }
//   };
//   const enableSwiper = function () {
//     slider = new Swiper(".index-logo__slider", {
//       slidesPerView: 'auto',
//       spaceBetween: 70,
//       loop: true,
//       speed: 8000,
//       autoplay: {
//         delay: 0,
//       },
//       // pagination: {
//       //   el: ".swiper-pagination",
//       // },
//       // breakpoints: {
//       //   320: {
//       //     slidesPerView: 3,
//       //     spaceBetween: 10,
//       //   },
//       //   576: {
//       //     slidesPerView: 4,
//       //     spaceBetween: 15,
//       //   },
//       //   768: {
//       //     slidesPerView: 5,
//       //     spaceBetween: 15,
//       //   },
//       // },
//     });
//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();

// закрытие по клику вне окна
// if (overlay) {
//   overlay.addEventListener('click', function(e) {
//     e.stopPropagation();
//     let curentTargetWrapper = document.querySelector('.modal-wrapper')
//     if (event.target === curentTargetWrapper) {
//       overlay.classList.remove('active');
//     }
//   })
// }
// // закрытие по Escape
// document.addEventListener('keydown', function(e) {
// 	if( e.keyCode == 27 ){
// 		overlay.classList.remove('active');
// 	}
// });
