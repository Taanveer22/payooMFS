console.log("add money loaded");

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);

    const inputAddMoney = getInputFieldValueById("input-add-money");
    const inputPinNumber = getInputFieldValueById("input-pin-number");
    console.log(inputAddMoney, inputPinNumber);

    // wrong way to validate login info
    if (inputPinNumber === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);
      const newBalance = accountBalance + inputAddMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to add money");
    }
  });
