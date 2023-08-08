const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number ): boolean | number{
    return val
}

function identityTwo(val: any): any {
    return val
}

// 제네릭 타입
function identiyThree<Type>(val: Type): Type {
    return val
}

// identiyThree(true)

function identityFour<T>(val: T): T{
    return val
}

// identityFour(false)

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({})