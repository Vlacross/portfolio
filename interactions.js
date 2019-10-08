const navButton = document.querySelector('.burger-houser');
const menuLink = document.querySelectorAll('.navLink');
const menu = document.querySelector('.navMenu');
const menuLabel = document.querySelector('.menu-label');
const patties = document.querySelector('.burger-patty');
const m1 = document.querySelector('.patty-one');
const m2 = document.querySelector('.patty-two');


let mobileView = () => {
  /*Downside with this is that is closes menu view when resize occurs while menu is open */
    if (window.innerWidth > 600 && menu.getAttribute('open') !== 'true') {
      menuOpen()
    } else if (window.innerWidth < 600 && menu.getAttribute('open') === 'true') {
      menuClose()
    }
};

menuOpen = () => {
  menuLink.forEach(link => link.addEventListener('click', function links(e, link) {
    menuClose()
    /*Works fine, though builds up listeners when menu is opened and closed(doesn't seem to 
    be taxing as it doesn't render or reload page) */
    menuLink.forEach(link => link.removeEventListener('click', links))
  }, {once: true}))
  menu.setAttribute('style', 'display: flex;')
  menu.setAttribute('open', 'true')
  navButton.classList.add('openNav');
  m1.classList.add('patty-x-one');
  m2.classList.add('patty-x-two');
  navButton.setAttribute('justify-content', 'center');
  menuLabel.setAttribute('style', 'display: none;');
};

menuClose = () => {
  menu.setAttribute('style', 'display: none;')
  menu.setAttribute('open', 'false')
  navButton.classList.remove('openNav');
  m1.classList.remove('patty-x-one');
  m2.classList.remove('patty-x-two');
  navButton.setAttribute('justify-content', 'space-around');
  menuLabel.setAttribute('style', 'display: block;');
};

toggleMenu = () => {
  menu.getAttribute('open') === 'true' ? menuClose() : menuOpen()
};

function watchMenu() {
  navButton.addEventListener('click', (e) => toggleMenu())
  window.addEventListener('resize', function() {
    mobileView()
  })
}


















