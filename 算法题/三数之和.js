// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 
// 注意： 答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
// 循环内不考虑去重 

let nums = [-1, 0, 1, 2, -1, -4];

var threeSum1 = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    const resSet = new Set();
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        let l = i + 1,
            r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue
            };
            if (sum > 0) {
                r--;
                continue
            };
            resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
            l++;
            r--;
        }
    }
    return Array.from(resSet).map(i => i.split(","));
};

// 去重优化
var threeSum2 = function (nums) {
    const len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        // a去重
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1,
            r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
                continue
            };
            if (sum > 0) {
                r--;
                continue
            };
            res.push([nums[i], nums[l], nums[r]])
            // b c 去重 
            while (l < r && nums[l] === nums[++l]);
            while (l < r && nums[r] === nums[--r]);
        }
    }
    return res;
};
let res = threeSum2(nums);
console.log(res);