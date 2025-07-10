// assets/js/header.js

export function initHeader() {
  const header = document.querySelector('.site-header');
  const navMenu   = document.querySelector('.nav-menu');
  const burgerBtn = document.querySelector('.burger');

  // 滾動時切換 .scrolled
  function handleScroll() {
    const isScrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', isScrolled);
  }

  // 點擊漢堡鈕開關選單
  function handleBurgerClick() {
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('open');
  }

  // ===== 3. 綁定事件 =====
  window.addEventListener('scroll', handleScroll);
  burgerBtn.addEventListener('click', handleBurgerClick);
  
}


document.addEventListener('DOMContentLoaded', initHeader);
