function toggleMenu() {
  var menuList = document.querySelector('.menu-list');
  var menu = document.querySelector('.menu');

  // Toggle a classe 'show' para controlar a visibilidade do menu
  menuList.classList.toggle('show');

  // Atualize a classe do menu para ativar a transição de altura máxima
  if (menuList.classList.contains('show')) {
    menu.style.maxHeight = 170 + 'px';
  } else {
    menu.style.maxHeight = null; // Volte à altura máxima automática
  }
}

// Feche o menu ao clicar em um link
var menuLinks = document.querySelectorAll('.menu-list a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var menuList = document.querySelector('.menu-list');
    menuList.classList.remove('show');
  });
});

//links clicados no iframe valem pra toda pagina
