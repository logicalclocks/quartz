import { TreeNode } from '../types';
type ReturnType = TreeNode | null;
declare const getNode: (tree: TreeNode[] | TreeNode, key: keyof TreeNode, value?: string) => ReturnType;
export default getNode;
