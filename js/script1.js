//molde
class Produto {//classe começando com letra maiuscula

    constructor() {//inicializador de atributos
        this.id = 0 //dentro dessa classe, o id vai inicializar em 0
        this.nomeProduto = ""
        this.valor = 0
    }

    

    //método
    adicionar(){
        alert("MétodoAdicionar")
    }

    excluir(){
        alert("MétodoExcluir")
    }
}


//objeto
var produto = new Produto()