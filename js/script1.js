//molde
class Produto {//classe começando com letra maiuscula

    constructor() {//inicializador de atributos
        this.id = 1 //dentro dessa classe(this), vai criar um id e inicializar em 1
        this.arrayProdutos = []
    }
    
    //método
    salvar(){//ao clicar no botão pra salvar já vai executar o método lerDados
        let produto = this.lerDados()// produto irá receber os dados do método lerDados(id, nome do produto e o preço)
        this.validaCampos(produto)

    }

    lerDados(){//método lerDados dentro da classe Produto
        let produto = {//objeto produto
            // Os atributos serão adicionados dinamicamente.
            //nomeProduto;
            //preco;
        }

        produto.id = this.id // adiciona o atributo id que está nessa(this) classe(class Produto) no objeto produto 
        produto.nomeProduto = document.getElementById("produto").value//adicionando dinamicamente o atributo nomeProduto no objeto produto
        produto.preco = document.getElementById("preco").value//pega todo o valor do input com id produto

        return produto
    }

    validaCampos(produto){
        if (produto.nomeProduto == "") {
            
        }

    }

    cancelar(){
        alert("MétodoExcluir")
    }
}


//objeto
var produto = new Produto()