$(function(){
   $(':submit').click(function(e) {
      $('.text2').attr('disabled','disabled');
      e.preventDefault();
   });
   $(':reset').click(function(e) {
      $('.text2').removeAttr('disabled');
      e.preventDefault();
   });
});

//jQuery()

/*
    Селекторы
*/

// Основные
$('#receive')
$('.logo')
$('a')

// Дополнительные
$('nav menu li') // вложенность
$('.icons > div') // > дочерние элементы
$('.icons img + h4') // + - соседние элементы (рядом с изображением)

// Селекторы по аттрибутам
$('img[height=150]')
$('img[src^=img\\/]') // Если src изображения не начинается с img
$('img[src$=\\.png]') // Если src изображения заканчивается на png
$('a[href*=#]') // Выберутся все ссылки, в которых присутствует #

// ~= - первый символ
// |= - последний символ