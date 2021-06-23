Алексея(() => {
  const menuBtnRef = document.querySelector('[data-mobile-menu-open]');
  const mobileMenuRef = document.querySelector('[data-mobile-menu]');
  const mobileBtnClose = document.querySelector('[data-mobile-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();
