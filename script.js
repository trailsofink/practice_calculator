let calculation = [];
let equationHist = [];
let answer = null;
let equation = null;
let lastValue = null;
let lastOp = null;
let isAnswer = false;

const calculator = document.querySelector('#calc');
const calcOutput = document.querySelector('#calcOutput');
const calcHist = document.getElementById('calcHist');
const inputs = calculator.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        let btnValue = input.ariaValueText;
        let btnValueShown = input.value;

        function pushArr() {
            calculation.push(btnValueShown);
        }

        function displayEquation() {
            equation = calculation.join('');
            calcOutput.innerText = equation;
            lastValue = calculation[calculation.length - 1];
            lastOp = calculation[calculation.length - 2];
            isAnswer = false;
        }
        
        function pushNum() {
            if (isNaN(calculation[calculation.length - 1])) {
                pushArr();
            } else if (!isNaN(calculation[calculation.length - 1])){
                calculation[calculation.length - 1] = calculation[calculation.length - 1] +  btnValueShown;
            }
            displayEquation(); 
        }

        function pushOp() {
           pushArr();
           displayEquation();
        }

        function plusOrMinus() {
            if (!isNaN(calculation[calculation.length - 1])) {
                calculation[calculation.length - 1] = "(-" + calculation[calculation.length - 1] + ')';
                displayEquation();
            } else if (isNaN(calculation[calculation.length - 1])) {
                calculation[calculation.length - 1] = calculation[calculation.length - 1].replace('-', '').replace('(', '').replace(')', '');
                displayEquation();
            }
        }

        function  percent() {
            if (!isNaN(calculation[calculation.length - 1])) {
                calculation[calculation.length - 1] = calculation[calculation.length - 1] + '%';
                displayEquation();
            } else if (!isNaN(calculation[calculation.length - 1])) {
                calculation[calculation.length - 1] = calculation[calculation.length - 1].replace('%', '');
                displayEquation();
            }
        }

        function doCalculation() {
            if (isAnswer) {
               equation = answer + lastOp + lastValue;  
            } 
            equationHist.push(equation);
            replaceSymbols = equation.replaceAll('x', '*').replaceAll('÷', '/').replaceAll('%', '/100'); 
            answer = eval(replaceSymbols);
            calcOutput.innerText = answer;
            calcHist.insertAdjacentHTML('beforeend', "<p>" + equationHist + "</p>");
            calculation = [];
            calculation.push(answer);
            equationHist = []; 
            isAnswer = true;    
        }

        function clear() {
            calculation = [];
            displayEquation();
        }

        function backspace() {
            if (calculation[calculation.length -1]) {
                calculation[calculation.length -1] = calculation[calculation.length - 1].slice(0, -1);
                displayEquation();    
            } else {
                calculation.pop();
                calculation[calculation.length -1] = calculation[calculation.length - 1].slice(0, -1);
                displayEquation(); 
            }
        }

        if (input.id === 'number') {
            pushNum();
        } else if (input.id === 'operator') {
            pushOp();
        } else if (input.id === 'equals') {
            doCalculation();
        } else if (input.id === 'plusOrMinus') {
            plusOrMinus();
        } else if (input.id === 'percent') {
            percent();
        } else if (input.id === 'clear') {
            clear();
        } else if (input.id === 'back') {
            backspace();
        }
    })
});
