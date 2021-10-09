const handleString = (n) => {
    let arr = "abcdefghijklmnopqrstuvwxyz".split("");
    if (n == 1) {
        return "a"
    }
    let sn = handleString(n - 1) + arr[n - 1] + reverseInvert(handleString(n - 1))
    return sn
}
const reverseInvert = (str) => {
    let arr = "abcdefghijklmnopqrstuvwxyz".split("");
    let strArr = str.split("");
    strArr.forEach((item, index) => {
        strArr[index] = arr[25 - arr.indexOf(item)]
    });
    return strArr.reverse().join("")
}

const strIndex = (n, i) => {
    let str = handleString(n);
    return str[i - 1] ? str[i - 1] : "*"
}
let s1 = "a"
let s2 = "abz"
let s3 = "abzcayz";
console.log(strIndex(3, 7));