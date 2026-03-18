console.log(2>5)//false
console.log(3==='3')//false
console.log(3=='3')//true
console.log("2">1)//true
console.log(4>"1")//true

//always try to compare same data-type...

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

// equality check(==) and comparisons(>,>=,<,<=) work differently...comparison converts null to a number, treats it as 0 (that's why null >= 0[true] but null > 0[false])...but equality checker doesn't work that way...

