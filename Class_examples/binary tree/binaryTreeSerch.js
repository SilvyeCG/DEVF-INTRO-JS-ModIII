class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.rigth = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    // Funciones a implementar
    // Insertar
    insert(data) {
        let newNode = new Node(data)

        if(this.root === null) {
            this.root = newNode
        } else {
            // Crear una funcion para encontrar donde guardar el nodo
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.rigth === null) {
                node.rigth = newNode
            } else {
                this.insertNode(node.rigth, newNode)
            }
        }
    }
    // Remover
    remove(data) {
        this.root = this.removeNode(this.root, data)
    }
    removeNode(node, key) {
        if(node === null) {
            return null
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key)
            return node;
        } else if (key > node.data) {
            node.rigth = this.removeNode(node.rigth, key)
        } else {
            if(node.left === null && node.rigth === null) {
                node = null;
                return node
            }

            if(node.left === null) {
                node = node.rigth
                return node
            } else if(node.rigth === null) {
                node = node.left
                return node
            }

            let aux = this.findMinNode(node.rigth)
            node.data = aux.data
            return node
        }
    }

    // Funciones complementarias
    findMinNode(node) {
        if(node.left === null) {
            return node
        } else {
            this.findMinNode(node.left)
        }
    }

    // Obtener nodo raiz
    getRootNode() {
        return this.root
    }
    // in orden
    // pre orden
    // post orden
    // search
}