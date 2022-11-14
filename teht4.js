"use strict";
const name = prompt('Whats your name');
const random = Math.floor(Math.random() * 4) + 1;
let room;
console.log(random);

switch (random) {
    case 1:
        room = 'Daredevil';
        break;
    case 2:
        room = 'Slytherin';
        break;
    case 3:
        room = 'Hufflepuff';
        break;
    case 4:
        room = 'Ravenclaw';
        break;
}
console.log(room);
document.querySelector('#response').innerHTML = name + ', You are ' + room;