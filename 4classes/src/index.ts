

class Users{

    name: string = "";
    username: string;
    readonly password: string;
    constructor(name: string , pass: string) {
        this.username = name;
        this.password = pass;
    }
}

const suraj = new Users("suraj"  , "id3457")