<?php

class Product
{
    protected $sku;
    protected $name;
    protected $price;
    protected $type;
    protected $error = "";

    public function __construct($sku, $name, $price, $type)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
    }

    public function addProduct($connection){
        if (in_array([$this->sku], $connection->query("SELECT sku FROM product")->fetch_all())){
            $this->error .= "Product with sku: $this->sku exists";
            return false; // if that sku exists
        }
        $connection->query("INSERT INTO product (
                     sku,
                     product_name,
                     price,
                     type
                     ) VALUES (
                     '$this->sku',
                     '$this->name',
                     $this->price,
                     '$this->type'
                     );");

        return $connection->query("SELECT id FROM product ORDER BY id DESC LIMIT 1;")->fetch_object()->id;

    }

    public function getSku()
    {
        return $this->sku;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function getProductType()
    {
        return $this->type;
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function setProductType($type)
    {
        $this->type = $type;
    }

}