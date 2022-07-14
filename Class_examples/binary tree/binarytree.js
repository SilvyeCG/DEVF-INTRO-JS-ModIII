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
            if(this.root === Null){
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
        //get in order
        //get pre-order
        //post order
        //search
    }