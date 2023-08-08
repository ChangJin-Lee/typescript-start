// abstractClass에 대해 알아볼거에요
// interface를 잘 알고 와야해요.
// implements를 기억해야 돼요.

abstract class TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // 몇몇 복잡한 계산이 들어갈거에요
        return 8
    }
}

// 추상 클래스의 인스턴스를 만들 수 없습니다.ts(2511) 라는 오류가 뜰 거에요.
// const hc = new TakePhoto2("test", "test")

// 사진찍기 기능을 사용하고 계속해서 작업이 가능해요
class Instagram2 extends TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("sepia");
            
        }
}

// 이건 오류가 뜰거에요
// const hc = new Instagram2("test", "test")
const hc = new Instagram2("test", "test", 3)

hc.getReelTime()