    // mobil meny
    const bIcon = document.querySelector("#burger");
    const navMenu = document.querySelector("#nav-links");
    // event listener
    bIcon.addEventListener('click', () => {
        navMenu.classList.toggle('is-active');
    });