//molde
class Produto {//classe começando com letra maiuscula.

    constructor() {//inicializador de atributos
        this.id = 1 //dentro dessa classe(this), irá criar um id e inicializar em 1
        this.arrayProdutos = []
        this.EditId = null
    }
    
    //método
    salvar(){//ao clicar no botão pra salvar já vai executar o método lerDados
        let produto = this.lerDados()// "produto" irá receber os dados do método lerDados(id, nome do produto e o preço)
        if (this.validaCampos(produto) == true) {
            if (this.EditId == null) {
                this.adicionar(produto)//método adicionar dessa classe
            } else{
                this.atualizar(this.EditId, produto)
            }
            
        }
        this.listaTabela()
        this.cancelar()//chama o método cancelar(limpa os campos após adicionar o item na lista)
    }

    listaTabela(){
        let tbody = document.getElementById("tbody")

        tbody.innerText = ""

        for (let i = 0; i < this.arrayProdutos.length; i++) {//vai rodar até o i se igualar ao numero de slots da array 
            let tr = tbody.insertRow()//insertRow cria uma nova linha(row) dentro da tabela

            let td_id = tr.insertCell()//insertCell cria uma nova coluna na linha tr
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acao = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].preco

            let imgEdit = document.createElement("img")//cria um elemento HTML
            imgEdit.src = "img/edit.png"
            imgEdit.setAttribute("onclick", "produto.editar("+ JSON.stringify(this.arrayProdutos[i]) +")")//transforma em string
            td_acao.appendChild(imgEdit)

            imgEdit.setAttribute("style", "cursor: pointer; width: 20px")//adiciona um style com o atributo cursor: pointer e aumentando o tamanho da imagem

            let imgDel = document.createElement("img")
            imgDel.src = "img/del.png"

            td_acao.appendChild(imgDel)
            imgDel.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")")// ("evento","ação"), ao clicar na imagem que a várivel imgDel tá, irá executar o deletar() do obj produto.

            imgDel.setAttribute("style", "cursor: pointer; width: 20px")//adiciona um style com o atributo cursor: pointer e aumentando o tamanho da imagem

        }
    }

    adicionar(produto){
        produto.preco = parseFloat(produto.preco)
        this.arrayProdutos.push(produto);//push permite adicionar elementos dentro de um array(no final da fila). adiciona o id, nomeProduto e preço em um só slot da array.
        //ex: arrayProdutos = [{id: 1, nomeProduto: 'maça', preco: '2 reais'},{id: 2, nomeProduto: 'banana', preco: '3 reais'} ]
        this.id++//cada vez q for chamado, irá adicionar +1 em id
    }

    atualizar(idRecebido, produtoRecebido){
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == idRecebido) {
                this.arrayProdutos[i].nomeProduto = produtoRecebido.nomeProduto
                this.arrayProdutos[i].preco = produtoRecebido.preco 
            }
            
        }
    }

    editar(dadosString){

        if (confirm("Deseja editar o produto?")) {
            
            this.EditId = dadosString.id

            document.getElementById("produto").value = dadosString.nomeProduto
            document.getElementById("preco").value = dadosString.preco

            document.getElementById("btn1").innerText = "Atualizar"

        }

    }



    lerDados(){//método lerDados dentro da classe Produto
        let produto = {//objeto produto
            // Os atributos serão adicionados dinamicamente.
            //ex: nomeProduto;
            //ex: preco;
        }

        produto.id = this.id // adiciona o atributo id que está nessa(this) classe(class Produto) no objeto produto 
        produto.nomeProduto = document.getElementById("produto").value//adicionando dinamicamente o atributo nomeProduto no objeto produto
        produto.preco = document.getElementById("preco").value//pega todo o valor do input com id produto

        return produto
    }

    validaCampos(produto){

        let msg = ""//váriavel para poder mostrar as duas mensagens ao msm tempo se for necessário.

        if (produto.nomeProduto == "") {
            msg += "- Informe o nome do produto \n"//se o nome do produto estiver vázio.
        }

        if (produto.preco == "") {
            msg += "- Informe o preço do produto \n"//se o preço do produto estiver vázio.
        }

        if (msg != "") {//se a váriavel msg receber alguma das strings acima, irá dar um alert e retornar false.
            alert(msg)
            return false
        }
        return true
    }

    cancelar(){

        produto.nomeProduto = document.getElementById("produto").value = ""
        produto.preco = document.getElementById("preco").value = ""

        document.getElementById("btn1").innerText = "Salvar"
        this.EditId = null
    }

    deletar(id){


        if (confirm("Deletar o produto id: " + id +"?")) {//vai abrir um alert com um botão de confirmar, se clicado, irá executar o código abaixo.
            
            let tbody = document.getElementById("tbody")

            for (let i = 0; i < this.arrayProdutos.length; i++) {//varrer o tamanho da array
                if (this.arrayProdutos[i].id == id) {// se o index(começo com 0) da array for igual ao id recebido
                    this.arrayProdutos.splice(i, 1)//remover item de uma array. (index do for , quantidade de itens pra deletar)
                    tbody.deleteRow(i);//deleta linhas
                }
                
            }

        }

    }
}



var produto = new Produto()//objeto criado a partir da classe Produto
