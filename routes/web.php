<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StripePaymentController;
use Illuminate\Support\Facades\Log;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return view('welcome');
});*/

/*Route::group(['prefix' => 'admin'], function () {

});*/


Route::get('stripetest', [StripePaymentController::class, 'stripe']);
Route::post('stripetest', [StripePaymentController::class, 'stripePost'])->name('stripetest.post');
Route::get('/{path?}', function () {
    return view('home');
})->where('path', '^(?!api).*?');

Route::any('/files/{any?}', function () {
    Log::info('API Call');
    //Log::error('Client Error: ');
    //require_once base_path('scripts/tus.php');

    $response =  app('tus-server')->serve();
    Log::info('TUS Status: ' . $response->getStatusCode());
    Log::info('TUS Content: ' . $response->getContent());
    return $response;    
})->where('any', '.*');