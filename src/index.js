const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputElement = document.getElementById('output');

const convertNumberToRoman = (num) => {
    const numeralsArray = [ 
        { value: 1000, symbol: 'M' }, 
        { value: 900, symbol: 'CM' }, 
        { value: 500, symbol: 'D' }, 
        { value: 400, symbol: 'CD' }, 
        { value: 100, symbol: 'C' }, 
        { value: 90, symbol: 'XC' }, 
        { value: 50, symbol: 'L' }, 
        { value: 40, symbol: 'XL' }, 
        { value: 10, symbol: 'X' }, 
        { value: 9, symbol: 'IX' }, 
        { value: 5, symbol: 'V' }, 
        { value: 4, symbol: 'IV' }, 
        { value: 1, symbol: 'I' } 
    ]; 
    
    let result = ''; 
    console.log("Starting conversion for:", num); 
    for (const numeral of numeralsArray) { 
        console.log(`Checking if ${num} >= ${numeral.value}`); 
        while (num >= numeral.value) { 
            result += numeral.symbol; 
            num -= numeral.value; 
            console.log(`Added ${numeral.symbol}, remaining number: ${num}`); 
        }
    }
    console.log("Conversion Result:", result);
    return result;
}

const handleConvertButtonClick = () => {
    const userInput = number.value;
    console.log("User Input:", userInput);
    outputElement.textContent = '';

    let errorMessage;

    if (userInput === '') {
        errorMessage = 'Please enter a valid number';
    } else if (userInput < 1) {
        errorMessage = 'Please enter a number greater than or equal to 1';
    } else if (userInput >= 4000) {
        errorMessage = 'Please enter a number less than or equal to 3999'
    } 
    
    if (!errorMessage) {
        const romanNumeral = convertNumberToRoman(Number(userInput));
        console.log("Roman Numeral:", romanNumeral);
        outputElement.innerText = romanNumeral;
    } else {
        outputElement.textContent = errorMessage;
    };

    outputElement.classList.toggle('hidden', !errorMessage);

}

convertBtn.addEventListener("click", handleConvertButtonClick)