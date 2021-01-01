/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const advBlock = document.querySelector(`.promo__adv`);
const advInside = advBlock.querySelectorAll(`*`);
const genre = document.querySelector(`.promo__genre`);
const promo = document.querySelector(`.promo__bg`);
const promoBlock = document.querySelector(`.promo__content`);
const films = document.querySelector(`.promo__interactive-list`);

films.querySelectorAll(`.promo__interactive-item`).forEach(item => item.remove());
advInside.forEach(item => item.remove());
genre.remove();
promo.insertAdjacentHTML(`afterbegin`, `<div class="promo__genre">драма</div>`);
promo.style.cssText = `background: url('../img/bg.jpg') center no-repeat`;

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

for (let i = 0; i < movieDB.movies.length; i++) {
    films.insertAdjacentHTML(`beforeend`, `<li class="promo__interactive-item">${i+1} ${movieDB.movies[i]}
    <div class="delete"></div>
    </li>`);
    
}

