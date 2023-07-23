// Function called before declaration to demonstrate hoisting

const multiply = multiplyNumbers(86,18);
console.log("The Multiplication of two numbers is:" , multiply);

function multiplyNumbers( num1 , num2){
    var result = num1 * num2;
    return result;
}