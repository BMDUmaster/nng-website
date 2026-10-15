<?php

// Used by `php artisan serve` (Laravel prefers a project server.php over its own). Real files in public/ are served
// as they are; everything else, including page folders such as /contact/, goes to Laravel, which serves the
// redesigned website's index.html for that folder (see PageController::staticPage and the fallback route).
// PHP's built-in server would otherwise answer every folder URL with public/index.html, the home page.
$publicPath = __DIR__.'/public';

$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '');

if ($uri !== '/' && is_file($publicPath.$uri)) {
    return false;
}

// For a folder URL the built-in server points SCRIPT_NAME at that folder's index.html, which makes Laravel treat the
// folder as its base path (so /contact/ would route as /). Point it back at the front controller.
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['PHP_SELF'] = '/index.php';
$_SERVER['SCRIPT_FILENAME'] = $publicPath.'/index.php';

require_once $publicPath.'/index.php';
