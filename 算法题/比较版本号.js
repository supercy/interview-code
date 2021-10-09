/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare(version1, version2) {
    let a = version1.split(".")
    let b = version2.split(".")
    let length = Math.max(a.length, b.length);
    if (a.length < length) {
        a = a.concat(new Array(length - a.length).fill("0"))
    }
    if (b.length < length) {
        b = b.concat(new Array(length - b.length).fill("0"))
    }
    console.log(a,b);
    for (let i = 0; i < length; i++) {
        if (parseInt(a[i]) == parseInt(b[i])) {
            continue
        }
        if (parseInt(a[i]) > parseInt(b[i])) {
            return 1
        }
        if (parseInt(a[i]) < parseInt(b[i])) {
            return -1
        }
    }
    return 0
}
let version1 = "2.0.1";
let version2 = "2";
let res = compare(version1, version2)
console.log(res);