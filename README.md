# typescript-start
타입스크립트로 서버짜보기


### 타입스크립트 특징.

1. any 형을 쓸 수 있다.
2. 세미콜론을 붙이지 않고 코드를 완성 할 수 있다.
3. 콜론으로 함수의 리턴 값의 데이터 형식을 지정할 수 있다.
5. 매개변수 구조 분해가능하다
6. 클래스 사용 가능하다

- never
어떤 함수는 결코(never) 값을 반환하지 않습니다
```typescript
            function fail(msg: string): never {
              throw new Error(msg);
                }
```
- Try

  never 타입은 결코 관측될 수 없는 값을 의미합니다. 반환 타입에서는, 해당 함수가 예외를 발생시키거나, 프로그램 실행을 종료함을 의미합니다.

  never은 TypeScript가 유니온에 아무것도 남아있지 않다고 판단했을 때 또한 나타납니다.
```typescript
            function fn(x: string |             number) {
              if (typeof x ===          "string") {
                // do something
              } else if (typeof x           === "number") {
                // do something else
              } else {
                x; // 'never' 타입이 됨!
              }
            }
``````

- Narrowing
  - Exhaustiveness checking을 잘해야 한다..
  - never 타입은 모든 타입에 할당 가능하다. 하지만 어떠한 타입도 never 타입으로 할당할 수는 없다.
  - never 자신끼리는 제외
  - 이것은 narrowing과 그리고 never가 exhaustive checking이 필요하다는 것을 시사한다.
    - exhaustive checking은 모든 케이스에 대해 완전하게 검사한다는 의미
    - narrowing: 타입의 범위를 좁혀서 더 정확한 타입으로 변수를 사용하기 위함임. 타입 에러를 피하기 위해서 보통 type narrowing을 사용함.
  - 즉, switch 스테이트 문이 필요해진다는 말임.

```typescript
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
```



https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking