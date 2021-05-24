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
