// console.log("typescript is here");

class User {
    public email: string
    private name: string
    // #name: string
    readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

    }
}

const hitesh2 = new User("h@h.com", "hitesh");
// hitesh2.city = "Seoul"



class User2 {
    readonly city: string = "Seoul"
    constructor(
         email: string,
         name: string,
         private userID: string
         ){
    }
}