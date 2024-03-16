/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1Value = Number(document.querySelector('#add1').value);
    let add2Value = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(add1Value, add2Value);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtract1Value = Number(document.querySelector('#subtract1').value);
    let subtract2Value = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1Value, subtract2Value);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1Value = Number(document.querySelector('#factor1').value);
    let factor2Value = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1Value, factor2Value);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide =(number1 , number2) => number1 / number2;

const divideNumbers = () => {
    let dividendValue = Number(document.querySelector('#dividend').value);
    let divisorValue = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividendValue, divisorValue);
}
    document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */
const getTotalButton = document.querySelector('#getTotal');

getTotalButton.addEventListener('click', function() {
  const subtotalInput = document.querySelector('#subtotal');
  const subtotalValue = Number(subtotalInput.value);

  if (isNaN(subtotalValue) || subtotalValue <= 0) {
    alert('Please enter a valid numeric amount.');
    return; 
  }

  const memberCheckbox = document.querySelector('#member');
  const isMember = memberCheckbox.checked;

  let totalAmount = subtotalValue;

  if(isMember) {
    totalAmount *= 0.8;  // Multiply by 0.8 to apply a 20% discount
  }

   // Output the total to the "total" span with two decimals using template string
   const totalSpan = document.querySelector('#total');
   totalSpan.textContent = `$ ${totalAmount.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');


/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;