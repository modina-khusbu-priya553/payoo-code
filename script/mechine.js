// mechine id > input value

function getValueFromInputId(id){
    const inputElement = document.getElementById(id);
    const value = inputElement.value;
    console.log(id,value);
    return value;
}

// get Balance function to use balance so that we can use it without repeating the code
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}
// set balance function to update the balance after cash out / cash in, it will take a value and then set it to the balance element
function setBalance(value){
    const balanceElement = document.getElementById('balance');
//we call the function, value is the new balance that we want to set it to the balance element w
    balanceElement.innerText = value;
}

// hide all / show after click

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const history = document.getElementById('history')

    // hide all
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    history.classList.add("hidden")

    // show 
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}


