"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var teacher1 = {
    _id: "33hj34",
    name: " Sayed",
    department: "CSE",
    greet: function (name) {
        console.log("Hello ", name);
    },
    experience: 5,
    isAvailable: true,
};
var teacher2 = __assign(__assign({}, teacher1), { pay: 34343, leave: 1 });
teacher1.name = "Sayed Ahsen Ansari";
console.log(teacher1);
