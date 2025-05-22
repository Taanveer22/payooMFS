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

    // validation add money
    if (isNaN(inputAddMoney) === true) {
      alert("your input is not a number");
      return;
    }

    // wrong way to validate login info
    if (inputPinNumber === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      console.log(accountBalance);
      const newBalance = accountBalance + inputAddMoney;
      document.getElementById("account-balance").innerText = newBalance;

      // verify transaction history
      const li = document.createElement("li");
      li.classList.add("bg-primary");
      li.innerText = `Added Money : ${inputAddMoney} & New Balance : ${newBalance}`;
      console.log(li);
      document.getElementById("transaction-container").appendChild(li);
    } else {
      alert("failed to add money...");
    }
  });
