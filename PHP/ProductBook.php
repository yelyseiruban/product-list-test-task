<?php

class ProductBook extends Product
{
    private $weight;
    private const DBNAME = 'book';

    public function __construct($sku, $name, $price, $productType, $weight)
    {
        parent::__construct($sku, $name, $price, $productType);
        $this->weight = $weight;
    }



    public function addProduct($connection)
    {
        if ($id = parent::addProduct($connection)) {
            //if product with that sku does not exist
            $connection->query("INSERT INTO book (
                     product,
                     weight
                     ) VALUES (
                     '$id',
                     $this->weight
                     );");
        }
        else{
            //if product with that sku exists
            return $this->error;
        }
    }



    public function getWeight()
    {
        return $this->weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

}