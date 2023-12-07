<?php

namespace App\Http\Controllers\AdminControllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Str;
use Validator;
use Mail;

class LoginController extends Controller
{
    public $admin;

    /**
     * LoginController constructor.
     */
    public function __construct(Admin $admin)
    {
        $this->admin = $admin;
    }

    public function login() {
        if ( Auth::guard('admins')->check() ) {
            return redirect(ADMIN_BASE_URL.'dashboard');
        }

        return view( 'admin.auth.login' );
    }

    public function postLogin(Request $request) {
        $input = $request->all();
        $validator = Validator::make( $request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $admin = $this->admin->where('email', $input['email'])->first();
        $flag = 1;
        if ($admin == null) {

            /* Not exist then return failed message */
            $validator->errors()->add('email', Lang::get('auth.failed') );
            return redirect(ADMIN_BASE_URL)->withErrors( $validator );
            $flag = 1;

            /* If user_name exist then check password is right or not */
        } else if (!Hash::check($input['password'], $admin->password)) {
            /* Wrong password entered - return error message */
            $validator->errors()->add('email', Lang::get('auth.failed'));
            return redirect(ADMIN_BASE_URL)->withErrors( $validator );
            $flag = 1;
        }else{
            if( $admin->status == 1){
                $flag = 0;
            }
            if ($admin->status != 1) {
                $validator->errors()->add('email', \Lang::get('auth.inactive'));
                return redirect(ADMIN_BASE_URL)->withErrors( $validator );
            }
        }

        if($flag == 0) {
            Auth::guard('admins')->attempt(['email' => $request->email, 'password' => $request->password]);
        }
        if ( Auth::guard('admins')->check() ){
            return redirect(ADMIN_BASE_URL.'dashboard');
        }else{
            $validator->errors()->add('email', 'Enter correct email and password.');
            return redirect(ADMIN_BASE_URL)->withErrors( $validator );
        }

    }

    public function logout(){
        if ( Auth::guard('admins')->check() ) {
            Auth::guard('admins')->logout();
        }
        return redirect(ADMIN_BASE_URL );
    }

    /**
     *
     * For forgot password get method
     */

    public function forgotPassword(){

        return view('admin/auth/forgot_password');
    }

    /**
     *
     * For forgot password post method
     */
    public function postForgotPassword(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);

        $checkExist = $this->admin->where( 'email', '=', $request->email )->count();

        if( $checkExist  == 0 ){

            $validator->errors()->add('email', 'Email not exist.');
            return redirect(ADMIN_BASE_URL.'forgot-password')
                ->withErrors( $validator );
        }else{

            $adminData = $this->admin->where( 'email', '=', $request->email )->first();

            $token = Str::random(30);
            /*mail('dharti.mindinventory@gmail.com','Hi','Hello Dharti.' );*/
            $remember_token = $this->admin->where( 'email', '=', $request->email )->update(['remember_token'  => $token]);

            Mail::send('admin.emails.forgot_password',
                [
                    'name' => $adminData->first_name.' '.$adminData->last_name,
                    'url' => ADMIN_BASE_URL.$token."/reset-password",
                ],
                function ($m) use( $adminData)  {


                    $m->to( $adminData->email, $adminData->first_name.' '.$adminData->last_name )->subject('Password Reset Confirmation for '.$adminData->email );
                });
            $validator->errors()->add('success', 'Your reset password form has been sent to your email. ');
            return redirect(ADMIN_BASE_URL.'forgot-password')
                ->withErrors( $validator );
        }
    }

    /**
     *
     * For reset password get method
     */

    public function resetPassword( $email ){

        $data['email'] =   $email;
        return view('admin/auth/reset_password')->with( $data );
    }

    /**
     *
     * For reset password post method
     */
    public function postResetPassword( $EncryptEmail, Request $request ){

        $input = $request->all();

        $validator = Validator::make( $input, [
            'password' => 'required',
        ]);
        // $email = Crypt::decrypt( $EncryptEmail );

        $adminData = $this->admin->where('remember_token', $EncryptEmail)->first();

        if(isset($adminData->remember_token) && !empty($adminData->remember_token)){
            $resetPassword = $this->admin
                ->where( 'email', '=', $adminData->email )
                ->where('remember_token', '=', $EncryptEmail)
                ->update(
                    [
                        'password'  => bcrypt($input['password']),
                        'remember_token' => ''
                    ]
                );
            $validator->errors()->add('success', 'Your password has been updated.');
            return redirect(ADMIN_BASE_URL )
                ->withErrors( $validator );
        }
        else{
            $validator->errors()->add('email', 'Your token is expired.');
            return redirect(ADMIN_BASE_URL )
                ->withErrors( $validator );
        }



    }

}
