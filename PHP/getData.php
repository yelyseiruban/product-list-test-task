<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    use Database\DatabaseMySQL;

    require_once ('DatabaseMySQL.php');
    require_once '../config.php';

    $answer = [];
    $db = new DatabaseMySQL($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_DATABASE']);

    $connection = $db->getConnection();
    // Perform query
    if ($result = $connection -> query("SELECT * FROM product JOIN dvd ON id = dvd.product", MYSQLI_USE_RESULT)) {

        while ($obj = $result->fetch_object()) {
            $answer[] = $obj;
        }
    }
    if ($result = $connection -> query("SELECT * FROM product JOIN book ON id = book.product", MYSQLI_USE_RESULT)) {

        while ($obj = $result->fetch_object()) {
            $answer[] = $obj;
        }
    }
    if ($result = $connection -> query("SELECT * FROM product JOIN furniture ON id = furniture.product", MYSQLI_USE_RESULT)) {

        while ($obj = $result->fetch_object()) {
            $answer[] = $obj;
        }
    }

    usort($answer, function ($a, $b) {return $a->id - $b->id;});

    echo json_encode($answer);