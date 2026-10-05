<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Blogs - Admin Portal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-body: #F8FAFC;
            --sidebar-bg: #1E1B2E;
            --sidebar-hover: #2D2845;
            --sidebar-active: #3C183D;
            --gold-accent: #D4AF37;
            --card-bg: #FFFFFF;
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-subtle: #E2E8F0;
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
        }

        .sidebar-brand-text p {
            font-size: 11px;
            color: #F4E8C1;
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

        .content-area {
            padding: 32px;
            flex: 1;
        }

        /* Page Top Actions */
        .page-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
        }

        .page-header h1 {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-heading);
        }

        .btn-primary {
            background: linear-gradient(135deg, #3C183D 0%, #5B235D 100%);
            color: #FFFFFF;
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 14px rgba(60, 24, 61, 0.3);
            transition: transform 0.2s ease;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
        }

        /* Filter Box (Image 5 replica) */
        .filter-card {
            background-color: var(--card-bg);
            border-radius: 14px;
            border: 1px solid var(--border-subtle);
            padding: 18px 24px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .filter-input {
            padding: 10px 16px;
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            min-width: 240px;
        }

        .filter-select {
            padding: 10px 16px;
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            background: #FFFFFF;
        }

        .btn-filter {
            padding: 10px 20px;
            background: #F1F5F9;
            color: var(--text-body);
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 13.5px;
        }

        /* Manage Blogs Table (Image 5 replica) */
        .dashboard-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
            overflow: hidden;
        }

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
            padding: 14px 20px;
            font-size: 12px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid var(--border-subtle);
        }

        td {
            padding: 16px 20px;
            font-size: 14px;
            border-bottom: 1px solid var(--border-subtle);
            vertical-align: middle;
        }

        tr:hover td {
            background-color: #F8FAFC;
        }

        .blog-thumb {
            width: 54px;
            height: 40px;
            object-fit: cover;
            border-radius: 6px;
            border: 1px solid var(--border-subtle);
        }

        .blog-title-cell {
            font-weight: 700;
            color: var(--text-heading);
            max-width: 320px;
        }

        .badge-status {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 11.5px;
            font-weight: 700;
            text-transform: capitalize;
        }

        .badge-published { background: #D1FAE5; color: #065F46; }
        .badge-draft { background: #FEF3C7; color: #92400E; }
        .badge-archived { background: #F3F4F6; color: #4B5563; }

        .action-btns {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .action-btn {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border-subtle);
            background: #FFFFFF;
            color: var(--text-body);
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .action-btn:hover {
            background: #F1F5F9;
            color: #3C183D;
        }

        .action-btn.delete:hover {
            background: #FEE2E2;
            color: #DC2626;
            border-color: #FCA5A5;
        }

        .toast-success {
            background: #D1FAE5;
            color: #065F46;
            padding: 14px 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-weight: 600;
        }
    </style>
</head>
<body>

    <!-- Sidebar -->
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
            <a href="{{ route('admin.dashboard') }}" class="nav-item {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                <span>Dashboard Overview</span>
            </a>

            <a href="{{ route('admin.enquiries') }}" class="nav-item {{ request()->routeIs('admin.enquiries') ? 'active' : '' }}">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                <span>Customer Enquiries</span>
            </a>

            <a href="{{ route('admin.blogs.index') }}" class="nav-item {{ request()->routeIs('admin.blogs.*') ? 'active' : '' }}">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
                <span>Manage Blogs</span>
            </a>

            <div class="sidebar-label" style="margin-top: 16px;">Quick Links</div>
            <a href="{{ url('/') }}" target="_blank" class="nav-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
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

    <!-- Main Content -->
    <div class="main-wrapper">
        <main class="content-area">
            
            @if(session('success'))
                <div class="toast-success">
                    {{ session('success') }}
                </div>
            @endif

            <div class="page-header">
                <h1>Manage Blogs</h1>
                <a href="{{ route('admin.blogs.create') }}" class="btn-primary">
                    <span>+ Add New Blog</span>
                </a>
            </div>

            <!-- Filter Card (Image 5 replica) -->
            <form action="{{ route('admin.blogs.index') }}" method="GET" class="filter-card">
                <input type="text" name="search" value="{{ $search ?? '' }}" class="filter-input" placeholder="Search by title...">
                
                <select name="status" class="filter-select">
                    <option value="">All Status</option>
                    <option value="published" {{ ($statusFilter ?? '') == 'published' ? 'selected' : '' }}>Published</option>
                    <option value="draft" {{ ($statusFilter ?? '') == 'draft' ? 'selected' : '' }}>Draft</option>
                    <option value="archived" {{ ($statusFilter ?? '') == 'archived' ? 'selected' : '' }}>Archived</option>
                </select>

                <button type="submit" class="btn-filter">Filter</button>
            </form>

            <!-- Table (Image 5 replica) -->
            <div class="dashboard-card">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>COVER</th>
                                <th>TITLE</th>
                                <th>CATEGORY</th>
                                <th>STATUS</th>
                                <th>VIEWS</th>
                                <th>CREATED</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($blogs as $blog)
                                <tr>
                                    <td>
                                        <img src="{{ $blog->image ? $blog->image : '/images/narayani-portrait-684.webp' }}" alt="" class="blog-thumb">
                                    </td>
                                    <td>
                                        <div class="blog-title-cell">{{ $blog->title }}</div>
                                    </td>
                                    <td>
                                        {{ $blog->category ?? '—' }}
                                    </td>
                                    <td>
                                        <span class="badge-status badge-{{ $blog->status }}">
                                            {{ ucfirst($blog->status) }}
                                        </span>
                                        <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                                            {{ $blog->published_at ? $blog->published_at->format('d M Y, h:i A') : '' }}
                                        </div>
                                    </td>
                                    <td>
                                        <strong>{{ $blog->views }}</strong>
                                    </td>
                                    <td>
                                        {{ $blog->created_at->format('d M Y') }}
                                    </td>
                                    <td>
                                        <div class="action-btns">
                                            <a href="{{ route('blog.show', $blog->slug) }}" target="_blank" class="action-btn" title="View Blog">
                                                👁️
                                            </a>
                                            <a href="{{ route('admin.blogs.edit', $blog->id) }}" class="action-btn" title="Edit Blog">
                                                ✏️
                                            </a>
                                            <form action="{{ route('admin.blogs.destroy', $blog->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this blog?')">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="action-btn delete" title="Delete Blog">
                                                    🗑️
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
                                        No blogs found. Click "+ Add New Blog" to create your first article!
                                    </td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>

            @if($blogs->hasPages())
                <div style="margin-top: 24px;">
                    {{ $blogs->links() }}
                </div>
            @endif

        </main>
    </div>

</body>
</html>
