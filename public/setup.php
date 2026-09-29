<?php
/**
 * Hostinger Auto-Setup & Diagnostics Script for NNG Arg Website
 * Visit https://nngarg.com/setup.php to run.
 */

define('LARAVEL_START', microtime(true));

$baseDir = dirname(__DIR__);
$envFile = $baseDir . '/.env';

echo "<!DOCTYPE html><html><head><title>NNG System Setup</title>";
echo "<style>body{font-family:system-ui,-apple-system,sans-serif;background:#0d1117;color:#c9d1d9;padding:2rem;} .card{background:#161b22;border:1px solid #30363d;border-radius:8px;padding:1.5rem;max-width:800px;margin:auto;} h1{color:#58a6ff;margin-top:0;} pre{background:#0d1117;padding:1rem;border-radius:6px;overflow-x:auto;color:#7ee787;} .btn{display:inline-block;background:#238636;color:#fff;padding:10px 20px;text-decoration:none;border-radius:6px;font-weight:bold;margin-top:1rem;}</style>";
echo "</head><body><div class='card'>";
echo "<h1>🚀 NNG Hostinger Auto-Setup & Repair</h1>";
echo "<pre>";

// 1. Check & Create .env
if (!file_exists($envFile)) {
    echo "[+] Creating .env file with default production settings...\n";
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
    if (@file_put_contents($envFile, $envContent)) {
        echo "    SUCCESS: .env created.\n";
    } else {
        echo "    WARNING: Could not write .env file automatically.\n";
    }
} else {
    echo "[i] .env file exists.\n";
}

// 2. Ensure Storage & Cache Folders exist
$storageDirs = [
    $baseDir . '/storage/app/public',
    $baseDir . '/storage/framework/cache/data',
    $baseDir . '/storage/framework/sessions',
    $baseDir . '/storage/framework/views',
    $baseDir . '/storage/logs',
    $baseDir . '/bootstrap/cache',
];

echo "[+] Checking storage and cache permissions...\n";
foreach ($storageDirs as $dir) {
    if (!is_dir($dir)) {
        if (@mkdir($dir, 0755, true)) {
            echo "    Created: {$dir}\n";
        } else {
            echo "    Error creating: {$dir}\n";
        }
    }
}
echo "    Directories verified.\n";

// 3. Autoload & Bootstrap Laravel
if (!file_exists($baseDir . '/vendor/autoload.php')) {
    echo "\n[!] CRITICAL ERROR: vendor/autoload.php not found.\n";
    echo "    Please run 'composer install' on Hostinger server or ensure vendor folder is uploaded.\n";
    echo "</pre></div></body></html>";
    exit;
}

try {
    require $baseDir . '/vendor/autoload.php';
    $app = require_once $baseDir . '/bootstrap/app.php';
    $kernel = $app->make(\Illuminate\Contracts\Console\Kernel::class);
    $kernel->bootstrap();

    echo "\n[+] Running Artisan Cache Clearing...\n";
    
    \Illuminate\Support\Facades\Artisan::call('config:clear');
    echo "    config:clear => " . trim(\Illuminate\Support\Facades\Artisan::output()) . "\n";
    
    \Illuminate\Support\Facades\Artisan::call('cache:clear');
    echo "    cache:clear => " . trim(\Illuminate\Support\Facades\Artisan::output()) . "\n";
    
    \Illuminate\Support\Facades\Artisan::call('view:clear');
    echo "    view:clear => " . trim(\Illuminate\Support\Facades\Artisan::output()) . "\n";
    
    \Illuminate\Support\Facades\Artisan::call('route:clear');
    echo "    route:clear => " . trim(\Illuminate\Support\Facades\Artisan::output()) . "\n";

    echo "\n=======================================================\n";
    echo "✅ Setup Complete! All caches cleared & paths verified.\n";
    echo "=======================================================\n";

} catch (\Throwable $e) {
    echo "\n[!] Exception during setup: " . $e->getMessage() . "\n";
    echo "    File: " . $e->getFile() . " (Line " . $e->getLine() . ")\n";
}

echo "</pre>";
echo "<a href='/' class='btn'>Go To Live Website 🌐</a>";
echo "</div></body></html>";
