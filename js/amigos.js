$(document).ready(function() {

// Amigos
  var btn_filtros = $('#btn-filtros');
  var btn_filtros2 = $('#btn-filtros2');
  var cont_select = $('.cont-select');

  $(btn_filtros).click(function () {
 	$(cont_select).css('display', 'table');
      $(btn_filtros2).css('display', 'table');
      $(this).css('display', 'none');
 });

  $(btn_filtros2).click(function () {
 	$(cont_select).css('display', 'none');
      $(btn_filtros).css('display', 'table');
      $(this).css('display', 'none');
 });

  $(enviar).click(function () {
     $(enviada).css('display', 'block');
      $(this).css('display', 'none');
 });
 $(enviada).click(function () {
     $(enviar).css('display', 'block');
      $(this).css('display', 'none');
 });


});
