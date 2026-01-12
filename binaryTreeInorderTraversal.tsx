

function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const performInorderDFS = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    performInorderDFS(node.left);
    result.push(node.val);
    performInorderDFS(node.right);
  };

  performInorderDFS(root);
  return result;
}
