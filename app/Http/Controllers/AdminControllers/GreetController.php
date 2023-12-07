<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use App\Models\Greet;
use App\Http\Requests\StoreGreetRequest;
use App\Http\Requests\UpdateGreetRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use App\Repository\Admin\GreetRepository;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\GreetMedia;
class GreetController extends Controller
{
    public $greetRepo;

    /**
     * UserController constructor.
     */
    public function __construct(GreetRepository $greetRepository)
    {
        $this->greetRepo = $greetRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {      
        $user = User::find($id);
       return view('admin.occasions.index',compact('user'));
    }
     /*Ajax listing*/
    public function getOccasions(Request $request)
    {
        //echo "<pre>"; print_r($request->all()); exit;
        if (!empty($request->id)) {
            return $this->greetRepo->index($request->id);
        }
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreGreetRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreGreetRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function show(Greet $greet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function edit(Greet $greet)
    {
    //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateGreetRequest  $request
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateGreetRequest $request, Greet $greet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Greet $greet)
    {
        //
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function greetMontage($id)
    {
        $greetMedia = GreetMedia::where('greet_id',$id)->get();
        $greet = Greet::find($id);
        return view('admin.greetmedia.index',compact('greetMedia','greet'));
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Greet  $greet
     * @return \Illuminate\Http\Response
     */
    public function greetUpload($id)
    {
        //echo "<pre>"; print_r($id); exit;
        $greetall = GreetMedia::where('greet_id',$id)->get();
        $greet = Greet::find($id);
        return view('admin.greetmedia.uploads',compact('greet','greetall'));
    }
    /*Ajax listing*/
    public function greetAllUpload(Request $request)
    {
        if (!empty($request->id)) {
            return $this->greetRepo->allUpload($request->id);
        }
       
    }
}
