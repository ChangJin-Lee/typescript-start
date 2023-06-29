// TypeScript에서 enum을 사용하면 Tree-shaking이 되지 않습니다
// 앞서 말했듯이 enum은 편리한 기능이지만 
// TypeScript가 자체적으로 구현했기 때문에 발생하는 문제가 있습니다.

// 그렇다면 enum 말고 어떤 것을 사용하면 좋을까요?
// Union Types를 사용합시다.

// const enum은 어떤가요?
// TypeScript에서 const enum을 사용해 보면 enum과 거의 같다고 느껴지지만,
//  enum의 내용이 트랜스파일할 때 인라인으로 확장된다는 점이 다릅니다. 
// Tree-shaking이라는 관점에서는 Union Types와 같습니다. 
// 사용하지 않는다면 번들에 포함되지 않습니다. 
// 하지만 긴 문자열을 할당하는 경우에는 Union types와 비교해 다소 불리한 점이 있다고 생각합니다.

// Tree-shaking 관점에서 보았을 때
//  아래와 같은 순서로 사용하시길 추천

// Union Types > const enum > enum

 
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