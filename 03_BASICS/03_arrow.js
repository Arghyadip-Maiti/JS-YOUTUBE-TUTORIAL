const user = {
    name: 'Arghya',
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.name}, welcome!!`)
    }
}

user.welcomeMessage()//Arghya, welcome!!

user.name = 'Arka'
user.welcomeMessage()//Arka, welcome!!

//this always talks about current context...

const obj = {
    name: 'Object1',
    age: 20,
    welcome: function(){
        console.log(this)
    }
}

obj.welcome()//{name: 'Object1', age: 20, welcome: [Function: welcome]}

obj.name = 'Object2'
obj.welcome()//{ name: 'Object2', age: 20, welcome: [Function: welcome] }

console.log(this)//{}//in node environment the (this) in global context will give you an empty object

//but in browser (this) in global context will provide a window object...//global object = window object

//this in a function which is not in an object...

function one(){
    console.log(this)
}

one()//it will give me an object with lots of info...


function two(){
    const name = 'two2'
    console.log(this)
}

two()//will get same thing as the one() function


function three(){
    let name = 'three3'
    console.log(this.name)
}

//or

// const three = function(){
//     let name = 'three3'
//     console.log(this.name)
// }

three()//udefined...//it can't catch name in function...it only works for objects...


//--arrow func-->

const four = () => {
    const name = 'four4'
    console.log(this.name)
}

four()//undefined

const objFunc = () => {
    console.log(this)
}

objFunc()//{}

//this in arrow function points to the (this) of global context...


//example of arrow function...


const add = (num1,num2) => {
    return num1+num2
}

console.log(add(3,4))//7

//...implicit return(for short functions)

//const Add = (num1,num2) => num1+num2  //no need of using return
//        or
//const Add = (num1,num2) => {return num1+num2}  //if using curly braces have to use return...
//        or
const Add = (num1,num2) => (num1+num2)  //in case of parantheses no need to use return...

console.log(Add(3,4))//7


//this bracket thing works when we retuen an object in function...

const func = () => {name: 'ADM'}
console.log(func())//undefined

const Func = () => ({name:'ADM'})
console.log(Func())//{name:'ADM'}

