// Javascript Execution Context    

// code --> Global EC
//           (this)
//             |
//             v
//       window object

//1. Global Execution Context
//2. Funtional Execution Context
//3. Eval Execution Context


// code --> Memory Creation Phase/ Creation Phase
//                     |
//                     v
//              Execution Phase

//ex->

let val1 = 10
let val2 = 5
function add(num1, num2){
    let total = num1+num2
    return total
}
let result1 = add(val1, val2)
let result2 = add(10, 2)

// 1.   Global Execution
//             |
//             v
//          ( this )

// 2.   Memory Phase

// val1 -> undefined
// val2 -> undefined
// add -> definition (the whole function without execution)
// result1 -> undefined
// result2 -> undefined

// 3.   Execution Phase

// val1 <- 10
// val2 <- 5
// add <- nothing to execute...
// result1 <--- add ---> new Executional Context for function
//   |                       ___________________________
//  /|\                     | new variable enviournment | 
//   |                      |            +              |
//   |                      |     ececution thread      |
//   |                      |___________________________|
//   |                      a. Memory phase
//   |                       val1 -> undefined
//   |                       val2 -> undefined
//   |                      total -> undefined
//   |
//   |                      b. Execution Phase
//   |                       num1 <-10
//   |                       num2 <- 5
//   |                      total <- 15(this total will be 
//   |                              /  returned to the Global 
//   |_____________________________/   Execution Context...)
//                          [ after work done EC delete ]


// result2 <--- add ---> new Executional Context for function
//   |                       ___________________________
//  /|\                     | new variable enviournment | 
//   |                      |            +              |
//   |                      |     ececution thread      |
//   |                      |___________________________|
//   |                      a. Memory phase
//   |                       val1 -> undefined
//   |                       val2 -> undefined
//   |                      total -> undefined
//   |
//   |                      b. Execution Phase
//   |                       num1 <-10
//   |                       num2 <- 2
//   |                      total <- 12(this total will be 
//   |                              /  returned to the Global 
//   |_____________________________/   Execution Context...)
//                          [ after work done EC delete ]


// Call Stack

