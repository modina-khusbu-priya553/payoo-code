// document.getElementById('cashout-btn').addEventListener('click', function(){

//     // 1 - get the agent number & validate it
//     const agentNumberInput = document.getElementById('agent-number');
//         const agentNumber = agentNumberInput.value;
//         if(agentNumber.length !== 11){
//             alert('Invalid Agent number');
//             return;
//         }
//         console.log(agentNumber);

//     // 2 - get the amount 
//     const amountInputNumber = document.getElementById('cashout-amount');
//         const amount = amountInputNumber.value;
//         console.log(amount);

//     // 3 - get the current Balance, validate it & convert it to number
//     const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//     // 4 -  convert amount and balance into number & Calculate the new balance after cashout
//     const newBalance = Number(balance) - Number(amount);

//     // 4.1 - validate the new balance (if the new balance is less than 0, show an alert that the balance is not enough and return)

//     if(newBalance < 0){
//         alert('Your balance is not enough for this cashout');
//         return;
//     }
//     // 5 - Get the pin and verify it
//         const pinInput = document.getElementById('cashout-pin');
//         const pin = pinInput.value;

//     // check if the pin is correct or not & do action based on the result
//         if(pin === '1234'){
//             alert("Cash Out Successful!");
//             balanceElement.innerText = newBalance;
//         }else{
//             alert("wrong pin!");
//             return;
//         }
//     //  5.1 true:: show an alert > set the new balance > redirect to home page
//     // 5.2 false:: show an alert that the pin is wrong > return

// })