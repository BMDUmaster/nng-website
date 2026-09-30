<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Enquiries Dashboard - NNG Admin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #F8FAFC;
            --surface-card: #FFFFFF;
            --surface-hover: #F1F5F9;
            --gold-main: #B8860B;
            --gold-gradient: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-color: rgba(212, 175, 55, 0.4);
            --border-subtle: #E2E8F0;
            --status-new-bg: rgba(245, 158, 11, 0.12);
            --status-new-text: #D97706;
            --status-contacted-bg: rgba(59, 130, 246, 0.12);
            --status-contacted-text: #2563EB;
            --status-resolved-bg: rgba(16, 185, 129, 0.12);
            --status-resolved-text: #059669;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-body);
            min-height: 100vh;
            padding-bottom: 60px;
        }

        /* Top Navbar */
        .admin-nav {
            background-color: var(--surface-card);
            border-bottom: 1px solid var(--border-subtle);
            padding: 16px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }

        .nav-brand {
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
        }

        .nav-logo-img {
            height: 40px;
            width: auto;
        }

        .nav-title {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            font-weight: 700;
            color: #0F172A;
        }

        .nav-badge {
            background: rgba(212, 175, 55, 0.12);
            color: var(--gold-main);
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
            border: 1px solid rgba(212, 175, 55, 0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .nav-actions {
            display: flex;
            align-items: center;
            gap: 18px;
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 13.5px;
            color: var(--text-heading);
        }

        .avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: var(--gold-gradient);
            color: #FFFFFF;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .btn-logout {
            background: rgba(239, 68, 68, 0.08);
            color: #DC2626;
            border: 1px solid rgba(239, 68, 68, 0.2);
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
        }

        .btn-logout:hover {
            background: rgba(239, 68, 68, 0.15);
            color: #B91C1C;
        }

        /* Container */
        .container {
            max-width: 1360px;
            margin: 0 auto;
            padding: 32px 24px;
        }

        /* Page Heading */
        .page-header {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-bottom: 28px;
            flex-wrap: wrap;
            gap: 16px;
        }

        .page-title h1 {
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            color: var(--text-heading);
            font-weight: 700;
        }

        .page-title p {
            font-size: 14px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        /* Alert */
        .alert-success {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #047857;
            padding: 14px 18px;
            border-radius: 12px;
            margin-bottom: 24px;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
            margin-bottom: 32px;
        }

        .stat-card {
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: 16px;
            padding: 22px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s ease, border-color 0.2s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        }

        .stat-card:hover {
            border-color: var(--border-color);
            transform: translateY(-2px);
        }

        .stat-info .stat-label {
            font-size: 13px;
            color: var(--text-muted);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .stat-info .stat-value {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-heading);
            margin-top: 4px;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .stat-icon.total { background: rgba(212, 175, 55, 0.12); color: var(--gold-main); }
        .stat-icon.new { background: var(--status-new-bg); color: var(--status-new-text); }
        .stat-icon.contacted { background: var(--status-contacted-bg); color: var(--status-contacted-text); }
        .stat-icon.resolved { background: var(--status-resolved-bg); color: var(--status-resolved-text); }

        /* Filter Controls Bar */
        .filters-bar {
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: 14px;
            padding: 16px 20px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .search-box {
            display: flex;
            align-items: center;
            gap: 10px;
            background: #F8FAFC;
            border: 1px solid var(--border-subtle);
            border-radius: 10px;
            padding: 10px 16px;
            flex: 1;
            min-width: 260px;
            max-width: 420px;
        }

        .search-box input {
            background: none;
            border: none;
            outline: none;
            color: var(--text-heading);
            font-size: 14px;
            width: 100%;
        }

        .search-box input::placeholder {
            color: var(--text-muted);
        }

        .filter-group {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .filter-select {
            background: #F8FAFC;
            border: 1px solid var(--border-subtle);
            border-radius: 10px;
            padding: 10px 16px;
            color: var(--text-heading);
            font-size: 13.5px;
            outline: none;
            cursor: pointer;
        }

        .filter-select option {
            background: #FFFFFF;
            color: #0F172A;
        }

        .btn-filter-apply {
            background: var(--gold-gradient);
            color: #FFFFFF;
            border: none;
            border-radius: 10px;
            padding: 10px 18px;
            font-size: 13.5px;
            font-weight: 700;
            cursor: pointer;
        }

        /* Table Card */
        .table-card {
            background: var(--surface-card);
            border: 1px solid var(--border-subtle);
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 14px;
        }

        .data-table th {
            background: #F8FAFC;
            color: var(--text-muted);
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-subtle);
        }

        .data-table td {
            padding: 18px 20px;
            border-bottom: 1px solid var(--border-subtle);
            vertical-align: middle;
            color: var(--text-body);
        }

        .data-table tr:hover td {
            background: var(--surface-hover);
        }

        .customer-name {
            font-weight: 600;
            color: var(--text-heading);
            font-size: 14.5px;
        }

        .customer-date {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 3px;
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
            color: var(--text-heading);
            text-decoration: none;
            font-size: 13.5px;
            transition: color 0.2s ease;
        }

        .contact-link.wa {
            color: #16A34A;
            font-weight: 600;
        }

        .contact-link.wa:hover {
            text-decoration: underline;
        }

        .contact-link.email {
            color: #2563EB;
            font-size: 12.5px;
        }

        .badge-status {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: capitalize;
        }

        .badge-status.new { background: var(--status-new-bg); color: var(--status-new-text); }
        .badge-status.contacted { background: var(--status-contacted-bg); color: var(--status-contacted-text); }
        .badge-status.resolved { background: var(--status-resolved-bg); color: var(--status-resolved-text); }

        .status-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: currentColor;
        }

        /* Action Buttons */
        .actions-cell {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .btn-action {
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 12.5px;
            font-weight: 600;
            border: 1px solid var(--border-subtle);
            background: #F8FAFC;
            color: var(--text-heading);
            cursor: pointer;
            transition: all 0.2s ease;
            text-decoration: none;
        }

        .btn-action:hover {
            border-color: var(--gold-main);
            color: var(--gold-main);
            background: rgba(212, 175, 55, 0.08);
        }

        .btn-delete {
            color: #DC2626;
            background: rgba(239, 68, 68, 0.08);
            border-color: rgba(239, 68, 68, 0.2);
        }

        .btn-delete:hover {
            background: rgba(239, 68, 68, 0.2);
            color: #B91C1C;
            border-color: rgba(239, 68, 68, 0.4);
        }

        .status-select-inline {
            background: #F8FAFC;
            border: 1px solid var(--border-subtle);
            color: var(--text-heading);
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 6px;
            cursor: pointer;
            outline: none;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-muted);
        }

        .empty-state svg {
            width: 48px;
            height: 48px;
            margin-bottom: 12px;
            opacity: 0.4;
        }

        .pagination-wrap {
            padding: 16px 24px;
            border-top: 1px solid var(--border-subtle);
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 13px;
        }

        /* Modal */
        .modal-backdrop {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(6px);
            z-index: 1000;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .modal-backdrop.active {
            display: flex;
        }

        .modal-box {
            background: var(--surface-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            width: 100%;
            max-width: 540px;
            padding: 28px;
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            position: relative;
        }

        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 14px;
            border-bottom: 1px solid var(--border-subtle);
        }

        .modal-header h3 {
            font-family: 'Playfair Display', serif;
            font-size: 20px;
            color: var(--text-heading);
        }

        .modal-close {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 24px;
            cursor: pointer;
            line-height: 1;
        }

        .modal-close:hover {
            color: #FFF;
        }

        .modal-field {
            margin-bottom: 16px;
        }

        .modal-label {
            font-size: 12px;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }

        .modal-value {
            font-size: 14.5px;
            color: var(--text-heading);
        }

        .modal-message-box {
            background: rgba(10, 14, 20, 0.8);
            border: 1px solid var(--border-subtle);
            border-radius: 10px;
            padding: 14px 16px;
            font-size: 14px;
            line-height: 1.6;
            color: #E2E8F0;
            white-space: pre-wrap;
            margin-top: 6px;
        }
    </style>
</head>
<body>

    <!-- Top Admin Navigation Bar -->
    <header class="admin-nav">
        <a href="{{ route('admin.dashboard') }}" class="nav-brand">
            <img src="/images/nng-logo-400.webp" alt="NNG Logo" class="nav-logo-img" onerror="this.style.display='none'">
            <span class="nav-title">Transformation with NNG</span>
            <span class="nav-badge">Admin Portal</span>
        </a>

        <div class="nav-actions">
            <div class="user-info">
                <div class="avatar">N</div>
                <span>{{ Auth::user()->name ?? 'Admin' }}</span>
            </div>

            <form action="{{ route('admin.logout') }}" method="POST" style="margin:0;">
                @csrf
                <button type="submit" class="btn-logout">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                    Logout
                </button>
            </form>
        </div>
    </header>

    <main class="container">

        <!-- Page Title & Quick Actions -->
        <div class="page-header">
            <div class="page-title">
                <h1>Customer Enquiries</h1>
                <p>Real-time customer consultation and call-back requests submitted from the website.</p>
            </div>
        </div>

        @if(session('success'))
            <div class="alert-success">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                {{ session('success') }}
            </div>
        @endif

        <!-- Stats Overview Cards -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-info">
                    <div class="stat-label">Total Enquiries</div>
                    <div class="stat-value">{{ $stats['total'] }}</div>
                </div>
                <div class="stat-icon total">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-info">
                    <div class="stat-label">New Enquiries</div>
                    <div class="stat-value" style="color:#FBBF24">{{ $stats['new'] }}</div>
                </div>
                <div class="stat-icon new">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-info">
                    <div class="stat-label">In Progress / Contacted</div>
                    <div class="stat-value" style="color:#60A5FA">{{ $stats['contacted'] }}</div>
                </div>
                <div class="stat-icon contacted">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
            </div>

            <div class="stat-card">
                <div class="stat-info">
                    <div class="stat-label">Resolved / Booked</div>
                    <div class="stat-value" style="color:#34D399">{{ $stats['resolved'] }}</div>
                </div>
                <div class="stat-icon resolved">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
            </div>
        </div>

        <!-- Filter & Search Toolbar -->
        <form action="{{ route('admin.dashboard') }}" method="GET" class="filters-bar">
            <div class="search-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" name="search" value="{{ $search }}" placeholder="Search by name, phone, email, or topic...">
            </div>

            <div class="filter-group">
                <select name="status" class="filter-select">
                    <option value="">All Statuses</option>
                    <option value="new" {{ $statusFilter == 'new' ? 'selected' : '' }}>New Only</option>
                    <option value="contacted" {{ $statusFilter == 'contacted' ? 'selected' : '' }}>Contacted Only</option>
                    <option value="resolved" {{ $statusFilter == 'resolved' ? 'selected' : '' }}>Resolved Only</option>
                </select>

                <button type="submit" class="btn-filter-apply">Apply Filter</button>
                @if(!empty($search) || !empty($statusFilter))
                    <a href="{{ route('admin.dashboard') }}" class="btn-action">Reset</a>
                @endif
            </div>
        </form>

        <!-- Customer Enquiries Table -->
        <div class="table-card">
            @if($enquiries->count() > 0)
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Contact Info</th>
                            <th>Guidance / Service</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($enquiries as $enquiry)
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
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
                                            {{ $enquiry->phone }}
                                        </a>
                                        @if($enquiry->email)
                                            <a href="mailto:{{ $enquiry->email }}" class="contact-link email">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                                {{ $enquiry->email }}
                                            </a>
                                        @endif
                                    </div>
                                </td>
                                <td>
                                    <strong style="color:var(--text-heading);">{{ $enquiry->guidance_with ?? 'General Enquiry' }}</strong>
                                </td>
                                <td>
                                    <span style="font-size:13px;color:var(--text-muted);">{{ $enquiry->based_in ?? 'India' }}</span>
                                </td>
                                <td>
                                    <form action="{{ route('admin.enquiry.status', $enquiry->id) }}" method="POST" style="margin:0;">
                                        @csrf
                                        <select name="status" class="status-select-inline" onchange="this.form.submit()">
                                            <option value="new" {{ $enquiry->status == 'new' ? 'selected' : '' }}>🟡 New</option>
                                            <option value="contacted" {{ $enquiry->status == 'contacted' ? 'selected' : '' }}>🔵 Contacted</option>
                                            <option value="resolved" {{ $enquiry->status == 'resolved' ? 'selected' : '' }}>🟢 Resolved</option>
                                        </select>
                                    </form>
                                </td>
                                <td>
                                    <div class="actions-cell">
                                        <button type="button" class="btn-action" onclick="openDetailsModal({{ json_encode($enquiry) }})">
                                            View Details
                                        </button>

                                        <form action="{{ route('admin.enquiry.delete', $enquiry->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this enquiry?');" style="margin:0;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn-action btn-delete" title="Delete Enquiry">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

                <div class="pagination-wrap">
                    <div>Showing {{ $enquiries->firstItem() }} to {{ $enquiries->lastItem() }} of {{ $enquiries->total() }} enquiries</div>
                    <div>{{ $enquiries->links() }}</div>
                </div>
            @else
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
                    <h3>No Customer Enquiries Found</h3>
                    <p>When customers fill out the callback/consultation form on the website, their enquiries will appear here in real-time.</p>
                </div>
            @endif
        </div>

    </main>

    <!-- Details View Modal -->
    <div id="detailsModal" class="modal-backdrop">
        <div class="modal-box">
            <div class="modal-header">
                <h3>Enquiry Details</h3>
                <button type="button" class="modal-close" onclick="closeDetailsModal()">&times;</button>
            </div>

            <div class="modal-field">
                <div class="modal-label">Customer Name</div>
                <div id="modalName" class="modal-value" style="font-weight:700;font-size:16px;"></div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="modal-field">
                <div>
                    <div class="modal-label">Phone Number</div>
                    <div id="modalPhone" class="modal-value"></div>
                </div>
                <div>
                    <div class="modal-label">Email Address</div>
                    <div id="modalEmail" class="modal-value"></div>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;" class="modal-field">
                <div>
                    <div class="modal-label">Guidance Topic</div>
                    <div id="modalGuidance" class="modal-value" style="color:var(--gold-main);font-weight:600;"></div>
                </div>
                <div>
                    <div class="modal-label">Based In</div>
                    <div id="modalBasedIn" class="modal-value"></div>
                </div>
            </div>

            <div class="modal-field">
                <div class="modal-label">Submission Date & Time</div>
                <div id="modalDate" class="modal-value" style="color:var(--text-muted);font-size:13px;"></div>
            </div>

            <div class="modal-field">
                <div class="modal-label">Customer Message / Note</div>
                <div id="modalMessage" class="modal-message-box"></div>
            </div>

            <div style="margin-top:20px;text-align:right;">
                <button type="button" class="btn-action" onclick="closeDetailsModal()">Close Window</button>
            </div>
        </div>
    </div>

    <script>
        function openDetailsModal(enquiry) {
            document.getElementById('modalName').innerText = enquiry.name || 'N/A';
            document.getElementById('modalPhone').innerText = enquiry.phone || 'N/A';
            document.getElementById('modalEmail').innerText = enquiry.email || 'Not Provided';
            document.getElementById('modalGuidance').innerText = enquiry.guidance_with || 'General Enquiry';
            document.getElementById('modalBasedIn').innerText = enquiry.based_in || 'India';
            document.getElementById('modalDate').innerText = new Date(enquiry.created_at).toLocaleString();
            document.getElementById('modalMessage').innerText = enquiry.message || 'No additional message written by customer.';

            document.getElementById('detailsModal').classList.add('active');
        }

        function closeDetailsModal() {
            document.getElementById('detailsModal').classList.remove('active');
        }

        // Close modal on backdrop click
        document.getElementById('detailsModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeDetailsModal();
            }
        });
    </script>
</body>
</html>
