<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Blog - Admin Portal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-body: #F8FAFC;
            --sidebar-bg: #1E1B2E;
            --sidebar-hover: #2D2845;
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
            max-width: 1100px;
        }

        .page-title {
            font-size: 24px;
            font-weight: 700;
            color: var(--text-heading);
            margin-bottom: 24px;
        }

        /* Form Card (Image 2, 3, 4 replica) */
        .form-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            border: 1px solid var(--border-subtle);
            padding: 28px;
            margin-bottom: 24px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .form-section-header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 700;
            color: var(--text-heading);
            margin-bottom: 20px;
        }

        .form-grid-3 {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        @media (max-width: 768px) {
            .form-grid-3, .form-grid-2 {
                grid-template-columns: 1fr;
            }
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 20px;
        }

        .form-group label {
            font-size: 13.5px;
            font-weight: 600;
            color: var(--text-heading);
        }

        .form-control {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid var(--border-subtle);
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            transition: border-color 0.2s ease;
            background: #FFFFFF;
        }

        .form-control:focus {
            border-color: #4F46E5;
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        textarea.form-control {
            resize: vertical;
            min-height: 90px;
        }

        /* Checkbox Switch Toggles (Image 4 replica) */
        .toggle-group {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 10px;
        }

        .toggle-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            background: #F1F5F9;
            padding: 8px 16px;
            border-radius: 8px;
            user-select: none;
        }

        .toggle-label input[type="checkbox"] {
            width: 16px;
            height: 16px;
            accent-color: #4F46E5;
        }

        /* FAQ Builder */
        .faq-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .btn-add-faq {
            background: #EEF2FF;
            color: #4F46E5;
            border: 1px dashed #A5B4FC;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
        }

        .btn-remove-faq {
            background: #FEE2E2;
            color: #DC2626;
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 700;
            flex-shrink: 0;
        }

        /* Submit Buttons */
        .form-actions {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-top: 10px;
        }

        .btn-submit {
            background: linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%);
            color: #FFFFFF;
            padding: 12px 28px;
            border-radius: 10px;
            border: none;
            font-size: 14.5px;
            font-weight: 700;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);
        }

        .btn-cancel {
            background: #FFFFFF;
            color: var(--text-body);
            border: 1px solid var(--border-subtle);
            padding: 12px 24px;
            border-radius: 10px;
            text-decoration: none;
            font-size: 14.5px;
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

    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <main class="content-area">
            
            <h1 class="page-title">Add New Blog</h1>

            @if ($errors->any())
                <div style="background:#FEE2E2; color:#B91C1C; padding:16px; border-radius:10px; margin-bottom:20px;">
                    <ul style="margin-left: 20px;">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('admin.blogs.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <!-- Section 1: Blog Details (Image 2 & 3 replica) -->
                <div class="form-card">
                    <div class="form-section-header">
                        ✏️ Blog Details
                    </div>

                    <div class="form-grid-3">
                        <div class="form-group" style="margin-bottom:0;">
                            <label>Title *</label>
                            <input type="text" name="title" value="{{ old('title') }}" class="form-control" placeholder="Enter blog title" required>
                        </div>

                        <div class="form-group" style="margin-bottom:0;">
                            <label>Status *</label>
                            <select name="status" class="form-control" required>
                                <option value="published" {{ old('status') == 'published' ? 'selected' : '' }}>Published</option>
                                <option value="draft" {{ old('status') == 'draft' ? 'selected' : '' }}>Draft</option>
                                <option value="archived" {{ old('status') == 'archived' ? 'selected' : '' }}>Archived</option>
                            </select>
                        </div>

                        <div class="form-group" style="margin-bottom:0;">
                            <label>Publish Date & Time *</label>
                            <input type="datetime-local" name="published_at" value="{{ old('published_at', date('Y-m-d\TH:i')) }}" class="form-control">
                        </div>
                    </div>

                    <div class="form-grid-2">
                        <div class="form-group" style="margin-bottom:0;">
                            <label>Category</label>
                            <input type="text" name="category" value="{{ old('category') }}" class="form-control" placeholder="e.g. Mind Training, Numerology, Vastu">
                        </div>

                        <div class="form-group" style="margin-bottom:0;">
                            <label>Tags (comma separated)</label>
                            <input type="text" name="tags" value="{{ old('tags') }}" class="form-control" placeholder="e.g. mind, numerology, alignment">
                        </div>
                    </div>

                    <div class="form-grid-2">
                        <div class="form-group" style="margin-bottom:0;">
                            <label>Author</label>
                            <input type="text" name="author" value="{{ old('author', 'Dr. Narayani Garg') }}" class="form-control" placeholder="Author name">
                        </div>

                        <div class="form-group" style="margin-bottom:0;">
                            <label>Cover Image</label>
                            <input type="file" name="cover_image" class="form-control" accept="image/*">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Excerpt (short summary for blog card)</label>
                        <textarea name="excerpt" class="form-control" placeholder="Brief summary of the blog post">{{ old('excerpt') }}</textarea>
                    </div>

                    <div class="form-group" style="margin-bottom:0;">
                        <label>Content *</label>
                        <textarea name="content" class="form-control" style="min-height: 250px;" placeholder="Write full HTML or text blog content here..." required>{{ old('content') }}</textarea>
                    </div>
                </div>

                <!-- Section 2: SEO (Image 4 replica) -->
                <div class="form-card">
                    <div class="form-section-header">
                        🔍 SEO Settings
                    </div>

                    <div class="form-grid-2">
                        <div class="form-group" style="margin-bottom:0;">
                            <label>Meta Description (max 160 chars)</label>
                            <textarea name="meta_description" class="form-control" maxlength="160" placeholder="Meta description for search engines">{{ old('meta_description') }}</textarea>
                        </div>

                        <div class="form-group" style="margin-bottom:0;">
                            <label>Meta Keywords</label>
                            <input type="text" name="meta_keywords" value="{{ old('meta_keywords') }}" class="form-control" placeholder="Keywords for SEO">
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Focus Keyword</label>
                        <input type="text" name="focus_keyword" value="{{ old('focus_keyword') }}" class="form-control" placeholder="Primary keyword target">
                    </div>

                    <div class="toggle-group">
                        <label class="toggle-label">
                            <input type="checkbox" name="is_active" value="1" {{ old('is_active', 1) ? 'checked' : '' }}> Active
                        </label>

                        <label class="toggle-label">
                            <input type="checkbox" name="is_featured" value="1" {{ old('is_featured') ? 'checked' : '' }}> Featured Article
                        </label>
                    </div>
                </div>

                <!-- Section 3: FAQs (optional) (Image 4 replica) -->
                <div class="form-card">
                    <div class="form-section-header">
                        ❓ FAQs (optional)
                    </div>

                    <div id="faq-container">
                        <!-- Dynamic FAQ Rows injected via JS -->
                    </div>

                    <button type="button" class="btn-add-faq" onclick="addFaqRow()">+ Add FAQ</button>
                </div>

                <!-- Form Action Buttons -->
                <div class="form-actions">
                    <button type="submit" class="btn-submit">Publish Blog</button>
                    <a href="{{ route('admin.blogs.index') }}" class="btn-cancel">Cancel</a>
                </div>
            </form>

        </main>
    </div>

    <script>
        function addFaqRow(q = '', a = '') {
            const container = document.getElementById('faq-container');
            const row = document.createElement('div');
            row.className = 'faq-row';
            row.innerHTML = `
                <input type="text" name="faq_questions[]" value="${q}" class="form-control" placeholder="Question">
                <input type="text" name="faq_answers[]" value="${a}" class="form-control" placeholder="Answer">
                <button type="button" class="btn-remove-faq" onclick="this.parentElement.remove()">×</button>
            `;
            container.appendChild(row);
        }
    </script>

</body>
</html>
