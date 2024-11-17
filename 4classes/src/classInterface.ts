// abstract

abstract class TakePhoto{
    constructor(public cameraMode: string,
        public filter: string) { };
    
    abstract print(): void;
    reelCount(): void {
        console.log(30);
    }
}

// const photo1 = new TakePhoto("test", "test");


class Instagram extends TakePhoto{
    print() {
        console.log("hello");
    }

}

const newUser = new Instagram("test", "Test")
newUser.print();
newUser.reelCount();
