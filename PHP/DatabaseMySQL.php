<?php
namespace Database;

use mysqli;

class DatabaseMySQL
{
    private $host;
    private $username;
    private $password;
    private $database;

    private $connection;
    private $error = "";

    public function __construct($host, $username, $password, $database)
    {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
    }

    public function getConnection(){
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
        if ($this->connection -> connect_errno) {
            echo "Failed to connect to MySQL: " . $this->connection -> connect_error;
            exit();
        }
        return $this->connection;
    }

    public function massDelete($checked){
        foreach ($checked as $element){
            $id = $element->id;
            $dbName = $element->type;
            $this->connection -> query("DELETE FROM $dbName WHERE product = $id");
            $this->connection -> query("DELETE FROM product WHERE id = $id");
        }
    }

    public function close(){
        $this->connection->close();
    }





}