//Initializing a promise...

//let promiseName = new Promise((resolve,reject)=>{
//    setTimeout(()=>{console.log('ADM');resolve()},1000);
//    reject();//...can't use resolve and reject in one function...use only one...
//});

//promiseName.then(()=>{
//    console.log('resolve');
//})

// promiseName.catch(()=>{
//     console.log('reject');
// })

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=->

// let promise_Name = new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log('ADM');reject()},1000);
// });

// promise_Name.then(()=>{
//     console.log('resolve');
// })

// promise_Name.catch(()=>{
//     console.log('reject');
// })

// in case of vs code the above code will work but in node this will not work(node sees that there is nothing for the .then function so it throws an error...)

// for node-->

// let promiseName2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{console.log('ADM');reject()},1000);
// });

// promiseName2.then(()=>{
//     console.log('resolve');
// }).catch(()=>{
//     console.log('reject');
// })


//-----------------> modern syntax ----->

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(1);resolve();
//     },1000);
// }).then(()=>{
//     console.log(2);
// }).catch(()=>{
//     console.log(3);
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(1);reject();resolve();
//     },1000);
// }).then(()=>{
//     console.log(2);
// }).catch(()=>{
//     console.log(3);
// })   // if both resolve and reject is there then what come first will only execute... in this case 1 \n 3


//  passing data(mostly object) through resolve() and reject() --->


// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({name:"ADM",age: 20 ,email: 'adm@gmail.com'});
//         reject('asd');
        
//     },1000)
// }).then((data)=>{
//     console.log(data.age);
// }).catch((str)=>{
//     console.log(str);
// })  // -> 20 //the reject function will be ignored as it's written later... 



// chaining of .then()...--->

//what you return from first then will be taken by the second then..


// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;

//         if(!error){
//             resolve({username: 'ADM', age: 20, gender: 'male'})
//         }
//         else{
//             reject('404 error');
//         }
        
//     },1000)
// })    

// promise.then((data)=>{
//     console.log(data);
//     return data.age;
// }).then((age)=>{
//     console.log(age);
// }).catch((msg)=>{
//     console.log(msg);
// }).finally(()=>{
//     console.log('lorem'); //it'll be executed no matter what...
// })    


//  getting the promise through async-await ---->

// (async-await doesn't handle catch )


// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({userName: 'ADM', password: 123})
//         }
//         else{
//             reject('404 not found')
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//     const response = await promiseFive //promise is an object...we consume promise with only name(referance) not like [ promiseFive() ]
//     console.log(response);
// }

// consumePromiseFive();// if error is false then it will deal with resolve() and work perfectly....

//-------------------------------->

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({userName: 'ADM', password: 123})
//         }
//         else{
//             reject('404 not found')
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//     const response = await promiseFive //promise is an object...we consume promise with only name(referance) not like [ promiseFive() ]
//     console.log(response);
// }

// consumePromiseFive();// if error is true then it will deal with catch() and will not work perfectly....


//to handle errors we'll use try-catch syntax in async-await ----------------->

// const promiseFive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({userName: 'ADM', password: 123})
//         }
//         else{
//             reject('404 not found')
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive 
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }    
// }

// consumePromiseFive();// this will handle the error perfectly..


// const asyncFunc = async()=>{
//     try{
//         let data = await fetch("https://jsonplaceholder.typicode.com/users");
//         let jsonData = await data.json();
//         console.log(jsonData);
//     }
//     catch(error){
//         console.log("E:",error)
//     }
// }

// asyncFunc();


//  same thing in .catch() & .then()---->


// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
//     return data.json();
// }).then((jsonData)=>{
//     console.log(jsonData);
// }).catch((error)=>{
//     console.log(error);
// })