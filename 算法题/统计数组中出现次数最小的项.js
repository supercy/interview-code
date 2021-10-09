function getMaxStr(arr) {
    // let obj = {};
    // arr.forEach(item => {
    //     if (obj[item]) {
    //         obj[item]++
    //     } else {
    //         obj[item] = 1
    //     }
    // })
    // let count = arr.length;
    // let res;
    // for (let key in obj) {
    //     if (obj[key] < count) {
    //         res = key;
    //         count = obj[key]
    //     }
    // }
    // return res;

    // write code here
    arr.sort();
    let length = arr.length - 1;
    let base = arr.pop();
    let count = 1;
    let minCount = Infinity;
    let res;
    while (length--) {
        let cur = arr.pop();
        if (cur == base) {
            count++
        } else {
            if(minCount>count){
                minCount = count;
                res = base
            }
            base = cur;
            count=1
        }
    }
    return res

}
let arr = ["a", "a", "a", "b", "b", "b","c","a"];
let res = getMaxStr(arr);
console.log(res)