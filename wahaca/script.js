window.onscroll = function () {
  var logo = document.getElementsByClassName('mainLogo')[0]
  var header = document.getElementsByClassName('header')[0]
  var headerWrapper = document.getElementsByClassName('headerWrapper')[0]

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
