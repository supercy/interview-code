var a = 0;

function A() {
    this.a = 1;
    return this;
}
A.a = 2;
A.prototype = {
    a: 3,
    setA(value) {
        this.a = value;
        return this;
    },
};
console.log(new A().a); // 1
console.log(A().a); // 1
console.log(a); // 0
console.log(new A().setA(10).a); // 10
console.log(A().setA(10).a); // error