const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

// displaying mobile menu
const mobileMenu = () => {
    console.log('got clicked!')
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
    menu.addEventListener('click', mobileMenu);


// slideshow for events
let slideIndex = 1;
showSlides(slideIndex);

// next/prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}