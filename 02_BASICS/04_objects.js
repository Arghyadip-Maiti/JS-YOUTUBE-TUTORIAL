//creating objects as literals...

const user = new Object()

console.log(user)//{}

user.name = "Arghya"
user.id = 7324
user.isLoggedIn = false

console.log(user)//{ name: 'Arghya', id: 7324, isLoggedIn: false }

const regularUser = {
    email: "user@gmail.com",
    userfullname: {
        fullname: {
            firstname: "Arghyadip",
            lastname: "Maiti"
        }
    }
}

console.log(regularUser.userfullname)//{fullname: {firstname: 'Arghyadip', lastname: 'Maiti'}}

console.log(regularUser.userfullname.fullname.lastname)//'Maiti'

//--combining objects-->

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }//in this case the whole new string is returned and saved to obj1...

const obj5 = Object.assign({},obj1,obj2)
console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }//same as previous but it's good practise...//in this case the whole object is returned and saved to the empty object {}

//--spread operator(...)-->

const obj6 = {...obj1,...obj2}
console.log(obj6)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const User = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]
console.log(User[0].id)//1

console.log(user)

console.log(Object.keys(user))//['name','id','isLoggedIn'](Array)
console.log(Object.values(user))//['Arghya',7324,false](Array)
console.log(Object.entries(user))//[ ['name','Arghya'], ['id',7324], ['isLoggedIn',false] ]
console.log(user.hasOwnProperty("isLoggedIn"))//true

//------------------------->

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor)//'hitesh'

const {courseInstructor: instructor} = course
console.log(instructor)//'hitesh'

//API is also an object...where both keys and values are strings...and it has no name...



