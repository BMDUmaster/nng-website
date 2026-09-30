<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Transformation with NNG</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,400&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-deep: #090B10;
            --card-bg: rgba(18, 22, 31, 0.75);
            --gold-primary: #D4AF37;
            --gold-gradient: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%);
            --accent-glow: rgba(212, 175, 55, 0.15);
            --text-main: #F0F4F8;
            --text-muted: #94A3B8;
            --border-subtle: rgba(212, 175, 55, 0.2);
            --border-hover: rgba(212, 175, 55, 0.5);
            --input-bg: rgba(10, 14, 23, 0.8);
            --error-red: #EF4444;
            --success-green: #10B981;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-deep);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 15% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 85% 80%, rgba(170, 124, 17, 0.06) 0%, transparent 45%);
        }

        /* Decorative Background Elements */
        .ambient-grid {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
        }

        .login-wrapper {
            position: relative;
            z-index: 10;
            width: 100%;
            max-width: 440px;
            padding: 24px;
        }

        .brand-header {
            text-align: center;
            margin-bottom: 32px;
        }

        .brand-logo {
            display: inline-block;
            margin-bottom: 12px;
        }

        .brand-logo img {
            height: 64px;
            width: auto;
            object-fit: contain;
        }

        .brand-title {
            font-family: 'Playfair Display', serif;
            font-size: 26px;
            font-weight: 600;
            background: var(--gold-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 0.5px;
        }

        .brand-subtitle {
            font-size: 13px;
            color: var(--text-muted);
            margin-top: 4px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }

        .login-card {
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid var(--border-subtle);
            border-radius: 20px;
            padding: 36px 32px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                        0 0 30px var(--accent-glow);
            transition: border-color 0.3s ease;
        }

        .login-card:hover {
            border-color: var(--border-hover);
        }

        .card-heading {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-main);
            margin-bottom: 6px;
        }

        .card-desc {
            font-size: 14px;
            color: var(--text-muted);
            margin-bottom: 28px;
        }

        .alert {
            padding: 12px 16px;
            border-radius: 10px;
            font-size: 13.5px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .alert-error {
            background: rgba(239, 68, 68, 0.12);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #FCA5A5;
        }

        .alert-info {
            background: rgba(16, 185, 129, 0.12);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #6EE7B7;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #CBD5E1;
            margin-bottom: 8px;
        }

        .input-control {
            width: 100%;
            padding: 13px 16px;
            background-color: var(--input-bg);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: #FFF;
            font-size: 14.5px;
            font-family: inherit;
            transition: all 0.25s ease;
            outline: none;
        }

        .input-control:focus {
            border-color: var(--gold-primary);
            box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
            background-color: rgba(15, 20, 32, 0.95);
        }

        .input-control::placeholder {
            color: #475569;
        }

        .form-options {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 26px;
            font-size: 13px;
        }

        .checkbox-label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            cursor: pointer;
        }

        .checkbox-label input {
            accent-color: var(--gold-primary);
            width: 16px;
            height: 16px;
            cursor: pointer;
        }

        .btn-submit {
            width: 100%;
            padding: 14px;
            background: var(--gold-gradient);
            border: none;
            border-radius: 12px;
            color: #0A0D14;
            font-size: 15px;
            font-weight: 700;
            font-family: inherit;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .btn-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.45);
            filter: brightness(1.05);
        }

        .btn-submit:active {
            transform: translateY(0);
        }

        .credentials-box {
            margin-top: 28px;
            padding: 14px 16px;
            background: rgba(212, 175, 55, 0.05);
            border: 1px dashed rgba(212, 175, 55, 0.25);
            border-radius: 10px;
            font-size: 12.5px;
            color: #D1D5DB;
        }

        .credentials-box strong {
            color: var(--gold-primary);
        }

        .credentials-box code {
            background: rgba(0, 0, 0, 0.4);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            color: #F3F4F6;
        }

        .back-link {
            text-align: center;
            margin-top: 24px;
        }

        .back-link a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 13px;
            transition: color 0.2s ease;
        }

        .back-link a:hover {
            color: var(--gold-primary);
        }
    </style>
</head>
<body>
    <div class="ambient-grid"></div>

    <div class="login-wrapper">
        <div class="brand-header">
            <div class="brand-logo">
                <img src="/images/nng-logo-400.webp" alt="NNG Logo" onerror="this.style.display='none'">
            </div>
            <h1 class="brand-title">Transformation with NNG</h1>
            <p class="brand-subtitle">Backend Admin Portal</p>
        </div>

        <div class="login-card">
            <h2 class="card-heading">Admin Login</h2>
            <p class="card-desc">Sign in to access customer enquiries and dashboard.</p>

            @if(session('info'))
                <div class="alert alert-info">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    {{ session('info') }}
                </div>
            @endif

            @if(session('success'))
                <div class="alert alert-info">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {{ session('success') }}
                </div>
            @endif

            @if($errors->any())
                <div class="alert alert-error">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    {{ $errors->first() }}
                </div>
            @endif

            <form action="{{ route('admin.login.submit') }}" method="POST">
                @csrf
                <div class="form-group">
                    <label class="form-label" for="email">Admin Email Address</label>
                    <input type="email" id="email" name="email" class="input-control" value="{{ old('email', 'admin@nngarg.com') }}" placeholder="admin@nngarg.com" required autofocus>
                </div>

                <div class="form-group">
                    <label class="form-label" for="password">Password</label>
                    <input type="password" id="password" name="password" class="input-control" value="adminpassword123" placeholder="••••••••••••" required>
                </div>

                <div class="form-options">
                    <label class="checkbox-label">
                        <input type="checkbox" name="remember" checked>
                        <span>Remember session</span>
                    </label>
                </div>

                <button type="submit" class="btn-submit">
                    <span>Sign In to Dashboard</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </form>

            <div class="credentials-box">
                <strong>🔑 Default MySQL Admin Credentials:</strong><br>
                Email: <code>admin@nngarg.com</code><br>
                Password: <code>adminpassword123</code>
            </div>
        </div>

        <div class="back-link">
            <a href="{{ route('home') }}">← Back to Main Website</a>
        </div>
    </div>
</body>
</html>
