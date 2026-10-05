<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function about()
    {
        return view('about');
    }

    public function services()
    {
        return view('services');
    }

    public function handHoldingProgram()
    {
        return view('hand-holding-program');
    }

    public function contact()
    {
        return view('contact');
    }

    public function consultation()
    {
        return view('consultation');
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
