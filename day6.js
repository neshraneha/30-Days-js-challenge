//Activity 1:
//Task 1:
const num= [1,2,3,4];
console.log(num);

//Task 2:   
const nums= [1,2,3,4,7];
const firstNum = num[0];
const lastNum = num[nums.length - 1];
console.log("first number:", firstNum);
confirm("last number:", lastNum);

//Activity
//Task 3:
const number =[1,3,5,7];
number.push(9);
console.log("updated array:", number);

//Task 4:
const popnum = [1,2,3,4,5];
popnum.pop();
console.log("pop num:", popnum);

//Task 5:   
const shiftnum = [1,2,3,4,5];

shiftnum.shift();
console.log("shift number :",shiftnum);

//Task 6:
 const unshiftnum = [1,2,3,4,5];

unshiftnum.unshift(0);
console.log("unshift number :",unshiftnum);

//Actively 3:
//Task 7:
const numBer = [1,2,3,4];
const doubleNumber = numBer.map(numBer=>numBer*2);
console.log("double number :",doubleNumber);

//Task 8:   
const filtnumber = [1,2,3,4];
const evenNumber = filtnumber.filter(filtnumber=>filtnumber % 2 ===0);

console.log("even number :", evenNumber);

//Task 9:
const rednum = [1,2,3,4];
const sum = rednum.reduce((accumulator,currentValue)=>accumulator + currentValue,0);

console.log("sum :", sum);

//Actively 4:
//Task 10:
const loopNum = [1,2,3,4];
for (let i=0; i<loopNum.length; i++){
    console.log(loopNum[i]);
}

//Task 11:
let array = ['apple', 'orange', 'banana'];
array.forEach(function(element){
    console.log(element);
});

//Activity 5:
//Task 12:
const matrix = [
    [1,2,4],
    [3,4,6],
    [5,6,8]
];
console.log(matrix);

//Task 13:
const matrixs = [
    [1,2,4],
    [3,4,6],
    [5,6,8]
];
const element =matrixs[2][3];

console.log("element at matrixs[2][3]:", element);