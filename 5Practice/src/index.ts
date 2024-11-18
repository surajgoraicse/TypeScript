console.log("hello world");

function user({name, email}: {name: string , email: string}): void {
    console.log(name);
    console.log(email);
}

export { user };