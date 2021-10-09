const myInstanceof = (left, right) => {
    let proto = left.__proto__;
    let prototype = right.prototype;
    while (1) {
        if (proto === prototype) {
            return true
        }
        if (proto === null) {
            return false
        }
        proto = proto.__proto__
    }
}


let arr = new Date;
console.log(myInstanceof(arr, Object));