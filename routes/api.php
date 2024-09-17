<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ErrorLogController;
use App\Models\GreetMedia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use TusPhp\Tus\Server as TusServer;
use App\Http\Controllers\Api\TusController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::get('/{path?}', function () {
    return view('home');
})->where('path', '^(?!api).*?');*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {

    Route::any('/tus/{any?}', [TusController::class, 'tusGreetUpload'])->where('any', '.*');
    Route::post('/login', [\App\Http\Controllers\Api\LoginController::class, 'login']);
    Route::post('/signin', [\App\Http\Controllers\Api\LoginController::class, 'signin']);
    Route::post('/register', [\App\Http\Controllers\Api\RegisterController::class, 'register']);
    Route::post('/signup', [\App\Http\Controllers\Api\RegisterController::class, 'signup']);
    Route::post('/logout', [App\Http\Controllers\Api\LoginController::class, 'logout']);
    Route::post('/signout', [App\Http\Controllers\Api\LoginController::class, 'signout']);
    Route::group(['middleware' => 'auth:sanctum'], function () {
         /*Change Password*/
        Route::post('/change-password', [\App\Http\Controllers\Api\RegisterController::class, 'changePasswordSave']);

         /*Get All User Detail (greet,greetMusic,greetTheme,greetCelebrant)*/
        Route::get('get-all-user-detail/{id}', [\App\Http\Controllers\Api\LoginController::class, 'allUserDetail']);

       
        Route::post('/me', [App\Http\Controllers\Api\LoginController::class, 'me']);
        //        Route::get('/dashboard', [App\Http\Controllers\Api\])

        Route::get('greet/{id}', [\App\Http\Controllers\Api\GreetController::class, 'getGreetDetails']);
        Route::post('create-greet', [\App\Http\Controllers\Api\GreetController::class, 'store']);



        Route::get('get-greet-theme/{id}', [\App\Http\Controllers\Api\ThemeController::class, 'getGreetTheme']);
        Route::post('store-greet-theme', [\App\Http\Controllers\Api\ThemeController::class, 'storeGreetTheme']);
        Route::get('get-themes', [\App\Http\Controllers\Api\ThemeController::class, 'getThemes']);
        Route::get('get-greet-music/{id}/', [\App\Http\Controllers\Api\MusicController::class, 'getGreetMusic']);
        Route::get('get-musics', [\App\Http\Controllers\Api\MusicController::class, 'getMusics']);

        Route::post('store-greet-music', [\App\Http\Controllers\Api\MusicController::class, 'storeGreetMusic']);

        /*All Greet*/
        Route::get('get-all-greet/{id}', [\App\Http\Controllers\Api\GreetController::class, 'getAllGreets']);

        /*Get Upcoming Greet */
        Route::get('get-upcoming-greet/{id}', [\App\Http\Controllers\Api\GreetController::class, 'getUpcomingGreets']);

        /*Get Preview Media */
        Route::get('get-preview-media/{id}/', [\App\Http\Controllers\Api\GreetController::class, 'getPreviewMedia']);
    });

    /**APIS for transitions */
    Route::get('get-transitions', [\App\Http\Controllers\Api\TransitionController::class, 'getTransitions']);
    Route::post('store-greet-transitions', [\App\Http\Controllers\Api\TransitionController::class, 'storeGreetTransitions']);
    /**APIS for transitions */
    
    /*Upload Media*/
    Route::post('create-greet-media', [\App\Http\Controllers\Api\GreetController::class, 'storeMedia']);

    

    /*Edit profile Update*/
    Route::post('user-update', [\App\Http\Controllers\Api\RegisterController::class, 'userUpdate']);

    /*Edit profile Update*/
    Route::post('greet-update', [\App\Http\Controllers\Api\GreetController::class, 'greetUpdate']);
    /*Get Preview Media */
    Route::get('get-media/{id}/', [\App\Http\Controllers\Api\GreetController::class, 'getMedia']);
    /*Merge Video or Image*/
    Route::post('merge-video-image', [App\Http\Controllers\Api\GreetController::class, 'mergeVideoImage']);
    /*ForgotPassword*/
    Route::post('forget-password', [App\Http\Controllers\Api\LoginController::class, 'submitForgetPasswordForm']);
    Route::get('reset-password/{token}',[App\Http\Controllers\Api\LoginController::class, 'showResetPasswordForm'])->name('reset.password.get');
    Route::post('reset-password', [App\Http\Controllers\Api\LoginController::class, 'submitResetPasswordForm']);

    /*Invite People */
    Route::get('invite-greet/{id}', [\App\Http\Controllers\Api\GreetController::class, 'urlGenerateInviteGreet']);

    /*User*/
    /*Route::get('auth/google', [\App\Http\Controllers\Api\GoogleController::class, 'redirectToGoogle']);*/
    Route::post('callback', [\App\Http\Controllers\Api\GoogleController::class, 'handleCallback']);
    Route::post('facebookcallback', [\App\Http\Controllers\Api\FacebookController::class, 'fbhandleCallback']);


     /* Upload Media with Guest User */
    Route::post('upload-greet-media', [\App\Http\Controllers\Api\GreetController::class, 'uploadGreetMediaByGuest']);
    
    /* Get Media with Guest User */
    Route::post('get-contributer-media', [\App\Http\Controllers\Api\GreetController::class, 'getContributerMedia']);
    
    /*Delete Media*/
    Route::get('delete-media/{id}', [\App\Http\Controllers\Api\GreetController::class, 'deleteGreetMedia']);


    /*Finalize U-Greet*/
    Route::get('finalizegreet/{id}', [\App\Http\Controllers\Api\GreetController::class, 'finalizeGreet']);

    /*Create Video */
    Route::post('create-video', [\App\Http\Controllers\Api\GreetController::class, 'createVideo']);
     /* Update Image*/
    Route::post('update-greet-image', [\App\Http\Controllers\Api\GreetController::class, 'UpdateGreetImage']);
    /* Update Video */
    Route::post('update-greet-video', [\App\Http\Controllers\Api\GreetController::class, 'UpdateGreetVideo']);
});
    /*Strip Payment*/
    Route::post('stripe', [\App\Http\Controllers\Api\StripePaymentController::class, 'stripe']);
   
    Route::post('/log-error', [ErrorLogController::class, 'logError']);
