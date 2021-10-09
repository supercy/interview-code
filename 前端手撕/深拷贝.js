const deepClone = (obj, hash = new WeakMap()) => {
    if (typeof obj !== "object" || obj === null || obj instanceof Date || obj instanceof RegExp) {
        return obj
    } else {
        let cloneObj = Array.isArray(obj) ? [] : {};
        if (hash.get(obj)) return hash.get(obj)
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                if (obj[key] == obj) {
                    hash.set(obj, obj[key])
                }
                cloneObj[key] = deepClone(obj[key], hash)
            }
        }
        return cloneObj
    }
}
let obj = {
    name: "tom",
    age: 14,
    score: {
        math: 99,
        history: 90,
    }
}
// obj.test = obj;

let clone = deepClone(obj);

obj.score.math = 100;
obj.name = "john";


console.log(obj);
console.log(clone);
// let clone = deepClone(obj);

// clone = new Date()