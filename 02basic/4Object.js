"use strict";
// Bad behaviour of objects
Object.defineProperty(exports, "__esModule", { value: true });
// function user({ name: string , gmail : string, ispaid: boolean }){
// }
// user({ name: "Suraj", gmail: "suraj@suraj.com", ispaid: false });
// method1:
function user(_a) {
    var name = _a.name, phone = _a.phone;
}
user({ name: "Suraj", phone: 34253454 });
function createUser(obj) {
    return { username: obj.name.toUpperCase(), email: obj.email.toLowerCase(), isPaid: !obj.isActive };
}
var data = {
    name: "suraj",
    email: "suraj@suraj.com",
    isActive: false
};
var response = createUser(data);
console.log(response);
