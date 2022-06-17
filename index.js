function removeClassName(className,...elements) {
    for (let element of elements) {
      element.classList.remove(className);
    }
  }

function toggleClassName(className,...elements) {
    for (let element of elements) {
      element.classList.toggle(className);
    }
  }

function toggleMenu() {
    menuToggle.onmousedown = function() {
      return false;
    };

    toggleClassName('active', menuToggle, menuContainer);
    toggleClassName('lock', body);
  }


  function closeMenu(event) {
    if (event.target.classList.contains('nav_link')) {
      removeClassName('active', menuToggle, menuContainer);
      removeClassName('lock', body);
    }
  }


// burger-menu
const menuContainer = document.querySelector('.nav_wrap');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');
const body = document.body;
menuToggle.addEventListener('click', toggleMenu);
menu.addEventListener('click', closeMenu);