<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class PaymentTransaction extends Model
{
    use HasFactory, SoftDeletes;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'greet_id',
        'payment_amount',
        'payment_status',
        'transaction_id',
        'description',
        'trasaction_date',
        'payment_gateway',
    ];
     /**
     * Get the Created User Details of greet.
     */
    public function user()
    {
        return $this->belongsTo(User::class);

    }

}
