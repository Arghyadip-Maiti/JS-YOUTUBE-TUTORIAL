const ARRAY =[ 0, 1, 2, 3, 4, 5 ]

const arrOfDifType = [1, 2, 3, true, "Arghya"]

const array = new Array(1, 2, 3, 4, 5)

console.log(Array[2])//2

//array creates shalow copy[shares same referance point...]
//deep copy[shares different reference point...]

//array in js is resizable...

//--array methods()-->

const arr = [1, 2, 3, 4, 5]

arr.push(6,7)//add at last//changes the main array...
console.log(arr)//[1, 2, 3, 4, 5, 6, 7]

arr.pop()//deletes only the last element//changes the main array...
console.log(arr)//[1, 2, 3, 4, 5, 6]

arr.unshift(-1,0)//add at the begining//changes the main array...
console.log(arr)//[-1, 0, 1, 2, 3, 4, 5, 6]

arr.shift()//deletes only the first element//changes the main array...
console.log(arr)//[0, 1, 2, 3, 4, 5, 6]

console.log(arr.includes(3))//true[boolean]
console.log(arr.includes("Arghya"))//false

console.log(arr.indexOf(3))//3
console.log(arr.indexOf("Arghya"))//-1

const arrInString = arr.join()
console.log(arrInString)//0,1,2,3,4,5,6(string)

//--slice & splice-->

const a = [3, 4, 5, 6, 7, 8]
console.log("A ",a)// A [3, 4, 5, 6, 7, 8]

const sliceArr = a.slice(1,3)//doesn't change the main array..
console.log(sliceArr)//[ 4, 5 ]
console.log("B ",a)// B [3, 4, 5, 6, 7, 8]

const spliceArr = a.splice(1,3)//changes the main array...
console.log(spliceArr)//[ 4, 5, 6 ]
console.log("C ",a)// C [3, 7, 8]
