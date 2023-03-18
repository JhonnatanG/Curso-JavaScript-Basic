const FlechamenuDesktop = document.querySelector('.flecha-abajo');
const desktopMenu = document.querySelector('.desktop-menu');

FlechamenuDesktop.addEventListener('click', showDesktopMenu);


function showDesktopMenu () {
    //con este codigo se quita o pone la clase inactive del desktop-menu, que esta guardado en la variable desktopMenu
    desktopMenu.classList.toggle('inactive');
}