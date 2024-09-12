// Figure out how to not let the equation buttons get pushed twice.
// set each term to be an array starting with an operator

let calculator = document.querySelector('#calc');

let calculation = [];

let iscalculation = true;

let isAnswer = false;

let isEqual = false;

const calcOutput = document.querySelector('#calcOutput');


calculator.addEventListener('click', function(event) {

    let btnValue = event.target.ariaValueText;
    let btnValueShown = event.target.value;
    let btnValueStr = btnValueShown.toString();

    function add() {
        let term = {};
        let i = calculation.length + 1;

        term[`term${i}`] = [];
        term[`term${i}`].push(btnValue);
        calculation.push({[`term${i}`]: term[`term${i}`]});
        calcOutput.lastElementChild.insertAdjacentHTML('beforeend', btnValueStr);
    };

    function clear() {
        calcOutput.innerHTML = '<span></span>';
        calculation = []; 
        calculation.push('Welcome');
        isAnswer = false;
    }

    if((!isAnswer) && (event.target.tagName === 'INPUT') && (event.target.ariaValueText !== "")) {
        add();
    } else if((isAnswer) && (event.target.tagName === 'INPUT') && (event.target.ariaValueText !== "")) {
        clear();
        add();
    } else if ((!isAnswer) && ((!isEqual)) && (event.target.tagName === 'INPUT') && (event.target.value === "=")) {
        isAnswer = true; 
        let makeAnser = calculation.join('');
        let answer = eval(makeAnser);
        calcOutput.innerHTML = answer; 
        isEqual = true;
    } else if ((!isAnswer) && ((isEqual)) && (event.target.tagName === 'INPUT') && (event.target.value === "=")) {

    } else if((isAnswer) && (event.target.tagName === 'INPUT') && (event.target.ariaValueText !== "")) {
        clear();
        add();
    } else if ((isEqual)) {

    } else if((event.target.tagName === 'INPUT') && (event.target.value === "AC")) {
        clear(); 
    } 
});
