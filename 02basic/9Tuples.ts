let data: [string, number, boolean];
data = ["Suraj" , 234354 , false]

let [x, y, z] = data;
console.log(x);
console.log(y);
console.log(z);

let user: [string, string, number?, string?];
user = ["suraj", "gorai", 98374];


let marks: [string, ...number[]];
marks = ["suraj", 34, 3, 43, 4, 3, 34324, 4, 5, 6, 65, 6];

user[0] = "SurajGorai"

data.push(false)
data.push("hero")

console.log(data);