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

    function calculation() {
        let sumAllArrayElem = 0;
        
        const numArrLen = numArr.length;

        // numArr.forEach(function (elem) {
        //     sumAllArrayElem += numArr[elem];
        // });
    
        for (let i = 0; i < numArrLen; i++) {
            sumAllArrayElem += numArr[i];
        };
        
        const arithmeticMean = sumAllArrayElem/numArrLen;
        console.log(`${arithmeticMean} is arithmetic mean of ur num's`);
    }
}


foundArithmeticMean();



// H/W
//* 1) Написать функци которая принимает число и сокращает его в 2 раза.
//* 2) Написать функцию которая принимает два параметра (а , б) ->  а сокращается на б раз , но только в случае того , что остаток от деления будет 0.
//* 3) Пользователь через prompt имеет возможность ввести три числа , эти три числа должны стать арг к функции которая находит среднее арифметическое