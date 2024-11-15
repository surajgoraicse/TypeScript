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
//    creditDetails : "kdhfdhf"  // optional
}

newUser.name = "suraj"
// newUser._id = "jhdfjkdhf"


type cardDate = {
    cardDate: String
}
type cardDetails = {
    cvv: number;
    cardNumber: number; 
}

type creditCard = cardDate & cardDetails & { isActive: true };


















export {}