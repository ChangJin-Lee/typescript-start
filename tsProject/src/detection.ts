function detectType(val: number | string ){
    if (typeof val == 'string'){
        return val.toLowerCase() 
    }

    return val + 3
    // return val.toString()
    // return val.toLowerCase()
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null){

    if (strs){
        if(typeof strs === "object"){
            for( const s of strs){
                console.log(s);
            }
        } else if (typeof strs === "string"){
            console.log(strs);
        }
    }
}

interface dUser {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: dUser | Admin){
    if ("isAdmin" in account){
        return account.isAdmin
    }
    // return account.isAdmin
}

// new Date()
// new Array()
function logValue(x: Date | string) {
    // object가 인스턴스엿는지 클래스엿는지 판단이 가능해요.
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else{
        pet
        return "bird food"
    }
}