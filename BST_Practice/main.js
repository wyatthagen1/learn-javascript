class Node{
    constructor(value){
        this.left = null 
        this.right = null;
        this.value = value; 
    }
    setRight(node){
        this.right = node;
    }
    setLeft(node){
        this.left = node;
    }
    numChildren(){
        let num = 0;
        if(this.right !== null) num++
        if(this.left !== null) num++
        return num 
    }  
}

class Tree{
    constructor(arr){
        const sortedArr = [...new Set(arr.sort((a, b) => a - b))]
        this.root = Tree.buildTree(sortedArr);
    }

    static buildTree(arr/*sorted only*/, start =0, end = arr.length-1){
        if(start>end) return null
        
        const mid = Math.floor((start+end)/2);
        const root = new Node(arr[mid]);

        root.setLeft(Tree.buildTree(arr,start,mid-1))
        root.setRight(Tree.buildTree(arr,mid+1,end))

        return root 
    }

    insert(value){
        if(this.root == null){
            throw new Error('BST was not properly initialized')
        }

        const newNode = new Node(value)
        let currNode = this.root;

        while(true){
            let action = (value < currNode.value) ? 'left' : 'right'; 

            if(currNode[action] === null){
                currNode[action] = newNode;
                console.log(`${value} was inserted ${action} of node with value ${currNode.value}`)
                return 
            }
            currNode = currNode[action];
        }
    }

    deleteItem(value){
        let {targetNode,parentNode,connection} = this.find(value);
        console.log(`targetNode: ${targetNode}, parentNode: ${parentNode}, connection: ${connection}`)

        switch(targetNode.numChildren()){
            case 0:
                if(parentNode === null){ this.root = null}
                else{
                    parentNode[connection] = null;
                } 
                break;

            case 1:{ 
                let edge = (targetNode.right === null) ? 'left' : 'right';
                if(parentNode === null){ this.root = targetNode[edge]}
                else{
                    parentNode[connection] = targetNode[edge];
                    targetNode[edge] = null 
                }
                break;
            }
            case 2:{
                let nextSmallest = targetNode.right;
                while(nextSmallest.left !== null){ 
                    nextSmallest = nextSmallest.left; // travese left to next smallest
                }
                const replacedValue = nextSmallest.value;
                this.deleteItem(nextSmallest.value);
                targetNode.value = replacedValue;
                break;
            }

            default:
                throw new Error('target node did not have a valid numChildren')

        }
    }

    find(value){
        let targetNode = this.root;
        let parentNode = null; 
        let connection = null;

        while(true){
            if(targetNode.value === value){
                return {targetNode,parentNode,connection}
            }
            let action = (value < targetNode.value) ? 'left' : 'right'; 
            if(targetNode[action]===null){
                console.log('maximum search depth reached, value was not found')
                return null
            }
            connection = action;
            parentNode = targetNode;
            targetNode = targetNode[action];
        }
    }

    levelOrder(callback){

        let fallback = [];
        let effectiveCallback;
        if (callback == null) {
            effectiveCallback = (value) => {
              fallback.push(value);
            };
          } else {
            effectiveCallback = callback;
          }

        let queue = [this.root];
        let first = 0;
        let last = queue.length;

        while(last - first > 0){
            console.log('inside while loop')
            // operate on the target node 
            const result = effectiveCallback(queue[first].value);
            if (result !== undefined) {
                queue[first].value = result;
            }
            // add node children to the queue 
            if(queue[first].left !== null){
                queue.push(queue[first].left) // add the new node
                last++ 
            }
            if(queue[first].right !== null){
                queue.push(queue[first].right) // add the new node
                last++ 
            }
            first++

        }
        if(fallback.length > 0) return fallback
    }
    height(node, height=0){
        switch(node.numChildren()){
            case 0:{
                // leaf node so return 
                return height
            }
            case 1:{
                height++
                const edge = (node.right === null) ? 'left' : 'right';
                const newHeight = this.height(node[edge],height)
                return newHeight 
            }
            case 2:{
                height++
                const heightRight = this.height(node.right,height)
                const heightLeft = this.height(node.left,height)
                const result = (heightLeft > heightRight) ? heightLeft : heightRight;
                return result               
            }

        }
    }
    depth(node){
        let targetNode = this.root
        const value = node.value;
        let depth = 0;

        while(true){
            if(targetNode.value === value){
                return depth
            }
            let action = (value < targetNode.value) ? 'left' : 'right'; 
            if(targetNode[action]===null){
                console.log('maximum search depth reached, value was not found')
                break
            }
            targetNode = targetNode[action];
            depth++
        }
    }
    isBalanced(){
        return this.checkBalanceAndHeight(this.root) !== -1
    } 
    checkBalanceAndHeight(node){
        if(node === null){
        return 0  // Height of an empty tree is 0
        }
    
        const leftHeight = this.checkBalanceAndHeight(node.left)
        if (leftHeight === -1){
            return -1  // Left subtree is unbalanced
        }

        const rightHeight = this.checkBalanceAndHeight(node.right)
        if (rightHeight === -1){
            return -1  // Right subtree is unbalanced
        }
        if(Math.abs(leftHeight - rightHeight) > 1){
            return -1  // Current node is unbalanced
        }
        return (leftHeight > rightHeight) ? leftHeight + 1 : rightHeight + 1   // Return height of current subtree

    }
    rebalance(){
        const valueAr = [];
        let queue = [this.root];
        let first = 0;
        let last = queue.length;

        while(last - first > 0){
            console.log('inside while loop')
            // grab the value 
            valueAr.push(queue[first].value);
            // add node children to the queue 
            if(queue[first].left !== null){
                queue.push(queue[first].left) // add the new node
                last++ 
            }
            if(queue[first].right !== null){
                queue.push(queue[first].right) // add the new node
                last++ 
            }
            first++
        }
        const sortedArr = [...new Set(valueAr.sort((a, b) => a - b))]
        this.root = Tree.buildTree(sortedArr);

    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const searchTreeDriver = () =>{
    const valueAr = new Array(20).fill().map(()=>Math.floor(Math.random()*100))
    const tree = new Tree(valueAr);
    prettyPrint(tree.root);
    
    for(let i=0;i<20;i++){
        // insert 4 numbers
        let num = Math.floor(Math.random()*100);
        if(tree.find(num)===null){
            console.log(num)
            tree.insert(num)
            i++
        }
    }

    prettyPrint(tree.root);
    console.log(tree.isBalanced())
    tree.rebalance()
    prettyPrint(tree.root)
    console.log(tree.isBalanced())

}

searchTreeDriver()
/*  
const testArr2 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const testTree = new Tree(testArr2);
console.log(testArr2)
console.log(testTree)
testTree.insert(6)
testTree.insert(200)
testTree.insert(199)
testTree.insert(2)
prettyPrint(testTree.root)
console.log(testTree.isBalanced())
//let oops = testTree.levelOrder()
//prettyPrint(testTree.root)
//console.log(oops)
//let {targetNode} = testTree.find(8)
//console.log(`num children: ${targetNode.numChildren()}`)
//console.log(`height of node.val ${targetNode.value}: ${testTree.height(targetNode)} `)
//console.log(`depth of ${targetNode.value}: ${testTree.depth(targetNode)}`)
*/ 









    

