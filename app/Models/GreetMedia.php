<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class GreetMedia extends Model
{
    use HasFactory ;
    /*SoftDeletes*/

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'greet_id',
        'user_id',
        'order',
        'media_name',
        'media_type',
        'media_path',
        'greet_media_type',
        'media_thumb_name',
        'media_thumb',
        'media_sec',
        'media_min',
        'status',
    ];
   /**
     * Get the user that owns the Greet Media.
     */
    public function user()
    {
        return $this->belongsTo(User::class);

    }
   /**
     * Get the Greet Details.
     */
    public function greet()
    {
        return $this->belongsTo(Greet::class);

    }
}
