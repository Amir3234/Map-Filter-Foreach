"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers
let orignalArray = [13, -9, -6, -43, 12, 44];
console.log("Original Array", orignalArray);
let updtedArray = orignalArray.filter((data) => {
    if (data > 0) {
        return data;
    }
});
console.log("Updated Data", updtedArray);
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2
let numbers = [1, 2, 3, 4, 5];
let updatedNumbers = numbers.map((number) => number * 2);
console.log(updatedNumbers);
/* Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
use the filter method to create a new array containing only the fruits with more than 5 characters.*/
let fruitArray = ["apple", "banana", "cheery", "date", "grape"];
console.log('All Fruits', fruitArray);
let updatedFruitArray = fruitArray.filter(fruitArray => fruitArray.length > 5);
console.log('Updated Fruits', updatedFruitArray);
/* Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together
to create a new array containing the squares of even numbers*/
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original Value of Array ', array);
let saqureOfEvenNumbers = array.filter((evenNum) => {
    return evenNum % 2 == 0;
}).map((evenNum) => {
    return evenNum * evenNum;
});
console.log('Saqure of evan number', saqureOfEvenNumbers);
/* Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a
new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32. */
let tempOfCalsius = [0, 10, 20, 30, 40];
console.log('Temperature of Celsius', tempOfCalsius);
let tempToFahrnheit = tempOfCalsius.map((Celsius) => {
    return (Celsius * 9 / 5) + 32;
});
console.log('Celsius to Fahrnheit', tempToFahrnheit);
/* Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together
 to create a new array containing the doubled values of odd numbers in typescript */
let oldNumberValue = [3, 6, 9, 12, 15, 18];
console.log('Original Value of array', oldNumberValue);
let doubleOddNumber = oldNumberValue.filter((value) => {
    return value % 2 !== 0;
}).map((OddValue) => {
    return OddValue * 2;
});
console.log('Double Odd Numbers', doubleOddNumber);
/* Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach
method to log each name with an exclamation mark at the end, e.g., "Alice!" */
let userName = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log('Original Name', userName);
userName.forEach((name) => {
    console.log(name + '!');
});
