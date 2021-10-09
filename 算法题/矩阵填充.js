const count = (n) => {

    for (let i = 0; i < n; i++) {
        let arr = []
        for (let j = 0; j < n; j++) {
            if (i == j) {
                arr.push(i + 1)
            };
            if (i < j) {
                arr.push(arr[j - 1] + n);
            }
            if (i > j) {
                if (j == 0) {
                    arr.push(2 * n + (n - 1) * (n - i - 1))

                } else {
                    arr.push(arr[j - 1] + n);
                }
                // arr.push(2 * n + (n - 1) * (n - i - 1) + j * n);
            }
        }
        console.log(arr.join(" "));
    }
}
count(20)
// 1 4 7
// 8 2 5
// 6 9 3
// 1 7 13 19 25 31
// 32 2 8 14 20 26
// 27 33 3 9 15 21
// 22 28 34 4 10 16
// 17 23 29 35 5 11
// 12 18 24 30 36 6