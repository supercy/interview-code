function twoSum(numbers, target) {
    let obj = {}
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i]
        if (obj[target - item] || obj[target - item] == 0) {
            return [obj[target - item], i]
        }
        obj[item] = i;
    }
}



let numbers = [3, 2, 4, 4, 8];
let target = 8

console.log(twoSum(numbers, target));