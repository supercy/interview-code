//冒泡排序
const bubble = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

//ES6自带排序方法
const sort = (arr) => {
    return arr.sort((a, b) => a - b)
}

//快速排序
const quickSort = (arr, start, end) => {
    if (start > end) {
        return
    }
    let i = start,
        j = end
    var base = arr[i];
    while (i != j) {
        while (arr[j] > base && i < j) {
            j--
        }
        while (arr[i] <= base && i < j) {
            i++
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[start], arr[i]] = [arr[i], base];
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
    return arr
}

//[2,3,5,1,6,4]
const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1);
            }
        }
    }
    return arr


}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}


let arr = [];

for (let index = 0; index < 10; index++) {
    arr.push(parseInt(Math.random() * 100))
}

console.log(arr);

console.time("快速时间：")
console.log("快速排序>>>", quickSort(arr, 0, arr.length - 1));
console.timeEnd("快速时间：");

console.time("插入时间：")
console.log("插入排序>>>", insertSort(arr));
console.timeEnd("插入时间：");

console.time("冒泡时间：")
console.log("冒泡排序>>>", bubble(arr));
console.timeEnd("冒泡时间：");

console.time("ES6时间：")
console.log("ES6自带排序方法>>>", sort(arr))
console.timeEnd("ES6时间：");