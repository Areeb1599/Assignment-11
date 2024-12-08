let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let sum = number1 + number2;
alert(`The sum of ${number1} and ${number2} is ${sum}.`);

let username = prompt("Enter your name:");
let purchaseamount = parseFloat(prompt("Enter the total purchase amount:"));
let discount = 10;
let discountamount = (purchaseamount * discount) / 100;
let finalamount = purchaseamount - discountamount;
alert(`Hello ${username}, your final amount after a 10% discount is ${finalamount}`);

let favoriteanimal = prompt("Waht is your favorite animal?");
alert(`Wow, ${favoriteanimal}s are amazing creatures!`);