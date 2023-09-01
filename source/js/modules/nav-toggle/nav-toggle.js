let header = document.querySelector('.header__main-header');
let logoWrapper = document.querySelector('.header__logo-wrapper');
let headerNav = document.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__toggle');
let navWpapper = document.querySelector('.nav__wrapper');
let navList = document.querySelector('.nav__list');
let untouchableBlock = document.querySelector('.header__untouchable-block');
let body = document.getElementById('body');

header.classList.remove('header__main-header--nojs');
logoWrapper.classList.remove('header__logo-wrapper--invert');
headerNav.classList.remove('nav--nojs');
navList.classList.remove('nav__list--nojs');


function openMenu() {
  header.classList.add('header__main-header--opened');
  logoWrapper.classList.add('header__logo-wrapper--invert');
  headerNav.classList.remove('nav--closed');
  headerNav.classList.add('nav--opened');
  navWpapper.classList.remove('nav__wrapper--closed');
  body.classList.add('unscrolling');
  untouchableBlock.classList.add('header__untouchable-block--show');
}

function closeMenu() {
  header.classList.remove('header__main-header--opened');
  logoWrapper.classList.remove('header__logo-wrapper--invert');
  headerNav.classList.add('nav--closed');
  headerNav.classList.remove('nav--opened');
  navWpapper.classList.add('nav__wrapper--closed');
  body.classList.remove('unscrolling');
  untouchableBlock.classList.remove('header__untouchable-block--show');
}

navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('nav--closed')) {
    openMenu();
    untouchableBlock.addEventListener('click', () => {
      closeMenu();
      untouchableBlock.removeEventListener('click', () => {});
    });
  } else {
    closeMenu();
  }
});


export {closeMenu};
