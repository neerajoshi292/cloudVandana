let operatorClicked = false;

const appendToResult=(value)=>{
  const resultInput = document.getElementById('result');
  const currentValue = resultInput.value;

  if (resultInput.value === 'Error') {
      resultInput.value = '';
  }
  
  if ('+-*/'.includes(value)) {
      if (operatorClicked) {
          resultInput.value = currentValue.slice(0, -1);
      }
      operatorClicked = true;
  } else {
      operatorClicked = false;
  }
  resultInput.value += value;
}

const calculateResult=()=> {
  const resultInput = document.getElementById('result');
  try {
      resultInput.value = eval(resultInput.value);
  } catch (error) {
      resultInput.value = 'Error';
  }
  operatorClicked = false;
}

const clearResult=()=> {
  const resultInput = document.getElementById('result');
  resultInput.value = '';
  operatorClicked = false;
}