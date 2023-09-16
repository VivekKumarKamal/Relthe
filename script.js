let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if (menu.classList.contains("ri-menu-line")) {
        menu.classList.replace("ri-menu-line", "ri-close-line");
    } else {
        menu.classList.replace("ri-close-line", "ri-menu-line");
    }
}