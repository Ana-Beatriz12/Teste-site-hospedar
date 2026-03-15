function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "../../PORTFOLIO-PRETO-RESPONSIVO/IMAGES/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        icon.src = "../../PORTFOLIO-PRETO-RESPONSIVO/IMAGES/close_white_36dp.svg";
    }
}

// FECHAR MENU AO CLICAR EM UM LINK
const navLinks = document.querySelectorAll('.mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        let menuMobile = document.querySelector('.mobile-menu');
        let icon = document.querySelector('.icon');
        menuMobile.classList.remove('open');
        icon.src = "../../PORTFOLIO-PRETO-RESPONSIVO/IMAGES/menu_white_36dp.svg";
    });
});

/*menu_white_36dp.svg*/
/*close_white_36dp.svg*/