// Bad behaviour of objects

// here it is giving error:
const createCourse = ({title, price}) => {
}
createCourse({ title: "ReactJs", price: 3243 , duration : 23});

// Now try by passing an object
const obj = { title: "ReactJs", price: 3243 , duration : 23}
const createCourse = ({title, price}) => {
}
createCourse(obj);




// function user({ name: string , gmail : string, ispaid: boolean }){
    
// }
// user({ name: "Suraj", gmail: "suraj@suraj.com", ispaid: false });


// method1:
function user({name , phone}:{name: string , phone: number}) {}
user({ name: "Suraj", phone: 34253454 });

// method2:
type User = {
    name: string,
    isActive: boolean,
    email: string,
}
function createUser(obj: User ) : {} {
    return {username : obj.name.toUpperCase() , email : obj.email.toLowerCase() , isPaid : !obj.isActive}
}
const data = {
    name: "suraj",
    email: "suraj@suraj.com",
    isActive: false
}
const response = createUser(data)
console.log(response);


function register({ name , age , email} : {name : string , age : number , email: string}):{name : string , age : number , email: string} {
    return {}
}














export {}