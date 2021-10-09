/* 法一：遍历取出来，再拼接 */
function reverse1(array) {
    let tmp = [];
    let arr = array;
    while (Array.isArray(arr[1])) {
        tmp.push(arr[0])
        arr = arr[1];
        if (arr[1] === null) {
            tmp.push(arr[0])
            break;
        }
    }
    let ans = [tmp[0], null];
    for (let i = 1; i < tmp.length; i++) {
        ans = [tmp[i], ans]
    }
    return ans;
}
/* 法二：原地翻转，记录每个数组在堆中的位置 */
function reverse2(arr) {
    let tmp = [];
    let t = arr;
    while (t !== null) {
        tmp.push(t);
        t = t[1];
    }
    let i = 0,
        j = tmp.length - 1;
    while (i < j) {
        [tmp[i][0], tmp[j][0]] = [tmp[j][0], tmp[i][0]];
        i++;
        j--;
    }
    return arr;
}
let a = [1, [2, [3, [4, [5, null]]]]]
console.log(JSON.stringify(reverse1(a)))