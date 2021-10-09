let array = [{
    id: 2,
    val: "班级1",
    parentId: 1
}, {
    id: 1,
    val: "学校",
    parentId: null
}, {
    id: 2,
    val: "班级1",
    parentId: 1
}, {
    id: 3,
    val: "班级2",
    parentId: 1
}, {
    id: 4,
    val: "学生1",
    parentId: 2
}, {
    id: 5,
    val: "学生2",
    parentId: 2
}, {
    id: 6,
    val: "学生3",
    parentId: 3
}]
const arr2tree = (arr) => {
    let root = arr.find((item, index) => {
        if (item.parentId == null) {
            arr.splice(index, 1);
            return true
        }

    });
    arr.shift();
    let tree = {
        id: root.id,
        val: root.val,
        children: toTree(root.id, arr)
    }
    return tree
}
const toTree = (parentId, arr) => {
    let children = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentId == parentId) {
            children.push({
                id: arr[i].id,
                val: arr[i].val,
                children: toTree(arr[i].id, arr)
            })
        }
    }
    return children;
}
let res = arr2tree(array);
console.log(res);