<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use App\Models\Theme;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreThemeRequest;
use App\Http\Requests\UpdateThemeRequest;
use App\Repository\Admin\ThemeRepository;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ThemeController extends Controller
{
    public $themeRepo;

    /**
     * UserController constructor.
     */
    public function __construct(ThemeRepository $themeRepository)
    {
        $this->themeRepo = $themeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        /*$data['breadcrumb'] = [
            'parent_title' => ['Themes'],
            'parent_url' => ['themes'],
            'page_title' => 'Themes',
            'page_items' => ['Dashboard' => '/', 'Themes' => '']
        ];
*/
        if ($request->ajax()) {
            return $this->themeRepo->index($request);
        }

        return view('admin.themes.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['breadcrumb'] = [
            'parent_title' => ['Themes'],
            'parent_url' => [BASE_URL.'themes'],
            'page_title' => 'Themes Create',
            'page_items' => ['Dashboard' => '/', 'Themes' => BASE_URL.'themes', 'User Create' => '']
        ];
        return view('admin.themes.create')->with($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreThemeRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'theme_name' => 'required',
            'theme_image' => 'required|image|mimes:jpeg,png,jpg',
        ]);

        // loop through images and save to /uploads directory
        $imageGellary    = $request->file('theme_image');
        //$name = $imageGellary->getClientOriginalName();
        $name        = md5(uniqid(rand(), true)).'.'.$imageGellary->getClientOriginalExtension();
        $file_name = explode('.', $name)[0];
        $extension = $imageGellary->getClientOriginalExtension();
        Storage::disk('theme_image')->put($name, file_get_contents($imageGellary->getRealPath()));

        $file_path = 'storage/theme_image/' . $name;
        $thmeInsert             = new Theme();
        $thmeInsert->name       = $request->theme_name;
        $thmeInsert->file_name  = $name;
        $thmeInsert->file_type  = $extension;
        $thmeInsert->file_path  = $file_path;
        $thmeInsert->save();
        return redirect()->route('themes.index')
            ->with('success','Theme created successfully');

        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Theme  $theme
     * @return \Illuminate\Http\Response
     */
    public function show(Theme $theme)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Theme  $theme
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       $data['breadcrumb'] = [
            'parent_title' => ['Themes'],
            'parent_url' => [BASE_URL.'themes'],
            'page_title' => 'User Edit',
            'page_items' => ['Dashboard' => '/', 'Themes' => BASE_URL.'themes', 'Themes Edit' => '']
        ];
        $data['theme'] = $theme = Theme::find($id);

        return view('admin.themes.edit')->with($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateThemeRequest  $request
     * @param  \App\Models\Theme  $theme
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'theme_name' => 'required',
            'theme_image' => [Rule::requiredIf(function () use ($id) {
                              if (!empty(Theme::find($id)->file_path)) {
                                 return false;
                              }
                                return true;
                             }),'nullable','mimes:jpeg,png,jpg'],
        ]);

        // loop through images and save to /uploads directory


        $update             = Theme::find($id);
        $update->name       = $request->theme_name;
        $oldImage           = $update->file_path;
        if ($request->file('theme_image')) {

            if (Storage::disk('theme_image')->exists($oldImage) && !empty($oldImage)) {
               Storage::disk('theme_image')->delete($oldImage);
            }
            $imageGellary    = $request->file('theme_image');
            $name        = md5(uniqid(rand(), true)).'.'.$imageGellary->getClientOriginalExtension();
            //$name = $imageGellary->getClientOriginalName();
            $file_name = explode('.', $name)[0];
            $extension = $imageGellary->getClientOriginalExtension();
            Storage::disk('theme_image')->put($name, file_get_contents($imageGellary->getRealPath()));

            $file_path = 'storage/theme_image/' . $name;
    
            $update->file_name  = $name;
            $update->file_type  = $extension;
            $update->file_path  = $file_path;
        }
        $update->save();
        return redirect()->route('themes.index')
            ->with('success','Theme updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Theme  $theme
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Theme::find($id);
        $oldImage           = $delete->file_name;
         if (Storage::disk('theme_image')->exists($oldImage) && !empty($oldImage)) {
               Storage::disk('theme_image')->delete($oldImage);
        }
        $delete->delete();
        if($delete->delete()){
            return Response(['status'=>'success','message'=>'Theme deleted successfully']);
        } else {
            return Response(['status'=>'error','message'=>'Something went wrong!']);

        }

    }
}
