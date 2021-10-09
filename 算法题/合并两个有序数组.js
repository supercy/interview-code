function merge(A, m, B, n) {
    let i = 0;
    let j = 0;
    while (i < m + n ) {
        //如果B指针指向的数据小于A,就把B指针指向的数据插入到A的位置，同时i,j后移
        if (A[i] > B[j]) {
            A.splice(i, 0, B[j]);
            j++
        }
        //否则，说明B指针指向的数据大于A指针，i继续往后走
        i++
    }
    if (j < n) {
        for (j; j < n; j++) {
            A.push(B[j])
        }
        
    }
}
// let A = [4, 5, 6];
// let B = [1, 2, 3];
let A = [1, 2, 6];
let B = [3, 5, 7, 8];
merge(A, 3, B, 4);
console.log(A);