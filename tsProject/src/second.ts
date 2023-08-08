// iOS의 Protocol과 매우 비슷한 것이에요.
interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story{
    createStory(): void
}

// 사진을 찍는 기능을 만드려면 반드시 이 인터페이스를 따라야해요.
// iOS의 프로토콜과 같아요
class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story was created");
    }
}