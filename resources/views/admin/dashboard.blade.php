<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Transformation with NNG</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg-body: #F8FAFC;
            --sidebar-bg: #1E1B2E;
            --sidebar-hover: #2D2845;
            --sidebar-active: #3C183D;
            --gold-accent: #D4AF37;
            --gold-light: #F4E8C1;
            --card-bg: #FFFFFF;
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-subtle: #E2E8F0;
            --status-new-bg: #FEF3C7;
            --status-new-text: #92400E;
            --status-contacted-bg: #DBEAFE;
            --status-contacted-text: #1E40AF;
            --status-resolved-bg: #D1FAE5;
            --status-resolved-text: #065F46;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background-color: var(--bg-body);
            color: var(--text-body);
            display: flex;
            min-height: 100vh;
        }

        /* Sidebar Styling */
        .sidebar {
            width: 260px;
            background-color: var(--sidebar-bg);
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 100;
            box-shadow: 4px 0 20px rgba(0,0,0,0.1);
        }

        .sidebar-brand {
            padding: 24px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sidebar-brand-icon {
            width: 38px;
            height: 38px;
            background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
            font-size: 18px;
        }

        .sidebar-brand-text h2 {
            font-size: 15px;
            font-weight: 700;
            color: #FFFFFF;
            line-height: 1.2;
        }

        .sidebar-brand-text p {
            font-size: 11px;
            color: var(--gold-light);
            letter-spacing: 0.5px;
        }

        .sidebar-nav {
            padding: 20px 12px;
            flex: 1;

            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .sidebar-label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: rgba(255,255,255,0.4);
            padding: 10px 12px 6px;
        }

        .nav-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 14px;
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .nav-item:hover {
            background-color: var(--sidebar-hover);
            color: #FFFFFF;
        }

        .nav-item.active {
            background: linear-gradient(135deg, #3C183D 0%, #5B235D 100%);
            color: #FFFFFF;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(60, 24, 61, 0.4);
            border-left: 3px solid var(--gold-accent);
        }

        .nav-item svg {
            width: 18px;
            height: 18px;
            stroke-width: 2;
        }

        .nav-badge {
            margin-left: auto;
            background: #EF4444;
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 20px;
        }

        .sidebar-footer {
            padding: 16px;
            border-top: 1px solid rgba(255,255,255,0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .admin-profile {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .admin-avatar {
            width: 36px;
            height: 36px;
            background-color: var(--gold-accent);
            color: #1E1B2E;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
        }

        .admin-info h4 {
            font-size: 13px;
            color: #FFFFFF;
            font-weight: 600;
        }

        .admin-info p {
            font-size: 11px;
            color: rgba(255,255,255,0.5);
        }

        .logout-btn {
            background: transparent;
            border: none;
            color: rgba(255,255,255,0.6);
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.2s ease;
        }

        .logout-btn:hover {
            background-color: rgba(239, 68, 68, 0.2);
            color: #EF4444;
        }

        /* Main Content Layout */
        .main-wrapper {
            margin-left: 260px;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-width: 0;
        }

        .top-header {
            background-color: var(--card-bg);
            padding: 16px 32px;
            border-bottom: 1px solid var(--border-subtle);
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 90;
        }

        .header-title h1 {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-heading);
        }

        .header-title p {
            font-size: 13px;
            color: var(--text-muted);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .live-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            background-color: #F1F5F9;
            color: #334155;
            text-decoration: none;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.2s ease;
        }

        .live-btn:hover {
            background-color: #E2E8F0;
            color: #0F172A;
        }

        .content-area {
            padding: 32px;
            flex: 1;
        }

        /* Analytics Charts Grid */
        .charts-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 24px;
            margin-bottom: 32px;
        }

        @media (max-width: 992px) {
            .charts-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Metrics Cards Grid */
        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-bottom: 32px;
        }

        .metric-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            padding: 24px;
            border: 1px solid var(--border-subtle);
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .metric-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .metric-info p {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }

        .metric-info h3 {
            font-size: 30px;
            font-weight: 700;
            color: var(--text-heading);
            line-height: 1;
        }

        .metric-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .metric-icon.total { background: #EEF2FF; color: #4F46E5; }
        .metric-icon.new { background: #FEF3C7; color: #D97706; }
        .metric-icon.contacted { background: #DBEAFE; color: #2563EB; }
        .metric-icon.resolved { background: #D1FAE5; color: #059669; }

        /* Dashboard Section Box */
        .dashboard-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
            margin-bottom: 32px;
            overflow: hidden;
        }

        .card-header {
            padding: 20px 24px;
            border-bottom: 1px solid var(--border-subtle);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .card-header h2 {
            font-size: 16px;
            font-weight: 700;
            color: var(--text-heading);
        }

        .view-all-link {
            font-size: 13px;
            font-weight: 600;
            color: #3C183D;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .view-all-link:hover {
            text-decoration: underline;
        }

        /* Table Styling */
        .table-responsive {
            width: 100%;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
        }

        th {
            background-color: #F8FAFC;
            padding: 14px 24px;
            font-size: 12px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid var(--border-subtle);
        }

        td {
            padding: 16px 24px;
            font-size: 14px;
            border-bottom: 1px solid var(--border-subtle);
            vertical-align: middle;
        }

        tr:last-child td {
            border-bottom: none;
        }

        tr:hover td {
            background-color: #F8FAFC;
        }

        .customer-name {
            font-weight: 700;
            color: var(--text-heading);
        }

        .customer-date {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 2px;
        }

        .contact-links {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .contact-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 13px;
            color: var(--text-body);
            text-decoration: none;
            font-weight: 500;
        }

        .contact-link.wa {
            color: #059669;
            font-weight: 600;
        }

        .contact-link.wa:hover {
            text-decoration: underline;
        }

        .badge-status {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            text-transform: capitalize;
        }

        .badge-new { background: var(--status-new-bg); color: var(--status-new-text); }
        .badge-contacted { background: var(--status-contacted-bg); color: var(--status-contacted-text); }
        .badge-resolved { background: var(--status-resolved-bg); color: var(--status-resolved-text); }

        .status-select {
            padding: 6px 12px;
            border-radius: 8px;
            border: 1px solid var(--border-subtle);
            font-size: 13px;
            font-weight: 600;
            background: #FFFFFF;
            color: var(--text-body);
            cursor: pointer;
        }

        /* Alert Notification */
        .alert-toast {
            padding: 14px 20px;
            background: #D1FAE5;
            color: #065F46;
            border-radius: 10px;
            margin-bottom: 24px;
            font-size: 14px;
            font-weight: 600;
        }
    </style>
</head>
<body>

    <!-- Left Sidebar -->
    <aside class="sidebar">
        <div class="sidebar-brand">
            <div class="sidebar-brand-icon">N</div>
            <div class="sidebar-brand-text">
                <h2>NNG Admin</h2>
                <p>Transformation Portal</p>
            </div>
        </div>

        <nav class="sidebar-nav">
            <div class="sidebar-label">Main Menu</div>
            <a href="{{ route('admin.dashboard') }}" class="nav-item active">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                <span>Dashboard Overview</span>
            </a>
            <a href="{{ route('admin.enquiries') }}" class="nav-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                <span>Customer Enquiries</span>
                @if(($stats['new'] ?? 0) > 0)
                    <span class="nav-badge">{{ $stats['new'] }}</span>
                @endif
            </a>

            <div class="sidebar-label" style="margin-top: 16px;">Quick Links</div>
            <a href="/" target="_blank" class="nav-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                <span>View Live Site ↗</span>
            </a>
        </nav>

        <div class="sidebar-footer">
            <div class="admin-profile">
                <div class="admin-avatar">A</div>
                <div class="admin-info">
                    <h4>Administrator</h4>
                    <p>admin@nngarg.com</p>
                </div>
            </div>
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" class="logout-btn" title="Logout">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                </button>
            </form>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="main-wrapper">
        <header class="top-header">
            <div class="header-title">
                <h1>Dashboard Overview</h1>
                <p>Welcome back! Here is a summary of your customer enquiries.</p>
            </div>
            <div class="header-actions">
                <a href="{{ route('admin.enquiries') }}" class="live-btn" style="background:#3C183D; color:#FFF;">
                    <span>View All Enquiries</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </header>

        <main class="content-area">
            @if(session('success'))
                <div class="alert-toast">
                    {{ session('success') }}
                </div>
            @endif

            <!-- Key Metric Cards -->
            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-info">
                        <p>Total Enquiries</p>
                        <h3>{{ $stats['total'] ?? 0 }}</h3>
                    </div>
                    <div class="metric-icon total">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-info">
                        <p>New Enquiries</p>
                        <h3>{{ $stats['new'] ?? 0 }}</h3>
                    </div>
                    <div class="metric-icon new">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-info">
                        <p>In Touch / Contacted</p>
                        <h3>{{ $stats['contacted'] ?? 0 }}</h3>
                    </div>
                    <div class="metric-icon contacted">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    </div>
                </div>

                <div class="metric-card">
                    <div class="metric-info">
                        <p>Resolved</p>
                        <h3>{{ $stats['resolved'] ?? 0 }}</h3>
                    </div>
                    <div class="metric-icon resolved">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                </div>
            </div>

            <!-- Analytics Charts Row -->
            <div class="charts-grid">
                <!-- Left Chart: Monthly Enquiry Analytics -->
                <div class="dashboard-card" style="margin-bottom: 0;">
                    <div class="card-header" style="display: flex; align-items: center; justify-content: space-between;">
                        <div>
                            <h2>Booking analytics</h2>
                            <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Monthly booking growth and customer activity</p>
                        </div>
                        <span style="font-size: 12px; font-weight: 700; color: #4F46E5; background: #EEF2FF; padding: 4px 12px; border-radius: 6px;">{{ $currentYear }}</span>
                    </div>
                    <div style="padding: 24px; position: relative; height: 320px;">
                        <canvas id="monthlyEnquiryChart"></canvas>
                    </div>
                </div>

                <!-- Right Chart: Cases by Service Distribution -->
                <div class="dashboard-card" style="margin-bottom: 0;">
                    <div class="card-header">
                        <div>
                            <h2>Cases by service</h2>
                            <p style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Current booking distribution</p>
                        </div>
                    </div>
                    <div style="padding: 20px; position: relative; height: 320px; display: flex; align-items: center; justify-content: center;">
                        <canvas id="topicDistributionChart"></canvas>
                    </div>
                </div>
            </div>

            <!-- Recent Customer Enquiries Table -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Recent Customer Enquiries</h2>
                    <a href="{{ route('admin.enquiries') }}" class="view-all-link">
                        <span>Go to Enquiries Module</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                </div>

                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Contact Details</th>
                                <th>Guidance / Service</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Quick Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($enquiries->take(5) as $enquiry)
                                @php
                                    $cleanPhone = preg_replace('/[^0-9]/', '', $enquiry->phone);
                                    if (strlen($cleanPhone) == 10) {
                                        $waPhone = '91' . $cleanPhone;
                                    } else {
                                        $waPhone = $cleanPhone;
                                    }
                                @endphp
                                <tr>
                                    <td>
                                        <div class="customer-name">{{ $enquiry->name }}</div>
                                        <div class="customer-date">{{ $enquiry->created_at->format('M d, Y • h:i A') }}</div>
                                    </td>
                                    <td>
                                        <div class="contact-links">
                                            <a href="https://wa.me/{{ $waPhone }}?text=Hello%20{{ urlencode($enquiry->name) }},%20thank%20you%20for%20reaching%20out%20to%20Transformation%20with%20NNG." target="_blank" class="contact-link wa" title="Chat on WhatsApp">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#059669"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
             
                                                {{ $enquiry->phone }}
                                            </a>
                                            @if($enquiry->email)
                                                <a href="mailto:{{ $enquiry->email }}" class="contact-link" style="color:#64748B;">
                                                    <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                                    {{ $enquiry->email }}
                                                </a>
                                            @endif
                                        </div>
                                    </td>
                                    <td>
                                        <span style="font-weight: 600; color: #3C183D;">{{ $enquiry->guidance_with ?? 'General Consultation' }}</span>
                                    </td>
                                    <td>
                                        <span style="color: #64748B;">{{ $enquiry->based_in ?? 'N/A' }}</span>
                                    </td>
                                    <td>
                                        <span class="badge-status badge-{{ $enquiry->status }}">
                                            {{ ucfirst($enquiry->status) }}
                                        </span>
                                    </td>
                                    <td>
                                        <form action="{{ route('admin.enquiry.status', $enquiry->id) }}" method="POST">
                                            @csrf
                                            <select name="status" class="status-select" onchange="this.form.submit()">
                                                <option value="new" {{ $enquiry->status == 'new' ? 'selected' : '' }}>New</option>
                                                <option value="contacted" {{ $enquiry->status == 'contacted' ? 'selected' : '' }}>Contacted</option>
                                                <option value="resolved" {{ $enquiry->status == 'resolved' ? 'selected' : '' }}>Resolved</option>
                                            </select>
                                        </form>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="6" style="text-align: center; padding: 40px; color: var(--text-muted);">
                                        No customer enquiries found yet.
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // 1. Monthly Booking Analytics Bar Chart
            const monthlyCtx = document.getElementById('monthlyEnquiryChart').getContext('2d');
            const monthlyLabels = @json($monthLabels ?? []);
            const monthlyCounts = @json($monthlyCounts ?? []);

            new Chart(monthlyCtx, {
                type: 'bar',
                data: {
                    labels: monthlyLabels,
                    datasets: [{
                        label: 'Enquiries',
                        data: monthlyCounts,
                        backgroundColor: '#5B8DEF',
                        hoverBackgroundColor: '#3B82F6',
                        borderRadius: 6,
                        barThickness: 22,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: '#1E1B2E',
                            padding: 10,
                            cornerRadius: 8,
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: '#64748B', font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
                        },
                        y: {
                            grid: { color: '#F1F5F9' },
                            ticks: { color: '#64748B', precision: 0, font: { family: 'Plus Jakarta Sans', size: 11 } },
                            beginAtZero: true
                        }
                    }
                }
            });

            // 2. Cases by Service Donut Chart
            const topicCtx = document.getElementById('topicDistributionChart').getContext('2d');
            const topicDataRaw = @json($topicDistribution ?? []);
            
            let topicLabels = topicDataRaw.map(item => item.guidance_with || 'General');
            let topicCounts = topicDataRaw.map(item => item.count);

            // If empty, demo placeholder counts matching design pattern
            if (topicLabels.length === 0) {
                topicLabels = ['Personal Consultation', 'Health', 'Career', 'Relationship', 'Money'];
                topicCounts = [42, 28, 17, 13, 8];
            }

            const colors = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6'];

            new Chart(topicCtx, {
                type: 'doughnut',
                data: {
                    labels: topicLabels,
                    datasets: [{
                        data: topicCounts,
                        backgroundColor: colors.slice(0, topicLabels.length),
                        borderWidth: 3,
                        borderColor: '#FFFFFF',
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '68%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                                padding: 14,
                                font: { family: 'Plus Jakarta Sans', size: 12, weight: '500' },
                                color: '#334155'
                            }
                        },
                        tooltip: {
                            backgroundColor: '#1E1B2E',
                            padding: 10,
                            cornerRadius: 8
                        }
                    }
                }
            });
        });
    </script>
</body>
</html>
