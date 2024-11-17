

function fn(val: number | string): void {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
        return;
    }
    console.log(val.toFixed());;
}

function fn1(val: string | null): void{
    if (!val) {
        console.log("please provide a value");
    }
    val?.toUpperCase();
}


interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

// function to check whether object is admin or not

function isAdminAccount(account: User | Admin) {
    // account.isAdmin (not a valid statement as isAdmin is only in Admin)
    // type narrowing
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

// define type
type Fish = {
    swim():void
}
type Bird = {
    fly():void
}

// fn to check if pet is fish (will not work)
function isFish1(pet: Fish | Bird) {
    return   (pet as Fish).swim !== undefined 
}
// check if pet is fish
function isFish2(pet: Fish | Bird): pet is Fish  {
    return   (pet as Fish).swim !== undefined 
}

// this get food will not work. 
function getFood1(pet: Fish | Bird) {
    if (isFish2(pet)) {
        return "fish food"
    } else {
        return "bird food"
    }
}

