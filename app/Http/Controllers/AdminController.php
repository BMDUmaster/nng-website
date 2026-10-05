<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    /**
     * Show admin login form.
     */
    public function showLoginForm()
    {
        if (Auth::check()) {
            return redirect()->route('admin.dashboard');
        }
        return view('admin.login');
    }

    /**
     * Handle admin login authentication.
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ], [
            'email.required' => 'Email address is required.',
            'password.required' => 'Password is required.',
        ]);

        $remember = $request->has('remember');

        if (Auth::attempt($credentials, $remember)) {
            $request->session()->regenerate();
            return redirect()->intended(route('admin.dashboard'))
                ->with('success', 'Welcome back to NNG Admin Dashboard!');
        }

        return back()->withErrors([
            'email' => 'Invalid admin credentials provided.',
        ])->onlyInput('email');
    }

    /**
     * Show admin dashboard with customer enquiries.
     */
    public function dashboard(Request $request)
    {
        $search = $request->input('search');
        $statusFilter = $request->input('status');

        $query = Enquiry::latest();

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('guidance_with', 'like', "%{$search}%");
            });
        }

        if (!empty($statusFilter) && in_array($statusFilter, ['new', 'contacted', 'resolved'])) {
            $query->where('status', $statusFilter);
        }

        $enquiries = $query->paginate(15)->withQueryString();

        $stats = [
            'total' => Enquiry::count(),
            'new' => Enquiry::where('status', 'new')->count(),
            'contacted' => Enquiry::where('status', 'contacted')->count(),
            'resolved' => Enquiry::where('status', 'resolved')->count(),
        ];

        // Analytics chart data
        $currentYear = date('Y');
        $monthLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $monthlyCounts = [];
        for ($m = 1; $m <= 12; $m++) {
            $monthlyCounts[] = Enquiry::whereYear('created_at', $currentYear)
                ->whereMonth('created_at', $m)
                ->count();
        }

        // Guidance / Category topic distribution
        $topicDistribution = Enquiry::select('guidance_with', \DB::raw('count(*) as count'))
            ->whereNotNull('guidance_with')
            ->where('guidance_with', '!=', '')
            ->groupBy('guidance_with')
            ->orderByDesc('count')
            ->get();

        return view('admin.dashboard', compact(
            'enquiries', 'stats', 'search', 'statusFilter', 
            'currentYear', 'monthLabels', 'monthlyCounts', 'topicDistribution'
        ));
    }

    /**
     * Show full Customer Enquiries module.
     */
    public function enquiries(Request $request)
    {
        $search = $request->input('search');
        $statusFilter = $request->input('status');

        $query = Enquiry::latest();

        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('guidance_with', 'like', "%{$search}%")
                  ->orWhere('based_in', 'like', "%{$search}%");
            });
        }

        if (!empty($statusFilter) && in_array($statusFilter, ['new', 'contacted', 'resolved'])) {
            $query->where('status', $statusFilter);
        }

        $enquiries = $query->paginate(20)->withQueryString();

        $stats = [
            'total' => Enquiry::count(),
            'new' => Enquiry::where('status', 'new')->count(),
            'contacted' => Enquiry::where('status', 'contacted')->count(),
            'resolved' => Enquiry::where('status', 'resolved')->count(),
        ];

        return view('admin.enquiries', compact('enquiries', 'stats', 'search', 'statusFilter'));
    }

    /**
     * Update enquiry status.
     */
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:new,contacted,resolved',
        ]);

        $enquiry = Enquiry::findOrFail($id);
        $enquiry->status = $request->input('status');
        $enquiry->save();

        if ($request->wantsJson()) {
            return response()->json(['success' => true, 'message' => 'Status updated successfully.']);
        }

        return back()->with('success', 'Enquiry status updated successfully.');
    }

    /**
     * Delete an enquiry.
     */
    public function destroy($id)
    {
        $enquiry = Enquiry::findOrFail($id);
        $enquiry->delete();

        return back()->with('success', 'Customer enquiry deleted successfully.');
    }

    /**
     * Handle admin logout.
     */
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')->with('info', 'Logged out successfully.');
    }
}
