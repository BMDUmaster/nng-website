<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * The redesigned website is a static build in public/ (each page is a folder with index.html). Serve that page
     * when it exists, so every server shows the new design (Apache, nginx, or `php artisan serve`); fall back to the
     * older Blade view otherwise.
     */
    public static function staticPage(string $path)
    {
        $path = trim($path, '/');
        $public = realpath(public_path());
        $file = realpath(public_path($path === '' ? 'index.html' : $path . '/index.html'));
        if ($file === false || !str_starts_with($file, $public . DIRECTORY_SEPARATOR) || !is_file($file)) {
            return null;
        }
        return response()->file($file, ['Content-Type' => 'text/html; charset=UTF-8']);
    }

    private function page(string $path, string $view)
    {
        return self::staticPage($path) ?? view($view);
    }

    public function home()
    {
        return $this->page('', 'home');
    }

    public function about()
    {
        return $this->page('about', 'about');
    }

    public function services()
    {
        return $this->page('services', 'services');
    }

    public function handHoldingProgram()
    {
        return $this->page('hand-holding-program', 'hand-holding-program');
    }

    public function contact()
    {
        return $this->page('contact', 'contact');
    }

    public function consultation()
    {
        return $this->page('consultation', 'consultation');
    }

    public function nngLanding()
    {
        return view('nng');
    }

    public function privacyPolicy()
    {
        return view('privacy-policy');
    }

    public function termsConditions()
    {
        return view('terms-conditions');
    }
}
