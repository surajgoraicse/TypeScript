type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditDetails?: string;
}

let newUser: User = {
    _id : "3432",
    name: "s",
    email: "s@s.com",
    isActive: false,
    creditDetails: "dkfhdf"

}

console.log(newUser);