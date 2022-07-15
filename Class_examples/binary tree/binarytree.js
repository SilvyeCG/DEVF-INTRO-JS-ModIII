class Node{
    constructor(data){
        this.data = data
        this.left = null //apuntador izq
        this.right = null //apuntador der
    }

}

class BinarySearchTree{
        constructor(){
            this.root = null
        }

        //main functions
        //insert

        insert(data){
            let newNode = new Node(data);
            if(this.root === null){
                this.root = newNode;
            }else{
                // crear func para encontrar donde guardar el node
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node, newNode){
            if(newNode.data < node.data){
                if(node.left === null){
                    node.left = newNode;
                }else{
                    this.insertNode(node.left, newNode)
                }
            }else{
                if(node.right === null){
                    node.right = newNode;
                }else{
                    this.insertNode(node.right, newNode)
                }
            }
        }
        //remove

        remove(data){
            this.root = this.removeNode(this.root, data)
        }
        removeNode(node,key){
            if(node === null){
                return null
            }else if(key < node.data){
                node.left = this.removeNode(node.left, key);
                return node;
            }else if(key > node.data){
                node.right = this.removeNode(node.right, key);
                return node;
            }else{
                if(node.left === null && node.right ===null){
                    node = null
                    return node
                }

                if(node.left === null){
                    node = node.right
                    return node
                }else if(node.right === null){
                    node = node.left
                    return node
                }

                let aux = this.findMinNode(node.right)
                node.data = aux.data
                node.right = this.removeNode(node.right, aux.data)
                return node
                
            }
        }
        //complement func: 
        //searchNodeMin

        findMinNode(node){
            if(node.left === null){
                return node
            }else{
                this.findMinNode(node.left)
            }
        }
        //get RootNode

        getRootNode(){
            return this.root
        }

        //search

        search(node,data){
            if(node === null){
                return null
            } else if(data < node.data){
                return this.search(node.left, data)
            }else if(data > node.data){
                return this.search(node.right, data)
            }else{
                return node
            }
        }

        // BINARY TREE ORDER
        //        4   
        //    2       6
        //  1  3     5  7


        //get pre order  4 2 1 3 6 5 7

        preOrder(node){
            if( node !== null){
                console.log(node.data)
                this.preOrder(node.left)
                this.preOrder(node.right)
            }
        }
        
        //get in-order  1 2 3 4 5 6 7
        inOrder(node) {
            if(node !== null){
               this.inOrder(node.left) 
               console.log(node.data)
               this.inOrder(node.right)
            }
        }
        //post order 1 3 2 5 7 6 4
        postOrder(node){
            if(node !== null){
                this.inOrder(node.left) 
                this.inOrder(node.right)
                console.log(node.data)
            }
        }
    }

let abb = new BinarySearchTree();
abb.insert(4);
console.log(abb)
abb.insert(2);
abb.insert(6);
abb.insert(1);
abb.insert(3);
abb.insert(7);
abb.insert(5);
console.log(abb);
// abb.remove(7);
// console.log(abb);
// abb.remove(6);
// console.log(abb);
// abb.remove(2);
// console.log(abb);

let root =  abb.getRootNode()
abb.inOrder(root)
abb.preOrder(root)
abb.postOrder(root)
abb.search(root, 5)
abb.search(root, 7)
abb.search(root, 4)