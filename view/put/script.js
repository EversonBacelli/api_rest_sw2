var formulario = document.querySelector('form');
var inputId = formulario.idProduto
var inputNome = formulario.nomeProduto
var inputPreco = formulario.precoProduto
var btn = document.querySelector('.btn')

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
    })
    
}




