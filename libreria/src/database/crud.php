<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);

switch ($method) {
    case 'GET':
        $sql = isset($_GET['code']) ? "SELECT * FROM books WHERE code = ?" : "SELECT * FROM books";
        $stmt = $conn->prepare($sql);
        isset($_GET['code']) ? $stmt->execute([$_GET['code']]) : $stmt->execute();
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;

    case 'POST':
        $sql = "INSERT INTO books (title, author, price) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$input['title'], $input['author'], $input['price']]);
        echo json_encode(["message" => "Libro creado con éxito"]);
        break;

    case 'PUT':
        $sql = "UPDATE books SET title=?, author=?, price=? WHERE code=?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$input['title'], $input['author'], $input['price'], $input['code']]);
        echo json_encode(["message" => "Libro actualizado"]);
        break;

    case 'DELETE':
        $code = $_GET['code'];
        $sql = "DELETE FROM books WHERE code = ?";
        $stmt = $conn->prepare($sql);
        $stmt->execute([$code]);
        echo json_encode(["message" => "Libro eliminado"]);
        break;
}
