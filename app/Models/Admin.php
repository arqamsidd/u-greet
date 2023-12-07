<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone_no',
        'email',
        'password',
        'remember_token',
        'status'
    ];

    protected $guarded = ["id"];

    static $UNATTACHED = 15;

    protected $hidden = [
        'password', 'remember_token'
    ];

}
