function sayMyName(){
    console.log("A")
    console.log("R")
    console.log("G")
    console.log("H")
    console.log("Y")
    console.log("A")
}
sayMyName//reference
sayMyName()//execution

function add(num1,num2){
    console.log(num1+num2)
}
add()//NaN
add(3,4)//7
add(3,"4")//34

function Add(num1,num2){
    return num1+num2;
}

const result = Add(4,5)
console.log(result)//9

function message(userName){
    return `Hello! ${userName}`
}
const msg1 = message("Arghya")
console.log(msg1)
console.log(message(""))//Hello! __
console.log(message())//Hello! undefined

function validMessage(userName){
    if(userName===undefined){
        return `Please enter a valid name...`
    }
    return `Hello! ${userName}`
}
console.log(validMessage())// Please enter a valid name...
console.log(validMessage("ADM"))// Hello! ADM

//giving default value in parameter--->

function defaultMessage(userName = "Ram"){
    return `Hello! ${userName}`
}

 console.log(defaultMessage("ADM"))// Hello! ADM
 console.log(defaultMessage())// Hello! Ram
  

//shoping cart case--->
//don't know how many parameters will come...

//using rest operator(...)-->

function calcCartPrice(...num1){
    return num1
}
console.log(calcCartPrice(12,34,56))//[12,34,56]
console.log(calcCartPrice(1,2))//[1,2]

function restOperator(val1, val2, ...num1){
    return num1
}
console.log(restOperator(12,13,45,67,43))//[45,67,43]//first two value will go to val1 and val2 as parameter...

const obj = {
    name: "Arghya",
    age: 20
}

function handleObject(object){
    return `My name is ${object.name} and I am ${object.age} years old`
}

console.log(handleObject(obj))//My name is Arghya and I am 20 years old
console.log(handleObject({name: "Arkaprava",age: 23}))//My name is Arkaprava and I am 23 years old

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))//400
console.log(returnSecondValue([200, 400, 500, 1000]))//400

