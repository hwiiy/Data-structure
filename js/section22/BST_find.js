class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    find(value){
        if(this.root===null) return false;

        var current = this.root,
            found = false;
        while(!found && current){
            if(value<current.value) current= current.left;
            else if(value>current.value) current = current.right;
            else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree)