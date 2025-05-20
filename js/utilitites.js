console.log("utilities loaded");

// input field function
function getInputFieldValueById(id) {
  const inputFieldValue = document.getElementById(id).value;
  const inputFieldValueNumber = parseFloat(inputFieldValue);
  // console.log(id);
  // console.log(inputFieldValue);
  // console.log(inputFieldValueNumber);
  return inputFieldValueNumber;
}

// text field function
function getTextFieldValueById(id){
  const textFieldValue = document.getElementById(id).innerText;
  const textFieldValueNumber = parseFloat(textFieldValue);
  console.log(textFieldValueNumber);
  return textFieldValueNumber;
}
