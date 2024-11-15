interface Faculty{
    readonly _id : string,
    name: string,
    department: string,
    experience: number,
    isAvailable: boolean,
    greet(name: string):void,
}
interface Employee extends Faculty{
    pay: number,
    leave: number
}

const teacher1: Faculty = {
    _id: "33hj34",
    name: " Sayed",
    department: "CSE",
    greet: (name)=>{
        console.log("Hello ",name);
    } ,
    experience: 5,
    isAvailable: true,
}

const teacher2: Employee = {
    ...teacher1,
    pay: 34343,
    leave:1
}



teacher1.name = "Sayed Ahsen Ansari";

console.log(teacher1);


interface User{
    fullname: String;
    username: String;
    password: String;

}
interface User{
    isLoggedIn: boolean;
}

const newUser: User = {
    fullname: "suraj gorai",
    username: "surajgoraicse",
    password: "3243dfdf",
    isLoggedIn: false
}













export { };