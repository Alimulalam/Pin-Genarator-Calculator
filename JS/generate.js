function generatePin() {
    const random = Math.round(Math.random() * 10000);
    const pin = random + '';
    if (pin.length === 4) {
        return random
    }
    else {
        return generatePin();
    }
};

document.getElementById('generate-pin').addEventListener('click', function () {

    const pin = generatePin();
    const getPin = document.getElementById('pin');
    getPin.value = pin;
});

//calculator

document.getElementById('digit-container').addEventListener('click', function () {
    // console.log(event.target.innerText);
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const pinTypedField = document.getElementById('pin-typed');
            pinTypedField.value = '';
        }
        else if (digit === 'B') {

            const pinTypedField = document.getElementById('pin-typed');
            const pinTypedFieldString = pinTypedField.value.split('');
            pinTypedFieldString.pop();
            const remainingDigit = pinTypedFieldString.join('');
            pinTypedField.value = remainingDigit;
        }
    }
    else {
        const pinTypedField = document.getElementById('pin-typed');
        const previousPinTyped = pinTypedField.value;
        const newPinTyped = previousPinTyped + digit;
        pinTypedField.value = newPinTyped;
    }
});


//matching 

document.getElementById('check-pin').addEventListener('click', function () {
    const generatePinField = document.getElementById('pin');
    const currentPin = generatePinField.value;

    const calculatorpinField = document.getElementById('pin-typed');
    const calculatorPin = calculatorpinField.value;

    const currentPinValueSuccess = document.getElementById('correct-pin');

    const currentPinValueFailer = document.getElementById('incorrect-pin');

    if (currentPin === calculatorPin) {
        currentPinValueSuccess.style.display = 'block';
        currentPinValueFailer.style.display = 'none';
    }
    else {

        currentPinValueFailer.style.display = 'block';
        currentPinValueSuccess.style.display = 'none';

    }
});

