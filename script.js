let hummenu = document.getElementById('menu');
let logo = document.getElementById('logo');
let menuCo = document.getElementById('mobilemenu');
let closeMenu = document.getElementById('closebtn');
let bodyCo = document.getElementById('bodyCo');
let porBtn = document.getElementById('porbtn');
let aboBtn = document.getElementById('abobtn');
let forBtn = document.getElementById('forbtn');
let nav = document.getElementById('nav-id');

hummenu.addEventListener('click', () => {
  menuCo.style.display = 'flex';
  hummenu.style.display = 'none';
  logo.style.display = 'none';
  bodyCo.style.position = 'sticky';
  bodyCo.style.overflow = 'hidden';
  nav.style.width = '100%';
});

closeMenu.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

porBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});

aboBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});
forBtn.addEventListener('click', () => {
  menuCo.style.display = 'none';
  hummenu.style.display = 'block';
  logo.style.display = 'block';
  bodyCo.style.position = 'static';
  bodyCo.style.overflow = 'auto';
  nav.style.width = 'auto';
});