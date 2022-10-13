"use strict";

function headerJS() {
  // Remove border-bottom if next sibling is init nav
  var navWrapper = document.querySelector('.s-nav-wrapper');
  var sNAv = document.querySelector('.s-nav');

  if (navWrapper) {
    var navWrapperSib = navWrapper.nextElementSibling;

    if (navWrapperSib.classList.contains("s-init-nav-wrapper")) {
      sNAv.style = "border-bottom: none";
    }
  } // Menu Drop Down Button Mobile


  var menuButtonWrapper = document.querySelector('.s-nav-btns__menu');
  var navMenuWrapper = document.querySelector('#s-nav-menu-wrapper');
  var menuButtonOpen = document.querySelector('#s-nav-btns__menu-icon-open');
  var menuButtonclose = document.querySelector('#s-nav-btns__menu-icon-close');

  var toggleCSSclasses = function toggleCSSclasses(element) {
    for (var _len = arguments.length, classesToToggle = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      classesToToggle[_key - 1] = arguments[_key];
    }

    return classesToToggle.map(function (classToToggle) {
      return element.classList.toggle(classToToggle);
    });
  };

  if (menuButtonWrapper) {
    menuButtonWrapper.addEventListener('click', function () {
      if (navMenuWrapper.classList.contains('s-nav-menu-wrapper--loaded')) {
        navMenuWrapper.classList.remove('s-nav-menu-wrapper--loaded');
        navMenuWrapper.classList.add('s-nav-menu-wrapper--show');
      } else {
        navMenuWrapper.classList.remove('s-nav-menu-wrapper--show-oveflow');
        toggleCSSclasses(navMenuWrapper, 's-nav-menu-wrapper--show', 's-nav-menu-wrapper--hide');
      }

      menuButtonOpen.classList.toggle('s-nav-btns__menu-icon--show');
      menuButtonclose.classList.toggle('s-nav-btns__menu-icon--show');
    });
  } // // Sub Menu --- Sub Menu --- Sub Menu ---
  // // Sub Menu --- Sub Menu --- Sub Menu ---
  // // Sub Menu mobile -- Sub Menu mobile --


  var allTopMenus = document.querySelectorAll('.s-nav-menu-item-has-submenu');
  var allSubMenus = document.querySelectorAll('.s-nav-submenus-wrapper');
  allTopMenus.forEach(function (button) {
    button.addEventListener('mouseover', function () {
      this.nextElementSibling.classList.remove('s-nav-submenus-wrapper--slide-up');
      this.nextElementSibling.classList.add('s-nav-submenus-wrapper--slide-down');
    });
    button.addEventListener('mouseleave', function (e) {
      // Collapse the submenu, but not when leaving from below.
      var thisHeight = this.offsetHeight;

      if (e.offsetY < thisHeight) {
        this.nextElementSibling.classList.remove('s-nav-submenus-wrapper--slide-down');
        this.nextElementSibling.classList.add('s-nav-submenus-wrapper--slide-up');
      }
    });
    button.addEventListener('click', function () {
      this.nextElementSibling.classList.remove('s-nav-submenus-wrapper--hide');
      this.nextElementSibling.classList.add('s-nav-submenus-wrapper--show');
      navMenuWrapper.classList.add('s-nav-menu-wrapper--show-oveflow');
    });
    var allBackButtons = document.querySelectorAll('.s-nav-submenus__back-btn');
    allBackButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        this.parentElement.classList.remove('s-nav-submenus-wrapper--show');
        this.parentElement.classList.add('s-nav-submenus-wrapper--hide');
        navMenuWrapper.classList.remove('s-nav-menu-wrapper--show-oveflow');
      });
    });
  });
  allSubMenus.forEach(function (button) {
    button.addEventListener('mouseleave', function () {
      this.classList.remove('s-nav-submenus-wrapper--slide-down');
      this.classList.add('s-nav-submenus-wrapper--slide-up');
    });
  });
}

document.addEventListener("DOMContentLoaded", headerJS);;
