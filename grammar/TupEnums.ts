// const Tupuser: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["gg", 123, true]

let rgb: [number, number, number] = [255, 123, 112]

type ttUser = [number, string]

const newUser: ttUser = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)

console.log(newUser);


export{}