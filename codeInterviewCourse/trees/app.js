class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }    
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        } 
        let cursorNode = this.root;
        while (true) {
            if (value < cursorNode.value) {
                 if (!cursorNode.left) {
                    cursorNode.left = newNode
                    return this
                 }
                 cursorNode = cursorNode.left               
            } else {
                if (!cursorNode.right) {
                    cursorNode.right = newNode
                    return this
                }
                cursorNode = cursorNode.right
            }
        }
    }
    lookup(value) {
        if (!this.root) {
            return false;
        }
        let cursorNode = this.root
        while(cursorNode) {
            if (value < cursorNode.value) {
                cursorNode = cursorNode.left
            } else if (value > cursorNode.value) {
                cursorNode = cursorNode.right
            } else {
                return cursorNode
            }            
        }
    }
    remove(value) {
        if(!this.root){
            return false
        }
        let cursorNode = this.root
        let parentNode = null
        while(cursorNode) {
            if (value < cursorNode.value) {
                parentNode = cursorNode
                cursorNode = cursorNode.left
            } else if (value > cursorNode.value) {
                parentNode = cursorNode
                cursorNode = cursorNode.right
            } else {
                // we have a match
                // option 1 : no right child
                if (!cursorNode.right){
                    if (!parentNode) {
                        this.root = cursorNode.left
                    }
                    // make the left child a left child of the parent
                    if (cursorNode.value < parentNode.value){
                        parentNode.left = cursorNode.left
                    // make the left child a right child of the parent
                    } else if (cursorNode.value > parentNode.value){
                        parentNode.right = cursorNode.left
                    } 
                }
                return cursorNode
            }            
        }        
    }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(20))
//console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}