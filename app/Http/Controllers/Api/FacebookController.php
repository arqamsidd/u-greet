<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;

use Illuminate\Support\Facades\Mail;
class FacebookController extends Controller
{

    public function fbhandleCallback(Request $request)
    {
       // echo "<pre>"; print_r($request->all()); exit;
       // Check Users Email If Already There
            $is_user = User::where('email', $request['email'])->first();
            $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
            $pass = array(); //remember to declare $pass as an array
            $alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
            for ($i = 0; $i < 8; $i++) {
                $n = rand(0, $alphaLength);
                $pass[] = $alphabet[$n];
            }
            if(!$is_user){
                $saveUser = User::updateOrCreate([
                    'first_name' =>  $request['name'],
                    'last_name' =>  $request['name'],
                    'email' => $request['email'],
                    'facebook_id' => $request['facebook_id'],
                    'password' => Hash::make(implode($pass))
                ]);
               
            }else{
                $saveUser = User::where('email',$request['email'])->update([
                    'facebook_id' => $request['facebook_id'],
                ]);
                $saveUser = User::where('email',  $request['email'])->first();
            }
            Auth::loginUsingId($saveUser->id);
            return response()->json(['status' => true, 'user' => auth()->user()]);
      
    }
}