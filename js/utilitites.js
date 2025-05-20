console.log("utilities loaded");

function getInputFieldValueById(id) {
  const inputFieldValue = document.getElementById(id).value;
  const inputFieldValueNumber = parseFloat(inputFieldValue);
  console.log(id);
  console.log(inputFieldValue);
  console.log(inputFieldValueNumber);
  return inputFieldValueNumber;
}
