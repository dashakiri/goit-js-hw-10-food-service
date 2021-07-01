import '../styles.css';
import menu from './menu.json';
import galleryTemplate from '../templates/gallery-template.hbs';

console.log(galleryTemplate());

const menuList = document.querySelector('.js-menu');

console.log(menuList);

menuList.innerHTML = galleryTemplate(menu);
