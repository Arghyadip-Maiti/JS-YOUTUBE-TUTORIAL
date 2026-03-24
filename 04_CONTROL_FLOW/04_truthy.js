const userEmail = "adm@gmail.com"

if(userEmail){
    console.log(`got the user-email`)
}else{
    console.log(`don't have an user-email`)
}//(true)  - got the user-email

// string is a truthy value....


const emptyEmail = ""

if(emptyEmail){
    console.log(`got the email`)
}else{
    console.log(`didn't get the email`)
}//(false)  - didn't get the email

// empty string is a falsy value...


const emptyArray = []

if(emptyArray){
    console.log(`got the email`)
}else{
    console.log(`didn't get the email`)
}//(true)  - got the email

// empty array is a truthy value...


// falsy value --> false, 0, -0, 0n(bigint), "", null, NaN, undefined

// truthy value --> everything else...
//              --> "0", 'false', " ", [], {}, function(){}, 


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}//Object is empty


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)//5

val1 = null ?? 10
console.log(val1)//10

val1 = undefined ?? 15
console.log(val1)//15

val1 = null ?? 5 ?? 10 ?? 15
console.log(val1)//5 <--first value


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")//more than 80