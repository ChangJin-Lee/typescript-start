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

// -------------------------------------------

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credcardDetails?: number
}

function typereateUser(u: User){}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "t@t.com"
// myUser._id = "4321"

// -------------------------------------------

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {}