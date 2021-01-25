const logo = document.getElementsByClassName('mainLogo')[0]
const header = document.getElementsByClassName('header')[0]
const headerWrapper = document.getElementsByClassName('headerWrapper')[0]
const smMenuWrapper = document.getElementsByClassName('smMenuWrapper')[0]
const menuIconContainer = document.getElementsByClassName(
  'menuIconContainer'
)[0]
const burgerIcon = document.getElementsByClassName('burgerIcon')[0]
const closeIcon = document.getElementsByClassName('closeIcon')[0]

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    logo.classList.add('--scroll')
    header.classList.add('--scroll')
    headerWrapper.classList.add('--scroll')
  } else {
    logo.classList.remove('--scroll')
    header.classList.remove('--scroll')
    headerWrapper.classList.remove('--scroll')
  }
}

let isOpen = false

const toggleMenu = function () {
  isOpen = !isOpen
}

const setToogleMenuClass = function () {
  if (isOpen) {
    smMenuWrapper.classList.add('--isOpen')
  } else {
    smMenuWrapper.classList.remove('--isOpen')
  }
}

menuIconContainer.onclick = function () {
  toggleMenu()
  setToogleMenuClass()
}
