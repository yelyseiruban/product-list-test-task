<?php
namespace Database;

use PDO;
use PDOException;
use mysqli;

class DatabaseMySQL
{
    private $host;
    private $username;
    private $password;
    private $database;

    private $connection;
    private $error = "";

    public function __construct($host, $database, $username, $password)
    {
        $this->host = $host;
        $this->database = $database;
        $this->username = $username;
        $this->password = $password;
    }

    public function getConnection(){
        $this->connection = new \mysqli("mysql://yelyseiruban_yelysei:Secret_228@mysql.db.mdbgo.com:3306/yelyseiruban_sitedb");
        if ($this->connection -> connect_errno) {
            echo "Failed to connect to MySQL: " . $this->connection -> connect_error;
            exit();
        }
    }

    public function getConnectionString(){
        return "mysql:host=$this->host;dbname=$this->database";
    }




}