/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 * 
 * @param root TreeNode类 
 * @param sum int整型 
 * @return bool布尔型
 */
function allPath(root) {
    if (!root) return false
    let stack = [{
        node: root,
        path: root.val
    }];
    let res = [];
    while (stack.length) {
        let cur = stack.pop();
        if (cur.node.right) {
            stack.push({
                node: cur.node.right,
                path: `${cur.path}${cur.node.right.val}`
            })
        }
        if (cur.node.left) {
            stack.push({
                node: cur.node.left,
                path: `${cur.path}${cur.node.left.val}`
            })
        }
        if (!cur.node.left && !cur.node.right) {
            res.push(cur.path)
        }
    }
    return res
}
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5
        }
    },
    right: {
        val: 3
    }
}
let res = allPath(root);
console.log(res);