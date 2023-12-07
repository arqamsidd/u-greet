<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use App\Models\Music;
use App\Http\Requests\StoreMusicRequest;
use App\Http\Requests\UpdateMusicRequest;
use App\Repository\Admin\MusicRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
class MusicController extends Controller
{
    public $musicRepo;

    /**
     * UserController constructor.
     */
    public function __construct(MusicRepository $musicRepository)
    {
        $this->musicRepo = $musicRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data['breadcrumb'] = [
            'parent_title' => ['Musics'],
            'parent_url' => ['musics'],
            'page_title' => 'Musics',
            'page_items' => ['Dashboard' => '/admin/dashboard', 'Musics' => '']
        ];

        if ($request->ajax()) {
            return $this->musicRepo->index($request);
        }
        return view('admin.musics.index')->with($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['breadcrumb'] = [
            'parent_title' => ['Musics'],
            'parent_url' => [BASE_URL.'Musics'],
            'page_title' => 'Musics Create',
            'page_items' => ['Dashboard' => '/', 'Musics' => BASE_URL.'musics', 'Musics Create' => '']
        ];
        return view('admin.musics.create')->with($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMusicRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //echo "<pre>"; print_r($request->all()); exit;
        $this->validate($request, [
            'music_name' => 'required',
            'music_audio' => 'required|file|mimes:audio/mpeg,mpga,mp3,wav,aac',
        ]);

        // loop through audio and save to /uploads directory
        $audioGellary    = $request->file('music_audio');
       // $name = $audioGellary->getClientOriginalName();
        $name        = md5(uniqid(rand(), true)).'.'.$audioGellary->getClientOriginalExtension();
        $file_name = explode('.', $name)[0];
        $extension = $audioGellary->getClientOriginalExtension();
        Storage::disk('music_audio')->put($name, file_get_contents($audioGellary->getRealPath()));
        $file_path = 'storage/music_audio/' . $name;
        $musicInsert             = new Music();
        $musicInsert->name       = $request->music_name;
        $musicInsert->file_name  = $name;
        $musicInsert->file_type  = $extension;
        $musicInsert->file_path  = $file_path;
        $musicInsert->save();
        return redirect()->route('musics.index')
            ->with('success','Music created successfully');

        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Music  $music
     * @return \Illuminate\Http\Response
     */
    public function show(Music $music)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Music  $music
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['breadcrumb'] = [
            'parent_title' => ['Music'],
            'parent_url' => [BASE_URL.'musics'],
            'page_title' => 'Music Edit',
            'page_items' => ['Dashboard' => '/', 'Music' => BASE_URL.'musics', 'Music Edit' => '']
        ];
        $data['music'] = $music = Music::find($id);

        return view('admin.musics.edit')->with($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMusicRequest  $request
     * @param  \App\Models\Music  $music
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'music_name' => 'required',
            'music_audio' => [Rule::requiredIf(function () use ($id) {
                              if (!empty(Music::find($id)->file_path)) {
                                 return false;
                              }
                                return true;
                             }),'nullable','mimes:audio/mpeg,mpga,mp3,wav,aac']
        ]);

        $update             = Music::find($id);
        $update->name       = $request->music_name;
        $oldAudio           = $update->file_path;
        if ($request->file('music_audio')) {

            if (Storage::disk('music_audio')->exists($oldAudio) && !empty($oldAudio)) {
               Storage::disk('music_audio')->delete($oldAudio);
            }
            $audioGellary    = $request->file('music_audio');
            $name        = md5(uniqid(rand(), true)).'.'.$audioGellary->getClientOriginalExtension();
           // $name = $audioGellary->getClientOriginalName();
            $file_name = explode('.', $name)[0];
            $extension = $audioGellary->getClientOriginalExtension();
            Storage::disk('music_audio')->put($name, file_get_contents($audioGellary->getRealPath()));

            $file_path = 'storage/music_audio/' . $name;
            $update->file_name  = $name;
            $update->file_type  = $extension;
            $update->file_path  = $file_path;
        }
        $update->save();
        return redirect()->route('musics.index')
            ->with('success','Music updated successfully');
    }

   /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Theme  $theme
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = Music::find($id);
        $oldaudio           = $delete->file_name;
         if (Storage::disk('music_audio')->exists($oldaudio) && !empty($oldaudio)) {
               Storage::disk('music_audio')->delete($oldaudio);
        }
        $delete->delete();
        if($delete->delete()){
            return Response(['status'=>'success','message'=>'Music deleted successfully']);
        } else {
            return Response(['status'=>'error','message'=>'Something went wrong!']);

        }

    }
}
