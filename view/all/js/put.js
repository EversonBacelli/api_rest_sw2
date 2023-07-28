
export default function editar(event){
    let tr = event.target.parentNode.parentNode

    let id = tr.children[0].textContent
    let nome = tr.children[1].textContent
    let preco = tr.children[2].textContent

    //console.log(tr.children[0].value)
    window.location.href = `http://localhost:8081/api_rest_sw2/view/all/put.html?id=${id}&nome=${nome}&preco=${preco}`
    //console.log(`${id}  -  ${nome}   -   ${preco} `)
}