class EventEmit {
    constructor() {
        this.events = {}
    }
    on(eventName, fn) {
        if (!this.events[eventName]) {
            this.events[eventName] = [fn]
        } else {
            this.events[eventName].push(fn)
        }
    }
    emit(eventName, ...arg) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(item => {
                item(...arg)
            })
        }
    }
    remove(eventName, fn) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((item, index) => {
                if (item == fn) {
                    this.events[eventName].splice(index, 1)
                }
            })
        }
    }
    // 只执行一次订阅的事件，然后移除
    once(eventName, fn) {
        let callback = (...arg) => {
            fn(...arg); // fn函数中调用原有的callback
            this.remove(eventName, callback); // 删除fn, 再次执行的时候之后执行一次
        }
        this.on(eventName, callback)
    }
}
let eventEmit = new EventEmit();
const fn1 = (arg) => {
    console.log("小张：" + arg)
}
const fn2 = (arg) => {
    console.log("小明：" + arg)
}
const fn3 = (arg) => {
    console.log("小华：" + arg)
}
const fn4 = (arg) => {
    console.log("临时用户:" + arg)
}
eventEmit.on("人民日报", fn1);
eventEmit.on("光明日报", fn2);
eventEmit.on("光明日报", fn3);
eventEmit.once("光明日报", fn4)

eventEmit.emit("人民日报", "这里是人民日报，早上好")
eventEmit.emit("光明日报", "这里是光明日报，早上好")
// eventEmit.remove("光明日报", fn3)
eventEmit.emit("人民日报", "这里是人民日报，晚上好")
eventEmit.emit("光明日报", "这里是光明日报，晚上好")