<?php
    
    require_once './ler.php';
    require_once './escrever.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    $nome = $dados->nome;
    $preco = $dados->preco;
    
    $produtos = json_decode(realizarLeitura());
    
    foreach($produtos as $p) {
        if($p->id == $id){
            if(!$nome == ""){
                $p->nome = $nome;
            }
            if(!$preco == ""){
                $p->preco = $preco;
            }
            break;
        }
    }

    $json = json_encode($produtos);
    escrever($json);

    echo json_encode($json);
    
    
?>