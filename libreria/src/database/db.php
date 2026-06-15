<?php
$host = "localhost";
$db_name = "bookstore";
$username = "root";
$password = ""; // Tu contraseña de MySQL

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "conectado";
} catch(PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>


