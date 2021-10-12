function lowestCommonAncestor(root, o1, o2) {
    function CommmonAncestor(root, o1, o2) {
        if (root == null || root.val == o1 || root.val == o2) return root;
        let left = CommmonAncestor(root.left, o1, o2);
        let right = CommmonAncestor(root.right, o1, o2);
        if (left == null) {
            return right;
        }
        if (right == null) {
            return left;
        }
        return root;
    }
    return CommmonAncestor(root, o1, o2).val;
}

var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = function (root, p, q) {
        // 2. 确定递归终止条件
        if (root === null || root === p || root === q) {
            return root;
        }
        // 3. 确定递归单层逻辑
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left !== null && right !== null) {
            return root;
        }
        if (left === null) {
            return right;
        }
        return left;
    }
    return travelTree(root, p, q);
};