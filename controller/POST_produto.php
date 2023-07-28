<?php
    require_once '../model/Produto.php';
    require_once './ler.php';
    require_once './escrever.php';
   
    // recebendo os dados do front
    $dados = json_decode(file_get_contents('php://input'));
    $produto = new Produto($dados->id, $dados->nome, $dados->preco);
   
    // lendo o arquivo de dados
    $produtos = json_decode(realizarLeitura());
    array_push($produtos, $produto);
    
        
    $json = json_encode($produtos);
    escrever($json);


    echo json_encode($produto);
?>