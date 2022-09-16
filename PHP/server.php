<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    use Database\DatabaseMySQL;

    require_once ('DatabaseMySQL.php');

    require_once ('Product.php');
    require_once ('ProductDVD.php');
    require_once ('ProductBook.php');
    require_once ('ProductFurniture.php');

    require_once '../config.php';

    $db = new DatabaseMySQL($_ENV['DB_HOST'], $_ENV['DB_USERNAME'], $_ENV['DB_PASSWORD'], $_ENV['DB_DATABASE']);
    $connection = $db->getConnection();

    $form = json_decode($_POST['form']);

    switch ($form->type){
        case 'dvd':
            $product = new ProductDVD($form->sku, $form->name, doubleval($form->price), $form->type, doubleval($form->size));
            break;
        case 'book':
            $product = new ProductBook($form->sku, $form->name, doubleval($form->price), $form->type, $form->weight);
            break;
        case 'furniture':
            $product = new ProductFurniture($form->sku, $form->name, doubleval($form->price), $form->type, floatval($form->height), floatval($form->width), floatval($form->length));
            break;
    }

    $error = $product->addProduct($connection);
    if ($error){
        echo $error;
    }


    $connection -> close();
    
?>