// console.log("typescript is here");

class User {

    // private _courseCount = 1
    protected _courseCount = 1


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

// 하위 사용자가 모든 속성을 획득해요.
class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        // courseCount를 protected으로 바꾸면 접근 가능해요
        // 보호되는 또 다른 유형이에요.
        // 상속하는 모든 클래스에서만 사용 가능해요.
        this._courseCount = 4
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