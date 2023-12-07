<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Auth;
use Mail;
use DB; 
use Carbon\Carbon;
use Illuminate\Support\Str;
use Hash;
class LoginController extends Controller
{
    public function signin(Request $request)
    {
//        print_r("Here");exit;
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        $systemUserCheck = User::where('email',$request->email)->where('type','system')->first();
       
        if($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        } elseif(empty($systemUserCheck)) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => 'Please not system user'], 500);
        }
        $credentials = $request->only('email', 'password');
        if(auth()->attempt($credentials, $request->filled('remember'))) {
            return response()->json(['status' => true, 'user' => auth()->user()]);
        }
        return response()->json(['status' => false, 'message' => 'invalid username or password'], 500);
    }

    public function login(Request $request)
    {
//        print_r("Here");exit;
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
        $systemUserCheck = User::where('email',$request->email)->where('type','system')->first();
        if($validator->fails() && !empty($systemUserCheck)) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }elseif(empty($systemUserCheck)) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => 'Please not system user'], 500);
        }
        $credentials = $request->only('email', 'password');
        if(auth()->attempt($credentials, $request->filled('remember'))) {
            return response()->json(['status' => true, 'user' => auth()->user()]);
        }
        return response()->json(['status' => false, 'message' => 'invalid username or password'], 500);
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['status' => true, 'message' => 'logged out']);
    }

    public function signout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['status' => 200, 'message' => 'User Loogged out successfully'], 200);
    }

    public function me()
    {   
        $user = auth()->user();
        if(!empty($user->profile_image)){
            $user['profile_image_link'] = asset('/storage/user_image/'.$user->profile_image);
        }
        return response()->json(['status' => true, 'user' => $user]);
    }

    /*User All Detail (greet,greetMusic,greetTheme,greetCelebrant) */
    public function allUserDetail($id)
    {
        $allDetail = User::with('greet','greet.greetMusic','greet.greetTheme','greet.greetCelebrant')->find($id);
        $allDetail['profile_image_link'] = asset('/storage/user_image/'.$allDetail->profile_image);
        if(!empty($allDetail)){
            return response()->json([
                'status' => 200,
                'message' => 'User Loaded successfully',
                'alluserdetail' => $allDetail
            ], 200);
        } else {
             return response()->json([
                    'status' => 204,
                    'message' => 'User not found',
                ], 204);
        }
    }
    /*Forgot Password*/
    /**
       * Write code on Method
       *
       * @return response()
       */
    public function submitForgetPasswordForm(Request $request)
    {
          $request->validate([
              'email' => 'required|email|exists:users',
          ]);
  
          $token = Str::random(64);
  
          DB::table('password_resets')->insert([
              'email' => $request->email, 
              'token' => $token, 
              'created_at' => Carbon::now()
            ]);
  
          Mail::send('email.forgetPassword', ['token' => $token], function($message) use($request){
              $message->to($request->email);
              $message->subject('Reset Password');
          });
             return response()->json([
                    'status' => 200,
                    'message' => 'We have e-mailed your password reset link!',
                ], 200);
          
    }
    /**
       * Write code on Method
       *
       * @return response()
       */
    public function showResetPasswordForm($token) { 
         return view('forgetPasswordLink', ['token' => $token]);
    }
     /**
       * Write code on Method
       *
       * @return response()
       */
      public function submitResetPasswordForm(Request $request)
      {
          $request->validate([
              'email' => 'required|email|exists:users',
              'password' => 'required|string|min:6|confirmed',
              'password_confirmation' => 'required'
          ]);
       
          $updatePassword = DB::table('password_resets')
                              ->where([
                                'email' => $request->email, 
                                'token' => $request->token
                              ])
                              ->first();
  
          if(!$updatePassword){
                 return response()->json([
                    'status' => 204,
                    'message' => 'Invalid token!',
                ], 204);
              //return back()->withInput()->with('error', 'Invalid token!');
          }
  
          $user = User::where('email', $request->email)
                      ->update(['password' => Hash::make($request->password)]);
 
          DB::table('password_resets')->where(['email'=> $request->email])->delete();
  
          //return redirect('/login')->with('message', 'Your password has been changed!');
          return response()->json([
                    'status' => 200,
                    'message' => 'Your password has been changed!',
                ], 200);
      }
}
