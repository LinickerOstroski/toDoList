class No {

    constructor(novoDado) {
        this.dado = novoDado;
        this.ant = null;
        this.prox = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    addFirst(novoDado) {
        const novoNo = new No(novoDado);

        if (this.head === null) { //se ela estiver vazia
            this.tail = novoNo;
        } else {
            novoNo.prox = this.head;
            this.head.ant = novoNo;
        }
        this.head = novoNo;
        this.lenght++;
        return true;
    }

    addLast(novoDado) {
        const novoNo = new No(novoDado);

        if (this.head === null) { //se ela estiver vazia
            this.head = novoNo;
        } else {
            novoNo.ant = this.tail;
            this.tail.prox = novoNo;

        }
        this.tail = novoNo;
        this.lenght++;
        return true;
    }

    addAtIndex(index, data) {
        if (index < 0) {
            // Verifica se o índice é válido (maior ou igual a zero)
            console.log("Indice invalido. O indice deve ser um valor inteiro maior ou igual a zero.");
            return false;
        }

        if (index === 0)
            // Se o índice for zero, chama o método addFirst() para adicionar no início da lista
            this.addFirst(data);


        if (index >= this.length)
            this.addLast(data);


        const newNode = new No(data);
        if (newNode === null)
            return false;

        let noAtual = this.head;
        let indiceAtual = 0;
        while (indiceAtual < index - 1) {
            // Percorre a lista até encontrar o nó anterior ao índice especificado
            noAtual = noAtual.prox;
            indiceAtual++;
        }

        newNode.ant = noAtual;
        newNode.prox = noAtual.next;
        noAtual.prox.ant = newNode;
        noAtual.prox = newNode;


        this.length++;
        return true;
    }

    removeFirst() {
        const elementoSalvo = this.head.dado;// salvar dado a ser removido para retornar
        this.head = this.head.prox; // head = head.prox, removendo o elemento 
        if (this.head == null) { // se for o ultimo elemento, fazer tail = null
            this.tail = null
        } else { //senao head.ant = null
            this.head.ant = null
        }
        this.lenght--; // decrementar lenght
        return elementoSalvo;// retornar elemento
    }

    removeLast() {
        const elementoSalvo = this.tail.dado;
        this.tail = this.tail.prox;
        if (this.tail == null) {
            this.head = null;
        } else {
            this.tail = null
        }
        this.lenght--;
        return elementoSalvo;
    }

    getLast() {
        return this.tail.dado;
    }

    getFirst() {
        return this.head.dado;
    }

    isEmpty() {
        if (this.lenght == 0) {
            return true;
        } else {
            return false;
        }
        //return this.head === null;
    }

    //-------------------------------------
    //Quando um objeto tem uma propriedade [Symbol.iterator], ele pode ser iterado com construções como [ for(const item of minhaLista)*/


    [Symbol.iterator]() {
        let currentNode = this.head; // nó atual
        return {
            next: function () {
                if (currentNode !== null) {
                    let value = currentNode.dado;
                    currentNode = currentNode.prox;
                    return { value: value, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
    //—----------------
    toString() {
        let result = "";
        let currentNode = this.head; //saindo do primeiro
        while (currentNode !== null) {
            result += currentNode.dado + (currentNode.prox ? " -> " : "");
            currentNode = currentNode.prox;
        }
        return result;
    }

}