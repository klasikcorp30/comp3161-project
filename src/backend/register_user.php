<?php
require 'Database.php';

$firstname = htmlspecialchars($_POST['firstname']);
$lastname = htmlspecialchars($_POST['lastname']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

print_r($_POST);