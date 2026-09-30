<?php
$ch = curl_init('http://127.0.0.1:8000/admin/dashboard');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$res = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo "STATUS: $status\n";
echo "CONTAINS ADMIN LOGIN: " . (strpos($res, 'Admin Login') !== false ? 'YES' : 'NO') . "\n";
