const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

// displaying mobile menu
const mobileMenu = () => {
    console.log('got clicked!')
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
    menu.addEventListener('click', mobileMenu);