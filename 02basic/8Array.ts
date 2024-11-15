// const superHero: string[] = [];
// superHero.push("superman");
// superHero.push("spiderman");

// const level: number[] = [1, 2, 3];
// level.push(3, 345, 45, 4, 54, 523);

const superHero: Array<string> = [];
superHero.push("spiderman" , "superman")
superHero.push("choota bheem")

const level: Array<number> = [2,3,23,2,32,4,4454,345];
level.pop()



const colors: Array<Array<number>> = [[255,255,255] ]
const rgb: number[][] = [[255, 255, 255]]



type User = {
    name: string;
    email: string;
    isActive: boolean;
}
const users: User[] = [{name : "Suraj" , email: "suraj@gorai.com" , isActive: true}]
console.log(users);


const data: (number | string)[] = [21, 3, 23, "car", "bike"];

const data2: any[] = ["suraj" , null ,undefined , 3434, [343,3434] , {name : "suraj"} ]


export { }