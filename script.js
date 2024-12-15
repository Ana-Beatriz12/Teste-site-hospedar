// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('.icon').src = "menu_white_36dp.svg";
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('.icon').src = "close_white_36dp.svg";
//     }
// }



// Abrir/Fechar menu mobile
function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    // Alterna entre abrir e fechar o menu
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "menu_white_36dp.svg"; // Ícone do menu
    } else {
        menuMobile.classList.add('open');
        icon.src = "close_white_36dp.svg"; // Ícone de fechar
    }
}

// Fechar o menu mobile ao clicar em um link
function closeMenuOnClick() {
    const menuMobile = document.querySelector('.mobile-menu');
    const icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // Fecha o menu
        icon.src = "menu_white_36dp.svg"; // Ícone do menu
    }
}

// Adicionar comportamento de rolagem suave e fechamento ao clicar nos links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Previne comportamento padrão

        // Rolagem suave para a seção correspondente
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Fecha o menu após clicar
        closeMenuOnClick();
    });
});



/*menu_white_36dp.svg*/
/*close_white_36dp.svg*/