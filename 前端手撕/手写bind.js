Object.prototype.myBind = function () {
    const context = Array.from(arguments)[0]
    let arg = Array.from(arguments).slice(1);
    const self = this;
    const res = function () {
        let params = arg.concat(...arguments);
        if (this instanceof res) {
            self.call(this, ...params);
        } else {
            self.call(context, ...params)
        }
    }
    res.prototype = self.prototype;
    return res;
};

Object.prototype.myCall = function () {
    const context = Array.from(arguments)[0];
    const arg = Array.from(arguments).slice(1);
    context.fn = this;
    context.fn(...arg)
    delete context.fn
}
Object.prototype.myApply = function () {
    const context = Array.from(arguments)[0];
    const arg = Array.from(arguments)[1];
    context.fn = this;
    context.fn(...arg)
    delete context.fn
}

let user = {
    name: 'Jason',
    age: 23,
}

function Fun(school) {
    this.school = school;
    console.log(this.name);
    console.log(this.age);
    console.log(this.school);
}
Fun.prototype.sex = "male"
let fun = Fun.myBind(user, "ustc")
fun()
// let obj = new fun();
// console.log(obj.sex);
Fun.myCall(user, "ustx")
Fun.myApply(user, ["ustx"])