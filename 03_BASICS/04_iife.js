// iife --> Immediately Invoked Function Expression...
//when we want to execute a function as soon as its written...

function func(){
    console.log(`Executed`);
}
func();// Executed

//sometimes many varriables or other things may pollute a function...to stop that and execute the function immediately we use iife...

// function func2(){
//     console.log('Conected')
// }();//slight syntax error

(function func2(){           //<---- Named iife
    console.log(`Conected`);
})();
//     or
(() => {                     //<---- Simple iife
    console.log(`Done`)
})();

//while using iife we should take caution that the function before shoul have ';' otherwise it causes error...

//while using iife always use ';'


((name) => {
    console.log(`I am ${name}`)
})('ARGHYA')// I am ARGHYA

