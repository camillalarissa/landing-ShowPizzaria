let show = true


const menuContainer = document.querySelector('.container-menu')

const menuMedia = menuContainer.querySelector('.menu-media')

menuMedia.addEventListener('click', () => {
    menuContainer.classList.toggle('on', show)
    show = !show

})