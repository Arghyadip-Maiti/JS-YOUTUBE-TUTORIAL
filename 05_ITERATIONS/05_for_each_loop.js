const coding = ["js", "ruby", "java", "python", "cpp"]

//for each loop-->

coding.forEach(function(val){
    console.log(val);  // js ruby java python cpp
})

// for each loop in arrow function-->

coding.forEach((val)=>{
    console.log(val);    //js ruby java python cpp
})

// separate function in for each function-->

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) //just give the referance of printMe...don't execute() printMe //js ruby java python cpp

//other parameters of for each function-->

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})  //-----------------|
//                     V
//  js     0  [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//  ruby   1  [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//  java   2  [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//  python 3  [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//  cpp    4  [ 'js', 'ruby', 'java', 'python', 'cpp' ]


// object in array --->

const arr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

arr.forEach((item) => {
    console.log(item.languageName);
})  // javascript java python


