<?php

// Compatibility entry point when the host cannot use public/ as its document root.
// The root .htaccess routes normal traffic through public/ only.
require __DIR__ . '/public/index.php';
