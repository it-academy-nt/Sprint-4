"use strict";

var _data = require("../src/data");
// Access the movies array
console.log(_data.movies);

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  //let result =  ???;
  console.log("EXERCICE 1 ->", data);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors: getAllDirectors,
    getMoviesFromDirector: getMoviesFromDirector,
    moviesAverageOfDirector: moviesAverageOfDirector,
    orderAlphabetically: orderAlphabetically,
    orderByYear: orderByYear,
    moviesAverageByCategory: moviesAverageByCategory,
    hoursToMinutes: hoursToMinutes,
    bestFilmOfYear: bestFilmOfYear
  };
}