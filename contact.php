<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Faltan campos obligatorios.']);
  exit;
}

// CONFIGURAR:
$to = 'gensas@yahoo.com';
$subject = 'Nuevo contacto desde la web UDI GENS';
$body = "Nombre: $name\nEmail: $email\nTeléfono: $phone\n\nMensaje:\n$message\n";
$headers = "From: no-reply@udigens.com.ar\r\n";
$headers .= "Reply-To: $email\r\n";

$ok = @mail($to, $subject, $body, $headers);
if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'No se pudo enviar el correo.']);
}
