/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
/*******sliders */
// var swiper = new swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex +=n);
}
function currentSlide(n){
  showSlides(slideIndex =n);
}
function showSlides(n){
  var i;
  var slides=document.getElementsByClassName("mySlides");
  var dots=document.getElementsByClassName("dot");
  if(n>slides.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slides.length;
  }
  for(i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }
  for(i=0; i<dots.length; i++){
    dots[i].className=dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display= "block";
  dots[slideIndex-1].className += "active";

}