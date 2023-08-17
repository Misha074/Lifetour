let galleryButtons = document.querySelector('.gallery__button-container');
let galleryLink = document.querySelector('.gallery__more-link');


function initGallerySwiper() {
  galleryButtons.classList.remove('gallery__button-container--nojs');
  galleryLink.classList.add('gallery__more-link--nojs');

  let gallerySwiper = new Swiper('.gallery__swiper', {
    // Стрелки переключения слайдов
    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev',
    },
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: false,
    spacebetween: 3,
    allowTouchMove: true,
    breakpoints: {
      768: {
        spaceBetween: 5,
        slidesPerView: 'auto',
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 5,
        allowTouchMove: false,
      },
    },
  });
  return gallerySwiper;
}

export {initGallerySwiper};
