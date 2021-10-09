const addTask = (time, content) => {
    var arr = [];
    let promise = new Promise(r => {
        setTimeout(() => {
            r(console.log(content))
        }, time)
    });
    arr.push(promise);
    return Promise.all(arr)
}