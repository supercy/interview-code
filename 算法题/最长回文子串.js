/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param A string字符串 
 * @param n int整型 
 * @return int整型
 */
function getLongestPalindrome(str) {
    const judge = (str) => {
        let length = str.length;
        let flag = true;
        if (length) {
            for (let i = 0; i < Math.floor(length / 2); i++) {
                if (str[i] != str[length - 1 - i]) {
                    flag = false
                }
            }
        }
        return flag;
    }
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            if (judge(str.slice(i, j + 1)) && (j + 1 - i > res)) {
                res = j + 1 - i
            }
        }
    }
    return res;
}
let str = "abbba"
let res = getLongestPalindrome(str);
console.log(res);