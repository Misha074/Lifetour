import {closeMenu} from '../nav-toggle/nav-toggle';

const tours = document.getElementById('tours');
let toursLink = document.getElementById('tours-link');

toursLink.addEventListener('click', () => {
  tours.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});


const training = document.getElementById('training');
let trainingLink = document.getElementById('training-link');

trainingLink.addEventListener('click', () => {
  training.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});


const aboutus = document.getElementById('aboutus');
let aboutusLink = document.getElementById('aboutus-link');

aboutusLink.addEventListener('click', () => {
  aboutus.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});


const reviews = document.getElementById('reviews');
let reviewsLink = document.getElementById('reviews-link');

reviewsLink.addEventListener('click', () => {
  reviews.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});


const gallery = document.getElementById('gallery');
let galleryLink = document.getElementById('gallery-link');

galleryLink.addEventListener('click', () => {
  gallery.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});

const contacts = document.getElementById('contacts');
let contactsLink = document.getElementById('contacts-link');

contactsLink.addEventListener('click', () => {
  contacts.scrollIntoView({behavior: 'smooth'}, {block: 'center', inline: 'center'});
  closeMenu();
});
