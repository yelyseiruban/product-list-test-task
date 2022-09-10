<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    use Database\DatabaseMySQL;

    require_once ('DatabaseMySQL.php');
    require_once '../config.php';

    $answer = "";

    $mysqli = new mysqli('mysql.db.mdbgo.com:3306','yelyseiruban_yelysei','Secret_228','yelyseiruban_sitedb');
    if ($mysqli -> connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
        exit();
    }
    // Perform query
    if ($result = $mysqli -> query("SELECT * FROM product", MYSQLI_USE_RESULT)) {

        while ($obj = $result->fetch_object()) {
            $answer .= "$obj->id, $obj->sku, $obj->price, $obj->type\n";
        }
    }

    echo $answer;

    $mysqli -> close();
    
?>