let score: number | string | boolean = 33

score = 44
score = "55"

type unionUser = {
    name: string,
    id: number
}

type unionAdmin = {
    username: string,
    id: number
}

let hit: unionUser | unionAdmin = {name: "tete", id: 334}

hit = {username: "343", id: 534343}

function getDbID1(id: number | string){
    console.log(`DB id is ${id}`);
    
}
getDbID1(3)
getDbID1("3")

function getDbID2(id: number | string){
    if (typeof id == "string"){
        id.toLowerCase()
    }
    else if (typeof id == "number"){
        id += 1
    }
}

// Array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

// 잘 쓰이진 않지만 강력함
let pi: 3.14 = 3.14
// pi = 3.145


let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"