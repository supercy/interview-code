// 求数组最深深度

const deep = (arr) => {
    let res = 1;
    arr.map(item => {
        if (Array.isArray(item)) {
            res = Math.max(res, deep(item) + 1)
        }
    })
    return res;
}
let arr = [1, 2, [3],
    [6]
];
let res = deep(arr);
console.log(res);