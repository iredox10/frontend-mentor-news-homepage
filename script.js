const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
    const hambugerMenu = document.querySelector('.hamburger')
    const closeMenu = document.querySelector('.menu-close')
    const links = document.querySelector('.links')
    hambugerMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
    links.classList.toggle('hidden')
})
