<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Enquiry;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Admin User Credentials
        User::updateOrCreate(
            ['email' => 'admin@nngarg.com'],
            [
                'name' => 'Admin NNG',
                'password' => Hash::make('adminpassword123'),
                'email_verified_at' => now(),
            ]
        );

        // Seed initial sample customer enquiries if none exist
        if (Enquiry::count() === 0) {
            Enquiry::create([
                'name' => 'Priya Sharma',
                'email' => 'priya.sharma@example.com',
                'phone' => '9876543210',
                'guidance_with' => 'Personal Consultation',
                'based_in' => 'India',
                'message' => 'Looking for career and life path alignment consultation with Narayani ma\'am.',
                'source_page' => 'consultation',
                'status' => 'new',
            ]);

            Enquiry::create([
                'name' => 'Rajesh Kumar',
                'email' => 'rajesh.k@example.com',
                'phone' => '9205511101',
                'guidance_with' => 'Vastu & Home Alignment',
                'based_in' => 'India',
                'message' => 'Want spatial vastu guidance for my new residence in Delhi NCR.',
                'source_page' => 'contact',
                'status' => 'contacted',
            ]);

            Enquiry::create([
                'name' => 'Amina Khan',
                'email' => 'amina.k@example.org',
                'phone' => '+44 7911 123456',
                'guidance_with' => 'Personalised Hand Holding Program',
                'based_in' => 'Outside India',
                'message' => 'Interested in the 6-month hand holding program from London.',
                'source_page' => 'consultation',
                'status' => 'new',
            ]);
        }
    }
}
