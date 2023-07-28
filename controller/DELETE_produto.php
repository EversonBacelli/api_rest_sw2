<?php
    
    require_once './ler.php';
    require_once './escrever.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    
    $produtos = json_decode(realizarLeitura());
    
    foreach($produtos as $p) {
        if($p->id == $id){
            unset($produtos[$id]);
            break;
        }
    }
    $lista = [];
    foreach ($produtos as $prod) {
       if (!$prod == null) {
            array_push($lista, $prod);
       }
    }


    $json = json_encode($lista);
    escrever($json);

    echo $json;

?>