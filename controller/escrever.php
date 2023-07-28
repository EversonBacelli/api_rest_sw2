<?php
    function escrever($json){
        // endereço do arquivo
        $arquivo = "./produtos.txt";

        //Variável $fp armazena a conexão com o arquivo e o tipo de ação.
        $fp = fopen($arquivo, "w+");
        //Escreve no arquivo aberto.
        fwrite($fp, $json);

        //Fecha o arquivo.
        fclose($fp);
    }
?>
