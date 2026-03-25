const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
//  \__________________________|-->initial value of accumulator...
//     acc: 0 and currval: 1
//     acc: 1 and currval: 2
//     acc: 3 and currval: 3

console.log(myTotal)//6


//different initial value as accumulator

const myTotal2 = myNums.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 5)
//  \__________________________|-->initial value of accumulator...
//     acc: 5 and currval: 1
//     acc: 6 and currval: 2
//     acc: 8 and currval: 3

console.log(myTotal2)//11


//---->


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0)

console.log(priceToPay);//22996