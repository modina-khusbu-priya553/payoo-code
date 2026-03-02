// we will use this function to get the value from any input by passing the id of the input to it

document.getElementById('cashout-btn').addEventListener('click', function(){

    // 1 - get the agent number & validate it by using the function getValueFromInputId
    const agentNumber = getValueFromInputId('agent-number');

    if(agentNumber.length !== 11){
        alert('Invalid Agent number');
        return;
    }

    // 2 - get the amount by using the function getValueFromInputId
    const cashOutAmount = getValueFromInputId('cashout-amount');

    // 3 - get the current Balance by using getBalance function
    const balanceAmount = getBalance();

     // 4 -  convert amount and balance into number & Calculate the new balance after cashout
    const newBalance = balanceAmount - Number(cashOutAmount);
    console.log(newBalance);

    // 4.1 - validate the new balance (if the new balance is less than 0, show an alert that the balance is not enough and return)
    if(newBalance < 0){
         alert('Your balance is not enough for this cashout');
         return;
     }

    // 5 - Get the pin and verify it by using the function getValueFromInputId
    const pin = getValueFromInputId('cashout-pin');

    //     // check if the pin is correct or not & do action based on the result
        if(pin === '1234'){
            alert("Cash Out Successful!");
            // we will use setBalance function and add the newBalance value as a parameter to set the new balance after cashout
            setBalance(newBalance);

                // History section
        // 1 - get (parent) history-container

        const history = document.getElementById('history-container');

        // 2 - create a new div child div

        const newHistory = document.createElement("div");

        // 3- set innerHtml to the new div

        newHistory.innerHTML = `
        <div class="border border-base-300 bg-base-100 w-full p-4 rounded-lg 
                shadow-sm flex justify-start gap-4 items-center">
            <div class="rounded-full bg-base-300 w-20">
                <img src="/assets/opt-1.png" alt="" class="p-7">
            </div>
            <div>
                Cash Out ${cashOutAmount} TK from
                ${agentNumber}
                at ${new Date().toLocaleString()}
            </div>

        </div>         
        
        `;
        history.append(newHistory);

        }else{
            alert("wrong pin!");
            return;
        }

    })



