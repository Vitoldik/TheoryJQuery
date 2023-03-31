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
$('a[href*=\\#]') // Выберутся все ссылки, в которых присутствует #

// ~= - первый символ
// |= - последний символ

// Фильтрация выборок
$('menu li:even') // только четные элементы (с нуля)
$('menu li:odd')
$('img:not(.logo img)') // селектор всех изображений, кроме лого
$('li:has(a)') // все элементы списка, с ссылкой внутри
$('p:contains(client)') // выберет все теги p, внутри которых есть слово client
$('li:first') // первый элемент
$('li:last') // последний элемент
$('#h2 > div + li:last') // комбинация селекторов
$('div:hidden') // все скрытые блоки
$('div:visible') // все видимые блоки

// Подключение js в head секции
$(document).ready(function () {
   // код внутри выполнится при условии что все dom дерево загружено
})

$(function() {
   // код внутри выполнится при условии что все dom дерево загружено
})

/*
   Методы text, hide, show
*/
const tagP = $('.mainText p')
console.log(tagP.text()) // получить текст внутри элемента
tagP.text('Новый текст') // изменить текст

// tagP.hide() - скрыть элемент
tagP.hide(3000, function () {}) // элемент скроется через 3 секунды, после скрытия выполнится функция из второго аргумента
tagP.show(2000) // отобразить элемент

/*
   Цепной вызов функций
*/
tagP.hide().text('Новый текст 1').show(3000)

/*
   Автоматические циклы
*/
// [div, div, div, div]
$('.icons > div').hide(3000).show(2000)