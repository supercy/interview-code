class PubSub {
    constructor() {
        this.subcriber = {}
    }

    on(topic, fn) {
        let fns = this.subcriber[topic] || [];
        fns.length ? fns.push(fn) : this.subcriber[topic] = [fn]
    }

    emit(topic, ...arg) {
        let fns = this.subcriber[topic] || [];
        fns.forEach(fn => {
            fn(...arg)
        });
    }
}

// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub = new PubSub();
// A订阅了SMS事件（A只关注SMS本身，而不关心谁发布这个事件）
pubSub.on('SMS', console.log);
pubSub.on('SMS', console.warn);
// B订阅了SMS事件
// pubSub.subscribe('SMS', console.log);
pubSub.on('SMS2', console.log);
// C发布了SMS事件（C只关注SMS本身，不关心谁订阅了这个事件）

console.log('pubSub.subcriber :>> ', pubSub.subcriber);

pubSub.emit('SMS', 'I published `SMS` event');

pubSub.emit("SMS2", "this is a test publish");