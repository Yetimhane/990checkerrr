// Menü Toggle (Hamburger Menü Açma/Kapama)
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');  // Menüyü aç/kapa
}
// Alt Menü Açma/Kapama
const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    const submenu = this.querySelector('.submenu');
    submenu.classList.toggle('open');
  });
});