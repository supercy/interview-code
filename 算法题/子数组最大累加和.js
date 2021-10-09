// 描述
// 给定一个长度为 n 的数组 arr ，返回其中任意子数组的最大累加和
// 题目保证没有全为负数的数据

// 输入：
// [1, -2, 3, 5, -2, 6, -1]
// 返回值：
// 12
// 说明：
// [3,6]范围内的子数组之和最大，3+5-2+6=12 

function maxsumofSubarray(arr) {
    let dp = [];
    dp[0] = arr[0];
    let res = dp[0];
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
        res = Math.max(res, dp[i])
    }
    return res
}
let arr = [1, -2, 3, 5, -2, 6, -1];

let res = maxsumofSubarray(arr);
console.log(res);