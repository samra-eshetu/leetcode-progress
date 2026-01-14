 class TreeNode1 {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function maxDepth(root: TreeNode1 | null): number {
    if(root === null ){
        return 0;
    }
    const leftDepth : number = maxDepth(root.left);
    const rightDepth : number = maxDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
};