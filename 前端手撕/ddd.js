function getSheep(year) {
    var count = 1;
    for (let i = 1; i <= year; i++) {
        if (i == 2) {
            count += getSheep(year - 2);
        } else if (i == 4) {
            count += getSheep(year - 4);
        } else if (i == 5) {
            count--
        }
    }
    return count;
    // write code here
}
console.log(getSheep(10));