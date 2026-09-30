<?php

require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Enquiry;

echo "Current Total Enquiries in Database: " . Enquiry::count() . "\n";

$testEnquiry = Enquiry::create([
    'name' => 'Rahul Verma Test',
    'phone' => '9205511101',
    'email' => 'rahul.verma@example.com',
    'guidance_with' => 'Personal Consultation',
    'based_in' => 'India',
    'message' => 'Testing customer enquiry submission from website form.',
    'source_page' => 'contact',
    'status' => 'new'
]);

echo "Created Enquiry ID: " . $testEnquiry->id . "\n";
echo "New Total Enquiries in Database: " . Enquiry::count() . "\n";
