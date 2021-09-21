<?php
    $servername='localhost:3306';
    $username='esam65_meg';
    $password='Apokatalasso123';
    $dbname = "esam65_signups";
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:' .mysql_error());
        }
?>