//1. Type Conversion:

//const inputNumber ="7500";
//console.log(inputNumber + 10);

//console.log(inputNumber);
//console.log(Number(inputNumber)); //we can change string data to number data using Number conversion. 
//console.log(typeof Number(inputNumber));

//const birthYear = 1993;
//console.log(string(birthYear)); //Here, we change number data to string data using String conversion.
//console.log(typeof string(birthYear));

//const firstName ='Amrita';
//console.log(Number(firstName)); //Here, we can't change this text data as a Number. But it will show in console as an invalid number.

//const firstName ='Amrita';
//const inputNumber ="7500";
//console.log(boolean(inputNumber));
//console.log(boolean(firstName));

//2. JavaScript type Coercion:
let bookNumber = "5";
console.log('I have' + bookNumber + 'Story Book');
console.log("20" - 5 ); //Here, coercion automatically change the data type to string to number and show result.
console.log("20" + 5); // But here, coercion doesn't change the data type cause here we use plus "+" function.
console.log("20" * 5);
console.log("20" / 5);
console.log("20" - "5");
//example: 
console.log(5 + 10 + "5");
console.log("100" - "50" + 10); //Because of using plus function on string and number data for coercion. we will find result in number data type.  
console.log("100" - "50" + "10");
console.log("15" - "5" - "4" - "3" + 5);
console.log("15" - "5" - "4" - "3" + "5");

//3. JavaScript Truthy and Falsy Value:
// 5 Falsy value
//0
//""
//null
//undefined
//NaN 
//console.log (0);
//console.log(Boolean(0));
//console.log(Boolean(""));
//console.log(Boolean(null));
//console.log(Boolean(undefined));
//console.log(Boolean(NaN));
//console.log(Boolean(1)); //It's a truthy value.
//console.log(Boolean("Amrita"));
//console.log(Boolean("123"));

// Example: "0" falsy value:
//const job= 0;
//if (job) {
//  console.log ("i have a good job");
// } else {
//   console.log("Looking for a good job!");
// }

//const job= 1;
//if (job) {
//    console.log ("i have a good job");
// } else {
//    console.log("Looking for a good job!");
// }

// Example: Undefined falsy value:
//let salary;
//if (salary) {
//    console.log("My salary is" + salary);
// } else {
//   console.log("My salary isn't set!");
//}

//let salary = 15000;
//if (salary) {
//    console.log("My salary is" + salary);
// } else {
//    console.log("My salary isn't set!");
// }

// 4. Conditional Statment:

//let earning = 5000;
//if(earning >35000) {
//    console.log("His earning is good!");
// } else if(earning >20000) {
//    console.log("His earning isn't bed");
// } else if(earning >10000) {
//    console.log("write something!");
// } else {
//    console.log("His earning isn't good enough!");
// }

//Example:
//let today="Friday";

//if(today=== "Saturday") {
//    console.log("Today 9pm we have a main live class!");
// } else if(today === "Sunday") {
//    console.log("Today 9pm we have a support class!");
// } else if(today === "Monday") {
//    console.log("Today 9pm we have a main class!");
// } else if(today === "Tuesday") {
//    console.log("Today 9pm we have a support class!");
// } else if(today === "Wednesday") {
//    console.log("Today 9pm we have a main class!");
// } else if(today === "Thursday") {
//    console.log("Today 9pm we have a support class!");
// } else (today === "friday") {
//    console.log("Today is our holiday!");
// }

//5. Nested Conditional Statment:
//const x=15;
//if (x >=10) 
//   if(x==10) {
//        console.log("x is equal to 10");
//    } else {
//        console.log("x is greater than 10!");
//    } else {
//    console.log("x is lower than 10!");
//    }

//6. Swich Statment:

let day = "Saturday";
switch(day) {                   //day==="Saturday"
    case "Saturday":
    console.log("Today 9pm we have a live main class!");
    break;
    case "Sunurday":
    console.log("Today 9pm we have a support class!");
    break;
    case "Monday":
    console.log("Today 9pm we have a live main class!");
    break;
    case "Tuesday":
    console.log("Today 9pm we have a support class!");
    break;
    case "Wednesday":
    console.log("Today 9pm we have a live main class!");
    break;
    case "Thursday":
    console.log("Today 9pm we have a support class!");
    break;
    default:
    console.log("Today is our holiday!");
}