# typescript-start
타입스크립트로 서버짜보기


### 개인적으로 생각하는 스위프트와 타입스크립트의 닮은 점. 왜 ios 쓰는 사람들이 타입스크립트를 자주 쓸까?

1. any 형을 쓸 수 있는 점.
 2. 세미콜론을 붙이지 않고 코드를 완성 할 수 있는 점.
 3. 콜론으로 함수의 리턴 값의 데이터 형식을 지정할 수 있는 점
4. 사용하는 메소드가 매우 닮아있다. 
5. 매개변수 구조 분해
6. 클래스 사용 가능

** never
어떤 함수는 결코(never) 값을 반환하지 않습니다

            function fail(msg: string): never {
              throw new Error(msg);
                }
Try

never 타입은 결코 관측될 수 없는 값을 의미합니다. 반환 타입에서는, 해당 함수가 예외를 발생시키거나, 프로그램 실행을 종료함을 의미합니다.

never은 TypeScript가 유니온에 아무것도 남아있지 않다고 판단했을 때 또한 나타납니다.

            function fn(x: string |             number) {
              if (typeof x ===          "string") {
                // do something
              } else if (typeof x           === "number") {
                // do something else
              } else {
                x; // 'never' 타입이            됨!
              }
            }