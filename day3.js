//TASK1:
// Function to check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is a positive number.");
    } else if (num < 0) {
        console.log(num + " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}

let number = parseFloat(prompt("Enter a number:"));
checkNumber(number);


// Function to check if a person is eligible to vote
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

let age = parseInt(prompt("Enter your age:"));
checkVotingEligibility(age);

//TASK2:
// Function to find the largest of three numbers
function findLargest(a, b, c) {
    let largest;
    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    console.log("The largest number is: " + largest);
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

findLargest(num1, num2, num3);

//TASK3:
// Function to determine the day of the week based on the number
function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    console.log(dayName);
}

let dayNumber = parseInt(prompt("Enter a number (1-7):"));
getDayOfWeek(dayNumber);