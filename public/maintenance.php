<?php

// Maintenance mode (see the MAINTENANCE MODE block in public/.htaccess). Status 503 with Retry-After tells search
// engines the website is down for a short while, so they keep it in their index instead of dropping the pages.
http_response_code(503);
header('Retry-After: 3600');
header('Content-Type: text/html; charset=UTF-8');
header('Cache-Control: no-store');
readfile(__DIR__.'/maintenance.html');
