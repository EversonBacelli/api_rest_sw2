const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")
const nome = urlParams.get("nome")
const preco = urlParams.get("preco")
alert('deu certo')

var formulario = document.querySelector('form');
var inputId = formulario.idProduto
var inputNome = formulario.nomeProduto
var inputPreco = formulario.precoProduto
var btn = document.querySelector('.btn')

inputId.value = id
inputNome.value = nome
inputPreco.value = preco


btn.addEventListener('click', buscarProduto)


function buscarProduto(event) {
    event.preventDefault();
    
    let idProduto = inputId.value
    let nomeProduto = inputNome.value
    let precoProduto = inputPreco.value
    
    formulario.reset()

    let produto = {
        id: idProduto,
        nome: nomeProduto,
        preco: precoProduto
    }

    let url = "http://localhost:8081/api_rest_sw2/controller/PUT_produto.php"

    fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(produto)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (response) {
        console.log(response)
        window.location.href = 'http://localhost:8081/api_rest_sw2/view/all/'
    })
    
}




