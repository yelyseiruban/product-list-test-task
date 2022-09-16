<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    use Database\DatabaseMySQL;

    require_once ('DatabaseMySQL.php');
    require_once '../config.php';

    $checked = json_decode($_POST['checked']);

    $db = new DatabaseMySQL($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_DATABASE']);

    $db->getConnection();

    $db->massDelete($checked);

    //$db->close();