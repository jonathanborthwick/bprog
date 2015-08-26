<?php
$folder = $_GET['folder'];

   function listFiles($relativePath){
       $files1 = scandir($relativePath);
       return json_encode($files1);
   }
   header('Content-Type: application/json');
   echo(listFiles("../Music/".$folder));
   
?>