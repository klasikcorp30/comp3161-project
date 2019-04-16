<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

include 'classes/Database.php';

$conn = new DB();

$b = $_POST["criteria"];
$val = $_POST["value"];

switch ($b){
    case "brand":
        $conn->retrieveLaptopsByBrand($val);
        break;
    case "model":
        $conn->retrieveLaptopsByModel($val);
        break;

    case "price":
        $conn->retrieveLaptopByPrice($val);
        break;
    case "ram":
        $conn->retrievelaptopByRAM($val);
        break;

    default:
        $conn->retrieveLaptopByBrand($val);
}

 print_r($_POST);
