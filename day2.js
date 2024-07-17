//TASK:1
function addnum(a,b) {
    const sum = a+b;
    console.log(`the sum of ${a} and ${b} is ${sum}`);
}

addnum(5, 10);

//TASK2:
function sunnum(a,b) {
    const difference = a - b;
    console.log(`the difference between ${a} and ${b} is ${difference}`);
}

sunnum(15, 10);

//TASK3:
function multnum(a,b) {
    const product = a * b;
    console.log(`the product of ${a} and ${b} is ${product}`);
}

multnum(5, 10);

//TASK4:
function divnum(a,b) {
    if (b === 0) {
        console.log("Error: Division by zero");
    } else {
        const quotient = a / b;
        console.log(`the quotient of ${a} and ${b} is ${quotient}`);
    }
}

divnum(15, 5);

//TASK5:
function findRemainder(a,b){
    const remainder = a%b;
    console.log(`the remainder of ${a} divided by ${b} is ${remainder}`);
}

findRemainder(15, 5);   

//TASK6:
let num = 7;
num +=2;
console.log(num);

//TASK7:
let num1=8;
num1 -=5;
console.log(num1);