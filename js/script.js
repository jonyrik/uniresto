$(document).ready(function() {

  var btn_demora1 = $('#btn-demora1');
    var btn_demora2 = $('#btn-demora2');
    var btn_demora3 = $('#btn-demora3');
  var modal = $('#m1');
  var btn_cerrar = $('#cerrar');


  $(btn_demora1).click(function () {
 	$('#m1').css('display', 'block');
 });
  $(btn_demora2).click(function () {
 	$('#m1').css('display', 'block');
 });
  $(btn_demora3).click(function () {
 	$('#m1').css('display', 'block');
 });

  $(btn_cerrar).click(function () {
 	$('#m1').css('display', '');
 });

   // Galerias
    var btn_despliega = $('.f-cerrada');
  var btn_cierra = $('.f-abierta');
  var cont_filtros = $('.cont-filtros');


  $(btn_despliega).click(function () {
 	$(this).css('display', 'none');
        $(btn_cierra).css('display', 'inline-block');
        $(cont_filtros).css('display', 'table');
 });

  $(btn_cierra).click(function () {
 	$(this).css('display', 'none');
        $(btn_despliega).css('display', 'inline-block');
        $(cont_filtros).css('display', '');
 });


});
