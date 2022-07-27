/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const arr = [head.val];
 
    while (head.next) {
        arr.push(head.next.val);
        head = head.next;
    } 
    
    return Number.parseInt(arr.join(''), 2)
};