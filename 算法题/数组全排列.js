const arrChild = (arr) => {
    return arr.reduce((pre, cur) => {
        let temp = pre.map(item => {
            return [...item, cur]
        });
        return pre.concat(temp);
    }, [
        []
    ])
}
const norepeat = (arr) => {
    let obj = {}
    arr.forEach(item => {
        item.sort((a, b) => a - b);
        obj[item.toString()] = item;
    })
    arr = Object.values(obj);
    return arr
}
let arr = [1, 2, 3];
let res = norepeat(arrChild(arr));

console.log(res);