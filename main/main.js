
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


// EX 3

let a = +prompt('Give the first number!','');
let b = +prompt('Give the second number!','');
let c = +prompt('Give the third number!','');

if (a > b && a > c){
    alert('The first number is the greatest!')
} else if (b > a && b > c){
    alert('The second number is the greatest!')
} else {
    alert('The third number is the greatest')
};

if (a < b && a < c){
    alert('The first number is the smallest!')
} else if (b < a && b < c){
    alert('The second number is the smallest!')
} else {
    alert('The third number is the smallest')
};

// EX 4

str = prompt('Paste a string!','');
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(str));

// EX 5

str = prompt('Paste a currency!','');

function extractCurrencyValue(str){
    return +str.slice(1);
}
alert(extractCurrencyValue(str));

// EX 6

let x = +prompt('Give a number for identification','');

if (x > 0){
    alert(1);
} else if ( x == 0){
    alert(0);
} else if (x < 0){
    alert(-1);
}