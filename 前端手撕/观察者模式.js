class Target {
    constructor() {
        this.observe = []
    }
    add(observe) {
        this.observe.push(observe)
    }
    notify(...message) {
        this.observe.forEach(item => {
            item.update(...message)
        })
    }
}
class Obsever {
    update(...message) {
        console.log(...message)
    }
}

var tar = new Target();
var ob1 = new Obsever();
var ob2 = new Obsever();
tar.add(ob1);
tar.add(ob2);

tar.notify("haha,", "I have changed")