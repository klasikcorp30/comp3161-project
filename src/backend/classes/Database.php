<?php

require 'Database.php';
class DB {
     private $host = "localhost";
     private $user = "root";
     private $pass = "@curry30";
     private $db = "branch_1";

     //Connect database
public function __construct(){
    try{
        $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        //Catches connection and output it if database connection failed
       echo 'Connection failed'. $e->getMessage();
    }
  }

//Insert data method
 public function insertData(){}

  public function retrieveData(){
    $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);

        $stmt = $conn->prepare("Select * from customer LIMIT 500");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($result);
  
 }


 public function retrieveLaptopsByBrand($brand){
  $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
  $stmt = $conn->prepare("CALL GetLaptopByBrand('$brand')");
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $data = json_encode($result);
  echo $data;
 }


    public function retrieveLaptopsByModel($model){
        $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
        $stmt = $conn->prepare("CALL GetLaptopByModel('$model')");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $data = json_encode($result);
        echo $data;
    }




    public function retrieveLaptopsByStorage($storage){
        $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
        $stmt = $conn->prepare("CALL GetLaptopByStorage('$storage')");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $data = json_encode($result);
        echo $data;
    }


    public function retrieveLaptopsByRAM($ram){
        $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
        $stmt = $conn->prepare("CALL GetLaptopByRAM('$ram')");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $data = json_encode($result);
        echo $data;
    }
 public function checkCreditCard($c_number){
  $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
  $stmt = $conn->prepare("SELECT c_number FROM carddetailsview WHERE c_number='$c_number';");
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  
  if(count($result) == 1){
    echo 'true';
  }else{
    echo 'false';
  }
  
  // print_r($result);
  
 }

 public function register_user($first,$last,$username,$email,$phone,$password){
     $conn = new PDO("mysql:host=$this->host;dbname=$this->db",$this->user,$this->pass);
     $query1 = "INSERT INTO customer(firstname,lastname,email,phone) VALUES ('$first', '$last', '$email','$phone')";
     $ran_id = 500001;

     $query2 = "INSERT INTO accounts(id, username, password) VALUES($ran_id, '$username', '$password')";

     $conn->exec($query1);
     $conn->exec($query2);
 }


//   Close database connection after running query
  public function __destruct(){
      $conn = null;
  }
}

?>
