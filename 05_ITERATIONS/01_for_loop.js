//for loop

for(let i = 0; i < 10; i++){
    const ele = i;
    console.log(ele);
}//0 \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 
//console.log(ele)//error (tdz)


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j );
   }
    
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);//3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}// flash \n batman \n superman

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}// flash \n batman \n superman \n undefined


// break & continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
   console.log(`Value of i is ${index}`);   
}


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}