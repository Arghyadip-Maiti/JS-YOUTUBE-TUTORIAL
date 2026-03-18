// ways to declare a string-->

let name = "Arghyadip"

console.log(name)//'Arghyadip'

let city = new String('Kota')

console.log(city)//String{'Kota'}
                 // 0 : "K"
                 // 1 : "o"
                 // 2 : "t"
                 // 3 : "a"
                 //length: 4
                 //[[prototype]]: String
                 //[[primitiveValue]]: "Kota"

//---------------------------------------


console.log(name[1])//'r'
console.log(city[2])//'t'

console.log(city.__proto__)
console.log(name.__proto__)//it provides the prototype of city...in node -> {} and in browser console it provides the whole prototype object...


// access any method of prototype...

console.log(name.length)//9
console.log(city.toUpperCase())//KOTA
console.log(city.charAt(1))//o
console.log(city.indexOf('m'))//-1
console.log(city.indexOf('a'))//3 [always finds the first a]

const newName = name.substring(0,5)//-ve value counts as 0
console.log(newName)//'Arghy'

const newCity = city.slice(0,2)//-ve value counts reverse...-1 is the last index...
console.log(newCity)//'Ko'
console.log(name.slice(-4,8))//'adi'


let input = "  aijhg. "
console.log(input.trim())//'aijhg'

let url = "https://adm.com/adm()"
console.log(url.replace('()','{}'))//'https://adm.com/adm{}'//only repalces the first search-value...

console.log(url.replaceAll('a','A'))//'https://Adm.com/Adm()'

console.log(url.includes("adm"))//true

let tone = "sa-re-ga-ma"
console.log(tone.split('-'))//['sa', 're', 'ga', 'ma'] returns an array separated through '-''








