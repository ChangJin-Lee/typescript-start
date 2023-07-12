// console.log("typescript is here");

class User {

    private _courseCount = 1

    public email: string
    private name: string
    // #name: string
    readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;

    }

    private deleteToken(){
        console.log("delete token");
    }

    get getAppleEmail(): string {
        return `appele${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1){
            throw new Error("courseNum must be greater than 1")
        }
        this._courseCount = courseNum
    }
        
}

const hitesh2 = new User("h@h.com", "hitesh");
//hitesh2.deleteToken();
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