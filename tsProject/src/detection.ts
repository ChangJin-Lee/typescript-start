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

interface Circle {
    // 속성을 언급할 수 있어
    kind: "circle",
    radius: number
    
}

interface Square {
    // 이것이 점 모양의 사각형인지 확인 가능
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

// 모양은 원 또는 사각형이 될 수 있다
type Shape = Circle | Square | Rectangle

// 1. if 문을 사용하는 방법
function getTrueShape(shape: Shape){
    // 모양의 형태가 원이랑 같다면
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// 2. 아이디어는 스위치 케이스를 사용하는거야
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        
        case "rectangle":
            return shape.length * shape.width
        default:
            // 기술적으로 아무곳에도 사용되지 않는다. never.\
            // 만약 rectangle에 대한 case를 빼먹는다면
            // 지금 당장 새로운 유형이나 인터페이스가 정의되어 있고 사용되고 있기 때문에 뭔가 잘못되었다고 알려줌.
            const _defaultforshape: never = shape
            return _defaultforshape;
    }
}
// 이거 지불 정보에 연결해서 사용할 수 있으니까 잘 알아둬야 함.