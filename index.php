<?php

define('LARAVEL_START', microtime(true));

// Auto-create .env file if missing on host (Hostinger deployment safety)
$baseDir = __DIR__;
$envFile = $baseDir . '/.env';
if (!file_exists($envFile)) {
    $envContent = "APP_NAME=\"NNG Arg\"\n"
        . "APP_ENV=production\n"
        . "APP_KEY=base64:74vxe0uKV1u+OwGN/ELD+hNqcsqfMWHiH1bPn7W1twE=\n"
        . "APP_DEBUG=false\n"
        . "APP_URL=https://nngarg.com\n\n"
        . "LOG_CHANNEL=stack\n"
        . "LOG_DEPRECATIONS_CHANNEL=null\n"
        . "LOG_LEVEL=debug\n\n"
        . "SESSION_DRIVER=file\n"
        . "SESSION_LIFETIME=120\n"
        . "SESSION_ENCRYPT=false\n"
        . "SESSION_PATH=/\n"
        . "SESSION_DOMAIN=null\n\n"
        . "BROADCAST_CONNECTION=log\n"
        . "FILESYSTEM_DISK=local\n"
        . "QUEUE_CONNECTION=sync\n"
        . "CACHE_STORE=file\n\n"
        . "MAIL_MAILER=log\n";
    @file_put_contents($envFile, $envContent);
}

// Ensure required framework storage & cache directories exist
$storageDirs = [
    $baseDir . '/storage/app/public',
    $baseDir . '/storage/framework/cache/data',
    $baseDir . '/storage/framework/sessions',
    $baseDir . '/storage/framework/views',
    $baseDir . '/storage/logs',
    $baseDir . '/bootstrap/cache',
];
foreach ($storageDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = $baseDir . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
if (file_exists($baseDir . '/vendor/autoload.php')) {
    require $baseDir . '/vendor/autoload.php';
} else {
    die("Composer autoloader not found at " . $baseDir . "/vendor/autoload.php. Please run 'composer install'.");
}

// Bootstrap Laravel and handle the request...
/** @var \Illuminate\Foundation\Application $app */
$app = require_once $baseDir . '/bootstrap/app.php';

$app->handleRequest(\Illuminate\Http\Request::capture());
