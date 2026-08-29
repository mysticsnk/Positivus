function showBurgerMenu() {
  const burgermenu = document.querySelector('.burger-menu-nav')
  burgermenu.style.transform = 'translateX(0)';
  const burgermenu_open_btn = document.querySelector("#show-burger-menu-button");
  burgermenu_open_btn.style.display = 'none';
}

function hideBurgerMenu() {
  const burgermenu = document.querySelector('.burger-menu-nav');
  burgermenu.style.transform = 'translateX(100%)';
  const burgermenu_open_btn = document.querySelector("#show-burger-menu-button");
  burgermenu_open_btn.style.display = "inline";
}