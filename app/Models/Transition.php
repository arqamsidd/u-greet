<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transition extends Model
{
    protected $table = 'transitions';

    // this means that all the fields of this table are mass assignable
    protected $guarded = [];
}
