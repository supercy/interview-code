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
function hasPathSum(root, sum) {
    if (!root) return false
    let stack = [{
        node: root,
        path: root.val
    }];
    let target = 0
    while (stack.length) {
        let cur = stack.pop();
        if (cur.node.right) {
            stack.push({
                node: cur.node.right,
                path: cur.path + cur.node.right.val
            })
        }
        if (cur.node.left) {
            stack.push({
                node: cur.node.left,
                path: cur.path + cur.node.left.val
            })
        }
        if (!cur.node.left && !cur.node.right && cur.path == sum) {
            return true
        }
    }
    return false
}
module.exports = {
    hasPathSum: hasPathSum
};