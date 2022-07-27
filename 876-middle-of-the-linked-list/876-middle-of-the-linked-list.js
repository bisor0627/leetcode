/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const arr = [head.val];
    var copyhead = head;
    let num = 0;
    while (head.next){
        arr.push(head.next.val);
        head = head.next;
        num ++;
    }
    num = Math.ceil(num/2);
    while (num != 0){
        copyhead = copyhead.next;
        num --;
    }
    return copyhead;
    
};