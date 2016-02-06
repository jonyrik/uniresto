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