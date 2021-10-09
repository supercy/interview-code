const findNode = function (tree) {
    console.log(tree.val);
    while (tree.childrenNode) {
        // console.log(tree.childrenNode.val);
        tree = findNode(tree.childrenNode);
        return tree
    }
}


const tree = {
    val: 1,
    childrenNode: {
        val: 2,
        childrenNode: {
            val: 3
        }
    }
}
findNode(tree)