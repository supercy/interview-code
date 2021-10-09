const equals = (a, b) => {
    //基本数据类型直接===比较
    if (typeof (a) !== "object" || typeof (b) !== "object") {
        return a === b
    }
    //同一个对象返回true
    if (a === b) {
        return ture
    }
    //对象的比较,转化为string后比较值是否相等
    let a2Str = JSON.stringify(a);
    let b2Str = JSON.stringify(b);
    return a2Str === b2Str;
}
let a = {
        name: "cui"
    },
    b = JSON.parse(JSON.stringify(a));
let res = equals(a, b);
console.log(res);