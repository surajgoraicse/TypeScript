"use strict";
// accept a specific type value and return a value with the same type.
function fn1(val) {
    return val;
}
function fn2(val) {
    return val;
}
// use generics
function gnFn(val) {
    return val;
}
// gnFn<bottle>()
function fn4(val) {
    return val;
}
const fn5 = (val) => {
    return val[0];
};
