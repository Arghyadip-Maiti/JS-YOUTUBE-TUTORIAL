//-=-=- DATE -=-=-

let myDate = new Date();

console.log(myDate)//very long (mili-sec from 1st jan 1970)//2026-03-18T18:18:54.694Z
console.log(myDate.toString())//Wed Mar 18 2026 18:19:59 GMT+0000
console.log(myDate.toDateString())//Wed Mar 18 2026
console.log(myDate.toLocaleString())//3/18/2026, 6:22:43 PM

console.log(typeof myDate)//object

let myOwnDate = new Date(2023, 0, 23)
console.log(myOwnDate.toDateString())//23rd jan 2023(Mon Jan 23 2023)...months start from 0...

let dateWithTime = new Date(2026, 0, 23, 5, 3)
console.log(dateWithTime.toLocaleString())//1/23/2026, 5:03:00 AM

//new Date("YY-MM-DD")

let realWorldDate = new Date("2006-01-18")
console.log(realWorldDate.toDateString())//Wed Jan 18 2006
console.log(realWorldDate.getTime())//from 1970 upto this date in mili-secs


let myTimeStamp = Date.now()
console.log(myTimeStamp)//1773858872113 --> mili-sec from 01/01/1970

console.log(Math.floor (Date.now()/1000))//-->sec from 1970




