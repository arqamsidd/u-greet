<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Greet extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'occasion_name',
        'occasion_date',
        'occasions_description',
        'contribution_deadline_date',
        'theme_id',
        'music_id',
        'occasion_type',
        'occasion_limit',
        'status',
        'greet_img',
        'greet_img_link',
        'transition_id',
    ];
    /**
     * Get the Created User Details of greet.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');

    }

    /**
     * Get the greet celebrants .
     */
    public function greetCelebrant()
    {
       return $this->hasMany(GreetCelebrant::class);
    }

    /**
     * Get the Greet Media.
     */
    public function greetMedia()
    {
       return $this->hasMany(GreetMedia::class);
    }

    /*
     *  Get Greet Theme
     * */
    public function greetTheme() {
        return $this->belongsTo(Theme::class, 'theme_id', 'id');
    }

    /*
     *  Get Greet Music
     * */
    public function greetMusic() {
        return $this->belongsTo(Music::class, 'music_id', 'id');
    }

    public function paymentTransaction()
    {
        return $this->hasMany(PaymentTransaction::class);

    }

    public function greetTransition(){
        return $this->belongsTo('App\Models\Transition', 'transition_id', 'id');
    }
}
