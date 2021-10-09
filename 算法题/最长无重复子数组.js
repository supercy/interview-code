// 输入：
// [2,2,3,4,8,99,3]
// 返回值：
// 5
// 说明：
// 最长子数组为[2,3,4,8,99]

function maxLength(arr) {
    //             let result = 0;
    //             let win = [];
    //             for (let i = 0; i < array.length; i++) {
    //                 let index = win.indexOf(array[i]);
    //                 if (win.includes(array[i]) ) {
    //                     win.splice(0,index+1)
    //                 }
    //                 win.push(array[i])
    //                 result = Math.max(result,win.length)
    //             }
    //             return result;
    let quene = [];
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        while (quene.includes(arr[i])) {
            quene.shift()
        }
        quene.push(arr[i]);
        res = Math.max(res, quene.length);
    }
    return res;
}