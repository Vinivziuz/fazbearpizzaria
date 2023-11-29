function toggleMenu() {
  var menuList = document.querySelector('.menu-list');
  var menu = document.querySelector('.menu');
  var iframe = parent.document.getElementById('menurespons');

  var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  var menuiframe = iframeDocument.querySelector('.menu-frame');
 
  menuList.classList.toggle('show');

  if (menuList.classList.contains('show')) {
    menu.style.maxHeight = 570 + 'px';
    menuiframe.style.height = '570px';
  } else {
    menu.style.maxHeight = null;
    menuiframe.style.height = '170px';
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

//botões customizados do cardápio
function aumentarNumero(pizza) {
  var inputNumero = document.getElementById(pizza);
  inputNumero.value = parseInt(inputNumero.value) + 1;
}
function diminuirNumero(pizza) {
  var inputNumero = document.getElementById(pizza);
  inputNumero.value = parseInt(inputNumero.value) - 1;
}