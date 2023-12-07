<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Theme extends Model
{
    use HasFactory,SoftDeletes;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'file_name',
        'file_type',
        'file_path',
        'status',
    ];


    /**
     * Get the comments for the authors  publiswork post.
     */
    public function Greet()
    {
        return $this->hasMany(Greet::class);

    }
}
