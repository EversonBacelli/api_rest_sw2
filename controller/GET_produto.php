<?php
    
    require_once './ler.php';
    
    $dados = json_decode(file_get_contents('php://input'));

    $id = $dados->id;
    
    $produtos = json_decode(realizarLeitura());
    
    foreach($produtos as $p) {
        if($p->id == $id){
            $produto = $p;
            break;
        }
    }


    echo json_encode($produto);
    
    
?>