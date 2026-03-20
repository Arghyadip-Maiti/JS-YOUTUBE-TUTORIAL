const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Flash", "Superman", "Batman"]

marvel.push(dc)
console.log(marvel)//["Thor", "Ironman", "Spiderman", ["Flash", "Superman", "Batman"]]

console.log(marvel[3])//["Flash", "Superman", "Batman"]
console.log(marvel[3][0])//'Flash'

const hero = marvel.concat(dc)//concat doesn't change the original marvel array it creates a new array...

console.log(hero)//["Thor", "Ironman", "Spiderman", "Flash", "Superman", "Batman"]

//--spread operator(...)-->

const a1 = [1, 2, 3]
const a2 = ["a","b","c"]
const a3 = ["A","B","C"]

const a =[...a1,...a2,...a3]
console.log(a)//[1, 2, 3, "a", "b", "c", "A", "B", "C"]

//--flat()-->

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//in the () we pass for how much steps we want to flatten the array

console.log(real_another_array)//[1,2,3,4,5,6,7,6,7,4,5]

//----<>----->
//asking if array...
console.log(Array.isArray("Arghya"))//false

//converting to array...
console.log(Array.from("Arghya"))//["A","r","g","h","y","a"]

console.log(Array.from({name:"Arghya"}))//[]   you have to tell what do you want as the array...

//------------>

let val1 = 100
let val2 = 200
let val3 = 300

console.log(Array.of(val1,val2,val3))//[100, 200, 300]


