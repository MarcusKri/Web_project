// mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// modal
const signupButton = document.querySelector('#signup');
const closeModal = document.querySelector('#closeModal');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click', ( e ) => {
  modal.classList.add('is-active');
})

modalBg.addEventListener('click', ( e ) => {
  modal.classList.remove('is-active');
})
//BUTTON
closeModal.addEventListener('click', ( e ) => {
  modal.classList.remove('is-active');
})

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("contentSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000); //6 sek
}