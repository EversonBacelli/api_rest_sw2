import editar from './put.js'
import deletar from './delete.js'

export default function buscarDados(){
    let url = "http://localhost:8081/api_rest_sw2/controller/GET_produtos.php"

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            incluirNaTela(response)
        })
    
    
        
        function incluirNaTela(response){
            let corpo_tabela = document.querySelector("#corpo_tabela")
            
            var listTags = []
            response.forEach(element => {
                
                let textTags = ['tr','td','td', 'td', 'td', 'td', 'img', 'img']
                
                listTags = criarTags(textTags, listTags)
                listTags = editarTags(listTags, element)
                listTags = incluir(listTags)
    
                corpo_tabela.appendChild(listTags[0])
                listTags = []
            });
              
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
            listTags[4].appendChild(listTags[6])
            listTags[5].appendChild(listTags[7])
            listTags[6].src = "./img/edit.png"
            listTags[6].onclick = editar
            listTags[7].src = "./img/delete.jpg"
            listTags[7].onclick = deletar
    
            return listTags
        }
    
        function incluir(listTags){
            listTags[0].appendChild(listTags[1])
            listTags[0].appendChild(listTags[2])
            listTags[0].appendChild(listTags[3])
            listTags[0].appendChild(listTags[4])
            listTags[0].appendChild(listTags[5])

    
            return listTags
        }
}