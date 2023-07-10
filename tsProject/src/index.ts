// console.log("typescript is here");

class User {
    email: string
    name: string
    city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

    }
}

const hitesh2 = new User("h@h.com", "hitesh");
hitesh2.city = "Seoul"
