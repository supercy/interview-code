//节流,delay时间后执行第一次
const throttle = (fn, delay) => {
    var timer;
    return function () {
        if (timer) {
            return
        } else {
            timer = setTimeout(() => {
                fn();
                timer = null
            }, delay)
        }
    }
}

//节流，立刻执行一次
const throttleImme = (fn, delay) => {
    let previous = new Date();
    return function () {
        let now = new Date();
        if (now - previous > delay) {
            fn();
            previous = now
        }
    }
}


//防抖

const debounce = (fn, delay) => {
    var timer;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn();
        }, delay)
    }
}


// const jieliu = (fn, delay) => {
//     let timer = null;
//     return function () {
//         if (timer) return;
//         timer = setTimeout(() => {
//             fn();
//             timer = null
//         }, delay)
//     }
// }

// const jieliu2 = (fn, delay) => {
//     let pre = new Date();
//     return function () {
//         let now = new Date();
//         if (now - pre > delay) {
//             fn();
//             pre = now
//         }
//     }
// }


// const debounce = (fn, delaly) => {
//     let timer = null;
//     return function () {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn()
//         }, delay)
//     }
// }


const debounce = (fn, delay) => {
    let timer;
    return () => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, delay)
    }
}



const throttle = (fn, delay) => {
    let timer = null
    return function () {
        if (timer) {
            return
        } else {
            timer = setTimeout(() => {
                fn();
                timer = null
            })
        }
    }
}