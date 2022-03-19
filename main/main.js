
// JS SYNTAX

// EX 1
let x = +prompt('Give a number between 0 and 9','')

switch (x){
    case 1:
        alert('Number is 1');
        break;
    case 2:
        alert('Number is 2');
        break;
    case 3:
        alert('Number is 3');
        break;
    case 4:
        alert('Number is 4');
        break;
    case 5:
        alert('Number is 5');
        break;
    case 6:
        alert('Number is 6');
        break;
    case 7:
        alert('Number is 7');
        break;
    case 8:
        alert('Number is 8');
        break;
    case 9:
        alert('Number is 9');
        break;
    default:
        alert('You pasted the wrong number!')
}

// EX 2

let a = +prompt('Give the first number!','');
let b = +prompt('Give the second number!','');

let c = a + b;

alert(`The sum of these two numbers is ${c}`);