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
        this.length = 0; // Corrigido para 'length'
    }

    addFirst(novoDado) {
        const novoNo = new No(novoDado);

        if (this.head === null) { // Se a lista estiver vazia
            this.tail = novoNo;
        } else {
            novoNo.prox = this.head;
            this.head.ant = novoNo;
        }
        this.head = novoNo;
        this.length++;
        return true;
    }

    addLast(novoDado) {
        const novoNo = new No(novoDado);

        if (this.head === null) { // Se a lista estiver vazia
            this.head = novoNo;
        } else {
            novoNo.ant = this.tail;
            this.tail.prox = novoNo;
        }
        this.tail = novoNo;
        this.length++;
        return true;
    }

    addAtIndex(index, data) {
        if (index < 0 || index > this.length) {
            console.log("Índice inválido. O índice deve ser um valor inteiro maior ou igual a zero e menor ou igual ao tamanho da lista.");
            return false;
        }

        if (index === 0) {
            return this.addFirst(data);
        }

        if (index === this.length) {
            return this.addLast(data);
        }

        const newNode = new No(data);
        let noAtual = this.head;
        let indiceAtual = 0;

        while (indiceAtual < index - 1) {
            noAtual = noAtual.prox;
            indiceAtual++;
        }

        newNode.ant = noAtual;
        newNode.prox = noAtual.prox;
        if (noAtual.prox !== null) {
            noAtual.prox.ant = newNode;
        }
        noAtual.prox = newNode;

        this.length++;
        return true;
    }

    removeFirst() {
        if (this.head === null) {
            console.log("Lista vazia");
            return null;
        }

        const elementoSalvo = this.head.dado; // Salvar dado a ser removido para retornar
        this.head = this.head.prox; // Head = head.prox, removendo o elemento

        if (this.head === null) { // Se for o último elemento, fazer tail = null
            this.tail = null;
        } else {
            this.head.ant = null;
        }

        this.length--; // Decrementar length
        return elementoSalvo; // Retornar elemento
    }

    removeLast() {
        if (this.tail === null) {
            console.log("Lista vazia");
            return null;
        }

        const elementoSalvo = this.tail.dado; // Salvar dado a ser removido para retornar
        this.tail = this.tail.ant; // Tail = tail.ant, removendo o elemento

        if (this.tail === null) { // Se for o último elemento, fazer head = null
            this.head = null;
        } else {
            this.tail.prox = null;
        }

        this.length--; // Decrementar length
        return elementoSalvo; // Retornar elemento
    }

    getLast() {
        return this.tail ? this.tail.dado : null;
    }

    getFirst() {
        return this.head ? this.head.dado : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    [Symbol.iterator]() {
        let currentNode = this.head; // Nó atual
        return {
            next() {
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

    toString() {
        let result = "";
        let currentNode = this.head; // Começa do primeiro nó
        while (currentNode !== null) {
            result += currentNode.dado + (currentNode.prox ? " -> " : "");
            currentNode = currentNode.prox;
        }
        return result;
    }
}
