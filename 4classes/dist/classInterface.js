"use strict";
// abstract
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    ;
    reelCount() {
        console.log(30);
    }
}
// const photo1 = new TakePhoto("test", "test");
class Instagram extends TakePhoto {
    print() {
        console.log("hello");
    }
}
const newUser = new Instagram("test", "Test");
newUser.print();
newUser.reelCount();
