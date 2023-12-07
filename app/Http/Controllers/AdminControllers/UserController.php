<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repository\Admin\UserRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public $userRepo;

    /**
     * UserController constructor.
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepo = $userRepository;
    }

    public function index(Request $request) {
        $data['breadcrumb'] = [
            'parent_title' => ['Users'],
            'parent_url' => ['users'],
            'page_title' => 'Users',
            'page_items' => ['Dashboard' => '/', 'Users' => '']
        ];

        if ($request->ajax()) {
            return $this->userRepo->index($request);
        }

        return view('admin.users.index')->with( $data );
    }


    public function create()
    {
        $data['breadcrumb'] = [
            'parent_title' => ['Users'],
            'parent_url' => [BASE_URL.'users'],
            'page_title' => 'User Create',
            'page_items' => ['Dashboard' => '/', 'Users' => BASE_URL.'users', 'User Create' => '']
        ];

        $data['roles'] = $this->roleRepo->getRoleList();

        return view('users.create')->with($data);
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|same:password-confirm',
            'roles' => 'required',
            'mobile' => 'required|min:10|max:12',
        ]);

        $input = $request->all();
        $input['password'] = Hash::make($input['password']);

        $user = User::create($input);
        $user->assignRole($request->input('roles'));

        return redirect()->route('users.index')
            ->with('success','User created successfully');
    }

    public function show($id)
    {

        $data['breadcrumb'] = [
            'parent_title' => ['Users'],
            'parent_url' => [BASE_URL.'users'],
            'page_title' => 'User Create',
            'page_items' => ['Dashboard' => '/', 'Users' => BASE_URL.'users', 'User Create' => '']
        ];

        $data['user'] = $user = User::find($id);

        return view('admin.users.show')->with($data);
    }

    public function edit($id) {
        $data['breadcrumb'] = [
            'parent_title' => ['Users'],
            'parent_url' => [BASE_URL.'users'],
            'page_title' => 'User Edit',
            'page_items' => ['Dashboard' => '/', 'Users' => BASE_URL.'users', 'User Edit' => '']
        ];
        $data['user'] = $user = User::find($id);

        return view('admin.users.edit')->with($data);
    }


    public function update(Request $request, $id)
    {
       // echo "<pre>"; print_r($request->all()); exit;
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'same:password-confirm',
            'contact' => 'required|min:10|max:12',
            'user_image' => [Rule::requiredIf(function () use ($id) {
                              if (!empty(User::find($id)->profile_image)) {
                                 return false;
                              }
                                return true;
                             }),'nullable','mimes:jpeg,png,jpg'],
        ]);
         $user = User::find($id);
        $input = $request->all();
        if(!empty($input['password'])){
            $input['password'] = Hash::make($input['password']);
        }else{
            $input = Arr::except($input,array('password'));
        }
        $oldImage           = $user->profile_image;
        if ($request->file('user_image')) {

            if (Storage::disk('user_image')->exists($oldImage) && !empty($oldImage)) {
               Storage::disk('user_image')->delete($oldImage);
            }
            $imageGellary    = $request->file('user_image');
            $name = $imageGellary->getClientOriginalName();
            $file_name = explode('.', $name)[0];
            $extension = $imageGellary->getClientOriginalExtension();
            Storage::disk('user_image')->put($name, file_get_contents($imageGellary->getRealPath()));
            $input['profile_image'] = $name;
        }
        $user = User::find($id);
        $user->update($input);


        return redirect()->route('users.index')
            ->with('success','User updated successfully');
    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
            ->with('success','User deleted successfully');
    }
}
