<?php 
    function realizarLeitura(){
        $arquivo = "https://apirestsw2-production.up.railway.app/controller/produtos.txt";
        $texto = "";
        $fp = fopen($arquivo, 'r');
        
        while(!feof($fp)){
            $texto = $texto . fgets($fp, 4096);
        }
        
        return $texto;
    }
?>
