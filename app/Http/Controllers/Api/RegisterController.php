<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Auth; 
class RegisterController extends Controller
{
    /**
     * create new user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(Request $request)
    {
//        print_r($request->all());exit;
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4', 'confirmed'],
        ]);
        if($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        Mail::send('email.register', array(),function ($message) use ($request) {
            $message->to($request->email, 'Sucessfuly Account Create')->subject('Account Created');
        });
        return response()->json(['status' => true, 'user' => $user]);
    }
    /**
     * create new user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:4', 'confirmed'],
        ]);
        if($validator->fails()) {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => $validator->errors()], 500);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        
        /*Mail send*/
        Mail::send('email.register', array(),function ($message) use ($request) {
            $message->to($request->email, 'Sucessfuly Account Create')->subject('Account Create Email');
        });
        /*End*/
        return response()->json(['status' => true, 'user' => $user]);
    }

    /*
     * Change Password 
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePasswordSave(Request $request)
    {

        $this->validate($request, [
            'current_password' => 'required|string',
            'new_password' => 'required|confirmed'
        ]);
        $auth = Auth::user();
 
        // The passwords matches
        if (!Hash::check($request->get('current_password'), $auth->password)) 
        {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => 'Current Password is Invalid'], 500);
            //return back()->with('error', "Current Password is Invalid");
        }
        
        // Current password and new password same
        if (strcmp($request->get('current_password'), $request->new_password) == 0) 
        {
            return response()->json(['status' => false, 'message' => 'fix errors', 'errors' => 'New Password cannot be same as your current password.'], 500);
            //return redirect()->back()->with("error", "");
        }
 
        $user =  User::find($auth->id);
        $user->password =  Hash::make($request->new_password);
        $user->save();
        return response()->json(['status' => true, 'user' => $user]);
    }
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function userUpdate(Request $request)
    {
        //echo "<pre>"; print_r($request->all()); exit;
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email,'.$request->user_id,
            'password' => 'same:password-confirm',
            'contact' => 'required|min:10|max:12',  
            /*'user_image' => [Rule::requiredIf(function () use ($request) {
                              if (!empty(User::find($request->user_id)->profile_image)) {
                                 return false;
                              }
                                return true;
                             }),'nullable','mimes:jpeg,png,jpg'],*/
        ]);

        
        $update                                 = User::find($request->user_id);
        $update->first_name                     = $request->first_name;
        $update->last_name                      = $request->last_name;
        $update->contact                        = $request->contact;
        $update->email                          = $request->email;
        $oldImage                               = $update->profile_image;
        
        
        if ($request->file('user_image')) {

            if (Storage::disk('user_image')->exists($oldImage) && !empty($oldImage)) {
               Storage::disk('user_image')->delete($oldImage);
            }
            $imageGellary    = $request->file('user_image');
            $name = $imageGellary->getClientOriginalName();
            $file_name = explode('.', $name)[0];
            $extension = $imageGellary->getClientOriginalExtension();
            Storage::disk('user_image')->put($name, file_get_contents($imageGellary->getRealPath()));
            $update->profile_image = $name;
        }
        $update->save();
        $userUpdate = $update->toArray();
        $userUpdate['profile_image_link'] = asset('/storage/user_image/'.$update->profile_image);
        if($update->save()){
            return response()->json([
                'status' => 200,
                'message' => 'User update successfully',
                'user' => $userUpdate
            ], 200);
        } else {
             return response()->json([
                    'status' => 204,
                    'message' => 'Greet Media  not found',
                ], 204);
        }
        //return response()->json(['status' => true, 'user' => $update]);
    }
}
