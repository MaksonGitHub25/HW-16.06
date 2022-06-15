// // Task 1
// console.log('Task 1');

// const userNumberTask1 = +prompt('Task 1: Введи число');

// console.log(`Ur number: ${userNumberTask1}`);

// function reduceTheNumber (number) {
//     console.log(`${number/2} is ur wanted number`);
// }

// reduceTheNumber(userNumberTask1);

// console.log('-----------------------------------------');

// //task 2

// console.log('Task 2');

// const mainNumber = +prompt('Task 2: Введите число которое будем делить');
// console.log(`Ur main number: ${mainNumber}`);
// const reduceNumber = +prompt('Task 2: Введите число на которое будем делить');
// console.log(`Ur reduce number: ${reduceNumber}`);


// function reduceTheNumberTask2 (a, b) {
//     if (!a / b == 0) {
//         console.log(`${a / b} is ur wanted number`);
//     } else {
//         console.log("U introduced bad num's");
//     }
// }

// reduceTheNumberTask2(mainNumber, reduceNumber);

// console.log('-----------------------------------------');

// //task 3

// console.log('Task 3');
// console.log(`
//     Числа будут запрашиватся, пока вы не нажмете отмена
//     `);

// function foundArithmeticMean() {
//     let numArr = [];

//     while (true) {
//         let userNum = +prompt('Task 3: Введите число');
//         if (userNum == 0) {
//             break;
//         }
//         numArr.push(userNum);
//     }
    
//     const numArrLen = numArr.length;

//     arrPrint();
//     calculation(numArr);

//     function calculation() {
//         let sumAllArrayElem = 0;
        

//         // numArr.forEach(function (elem) {
//         //     sumAllArrayElem += numArr[elem];
//         // });
    
//         for (let i = 0; i < numArrLen; i++) {
//             sumAllArrayElem += numArr[i];
//         };
        
//         const arithmeticMean = sumAllArrayElem/numArrLen;
//         console.log(`${arithmeticMean} is arithmetic mean of ur num's`);
//     }

//     function arrPrint() {
//         console.log("Ur's numbers:");
        
//         for (let i = 0; i < numArrLen; i++) {
//             console.log(`\t${numArr[i]}`);
//         };
//     }
// }


// foundArithmeticMean();

// console.log('-----------------------------------------');