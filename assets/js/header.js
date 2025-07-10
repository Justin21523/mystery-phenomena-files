// assets/js/header.js

export function initHeader() {
  const header = document.querySelector('.site-header');
  const navList = document.querySelector('.nav__list');
  const navToggle = document.querySelector('.nav-toggle');

  // 漢堡選單切換
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  // 滾動變色
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}


document.addEventListener('DOMContentLoaded', initHeader);
