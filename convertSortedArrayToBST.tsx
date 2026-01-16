class TreeNode3 {
     val: number
     left: TreeNode3 | null
     right: TreeNode3 | null
     constructor(val?: number, left?: TreeNode3 | null, right?: TreeNode3 | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
function sortedArrayToBST(nums: number[]): TreeNode3 | null {
    const buildBST =(leftIndex: number, rightIndex: number): TreeNode3|null =>{
        if(leftIndex>rightIndex){
            return null;
        }
        const middleIndex: number = (leftIndex+rightIndex) >> 1;

        const rootNode : TreeNode3 = new TreeNode3(
            nums[middleIndex],
            buildBST(leftIndex, middleIndex-1),
            buildBST(middleIndex+1, rightIndex)
        );
        return rootNode;
            
        
    }
    return buildBST(0, nums.length-1);
};