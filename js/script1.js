//molde
class Produto {//classe começando com letra maiuscula

    constructor() {//inicializador de atributos
        this.id = 1 //dentro dessa classe, o id vai inicializar em 1
    }

    //método
    salvar(){//ao clicar no botão pra salvar já vai executar o método lerDados
        let produto = this.lerDados()// produto irá receber os dados do método lerDados(id, nome do produto e o preço)
    }

    lerDados(){
        let produto = {//objeto
            // Os atributos serão adicionados dinamicamente.
            //nomeProduto;
            //preco;
        }

        produto.id = this.id // adiciona o atributo id que está nessa(this) classe(class Produto) no objeto produto 
        produto.nomeProduto = document.getElementById("produto").value//adicionando dinamicamente o atributo nomeProduto no objeto produto
        produto.preco = document.getElementById("preco").value//pega todo o valor do input com id produto

        return produto
    }

    cancelar(){
        alert("MétodoExcluir")
    }
}


//objeto,
var produto = new Produto()
