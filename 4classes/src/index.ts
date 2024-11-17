// class Users {
// 	name: string = "";
// 	username: string;
// 	private location: string;
// 	readonly password: string;
// 	constructor(name: string, pass: string, city: string) {
// 		this.username = name;
// 		this.password = pass;
// 		this.location = city;
// 	}
// 	giveLocation() {
// 		console.log(this.username + " is from " + this.location);
// 	}
// }

// const suraj = new Users("suraj", "id3457", "jamshedpur");

// const myname = suraj.username;

// // const myCity = suraj.location;

// suraj.giveLocation();




// class Employee {
//     public name: string; // Accessible everywhere
//     private salary: number; // Accessible only inside this class
  
//     constructor(name: string, salary: number) {
//       this.name = name;
//       this.salary = salary;
//     }
  
//     public showSalary(): string {
//       return `My salary is ${this.salary}`;
//     }
//   }
  
//   const emp = new Employee("Bob", 50000);
//   console.log(emp.name); // OK
// //   console.log(emp.salary); // Error: Property 'salary' is private
//   console.log(emp.showSalary()); // OK
  



// efficient way
  

// class User{
//     username: string;
//     email: string;
//     constructor(username: string, email: string) {
//         this.username = username;
//         this.email = email;
//     }

//     greet() {
//         console.log(`Hello ${this.username}`);
//     }
// }




// console.log(User.phone);




// class MathUtils {
//     static PI = 3.14;
  
//     static circleArea(radius: number): number {
//       return this.PI * radius * radius;
//     }
//   }
  
//   // 
//   console.log(MathUtils.PI); // 3.14  
//   console.log(MathUtils.circleArea(5)); // 78.5



