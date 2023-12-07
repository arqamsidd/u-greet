<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'type',
        'first_name',
        'last_name',
        'email',
        'password',
        'contact',
        'profile_image',
        'status',
        'google_id',
        'facebook_id',
        'greet_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
      /**
     * Get the comments for the authors  publiswork post.
     */
    public function Greet()
    {
        return $this->hasMany(Greet::class);

    }
      /**
     * Get the comments for the authors  publiswork post.
     */
    public function greetMedia()
    {
        return $this->hasMany(GreetMedia::class);

    }
      /**
     * Get the comments for the authors  publiswork post.
     */
    public function paymentTransaction()
    {
        return $this->hasMany(PaymentTransaction::class);

    }

}
