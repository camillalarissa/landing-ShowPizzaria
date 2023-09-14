let show = true


const menuContainer = document.querySelector('.content')

const menuMedia = menuContainer.querySelector('.menu-media')

menuMedia.addEventListener('click', () => {
    menuContainer.classList.toggle('on', show)
    show = !show

})