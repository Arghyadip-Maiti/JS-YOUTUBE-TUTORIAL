const codingLang = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for objects we use for in loops...

for(const key in codingLang){
    console.log(key);        // js  cpp  rb  swift
}

for(const key in codingLang){
    console.log(codingLang[key]);// javascript C++ ruby swift by apple
}


// for in loops for arrays-->

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);    // 0 1 2 3 4 
}

for (const key in programming) {
    console.log(programming[key]);// js rb py java cpp 
}

//for of loop provides values of an array...
//for in loop provides keys of an array...

//for in loops does not work for maps...