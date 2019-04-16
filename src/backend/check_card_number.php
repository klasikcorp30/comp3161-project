<?php
include 'Database.php';


$conn = new DB();

$c_num = $_POST['c_num'];

$conn->checkCreditCard($c_num);