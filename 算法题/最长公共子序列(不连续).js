// 输入：text1 = "abcde", text2 = "ace"
// 输出：3
// 解释：最长公共子序列是 "ace"，它的长度为 3。

const longestCommonSubsequence = (text1, text2) => {
    // 确定dp数组（dp table）以及下标的含义
    // dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]

    let dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    // let str = []
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // str.push(text1[i - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp
    // return dp[text1.length][text2.length];
};
let text1 = "abcde";
let text2 = "ace"
let res = longestCommonSubsequence(text1, text2);
console.log(res);