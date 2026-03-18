//              |-->primitive(call by value)
//  Data-types--|
//              |-->non-primitive(call by ref)

// primitive-->
//  7 types: string, number, boolean, null, undefined, symbol, bigint

// non-primitive-->
// types: array, object, function


const no = 123;
const decimalno = 123.34
const isMale = true
const salary = null
const userEmail;


//how to write symbol-->

const id = symbol('123')//this string '123' will return a value

const anotherId = symbol('123')//this string(although same) will return different value...

console.log(id === anotherId)//false

// how to write bigint--->

let bigNo = 123456789102344554444n

//js is a dynamically typed language...


//+++++++++++++++++++++++MEMORY TYPE++++++++++++++++++++++++

// stack(primitive), heap(non-primitive)



