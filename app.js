// Task 1
function task1() {
    console.log('Task 1');
    
    const userNumberTask1 = +prompt('Task 1: Введи число');
    
    console.log(`Ur number: ${userNumberTask1}`);
    
    function reduceTheNumber (number) {
        console.log(`${number/2} is ur wanted number`);
    }
    
    reduceTheNumber(userNumberTask1);
    
    console.log('-----------------------------------------');
}

btnFirst.addEventListener('click', task1);

//task 2
function task2() {
    console.log('Task 2');
    
    const mainNumber = +prompt('Task 2: Введите число которое будем делить');
    console.log(`Ur main number: ${mainNumber}`);
    const reduceNumber = +prompt('Task 2: Введите число на которое будем делить');
    console.log(`Ur reduce number: ${reduceNumber}`);
    
    
    function reduceTheNumber(a, b) {
        if (!a / b == 0) {
            let completeReduceNumber = a/b;
            if (!completeReduceNumber % 0.1 == 0){
                completeReduceNumber = +completeReduceNumber.toFixed(1);
            }
            console.log(`${completeReduceNumber} is ur wanted number`);
        } else {
            console.log(`
U introduced bad num's
                `);
        }
    }
    
    reduceTheNumber(mainNumber, reduceNumber);
    
    console.log('-----------------------------------------');
}

btnSecond.addEventListener('click', task2);

//task 3
function task3() {
    console.log('Task 3');
    console.log(`
        Числа будут запрашиватся, пока вы не нажмете отмена
        `);
    
    function foundArithmeticMean() {
        let numArr = [];
    
        while (true) {
            let userNum = +prompt('Task 3: Введите число');
            if (userNum == 0) {
                break;
            }
            
            if (!isNaN(userNum)) {
                numArr.push(userNum);
            } else {
                console.log(`
    U didn't enter a number
                `);
            }
        }
        
        const numArrLen = numArr.length;
    
        arrPrint();
        calculation(numArr);
    
        function calculation() {
            let sumAllArrayElem = 0;
    
            // numArr.forEach(function (elem) {
            //     sumAllArrayElem += numArr[elem];
            // });

            for (let i = 0; i < numArrLen; i++) {
                if (!isNaN(numArr[i])) { 
                    sumAllArrayElem += numArr[i];
                }
            };
            
            let arithmeticMean = sumAllArrayElem/numArrLen;
            if (!arithmeticMean % 0.01 == 0){
                arithmeticMean = +arithmeticMean.toFixed(2);
            }
            console.log(`${arithmeticMean} is arithmetic mean of ur num's`);
        }
    
        function arrPrint() {
            console.log('Ur\'s numbers:');
            
            for (let i = 0; i < numArrLen; i++) {
                console.log(`\t${numArr[i]}`);
            };
        }
    }
    
    
    foundArithmeticMean();
    
    console.log('-----------------------------------------');
}

btnThird.addEventListener('click', task3);