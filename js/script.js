'use strict';

const numberOfMovies = +prompt('How much movies have you watch yet?', '');

const personalMovieDB = {
    count:numberOfMovies,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('The last movie you watched?',''),
      b = prompt('How do you rate this movie?',''),
      c = prompt('The last movie you watched?',''),
      d = prompt('How do you rate this movie?','');


personalMovieDB.movies[a] = b;      
personalMovieDB.movies[c] = d;  

console.log(personalMovieDB);