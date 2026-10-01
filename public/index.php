<?php

define('LARAVEL_START', microtime(true));

$baseDir = dirname(__DIR__);

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = $baseDir . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
if (!is_file($baseDir . '/vendor/autoload.php')) {
    http_response_code(503);
    exit('Service temporarily unavailable.');
}
require $baseDir . '/vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var \Illuminate\Foundation\Application $app */
$app = require_once $baseDir . '/bootstrap/app.php';

$app->handleRequest(\Illuminate\Http\Request::capture());
