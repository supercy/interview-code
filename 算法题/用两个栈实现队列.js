var stack1 = [];
var stack2 = [];

function push(node) {
    return stack1.push(node)
}

function pop() {
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }

    }
    return stack2.pop()
}
module.exports = {
    push: push,
    pop: pop
};