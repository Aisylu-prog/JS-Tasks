'use strict';


const numberOfFilms = +prompt('Сколько фильмов за год вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

function sayHello(name) {
    return `Hi, ${name}!)`;
}

console.log(sayHello('Anna'));


function returnNeighboringNumbers(num) {
    return [num-1, num, num+1];
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, times) {
    if ((typeof(times) == 'number') && (times > 0)) {

        let str = '';
        for (let i = 1; i <= times; i++) {
            if (i === times) {
                str += `${num * i}`;
            } else {
                str += `${num * i}---`;
            }
        }

        return str;

    } else {

        return num;

    }

}

console.log(getMathResult(5, 5));

