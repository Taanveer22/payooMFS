console.log("connected transaction js");

// show add money section in the ui
document
  .getElementById("show-add-money-btn")
  .addEventListener("click", function (event) {
    console.log(event.target);
    showSectionById("add-money-section");
  });

// show cash out section in the ui
document
  .getElementById("show-cash-out-btn")
  .addEventListener("click", function (event) {
    console.log(event.target);
    showSectionById("cash-out-section");
  });

// show transaction section in the ui
document
  .getElementById("show-transaction-btn")
  .addEventListener("click", function (event) {
    console.log(event.target);
    showSectionById("transaction-history-section");
  });

