function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return isMirror(root.left, root.right);
}

function isMirror(
  leftNode: TreeNode | null,
  rightNode: TreeNode | null
): boolean {
  if (leftNode === null && rightNode === null) {
    return true;
  }
  if (leftNode === null || rightNode === null) {
    return false;
  }
  if (leftNode.val !== rightNode.val) {
    return false;
  }
  return (
    isMirror(leftNode.left, rightNode.right) &&
    isMirror(leftNode.right, rightNode.left)
  );
}
