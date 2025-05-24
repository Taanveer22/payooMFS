console.log("connected index.js");

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    console.log(event.target);

    const mobileValue = document.getElementById("input-mobile-check").value;
    console.log(mobileValue);

    const pinValue = document.getElementById("input-pin-check").value;
    console.log(pinValue);
    

    if (mobileValue === "01761248294" && pinValue === "1234") {
      console.log("congrats! you have logged in");
      window.location.href = "../html/home.html";
    } else {
      console.log("wrong input...please try again later");
    }
  });
