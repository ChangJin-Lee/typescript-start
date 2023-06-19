function addTwo(num: number): number{
    return num + 2
    // return "Hello"
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string,
     isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean) => {}

addTwo(5)
console.log(getUpper("cj"))

signUpUser("cj", "test@test.com", false)
loginUser("cj", "nost@nost.com", false)


// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return ""
}

const friends = ["a", "b", "c"]
// const friends = [1,2,3]

friends.map((friend): string => {
    return `my friend is ${friend}`
})

// friends.map(friend => {
//     return 2
// })

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

// never 어떤 함수는 결코 값을 반환하지 않습니다.
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {}