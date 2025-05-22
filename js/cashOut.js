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

    // cash out input validation
    if (isNaN(inputCashOut) === true) {
      alert("your input is not a number");
      return;
    }

    // wrong way to validate login info
    if (inputPin === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);
      // account balance validation
      if (accountBalance < inputCashOut) {
        alert("you don't have sufficient balance");
        return;
      }
      const newBalance = accountBalance - inputCashOut;
      document.getElementById("account-balance").innerText = newBalance;
      // verify the cash out transaction
      const li = document.createElement("li");
      li.classList.add("bg-secondary");
      li.innerText = `Cash Out : ${inputCashOut} & New Balance : ${newBalance}`;
      document.getElementById("transaction-container").appendChild(li);
    } else {
      alert("wrong input...please try later...");
    }
  });
