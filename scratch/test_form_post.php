<?php
// Test POST request to /enquiry/store with cookies
$cookieFile = __DIR__ . '/cookie.txt';
if (file_exists($cookieFile)) unlink($cookieFile);

$ch = curl_init('http://127.0.0.1:8000/contact');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookieFile);
$html = curl_exec($ch);

// Extract CSRF token
preg_match('/name="_token" value="([^"]+)"/', $html, $matches);
$token = $matches[1] ?? '';
echo "Extracted Token: [" . $token . "]\n";

if ($token) {
    $postData = [
        '_token' => $token,
        'name' => 'Meera Test',
        'phone' => '9090909090',
        'email' => 'meera@gmail.com',
        'guidance_with' => 'Astrology',
        'based_in' => 'India',
        'source_page' => 'callback'
    ];
    
    $chPost = curl_init('http://127.0.0.1:8000/enquiry/store');
    curl_setopt($chPost, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($chPost, CURLOPT_POST, true);
    curl_setopt($chPost, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($chPost, CURLOPT_COOKIEFILE, $cookieFile);
    curl_setopt($chPost, CURLOPT_HTTPHEADER, [
        'Accept: application/json',
        'X-CSRF-TOKEN: ' . $token
    ]);
    $res = curl_exec($chPost);
    echo "POST Response: " . substr($res, 0, 300) . "\n";
}
