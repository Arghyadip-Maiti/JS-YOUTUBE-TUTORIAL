let number = 100//js automatically assumes its a number
console.log(number)//100--->doesn't show prototype...but have inbuild methods...

let num = new Number(100)//you persisit that its a number
console.log(num)//[Number: 100]--->has its prototype and methods...
console.log(num.__proto__)//{}(node) prototype(console)

console.log(number.toString())//'100'

let balance = 100
console.log(balance.toFixed(2))//100.00 (vvi)

let value = 123.8966
console.log(value.toPrecision(4))//123.9
console.log(value.toPrecision(3))//124
console.log(value.toPrecision(2))//1.2e+2

const billion = 1000000000
console.log(billion.toLocaleString())//1,000,000,000
console.log(billion.toLocaleString('en-IN'))//100,00,00,000

//in the console we can see the val.MIN_VALUE or val.MAX_VALUE and other methods

//========================< MATHS >===========================

console.log(Math)//go and see the prototype object...

console.log(Math.abs(-4))//4
console.log(Math.round(5.4))//5
console.log(Math.ceil(4.01))//5
console.log(Math.floor(4.99))//4

console.log(Math.min(1,2,3,4))//1
console.log(Math.max(1,2,3,4))//4

console.log(Math.random())//0 =< any decimal no >=1

//to get a number from 1 to 6 randomly

const min = 1
const max = 6

console.log(Math.floor (Math.random() * (max - min + 1))+ min)

