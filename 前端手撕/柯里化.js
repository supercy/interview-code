// function sum(...arg) {
//     return arg.reduce((pre, cur) => pre + cur);
// }
// console.log(sum(1, 2, 3))

function curry(func) {
    let argLength = func.length;
    let args = [];
    let res = function () {
        let a = Array.from(arguments);
        for (let i = 0; i < a.length; i++) {
            argLength--;
            args.push(a[i]);
        }
        if (!argLength) {
            return func.apply(this, args)
        } else {
            return res
        }
    }
    return res
    /* Write Code Here */
}

// let curriedSum = curry(sum);

// let res = curriedSum(1, 2)(3)(4)
// let arr = [100, 4, 200, 1, 3, 2]
// let child = bigNumberAdd(111111, 222222);

// console.log(res)