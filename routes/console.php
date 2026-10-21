<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Sets an admin password from the server shell. The password is asked for twice and never shown or stored in history.
Artisan::command('admin:password {email?}', function (?string $email = null) {
    $users = \App\Models\User::query()->orderBy('id')->get(['id', 'email']);
    if ($users->isEmpty()) {
        $this->error('No admin users found.');
        return 1;
    }
    $email ??= $users->count() === 1 ? $users->first()->email : $this->choice('Which admin?', $users->pluck('email')->all());
    $user = \App\Models\User::where('email', $email)->first();
    if (! $user) {
        $this->error("No admin with the email {$email}. Admins: ".$users->pluck('email')->implode(', '));
        return 1;
    }
    $this->info("Changing the password for {$user->email}");
    $password = (string) $this->secret('New password (at least 10 characters, typing stays hidden)');
    if (strlen($password) < 10) {
        $this->error('Too short. Nothing changed.');
        return 1;
    }
    if ($password !== (string) $this->secret('Type it again')) {
        $this->error('The two passwords did not match. Nothing changed.');
        return 1;
    }
    $user->forceFill([
        'password' => \Illuminate\Support\Facades\Hash::make($password),
        'remember_token' => \Illuminate\Support\Str::random(60),
    ])->save();
    $this->info('Password changed. Log in again with the new password.');
    return 0;
})->purpose('Change an admin password');
