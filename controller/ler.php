<?php 
    function realizarLeitura(){
        $arquivo = "./produtos.txt";
        $texto = "";
        $fp = fopen($arquivo, 'r');
        
        while(!feof($fp)){
            $texto = $texto . fgets($fp, 4096);
        }
        
        return $texto;
    }
?>