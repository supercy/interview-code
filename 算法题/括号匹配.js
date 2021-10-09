/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = s.split("");
    if (arr.length % 2 != 0) {
        return false
    }
    let stack = [];
    let dic = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let left = Object.keys(dic);
    for (let i = 0; i < arr.length; i++) {
        if (left.includes(arr[i])) { //左括号入栈
            stack.push(arr[i])
        } else { //右括号的话，弹出栈顶的数据对比，不一样返回false
            let cur = stack.pop()
            if (arr[i] !== dic[cur]) {
                return false
            }
        }

    }
    return stack.length ? false : true
};

var isValid2 = (s) => {
    if (s.length % 2 != 0) {
        return false
    }
    while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
        s = s.replace("()", "")
        s = s.replace("[]", "")
        s = s.replace("{}", "")
        console.log(s)
    }
    return s.length ? false : true
}

let s = "([])";
console.log(isValid2(s))