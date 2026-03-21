//let, const, var

//let-->Block Scope
//const-->Block Scope
//var-->Functional Scope


function one(){
    const name = "Arghya"

    function two(){
        const app = "youtube"
        console.log(username);//'Arghya'
    }
    // console.log(app);//error
    two()
}
one()


if(true){
    const name = "Arghya"
    if(name==="Arghya") {
        const app="youtube"
        console.log(username + app);//Arghya youtube
    }
    // console.log(app);//error
}
// console.log(name);//error


//+++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addone(5))//6

function addone(num){
    return num+1
}


addTwo(5)//TDZ(error)

const addTwo = function(num){
    return num + 2
}