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
function getTextFieldValueById(id) {
  const textFieldValue = document.getElementById(id).innerText;
  const textFieldValueNumber = parseFloat(textFieldValue);
  console.log(textFieldValueNumber);
  return textFieldValueNumber;
}

// show section function
function showSectionById(id) {
  // hide all the section by default
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document
    .getElementById("transaction-history-section")
    .classList.add("hidden");
  // show a specific section when we calling it via id
  document.getElementById(id).classList.remove("hidden");
}
