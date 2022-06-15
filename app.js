// Task 1
console.log('Task 1');

const userNumberTask1 = +prompt('Task 1: Введи число');

function reduceTheNumber (number) {
    console.log(`${number/2} is ur wanted number`);
}

reduceTheNumber(userNumberTask1);

//task 2

console.log('Task 2');

const mainNumber = +prompt('Task 2: Введите число которое будем делить');
const reduceNumber = +prompt('Task 2: Введите число на которое будем делить');

function reduceTheNumberTask2 (a, b) {
    if (!a / b == 0) {
        console.log(`${a / b} is ur wanted number`);
    } else {
        console.log("U introduced bad num's");
    }
}

reduceTheNumberTask2(mainNumber, reduceNumber);

//task 3

console.log('Task 3');
console.log('Числа будут запрашиватся, пока вы не нажмете отмена');

// const firstUserNum = +prompt('Введи первое число');
// const secondUserNum = +prompt('Введи второе число');
// const therdUserNum = +prompt('Введи третье число');

function foundArithmeticMean() {
    let numArr = [];

    while (true) {
        let userNum = +prompt('Task 3: Введите число');
        console.log(typeof userNum);
        if (userNum == 0) {
            break;
        }
        numArr.push(userNum);
    }
    console.log(numArr);
    calculation(numArr);
}

function calculation(Arr) {
    //forEach
    //сложить елементы массива
    //поделить на Arr.lenght
    
    console.log(Arr.length);
}

// function foundArithmeticMean (a, b, c) {
//     // console.log(`${} is ur wanted number`);
//     console.log(`${(a+b+c)/arguments.length} is ur wanted number`);
// }

foundArithmeticMean();



// H/W
//* 1) Написать функци которая принимает число и сокращает его в 2 раза.
//* 2) Написать функцию которая принимает два параметра (а , б) ->  а сокращается на б раз , но только в случае того , что остаток от деления будет 0.
// 3) Пользователь через prompt имеет возможность ввести три числа , эти три числа должны стать арг к функции которая находит среднее арифметическое