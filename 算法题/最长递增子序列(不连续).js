// 数组[0, 3, 1, 6, 2, 2, 7],
// 子序列有[3,6,2,7],不连续
function LIS(arr) {
    let dp = new Array(arr.length).fill(1);
    let longStr = new Array(arr.length).fill([])
    let res = 1
    for (let i = 0; i < arr.length; i++) {
        longStr[i] = [arr[i]]
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                if (dp[j] + 1 > dp[i]) {
                    longStr[i] = [...longStr[j], arr[i]];
                }
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        res = Math.max(dp[i], res)
    }
    console.log(longStr);
    console.log(dp);
    return res
}
let arr = [0, 3, 1, 6, 2, 2, 7] //[0,3,6,7]
let res = LIS(arr);
console.log(res);