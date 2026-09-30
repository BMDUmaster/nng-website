<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    /**
     * Handle public customer enquiry submission with validation.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|min:8|max:20',
            'email' => 'nullable|email|max:255',
            'guidance_with' => 'nullable|string|max:255',
            'based_in' => 'nullable|string|max:255',
            'message' => 'nullable|string|max:2000',
            'source_page' => 'nullable|string|max:100',
        ], [
            'name.required' => 'Please enter your full name.',
            'phone.required' => 'Please enter a valid phone or WhatsApp number.',
            'phone.min' => 'Phone number must be at least 8 digits.',
            'email.email' => 'Please enter a valid email address.',
        ]);

        $enquiry = Enquiry::create([
            'name' => $validated['name'],
            'phone' => $validated['phone'],
            'email' => $validated['email'] ?? null,
            'guidance_with' => $validated['guidance_with'] ?? ($request->input('topic') ?? 'General Consultation'),
            'based_in' => $validated['based_in'] ?? ($request->input('region') ?? 'India'),
            'message' => $validated['message'] ?? null,
            'source_page' => $validated['source_page'] ?? 'consultation',
            'status' => 'new',
        ]);

        if ($request->wantsJson() || $request->ajax()) {
            return response()->json([
                'success' => true,
                'message' => 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
                'enquiry' => $enquiry,
            ]);
        }

        return back()->with('success', 'Thank you! Your enquiry has been submitted successfully.');
    }
}
