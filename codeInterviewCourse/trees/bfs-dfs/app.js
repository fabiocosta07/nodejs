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
    breadthFirstSearch() {
        let currentNode = this.root
        let list = []
        let queue = []

        queue.push(currentNode)
        while(queue.length > 0) {
            currentNode = queue.shift()
            list.push(currentNode.value)
            if (currentNode.left){
                queue.push(currentNode.left)
            }
            if (currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }
    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length){
            return list
        }
        let currentNode = queue.shift()
        list.push(currentNode.value)
        if (currentNode.left){
            queue.push(currentNode.left)
        }
        if (currentNode.right){
            queue.push(currentNode.right)
        }
        return this.breadthFirstSearchRecursive(queue, list)
    }
    depthFirstSearchInOrder(){
        return this.travervalInOrder(this.root,[])
    }
    depthFirstSearchPreOrder(){
        return this.travervalPreOrder(this.root,[])
    }
    depthFirstSearchPostOrder(){
        return this.travervalPostOrder(this.root,[])
    } 

    travervalInOrder(node, list) {
        if (node.left) {
            this.travervalInOrder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this.travervalInOrder(node.right, list)
        }
        return list
    }    
    travervalPreOrder(node, list) {
        list.push(node.value)
        if (node.left) {
            this.travervalPreOrder(node.left, list)
        }
        if (node.right) {
            this.travervalPreOrder(node.right, list)
        }
        return list
    }  
    travervalPostOrder(node, list) {
        if (node.left) {
            this.travervalPostOrder(node.left, list)
        }
        if (node.right) {
            this.travervalPostOrder(node.right, list)
        }
        list.push(node.value)
        return list
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

console.log(tree.root)
//console.log(tree.breadthFirstSearchRecursive([tree.root], []))
console.log(tree.depthFirstSearchPostOrder())

//      9
//   4     20
// 1  6  15  170