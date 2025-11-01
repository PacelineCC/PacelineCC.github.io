// Menu burger
const burger = document.querySelector('.menu-burger');
const navMobile = document.querySelector('.nav-mobile');
burger.addEventListener('click', () => {
navMobile.style.display = navMobile.style.display === 'block' ? 'none' : 'block';
});

// Réduction du logo, changement de disposition et alignement des icônes au scroll
window.addEventListener('scroll', function() {
  const logo = document.querySelector('.header-logo2');
  const flex2 = document.querySelector('.header-flex2');
  const headerDown = document.querySelector('.header-down');
  const menuBurger = document.querySelector('.menu-burger');
  const header = document.querySelector('header');

  if (window.scrollY > 50) {
    logo.classList.add('logo-small');
    flex2.classList.add('row-on-scroll');
    headerDown.classList.add('right-on-scroll');
    menuBurger.classList.add('show-on-scroll');
    header.classList.add('header-blur');
  } else {
    logo.classList.remove('logo-small');
    flex2.classList.remove('row-on-scroll');
    headerDown.classList.remove('right-on-scroll');
    menuBurger.classList.remove('show-on-scroll');
    header.classList.remove('header-blur');
  }
});

