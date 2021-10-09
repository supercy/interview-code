function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null
}

let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4)
root.left = node2;
root.right = node4
node2.left = node3
// console.log(root)

function threeOrders(root) {
    let results = []
    //前序遍历，递归，栈
    const pre1 = (root) => {
        if (!root) return []
        let res = [];
        const dfs = (root) => {
            if (!root) return;
            res.push(root.val);
            root.left && dfs(root.left);
            root.right && dfs(root.right)
        }
        dfs(root);
        return res
    }
    //前序遍历,迭代
    const pre2 = (root) => {
        if (!root) return []
        let stack = [];
        let res = [];
        stack.push(root);
        while (stack.length) {
            let curr = stack.pop()
            res.push(curr.val);
            curr.right && stack.push(curr.right)
            curr.left && stack.push(curr.left)
        }
        return res;
    }

    //中序遍历,递归，栈
    const mid1 = (root) => {
        if (!root) return [];
        let res = [];
        const dfs = (root) => {
            if (!root) return
            root.left && dfs(root.left);
            res.push(root.val);
            root.right && dfs(root.right)
        }
        dfs(root);
        return res
    }
    //中序遍历，迭代
    const mid2 = (root) => {
        if (!root) return [];
        let stack = [];
        let res = [];
        let curr = root;
        while (curr || stack.length) {
            if (curr) {
                stack.push(curr);
                curr = curr.left
            } else {
                curr = stack.pop();
                res.push(curr.val);
                curr = curr.right
            }
        }
        return res;
    }
    //后序遍历,递归，栈
    const post1 = (root) => {
        if (!root) return [];
        let res = [];
        const dfs = (root) => {
            if (!root) return
            root.left && dfs(root.left);
            root.right && dfs(root.right);
            res.push(root.val)
        }
        dfs(root);
        return res
    }
    //后续遍历，迭代
    const post2 = (root) => {
        if (!root) return [];
        let res = [];
        let stack = [];
        stack.push(root)
        while (stack.length) {
            let curr = stack.pop();
            res.push(curr.val);
            curr.left && stack.push(curr.left);
            curr.right && stack.push(curr.right);
        }

        return res.reverse()
    }

    //层序遍历，队列
    const level = (root) => {
        if (!root) return []
        let queue = [root];
        let res = [];
        while (queue.length) {
            let length = queue.length;
            let currLevel = []
            while (length > 0) {
                let curr = queue.shift();
                currLevel.push(curr.val)
                curr.left && queue.push(curr.left);
                curr.right && queue.push(curr.right);
                length--;
            }
            res.push(currLevel);
        }
        return res
    }
    results[0] = pre2(root);
    results[1] = mid2(root);
    results[2] = post2(root);
    results[3] = level(root);
    console.log(results);
}


threeOrders(root);