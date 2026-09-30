<?php
$root = 'c:/Users/Dell/Desktop/bmdu/NNG';
$dir = new RecursiveDirectoryIterator($root);
$iterator = new RecursiveIteratorIterator($dir);

$filesModified = 0;

foreach ($iterator as $file) {
    if ($file->isDir()) continue;
    $filePath = str_replace('\\', '/', $file->getPathname());

    if (strpos($filePath, '/node_modules/') !== false || 
        strpos($filePath, '/.git/') !== false || 
        strpos($filePath, '/vendor/') !== false || 
        strpos($filePath, '/storage/') !== false ||
        strpos($filePath, '/scratch/') !== false) {
        continue;
    }

    $content = file_get_contents($filePath);
    if (strpos($content, '97113') === false) {
        continue;
    }

    $newContent = str_replace('919711311149', '919205511101', $content);
    $newContent = str_replace('9711311149', '9205511101', $newContent);
    $newContent = str_replace('97113 11149', '92055 11101', $newContent);
    $newContent = str_replace('97113', '92055', $newContent);

    if ($newContent !== $content) {
        file_put_contents($filePath, $newContent);
        echo "Modified: " . $filePath . "\n";
        $filesModified++;
    }
}

echo "Finished! Total files modified: $filesModified\n";
