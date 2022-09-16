<?php

class ProductFurniture extends Product
{
    private $height;
    private $width;
    private $length;
    private const DBNAME = 'furniture';

    public function __construct($sku, $name, $price, $productType, $height, $width, $length)
    {
        parent::__construct($sku, $name, $price, $productType);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }



    public function addProduct($connection)
    {
        if ($id = parent::addProduct($connection)) {
            //if product with that sku does not exist
            $connection->query("INSERT INTO furniture (
                     product,
                     height,
                     width,
                     length
                     ) VALUES (
                     '$id',
                     $this->height,
                     $this->width,
                     $this->length
                     );");
        }
        else{
            //if product with that sku exists
            return $this->error;
        }
    }



    public function getHeight()
    {
        return $this->height;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function getLength()
    {
        return $this->length;
    }

    public function setHeight($height)
    {
        $this->height = $height;
    }

    public function setWidth($width)
    {
        $this->width = $width;
    }

    public function setLength($length)
    {
        $this->length = $length;
    }

}
