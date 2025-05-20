console.log("cash out loaded");

document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);
    // console.log('cash out btn clicked');

    const inputCashOut = getInputFieldValueById("input-cash-out");
    const inputPin = getInputFieldValueById("input-pin");
    console.log(inputCashOut, inputPin);

    // wrong way to validate login info
    if (inputPin === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);
      const newBalance = accountBalance - inputCashOut;
      document.getElementById('account-balance').innerText = newBalance;
    }
  });
