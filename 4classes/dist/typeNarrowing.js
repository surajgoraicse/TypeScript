"use strict";
function fn(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
        return;
    }
    console.log(val.toFixed());
    ;
}
function fn1(val) {
    if (!val) {
        console.log("please provide a value");
    }
    val === null || val === void 0 ? void 0 : val.toUpperCase();
}
// function to check whether object is admin or not
function isAdminAccount(account) {
    // account.isAdmin (not a valid statement as isAdmin is only in Admin)
    // type narrowing
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// fn to check if pet is fish (will not work)
function isFish1(pet) {
    return pet.swim !== undefined;
}
// check if pet is fish
function isFish2(pet) {
    return pet.swim !== undefined;
}
// this get food will not work. 
function getFood1(pet) {
    if (isFish2(pet)) {
        return "fish food";
    }
    else {
        return "bird food";
    }
}
