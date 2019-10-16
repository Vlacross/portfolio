const navButton = document.querySelector('.burger-houser');
const menuLink = document.querySelectorAll('.navLink');
const menu = document.querySelector('.navMenu');
const navBar = document.querySelector('.navDiv');
const menuLabel = document.querySelector('.menu-label');
const patties = document.querySelector('.burger-patty');
const m1 = document.querySelector('.patty-one');
const m2 = document.querySelector('.patty-two');

let navInputs = document.querySelector('.navDiv').querySelectorAll('a[href]:not([disabled]), \
    button:not([disabled]), \
    textarea:not([disabled]), \
    input[type="text"]:not([disabled]), \
    input[type="email"]:not([disabled]), \
    input[type="textarea"]:not([disabled]), \
    input[type="reset"]:not([disabled]), \
    input[type="submit"]:not([disabled]), \
    input[type="button"]:not([disabled])')

let prevPos = 0;

let mobileView = () => {
  /*Downside with this is that is closes menu view when resize occurs while menu is open */
    if (window.innerWidth > 600 && menu.getAttribute('open') !== 'true') {
      menuOpen()
    } else if (window.innerWidth < 600 && menu.getAttribute('open') === 'true') {
      menuClose()
    }
};

let navKeys = new navKeyHandle;

menuOpen = () => {
  document.getElementById('navStart').focus()
  navKeys.tabOn(navInputs)
  navKeys.escOn(menuClose)
  menuLink.forEach(link => link.addEventListener('click', function links(e, link) {
    menuClose()
    /*Works fine, though builds up listeners when menu is opened and closed(doesn't seem to 
    be taxing as it doesn't render or reload page) */
    menuLink.forEach(link => link.removeEventListener('click', links))
  }, {once: true}));
  document.body.setAttribute('style', 'overflow-y: hidden;');
  menu.setAttribute('style', 'display: flex;')
  menu.setAttribute('open', 'true')
  navButton.classList.add('openNav');
  m1.classList.add('patty-x-one');
  m2.classList.add('patty-x-two');
  navButton.setAttribute('justify-content', 'center');
  menuLabel.setAttribute('style', 'display: none;');
};

menuClose = () => {document.body.setAttribute('style', 'overflow-y: auto;');
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





function handleScroll() {

  if (window.innerWidth < 600) {
    return;
  } else if (window.innerWidth > 600) {
    if (window.scrollY == prevPos) {
    return;
  } else if(window.scrollY > prevPos) {
    navBar.setAttribute('style', 'display: none;')
  } else {
    navBar.setAttribute('style', 'display: flex;')
  }
  prevPos = window.scrollY;
  }

}


function navKeyHandle() {
  let tabsListeners;
  let escListeners;

  this.tabTrap = (e, ins) => {
    if (e.code === "Tab") {
      if(e.shiftKey) {
        if (document.activeElement === ins[0]) {
          ins[ins.length-1].focus()
          e.preventDefault();
        }
      }
       else {
        if (document.activeElement === ins[ins.length-1]) {
          ins[0].focus();
          e.preventDefault();
        } 
      }
    }
  }

  this.tabOn = (navInputs) => {
    if(!tabsListeners) {
      tabsListeners = true;
      navBar.addEventListener('keydown', (e) => this.tabTrap(e, navInputs));
    }
  }

  this.esc = (e, cb) => {
    if(e.code === 'Escape') {
      return cb()
    }
  }

  this.escOn = (menuClose) => {
    if(!escListeners) {
      escListeners = true;
      navBar.addEventListener('keydown', (e) => this.esc(e, menuClose))
    }
    
  }
}


function watchMenu() {
  navButton.addEventListener('click', (e) => toggleMenu())
  window.addEventListener('resize', function() {
    mobileView()
  })
  window.setInterval(handleScroll, 250)
}


















