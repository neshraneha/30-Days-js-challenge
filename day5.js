//Activity1:
//Task1:
function EvenOdd(number){
    if(number%2==0){
        console.log(number + " is even");
    }else{
        console.log(number + " is odd");
    }
}

EvenOdd(4);
EvenOdd(5);

//Task2:
function sqaure(number){
    return number*number;
}
const result0 = sqaure(4);
console.log(result0);


//Activity:
//Task3:
const max=function(num1, num2){
    const max=(num1>num2) ? num1 : num2;
    console.log("the maximum of: " + num1 +"and" + num2 + "is" + max);
    return max;
};
max(10,20);
max(13,55);

//Task4:
const charStrings = function(str1 , str2) {
    return str1 + str2;
};
const result01 = charStrings("hello, ","code");
console.log(result01);


//Activity:
//Task5:
const calculateSum = (num1, num2) =>
    num1 + num2;

const sum = calculateSum(5, 17);
console.log(sum);

//Task6:
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
const result = containsCharacter("Hello, World!", "W");
console.log(result); // Output: true

const result2 = containsCharacter("Hello, World!", "x");
console.log(result2); // Output: false


//Activity:
//Task7:
function multiply(num1, num2 = 1) {
    return num1 * num2;
  }
  
  // Example usage:
  const result1 = multiply(5, 3);  
  const result3 = multiply(5);     
  console.log(result1); // Output: 15
  console.log(result3); // Output: 5

  //Task8:
  function greet(name, age = 'unknown') {
    return (Hello, ${name}! You are ${age} years old.);
  }
  
  // Example usage:
  const greeting1 = greet('Alice', 25);  
  const greeting2 = greet('Bob');        
  
  console.log(greeting1); 
  console.log(greeting2);  

  //Activity5:
  //Task9:
  function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const result5 = sumNumbers(numbers);  
  
  console.log(result5); // Output: 15
  function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
      func();
    }
  }
  
  const sayHello = () => console.log("Hello!");
  
  repeatFunction(sayHello, 3);
  // Output:
  // Hello!
   
  //Task10:
  function composeFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
  }
  
  const addTwo = num => num + 2;
  const square = num => num * num;
  
  const result6 = composeFunctions(addTwo, square, 3);
  console.log(result6); // Output: 25    