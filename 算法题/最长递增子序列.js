function LIS(arr) {
    let dp = new Array(arr.length).fill(1);
    let res = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        res = Math.max(dp[i], res)
    }
    console.log(dp);
    return res
}
let arr = [0, 1, 0, 3, 2]
let res = LIS(arr);
console.log(res);