/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let set = new Set();
    let map = new Map();

    for(const desc of descriptions){
        if(!map.has(desc[0])){
            map.set(desc[0], new TreeNode(desc[0]));
        }

        if(!map.has(desc[1])){
            map.set(desc[1], new TreeNode(desc[1]));
        }

        if(desc[2] == 1){
            map.get(desc[0]).left = map.get(desc[1]);
        }else{
            map.get(desc[0]).right = map.get(desc[1]);
        }

        set.add(desc[1]);
    }

    for(const desc of descriptions){
        if(!set.has(desc[0])){
            return map.get(desc[0]);
        }
    }

    return null;
};