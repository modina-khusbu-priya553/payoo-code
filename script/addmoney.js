document.getElementById('add-money-btn').addEventListener('click',function(){

    // 1 - get select bank
    const bank = getValueFromInputId('add-money-bank');
    if(bank == "Select A Bank"){
        alert('Please select a bank');
        return;
    }

    // 2- get add-money account number & validation

    const accountNumber = getValueFromInputId('add-bank-number');
    if(accountNumber.length !== 11){
        alert("Invalid account number!")
        return;
    }

    // 3 - add-money-amount
    const cashWithdraw = getValueFromInputId('add-money-amount');

    //4 - new balance calculation after withdraw
    const balanceAmount = getBalance();
    const newBalance = balanceAmount + Number(cashWithdraw);
    
    // 4- get add-money-pin and validation
    const addMoneyPin = getValueFromInputId('add-money-pin');
    if(addMoneyPin === '1234'){
        alert(`Add Money Successful
            from ${accountNumber}, at ${new Date()}
            `);
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
                Add money success from
                ${bank}, acc-no ${accountNumber}
                at ${new Date().toLocaleString()}
            </div>

        </div>         
        
        `;
        history.append(newHistory);

    }else{
        alert('Invalid Pin')
    }

});


