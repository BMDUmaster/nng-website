<?php

// Cookie jar file to store session
$cookieFile = __DIR__ . '/cookie.txt';

// Step 1: Get Login page to extract CSRF token
$ch = curl_init('http://127.0.0.1:8000/admin/login');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookieFile);
curl_setopt($ch, CURLOPT_COOKIEFILE, $cookieFile);
$html = curl_exec($ch);
curl_close($ch);

// Extract CSRF token from input
preg_match('/<input type="hidden" name="_token" value="([^"]+)"/', $html, $matches);
$token = $matches[1] ?? '';

echo "Extracted CSRF Token: " . substr($token, 0, 10) . "...\n";

// Step 2: POST credentials to /admin/login
$ch = curl_init('http://127.0.0.1:8000/admin/login');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    '_token' => $token,
    'email' => 'admin@nngarg.com',
    'password' => 'adminpassword123'
]));
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookieFile);
curl_setopt($ch, CURLOPT_COOKIEFILE, $cookieFile);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$dashboardHtml = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "Login Submit -> Final HTTP Status: $httpCode\n";
if (strpos($dashboardHtml, 'Customer Enquiries') !== false) {
    echo "SUCCESS: Admin logged in and loaded Dashboard successfully!\n";
} else {
    echo "FAILED to reach Admin Dashboard.\n";
}
