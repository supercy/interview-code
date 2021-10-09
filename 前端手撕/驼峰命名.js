function cssStyle2DomStyle(sName) {
    if (sName[0] == "-") {
        sName = sName.substr(1, sName.length)
    }
    let arr = sName.split("-");
    let str = ""
    arr.forEach((item, index) => {
        if (item&&index!=0) {
            item = item[0].toUpperCase() + item.substr(1, item.length)
        }
        str += item
    });
    return str
}

console.log(cssStyle2DomStyle("-webkit-border-image"));