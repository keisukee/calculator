let btn1Wrapper = document.getElementById('input-1');
let btn1 = btn1Wrapper.querySelector('button');
let outputBtn = document.getElementById('output-value')

let undoWrapper = document.getElementById('undo');
let undoBtn = undoWrapper.querySelector('button');

let resetWrapper = document.getElementById('reset');
let resetBtn = resetWrapper.querySelector('button');



btn1.onclick = function() {
  outputValue = outputBtn.innerText;
  if (outputValue === '0') {
    outputBtn.innerText = btn1.innerText;
  } else {
    outputValue += btn1.innerText;
    outputBtn.innerText = outputValue;
  }
  console.log(btn1.innerText);
  console.log("btn is clicked!!");
}

resetBtn.onclick = function() {
  outputBtn.innerText = 0;
}