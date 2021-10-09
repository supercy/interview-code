const removeNthFromEnd = (head, n) => {
    const dummy = new ListNode(-1, head);
    let left = dummy,
        right = dummy;
    while (1 + n--) {
        right = right.next;
    }
    if (!right) return dummy.next.next;
    while (right) {
        right = right.next;
        left = left.next;
    }
    left.next = left.next.next;
    return dummy.next;
};