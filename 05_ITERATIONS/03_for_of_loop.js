// for of loop //can use for array, object(for-in loops) or string...

const arr = [1, 2, 3, 4, 5]

for(const ele of arr){
    console.log(ele);// 1 \n 2 \n 3 \n 4 \n 5
}
 
const str = 'Arghya'

for (const ch of str) {
    console.log(ch);// 'A' \n 'r' \n 'g' \n 'h' \n 'y' \n 'a'
}
//can also do for objects...


// Maps-->

const map = new Map()//much like hashmap in java...
// collection of key-value pairs... doesn't have any duplicate values...order of entry maintained...

map.set('In', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

console.log(map); //Map(3){'In' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}


const map2 = new Map()

map2.set('In', 'India')
map2.set('USA', 'United States of America')
map2.set('Fr', 'France')
map2.set('In', 'India')

console.log(map2); //Map(3){'In' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}

//no duplicate pairs...


const map3 = new Map()

map3.set('In', 'India')
map3.set('USA', 'United States of America')
map3.set('Fr', 'France')
map3.set('Ind', 'India')

console.log(map3); //Map(4){'In' => 'India', 'USA' => 'United States of America', 'Fr' => 'France', 'Ind' => 'India'}


// for of loop in maps-->

for(const key of map){  //--> ['In', 'India']
    console.log(key);    //['USA', 'United States of America']
}                        // ['Fr', 'France']


for(const [key, value] of map){    
    console.log(key,'and',value);    
}  //  In and India
//     USA and United States of America
//     Fr and France 


// for of loops in object-->

const myObj = {
    name1: 'Arghya',
    name2: 'Arka'
}

for(const [key, value] of myObj){
    console.log(key, 'and', value);
}// error...//obj is not iterable...

//for objects the syntax of for-of loop is different...
