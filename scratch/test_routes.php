<?php

$urls = [
    'http://127.0.0.1:8000/',
    'http://127.0.0.1:8000/consultation',
    'http://127.0.0.1:8000/contact',
    'http://127.0.0.1:8000/nng',
    'http://127.0.0.1:8000/admin/login'
];

foreach ($urls as $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    echo "URL: $url -> HTTP Status: $httpCode\n";
}
