const find = (str) => {
    // if (str.length == 1) {
    //     return [str]
    // } else {
    //     const result = [];
    //     var pre = find(str.slice(1));
    //     for (let j = 0; j < pre.length; j++) {
    //         for (let k = 0; k < pre[j].length + 1; k++) {
    //             var temp = pre[j].slice(0, k) + str[0] + pre[j].slice(k);
    //             console.log(temp);
    //             result.push(temp)
    //         }
    //     }

    //     return [...new Set(result)]
    // }
    if (str.length == 1) {
        console.log("NO")
    } else {
        let arr = str.split("")
        let arr2 = arr.filter((item, index) => arr.indexOf(item) == index);
        console.log(arr2);
        if (arr2.length > 1) {
            console.log("YES")
        } else {
            console.log("NO")
        }
    }

}



// let all = find("abbc");
const round = () => {
    let n = 4;
    let H = 4;
    let W = 6;
    let line2 = [1, 4, 3, 5];
    let line3 = [2, 4, 0, 2]
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            arr.push(Math.ceil(Math.sqrt(Math.pow(line2[i], 2) + Math.pow(line3[i], 2))))
        }
    }
    console.log(arr)
    
}
round()