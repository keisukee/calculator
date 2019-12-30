let btn0Wrapper = document.getElementById('input-0');
let btn0 = btn0Wrapper.querySelector('button');

let outputBtn = document.getElementById('output-value')

let undoWrapper = document.getElementById('undo');
let undoBtn = undoWrapper.querySelector('button');

let resetWrapper = document.getElementById('reset');
let resetBtn = resetWrapper.querySelector('button');

let plusWrapper = document.getElementById('plus');
let plusBtn = plusWrapper.querySelector('button');

let minusWrapper = document.getElementById('minus');
let minusBtn = minusWrapper.querySelector('button');

let multipleWrapper = document.getElementById('multiple');
let multipleBtn = multipleWrapper.querySelector('button');

let divideWrapper = document.getElementById('divide');
let divideBtn = divideWrapper.querySelector('button');

let equalWrapper = document.getElementById('equal');
let equalBtn = equalWrapper.querySelector('button');

function insertValue(inputBtn) {
  outputValue = outputBtn.innerText;
  if (outputValue === '0') {
    outputBtn.innerText = inputBtn.innerText;
  } else {
    outputValue += inputBtn.innerText;
    outputBtn.innerText = outputValue;
  }
  console.log(inputBtn.innerText);
  console.log("btn is clicked!!");
}

function edit(elem) {
  const length = outputBtn.innerText.length;
  const formula = outputBtn.innerText;
  const lastWord = outputBtn.innerText[length - 1];

  if (outputBtn.innerText === '0') {
    outputBtn.innerText = elem.innerText;
  } else if (isSymbol(elem.innerText) && isSymbol(lastWord)) {
    let replaceFormula = formula.substr(0, length - 1);
    console.log('replaceFormula ', replaceFormula);
    replaceFormula += elem.innerText;
    outputBtn.innerText = replaceFormula;
  } else {
    outputBtn.innerText = outputBtn.innerText + elem.innerText;
  }
  console.log(outputBtn.innerText);
}

function isSymbol(symbol) {
  console.log('symbol', symbol);
  if (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/') {
    return true;
  } else {
    return false;
  }
}

function calc() {
  outputBtn.innerText = new Function("return + " + outputBtn.innerText)();
}


resetBtn.onclick = function() {
  outputBtn.innerText = 0;
}