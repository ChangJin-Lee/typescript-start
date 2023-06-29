// type User = {
//     email: string,
//     userId: number
// }

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const interface_hitesh: User = {dbId: 22, email: "h@h.com", userId: 2211,
startTrail: () => {
    return "trail started"
},
// interface_hitesh.dbId = 33
getCoupon: (name: "youcoupon2020", off: 2020) => {
    return 2020
}
}