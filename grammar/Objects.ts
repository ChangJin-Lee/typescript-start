const User = {
    name: "CJ",
    email: "CJ@CJ.com",
    isPaid: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "newCJ", isPaid: false, email: "newCJ@cJ.CJ"}

createUser(newUser)

createUser({name: "CJ", isPaid: false})

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 999}
}


export {}