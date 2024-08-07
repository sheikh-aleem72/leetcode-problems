/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    if(head == null || head.next == null || head.next.next == null){
        return [-1,-1];
    }

    let firstCp = -1, lastCp = -1, minDistance = Infinity;
    let index = 1;
    let prev = head;
    let curr = head.next;

    while(curr.next != null){
        let next = curr.next;
        if((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val<next.val)){
            if(firstCp == -1){
                firstCp = index;
            }else{
                minDistance = Math.min(minDistance, index - lastCp);
            }
            lastCp = index;
        }

        prev = curr;
        curr = next;
        index++;
    }

    if(firstCp == lastCp){
        return [-1,-1];
    }

    let maxDistance = lastCp - firstCp;
    return [minDistance, maxDistance];
};