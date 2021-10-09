const promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject("Argument is not a array")
        };
        let counter = 0;
        let length = promises.length;
        let hasResolved = [];
        promises.forEach(promise => {
            Promise.resolve(promise).then(res => {
                counter++;
                hasResolved.push(res);
                if (counter == length) {
                    return resolve(hasResolved)
                }
            }, err => {
                return reject(err)
            })
        })
    })
}

const promiseRace = (promises) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject("argument is not a array")
        }
        promises.forEach(item => {
            Promise.resolve(item).then(res => {
                return resolve(res)
            }, err => {
                return reject(err)
            })
        })
    })
}

// let p1 = new Promise((resolve, reject) => {
//     resolve('第一个成功了')
// })

// let p2 = new Promise((resolve, reject) => {
//     resolve('第二个成功了')
// })
// let p3 = Promise.reject('第三个失败')

// promiseAll([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })


let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1001)
})

let r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 1000)
})

promiseRace([r1, r2]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})