//singleton// we can create an object with (object.create)...here we get singleton object...

//object literals

//declaring a symbol-->

const mySym = Symbol("key1")

//declaring an object-->

const user = {
    name: "Arghya",
    age: 20,
    location: "Kolkata",
    email: "arghya@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday","Saturday"]
    //adding symbol in obj
    //[mySym]: "mykey1"
}

console.log(user)
console.log(user.email)
console.log(user["email"])
//console.log(user[mySym])

//why do we need user["email"] instead of user.email...

const obj = {
    "name": "Object-name"
}

console.log(obj.name)//obj.name
//console.log(obj."name")//error
//can't access

//console.log(obj["name"])//object-name

//now this thing has updated...no issues now...

//--------->
//updating value...
user.email = "adm@gmail.com"

//freezing the object...
//Object.freeze(user)
//now if we change anything it'll not effect the user obj...
user.email = "arg@gmail.com"
console.log(user.email)//adm@gmail.com

//--adding function in object-->

user.greeting = function(){
    console.log("Hello")
}

console.log(user.greeting)//[Function (anonymous)]

console.log(user.greeting())//Hello
                            //undefined

user.greetings2 = function(){
    console.log(`Hello ${this.name}`)
}    

console.log(user.greetings2())//Hello Arghya

