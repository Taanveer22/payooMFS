console.log('add money loaded');

document.getElementById('btn-add-money').addEventListener('click', function (event){
    event.preventDefault();
    // console.log(event);
    // console.log(event.target);

    const inputAddMoney = getInputFieldValueById('input-add-money');
    const inputPinNumber = getInputFieldValueById('input-pin-number');
    console.log(inputAddMoney, inputPinNumber);
})