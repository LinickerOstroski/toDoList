class No{

    constructor(novoDado){
        this.dado = novoDado;
        this.ant = null;
        this.prox = null;
    } 
}

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);

        if(this.head === null){ //se ela estiver vazia
            this.tail = novoNo;
        }else{ 
            novoNo.prox = this.head;
            this.head.ant = novoNo;
        }
        this.head = novoNo;
        this.lenght++;
        return true;
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);

        if(this.head === null){ //se ela estiver vazia
            this.head = novoNo;
        }else{
            novoNo.ant = this.tail;
            this.tail.prox = novoNo;
           
        }
        this.tail = novoNo;
        this.lenght++;
        return true;
    }

    removeFirst(){
        let elementoSalvo = head.dado;// salvar dado a ser removido para retornar
        head = head.prox; // head = head.prox, removendo o elemento 
        if(head == null){ // se for o ultimo elemento, fazer tail = null
            tail = null
        }else{ //senao head.ant = null
            this.head.atn = null
        }
        this.lenght--; // decrementar lenght
        return elementoSalvo;// retornar elemento
    }


}