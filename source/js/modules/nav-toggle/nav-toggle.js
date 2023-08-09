let header = document.querySelector('.header__main-header');
let logoWrapper = document.querySelector('.header__logo-wrapper');
let headerNav = document.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__toggle');
let navWpapper = document.querySelector('.nav__wrapper');
let navList = document.querySelector('.nav__list');

header.classList.remove('header__main-header--nojs');
logoWrapper.classList.remove('header__logo-wrapper--invert');
headerNav.classList.remove('nav--nojs');
navList.classList.remove('nav__list--nojs');


navToggle.addEventListener('click', function () {
  if (headerNav.classList.contains('nav--closed')) {
    header.classList.add('header__main-header--opened');
    logoWrapper.classList.add('header__logo-wrapper--invert');
    headerNav.classList.remove('nav--closed');
    headerNav.classList.add('nav--opened');
    navWpapper.classList.remove('nav__wrapper--closed');
  } else {
    header.classList.remove('header__main-header--opened');
    logoWrapper.classList.remove('header__logo-wrapper--invert');
    headerNav.classList.add('nav--closed');
    headerNav.classList.remove('nav--opened');
    navWpapper.classList.add('nav__wrapper--closed');
  }
});
