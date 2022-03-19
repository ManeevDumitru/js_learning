
// JS SYNTAX


// ---------------------------- EX 1 ----------------------------------
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

// -------------------------- EX 2 -------------------------------------

let a = +prompt('Give the first number!','');
let b = +prompt('Give the second number!','');

let c = a + b;

alert(`The sum of these two numbers is ${c}`);


// --------------------------- EX 3 -----------------------------------

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

// ---------------------------- EX 4 -----------------------------------

str = prompt('Paste a string!','');
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst(str));

// ------------------------ EX 5 -------------------------------

str = prompt('Paste a currency!','');

function extractCurrencyValue(str){
    return +str.slice(1);
}
alert(extractCurrencyValue(str));

// ----------------------- EX 6 -----------------------------

let x = +prompt('Give a number for identification','');

if (x > 0){
    alert(1);
} else if ( x == 0){
    alert(0);
} else if (x < 0){
    alert(-1);
} else {
    alert('Error!')
}

// ------------------- EX 7 --------------------------------

let x = +prompt('Give a number for checking','');

if (x >= 14 && x <= 90){
    alert('Number is perfect!')
} else {
    alert('Number is not coresponding to the criteria!')
};

// V.2

if (!(x >= 14 && x <= 90)){
    alert('Number is not coresponding to the criteria')
} else {
    alert('Number is perfect!')
};

// ------------------------- EX 8 --------------------------------

let x = prompt('Write the username',);
let y = prompt('Write the password',);

if (x == "" && y == ""){
    alert('Ошибка валидации')
} else if (x && !y){
    alert('Неправильный пароль!')
} else if (!x && y) {
    alert('Неправильное имя!')
} else if (x == y){
    alert('Привет')
};

// ------------------------- EX 9 -----------------------


let name = prompt('Как вас зовут?','');
alert(`Привет ${name}`)
let learn = confirm('Вы знакомы с JavaScript?')
if (learn == true){
    alert('Молодец!')
} else {
    alert('Можно начать обучение прямо сейчас!')
}

// -------------------- EX 10 ----------------------------

let num = +prompt(`Give the number to know it's dividers`,'');

const dividers = (num) => {
    let dividers = [];
    for (let i = 2; i < num ; i++){
        if(num % i == 0){
            dividers.push(i)
        }
    }
    return dividers
}
alert(dividers(num))

