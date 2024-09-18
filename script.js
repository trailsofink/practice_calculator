// Add and operator onto the end of the answer.

let calculator = document.querySelector('#calc');
let calculation = [];
let equationHist = [];
let isAnswer = false;
let isDoubleOp = false;
let isFirstNumber = true;
let answer = null;
const calcOutput = document.querySelector('#calcOutput');

calculator.addEventListener('click', function(event) {

    let btnValue = event.target.ariaValueText;
    let btnValueShown = event.target.value;
    let btnValueStr = btnValueShown.toString();
    let lastTerm = calculation.length - 1;

    function clear() {
        calcOutput.innerHTML = '<span></span>';
        calculation = [];
        answer = null;
        isAnswer = false;
        isDoubleOp = false;
        isFirstNumber = true;
    }

    function pushValue() {
        calculation.push(btnValue);
        calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
    };


    function addNum() {
        if (!calculation.length) {
            pushValue();
            isFirstNumber = false;
        } else {
            let current = calculation[lastTerm];
            calculation[lastTerm] = current + btnValue;
            calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
        }
    };

    if ((event.target.id === "number") && (!isAnswer)) {
        addNum();
        isDoubleOp = false;
    } else if ((event.target.id === "number") && (isAnswer)) {
        clear();
        addNum();
    } else if ((event.target.id === "operator") && (!isFirstNumber) && (!isDoubleOp)) {
        pushValue(); 
        isDoubleOp = true;
    } else if ((!isAnswer) && (event.target.id === 'equals')) {
        isAnswer = true; 
        let equation = calculation.join('');
        answer = eval(equation);
        calcOutput.innerHTML = answer; 
        equationHist.push(equation + '=' + answer);
        document.getElementById('calcHist').insertAdjacentHTML('beforeend', "<span>" + equationHist + "</span>");
        isFirstNumber = true;
    } else if ((isAnswer) && (event.target.id === 'equals')) {
        answerCalc = eval(String(answer + calculation[lastTerm]));
        calcOutput.innerHTML = answerCalc; 
        answer = answerCalc;
        console.log(answer);
    } else if (event.target.id === "clear") {
        clear(); 
    }
});
