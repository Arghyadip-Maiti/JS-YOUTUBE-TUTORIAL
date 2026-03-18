let score = "45"

console.log(typeof(score))

//turn string into number--->

let scoreInNumber = Number(score)

console.log(typeof(scoreInNumber))

//---------------------------------------------

let name = "Arghyadip"

console.log(typeof(name))

//turn string into number--->

let nameInNumber = Number(name)

console.log(typeof(nameInNumber))//number

console.log(nameInNumber)//NaN (Not a Number)--type-->number

//-----------------------------------------------------

let nullVal = null

console.log(typeof(nullVVal))//undefined

//turn null into number--->

let nullValInNumber = Number(nullVal)

console.log(typeof(nullValInNumber))//number

console.log(nullValInNumber)//0

//--------------------------------<>--------------------------
let undefinedVal = undefined

console.log(typeof(undefinedVal))//undefined

//turn undefined into number--->

let undefinedValInNumber = Number(undefinedVal)

console.log(typeof(undefinedValInNumber))//number

console.log(undefinedValInNumber)//NaN

//---------------------------<>--------------------------

let undefinedValue = undefined

console.log(typeof(undefinedValue))//undefined

//turn undefined into string--->

let undefinedValueInString = String(undefinedValue)

console.log(typeof(undefinedValueInString))//string

console.log(undefinedValueInString)//undefined

//------------------------<>------------------------------

let nullValue = null

console.log(typeof(nullValue))//object

//turn null into string--->

let nullValueInString = String(nullValue)

console.log(typeof(nullValueInString))//string

console.log(nullValueInString)//null

//------------------------<>-------------------------

//let nullValue = null

console.log(typeof(nullValue))//object

//turn null into boolean--->

let nullValueInBoolean = Boolean(nullValue)

console.log(typeof(nullValueInBoolean))//boolean

console.log(nullValueInBoolean)//false

//-----------------------<>----------------------------

let str = "ACD"

console.log(typeof(str))//string

//turn string into boolean--->

let strInBoolean = Boolean(str)

console.log(typeof(strInBoolean))//boolean

console.log(strInBoolean)//true [false (for empty string)]


//----thus we can do as many conversions as possible---------





// "33" => 33
// "33abc" => NaN(number type)

// "" => false(boolean)
// "asd" => true(boolean)

// 0 <=> false
// 1 <=> true

// true(boolean) => "true"
// false(boolean) => "false"








//=-=-=-=-=-=-=-=-=-OPERATIONS-=-=-=-=-=-=-=-=-=-=-=-



let a = 3
let nega = -a
console.log(nega)//-3

//+,-,*,**,/,% -----mathematical operators...

let hi = "hello"
console.log(hi*3)//NaN

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+"2"+"2")//122
console.log(1+2+"2")//32

console.log("1"*"3")//3
console.log("3"-"1")//2
console.log("3"+"1")//31 not 4

console.log(1-"1")//0
console.log(1-"1"+3)//3
console.log(1-"1"+3+"4"+"4")//344

//------------------logical operators------------

console.log(true)//true
console.log(+true)//1
//console.log(true+)//error

console.log("")// (space)
console.log(+"")//0


