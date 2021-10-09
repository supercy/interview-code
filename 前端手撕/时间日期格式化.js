const formatDate = (date, formatter) => {
    const add0 = (str) => {
        return str = str < 10 ? `0${str}` : str
    }
    const formatObj = {
        yyyy: date.getFullYear(),
        yy: date.getFullYear() % 100,
        MM: add0(date.getMonth() + 1),
        M: date.getMonth() + 1,
        dd: add0(date.getDate()),
        d: date.getDate(),
        HH: add0(date.getHours()),
        H: date.getHours(),
        hh: add0(date.getHours() % 12),
        h: date.getHours() % 12,
        mm: add0(date.getMinutes()),
        m: date.getMinutes(),
        ss: add0(date.getSeconds()),
        s: date.getSeconds(),
        w: function () {
            let arr = ['日', '一', '二', '三', '四', '五', '六']
            return arr[date.getDay()]
        }
    }
    for (const key in formatObj) {
        if (Object.hasOwnProperty.call(formatObj, key)) {
            formatter = formatter.replace(key, formatObj[key])
        }
    }
    return formatter
}

console.log(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss 星期w'));