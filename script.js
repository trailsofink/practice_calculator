let calculation = [];
let equationHist = [];
let answer = null;
let equation = null;

const calculator = document.querySelector('#calc');
const calcOutput = document.querySelector('#calcOutput');
const inputs = calculator.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        let btnValue = input.ariaValueText;
        let btnValueShown = input.value;
        
        function pushValue() {
            calculation.push(btnValue);
            equation = calculation.join('');
            calcOutput.innerText = equation;
            console.log(calculation);
        };

        function doCalculation() {
            equation = calculation.join('');
            answer = eval(equation);
            calcOutput.innerText = answer;
        };

        pushValue();
        doCalculation();
        console.log(answer);
    });
});

// let isAnswer = false;
// let isOp = true;
// let isFirstNumber = true;
// let isNegative = false;
// let equation = null;
// let answer = null;
// let lastTerm = null;
// const calculator = document.querySelector('#calc');
// const calcOutput = document.querySelector('#calcOutput');
// const calcHist = document.getElementById('calcHist');
// const inputs = calculator.querySelectorAll('input');

// inputs.forEach(input => {
//     input.addEventListener('click', () => {

//         let btnValue = input.ariaValueText;
//         let btnValueShown = input.value;
//         let btnValueStr = btnValueShown.toString();
//         let lastNum = calculation[calculation.length - 1];
//         let lastOp = calculation[calculation.length - 2];
//         let lastArray = calculation.length - 1;

//         function pushValue() {
//             calculation.push(btnValue);
//             calcOutput.lastElementChild.insertAdjacentHTML('afterend', "<span>" + btnValueStr + "</span>");
//             console.log(calculation);
//             isAnswer = false;
//         };
        
//         function addNum() {
//             if (isFirstNumber) {
//                 pushValue();
//                 isFirstNumber = false;
//             } else {
//                 calculation[lastArray] = lastNum + btnValue;
//                 calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
//                 console.log(calculation);
//                 isAnswer = false;
//             }
//         }; 

//         function clear() {
//             calcOutput.innerHTML = '<span></span>';
//             calcHist.innerHTML = '<span></span>';
//             calculation = [];
//             equationHist = [];
//             answer = null;
//             isAnswer = false;
//             isFirstNumber = true;
//             isNegative = false;
//         };

//         function resetAnswer() {
//             calculation = [];
//             calculation.push(answer);
            
            
//         }

//         function backspace() {
//             if (calcOutput.lastElementChild.innerText) {
//                 calcOutput.lastElementChild.innerText = calcOutput.lastElementChild.innerText.slice(0, -1);
//                 calculation.pop();
//             } else {
//                 calcOutput.removeChild(calcOutput.lastElementChild);
//                 calcOutput.lastElementChild.innerText = calcOutput.lastElementChild.innerText.slice(0, -1);
//                 calculation.pop();
//             }
//         };
        
//         if (input.id === 'number') {
//             addNum();
//         } else if ((input.id === 'operator') && (!isFirstNumber)) {
//             pushValue();
//             isFirstNumber = true;
//         } else if ((input.id === 'equals') && (!isAnswer)) {
//             isAnswer = true;
//             let equation = calculation.join('');
//             answer = eval(equation);
//             calcOutput.innerHTML = "<span>" + answer + "</span>"; 
//             equationHist.push(equation + '=' + answer);
//             calcHist.insertAdjacentHTML('beforeend', "<p>" + equationHist + "</p>");
//             lastTerm = lastOp + lastNum;
//             resetAnswer();
//         } else if ((input.id === 'equals') && (isAnswer)) {
//             answerCalc = eval(String(answer + lastTerm));
//             calcOutput.innerHTML = answerCalc; 
//             answer = answerCalc;
//         } else if (input.id === 'clear') {
//             clear();
//         } else if ((input.id === 'plusOrMinus') && (!isNegative) && (!isFirstNumber)) {
//             var newNum = '(-' + lastNum + ')';
//             calculation[lastArray] = newNum;
//             calcOutput.lastElementChild.insertAdjacentHTML('afterbegin', '-');
//             isNegative = true; 
//         } else if ((input.id === 'plusOrMinus') && (isNegative)) {
//             calcOutput.lastElementChild.innerText = calcOutput.lastElementChild.innerText.slice(-1);
//             isNegative = false;
//         } else if (input.id === 'percent') {

//         } else if (input.id === 'back') {
//             backspace();
//         }
//     });
// });

// const numBtns = document.querySelectorAll('#number');
// numBtns.forEach(num => {
//     num.addEventListener('click', () => {
//         let btnValue = num.ariaValueText;
//         let btnValueShown = num.value;
//         let btnValueStr = btnValueShown.toString();
//         let lastTerm = calculation.length - 1;
//         let secondToLastTerm = calculation.length 
//         function pushValue() {
//             calculation.push(btnValue);
//             calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
//             console.log(calculation);
//         };
        
//         function addNum() {
//             if (!calculation.length) {
//                 pushValue();
//                 isFirstNumber = false;
//             } else {
//                 let current = calculation[lastTerm];
//                 calculation[lastTerm] = current + btnValue;
//                 calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
//                 console.log(calculation);
//             }
//         };
//         addNum();
//     });
// });
    

// calculator.addEventListener('click', function(event) {

//     let btnValue = event.target.ariaValueText;
//     let btnValueShown = event.target.value;
//     let btnValueStr = btnValueShown.toString();
//     let lastTerm = calculation.length - 1;
//     let secondToLastTerm = calculation.length - 2;

//     function clear() {
//         calcOutput.innerHTML = '<span></span>';
//         calcHist.innerHTML = '<span></span>';
//         calculation = [];
//         answer = null;
//         isAnswer = false;
//         isDoubleOp = false;
//         isFirstNumber = true;
//     }

//     function pushValue() {
//         calculation.push(btnValue);
//         calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
//         console.log(calculation);
//     };


//     function addNum() {
//         if (!calculation.length) {
//             pushValue();
//             isFirstNumber = false;
//         } else {
//             let current = calculation[lastTerm];
//             calculation[lastTerm] = current + btnValue;
//             calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
//             console.log(calculation);
//         }
//     };

//     if ((event.target.id === "number") && (!isAnswer)) {
//         addNum();
//         isDoubleOp = false;
//     } else if ((event.target.id === "number") && (isAnswer)) {
//         clear();
//         addNum();
//     } else if ((event.target.id === "operator") && (!isFirstNumber) && (!isDoubleOp)) {
//         pushValue(); 
//         isDoubleOp = true;
//     } else if ((!isAnswer) && (event.target.id === 'equals') && (!isFirstNumber)) {
//         isAnswer = true; 
//         equationHist = [];
//         let equation = calculation.join('');
//         answer = eval(equation);
//         calcOutput.innerHTML = "<span>" + answer + "</span>"; 
//         equationHist.push(equation + '=' + answer);
//        calcHist.insertAdjacentHTML('beforeend', "<p>" + equationHist + "</p>");
//         isFirstNumber = true;
//     } else if ((isAnswer) && (event.target.id === 'equals')) {
//         answerCalc = eval(String(answer + calculation[lastTerm]));
//         calcOutput.innerHTML = answerCalc; 
//         answer = answerCalc;
//         console.log(answer);
//     } else if (event.target.id === "clear") {
//         clear(); 
//     } else if ((event.target.id === "plusOrMinus") && (!isNegative)) {

//     }
// });
