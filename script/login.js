document.getElementById('login-btn').addEventListener('click', function(){

    // 1: get the mobile num input value
    const inputNumber = document.getElementById('input-num');
    const number = inputNumber.value;
    // 2: get the password input value
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // 3: match the mobile num and password 
    if(number === '01315871737' && pin === '1234'){
        // 3-1: true:::> alert> homePage
        alert('Login successful!');

        // go to home page
        // window.location.replace('./home.html'); //if we use replace() we can't go back to login page by clicking back button
        window.location.assign('./home.html');

    }else{
        // 3-2: false:::> alert> loginPage return
        alert('Invalid mobile number or password. Please try again.');
        return;
    }
})