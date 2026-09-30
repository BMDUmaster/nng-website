<?php
$urls = [
    'http://127.0.0.1:8000/',
    'http://127.0.0.1:8000/nng',
    'http://127.0.0.1:8000/contact',
    'http://127.0.0.1:8000/admin/login',
    'http://127.0.0.1:8000/admin/dashboard'
];
foreach ($urls as $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
    $res = curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $redirect = curl_getinfo($ch, CURLINFO_REDIRECT_URL);
    echo "$url -> Code: $code" . ($redirect ? " (Redirect: $redirect)" : "") . "\n";
}
