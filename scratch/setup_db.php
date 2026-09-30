<?php
try {
    $host = '127.0.0.1';
    $user = 'root';
    $pass = '';
    $pdo = new PDO("mysql:host=$host;port=3306", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `nng` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;");
    echo "SUCCESS: MySQL database `nng` created or already exists!\n";
} catch (\Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
