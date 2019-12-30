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
  if (outputBtn.innerText === '0') {
    outputBtn.innerText = elem.innerText;
  } else {
    outputBtn.innerText = outputBtn.innerText + elem.innerText;
  }
  console.log(outputBtn.innerText);
}

function calc() {
  outputBtn.innerText = new Function("return + " + outputBtn.innerText)();
}


resetBtn.onclick = function() {
  outputBtn.innerText = 0;
}