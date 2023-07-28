var formulario = document.querySelector('form');
var inputId = formulario.idProduto
var btn = document.querySelector('.btn')

btn.addEventListener('click', buscarProduto)


function buscarProduto(event) {
    event.preventDefault();
    let idProduto = inputId.value
    formulario.reset()

    let produto = {
        id: idProduto
    }

    let url = "http://localhost:8081/api_rest_sw2/controller/DELETE_produto.php"

    fetch(url,{
        method: "DELETE",
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
        /*
        let tabela = document.querySelector('table')
        tabela.style.display =  'block'

        incluirNaTela(response)
        */
    })
    
}


function incluirNaTela(response){
    let corpo_tabela = document.querySelector("#corpo_tabela")
        
    var listTags = []
    
            
        let textTags = ['tr','td','td', 'td']
            
        listTags = criarTags(textTags, listTags)
        listTags = editarTags(listTags, response)
        listTags = incluir(listTags)

        corpo_tabela.appendChild(listTags[0])
        listTags = []
    
          
}

function criarTags(textTags, listTags){    
    textTags.forEach(tag => {
        let newTag = document.createElement(tag)
        listTags.push(newTag)  
    });
    return listTags
}

function editarTags(listTags, element){
    listTags[1].textContent = element.id
    listTags[2].textContent = element.nome
    listTags[3].textContent = element.preco

    return listTags
}

function incluir(listTags){
    listTags[0].appendChild(listTags[1])
    listTags[0].appendChild(listTags[2])
    listTags[0].appendChild(listTags[3])

    return listTags
}
