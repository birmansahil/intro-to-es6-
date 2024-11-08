let firstName = 'Sahil';
let lastName = 'Birman';

// old way
//let greetingMessage = "Welcome back," + firstName + " " + lastName;

// new way
let greetingMessage = `Welcome back, ${firstName} ${lastName}`;
console.log(greetingMessage);

// performing calculations
let num1 = 10;
let num2 = 20;
let result = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result);

// multiple lines
let message = `Hello
World
!!!`;
console.log(message);