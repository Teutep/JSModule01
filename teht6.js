"use strict";
const confirmationQuery = confirm("Should I calculate the square root?");
let number;
let squared;
function print(input) {
    document.querySelector("#response").innerHTML = input;
}
if (confirmationQuery) {
    number = prompt("Give me a number");
} else {
    print("The square root is not calculated.");
}

if (number >= 0) {
    squared = Math.sqrt(number);
    print(squared);
} else {
    print("The square root of a negative number is not defined");
}