const operator = prompt('Enter operator (+, -, /. *)');
const num1 = parseFloat(prompt('Enter the first number'));
const num2 = parseFloat(prompt('Enter the second number'));

let result;
if(operator == '+'){
    result = num1 + num2;
} else if(operator == '-'){
    result = num1 - num2;
} else if(operator == '/'){
    result = num1 / num2;
} else if(operator == '*'){
    result = num1 * num2;
} 

alert(`${num1} ${operator} ${num2} = ${result}`);