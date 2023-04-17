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
$('a, li') // Выборка нескольких элементов
$('.icons > div') // > дочерние элементы
$('.icons img + h4') // + - соседние элементы (рядом с изображением)

// Селекторы по аттрибутам
$('img[height=150]')
$('img[alt]') // Все изображения, у которых присутствует alt
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

/*
   Методы width и height
*/
const btn = $('.btn')
const btnWidth = btn.width()
const btnHeight = btn.height()
// console.log(btnWidth, btnHeight)
btn.width(300)
btn.height(300)

const widthAndHeight = (element) => {
   const object = $('.' + element)
   return `${object.width()}, ${object.height()}`
}

console.log(widthAndHeight('btn'))

/*
   Метод html
*/
const mainText = $('.mainText')
console.log(mainText.html()) // Вывод содержимого в виде html
// mainText.html('<b>Жирный текст</b>') // Изменить содержимое элемента

/*
   Методы fadeIn (плавное появление) и fadeOut (плавное скрытие)
*/
const elementOut = (element, time) => {
   if (time > 5000 || time < 1000 || isNaN(time))
      return false

   $(`.${element}`).fadeOut(time)
}

elementOut('btn', 2000)

btn.fadeIn(3000)

/*
   Метод fadeTo - изменение уровня прозрачности элемента
*/
const logo = $('.logo')
// 3 аргумент - функция, которая будет выполнена после полного изменения прозрачности
logo.fadeTo(4000, 0.1, function (){}).fadeTo(4000, 1)

/*
   Методы slideUp и slideDown - плавно скрывает/отображает выбранные элементы
   скользящим движением (постепенно уменьшая их высоту)
*/
$('menu li:first-child').slideUp(2000).slideDown(2000)

/*
   Метод attr и removeAttr - добавление/удаление аттрибутов у элементов
*/
const logoImg = $('.logo img')

console.log(logoImg.attr('src'))
logoImg.attr('src', 'img/icon2.png')
logoImg.attr('data-test', 0)
logoImg.removeAttr('test') // удаление аттрибутов

/*
   Дата аттрибуты (data)
*/
const nav = $('nav')
nav.data('key', 'test')
const {key} = nav.data()
console.log(`Nav data: ${key}`)

/*
   Методы addClass и removeClass
*/
const navMenu = $('nav menu')
navMenu.addClass('border').removeClass('border')

/*
   Метод css
*/
console.log(navMenu.css('font-size'))
navMenu.css('font-size', '16px')
navMenu.css({
   'color': 'green',
   'padding': '10px'
})

/*
   Метод animate
   Изменение стилей за указанное время
   (работает только с числовыми параметрами)
*/
$('nav menu li a').animate({
   'padding': '12px'
}, 3000)

/*
   Методы append, prepend, before и after

   1. append() добавляет содержимое в конец выбранных элементов
   2. prepend() добавляет содержимое в начало выбранных элементов
   3. before() добавляет содержимое перед выбранными элементами
   4. after() добавляет содержимое после выбранных элементов:
*/

mainText.append('<h3>Текст в конце</h3>')
mainText.prepend('<h3>Текст в начале</h3>')
mainText.after('<h3>Текст после блока</h3>')
mainText.before('<h3>Текст перед блоком</h3>')

/*
   Метод each и контекст this
*/
$('.icons img').each(function () {
   const element = $(this) // Текущий элемент

   if (element.attr('src').includes('icon2'))
      element.fadeOut(1000)
})

/*
   Свойство length
*/
console.log($('div').length)

/*
   Методы clone и remove
*/
const mainTextClone = mainText.clone()
$('body').prepend(mainTextClone)
mainTextClone.remove()