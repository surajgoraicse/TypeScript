"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function user(data) {
    console.log(typeof (data) == "number" ? data * 10 : data.toUpperCase());
    return data;
}
var response = user("suarj");
