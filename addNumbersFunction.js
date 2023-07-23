//  Function called before declaration to demonstrate hoisting

const sum = addNumbers(63, 75)
console.log("Sum:", sum);

function addNumbers( num1, num2){
    return num1+ num2;
}