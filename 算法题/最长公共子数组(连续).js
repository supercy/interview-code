// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
// 示例：
// 输入： A: [1,2,3,2,1] B: [3,2,1,4,7] 
// 输出：3 
// 解释： 长度最长的公共子数组是 [3, 2, 1] 。
const findLength = (A, B) => {
    // A、B数组的长度
    const [m, n] = [A.length, B.length];
    // dp数组初始化，都初始化为0
    // dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]。
    const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0));
    // 初始化最大长度为0
    let res = 0;
    let end = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 遇到A[i - 1] === B[j - 1]，则更新dp数组
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // 更新res
            if (dp[i][j] > res) {
                res = dp[i][j];
                end = j;
            }
        }
    }
    //返回公共子数组
    let str = ""
    if (res == 0) {
        return "-1"
    } else {
        str = B.slice(end - res, end)
    }
    return str;
    // 返回长度
    // return res;
};
let A = [1, 2, 3, 2, 1],
    B = [3, 2, 1, 4, 7];
let res = findLength(A, B); //3,2,1
console.log(res);