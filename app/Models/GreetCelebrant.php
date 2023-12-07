<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GreetCelebrant extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'greet_id',
        'first_name',
        'last_name',
    ];

     /**
     * Get the comments for the authors  publiswork post.
     */
    public function Greet()
    {
        return $this->belongsTo(Greet::class);

    }
}
