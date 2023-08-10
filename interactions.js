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
  menu.setAttribute('style', 'display: flex;')
  menu.setAttribute('open', 'true')
  navButton.classList.add('openNav');
  m1.classList.add('patty-x-one');
  m2.classList.add('patty-x-two');
  navButton.setAttribute('justify-content', 'center');
  menuLabel.setAttribute('style', 'display: none;');
};

menuClose = () => {
  document.body.setAttribute('style', 'position: unset;');
  menu.setAttribute('style', 'display: none;')
  menu.setAttribute('open', 'false')
  navButton.classList.remove('openNav');
  m1.classList.remove('patty-x-one');
  m2.classList.remove('patty-x-two');
  navButton.setAttribute('justify-content', 'space-around');
  menuLabel.setAttribute('style', 'display: block;');
};

toggleMenu = () => {
  menu.getAttribute('open') && document.body.setAttribute('style', 'position: fixed;');
  menu.getAttribute('open') === 'true' ? menuClose() : menuOpen();
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

// handle toggle for work history
function toggleWorkHistory(button) {

  let workHistorySection = document.querySelector('.work-history');
  let bioText = document.querySelector('.bio-text-work');

  let showClass = 'wh-open';
  let showButtonClass = 'wh-open-button';

  if (button.classList.contains(showButtonClass)) {
    // hide section and remove styling from toggle button
    workHistorySection.classList.remove(showClass)
    button.classList.remove(showButtonClass)
    bioText.classList.remove('bio-text-wh-shown')
  } else {
    // show section and apply styling to toggle button
    workHistorySection.classList.add(showClass)
    button.classList.add(showButtonClass)
    bioText.classList.add('bio-text-wh-shown')
  };
}

// Allow toggle between project text

function toggleDetail(button) {
  // toggle classes

  // set value vars
  let projId = button.parentElement.parentElement.parentElement.id;
  
  
  let sectionSelectionValue = button.parentElement.parentElement.details.value;
  let negatedSelectionValue = sectionSelectionValue === 'concept' ? 'creation' : 'concept';
 
  
  // assign class to vars
  let sectionSelectionClass = `.${projId}-${sectionSelectionValue}`;
  let negatedSelectionClass = `.${projId}-${negatedSelectionValue}`;
  
  // define show/hide identifiers
  let sectionHideClass = "detail-section-hide";
  let sectionShowClass = "detail-section-show";
  
  // query html sections
  let sectionSelection = document.querySelector(sectionSelectionClass);
  let negatedSelection = document.querySelector(negatedSelectionClass);
  
  
  // grab button text value for checking current view state
  let buttonText = document.querySelectorAll(`.${projId}-button.detail-selected`)[0].children[1].innerHTML.toLowerCase(); 
  
  // handle bio toggles differently since inner text doesn't match that of project sections
  if(projId == 'p0') {
    buttonText = document.querySelectorAll(`.${projId}-button.detail-selected`)[0].children[0].value;

    // if work history open when toggling bio, cleanup section
    if (document.querySelector('.work-history').classList.contains('wh-open')) {
      let whButton = document.querySelector('.toggle-full')
      toggleWorkHistory(whButton)
    }
  }
  // if target section doesn't match current view state, update button styles  
  if (buttonText !== sectionSelectionValue) {
    let toggleButtons = document.querySelectorAll(`.${projId}-button`);
    toggleButtons.forEach(button => {
      if (button.classList.contains('detail-selected')) {
        button.classList.remove('detail-selected')
      } else {
        button.classList.add('detail-selected')
      }
    })
  }
  
  // if target section doesn't match current view state, toggle section classes 
  if (!sectionSelection.classList.contains(sectionShowClass)) {
    negatedSelection.classList.remove(sectionShowClass)
    negatedSelection.classList.add(sectionHideClass)
    sectionSelection.classList.add(sectionShowClass)
    sectionSelection.classList.remove(sectionHideClass)
  };

}

function handleDetailToggle(e, button) {
  // Update radio value and call for UI update
  e.preventDefault();
  if (button.parentElement.parentElement.parentElement.id == 'pwh') {
    toggleWorkHistory(button)
  } else {
    button.children[0].checked = true
    toggleDetail(button)
  }
}

function setupDetailToggle() {
  // Set up listeners on all detail toggle buttons

  document.querySelectorAll('.details-toggle-radio-wrapper').forEach(button => {
    button.classList.add(`${button.parentElement.parentElement.parentElement.id}-button`)
    button.addEventListener('click', (e) => handleDetailToggle(e, button))});
}















