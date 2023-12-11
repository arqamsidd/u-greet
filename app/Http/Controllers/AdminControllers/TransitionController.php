<?php

namespace App\Http\Controllers\AdminControllers;

use App\Models\Transition;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TransitionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = Transition::orderBy('id', 'DESC')->get();

        if ($request->ajax()){

            return DataTables::of($data)
                       ->addIndexColumn()
                       ->addColumn('created_at', function ($row) {
                            return displayDate($row->created_at);
                        })
                        ->addColumn('id', function ($row) {
                            return $row->id;
                        })
                        ->addColumn('name', function ($row) {
                            return $row->name;
                        })
                        ->addColumn('transition_name', function ($row) {
                            return $row->transition_name;
                        })
                        ->addColumn('transition_type', function ($row) {
                            return $row->transition_type;
                        })
                        ->addColumn('transition_path', function ($row) {
                            return $row->transition_path;
                        })  
                        ->addColumn('transition', function ($row) {
                            $url= asset($row->transition_path);
                            return '<img width="150" height="100" src="'.$url.'" >';
                        })
                        ->addColumn('action', function($row){
                            $btn = "";
            
                            $btn .= '<a href="'.url('admin/transitions/'. $row->id .'/edit').'" data-toggle="tooltip"
                            data-original-title="Edit" class="btn btn-icon btn-hover-primary btn-sm edit"><i class="fa fa-edit text-primary"></i></a>';
            
                            $btn .= '<a href="javascript:;" data-toggle="tooltip"  data-id="'.$row->id.'" data-original-title="Delete" data-href="' . url('admin/transitions/'. $row->id) . '" class="btn btn-icon btn-hover-primary btn-sm ml-2 delete"><i class="fas fa-trash text-danger"></i></a>';
                            return $btn;
                        })
                        ->rawColumns(['transition', 'action'])
                        ->make(true);
        }

        return view('admin.transitions.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.transitions.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'transition_original_name' => 'required',
            'transition_file' => 'required|file',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $transition_file = $input['transition_file'];
        $transition_name = md5(uniqid(rand(), true)).'.'.$transition_file->getClientOriginalExtension();
        $transition_type = $transition_file->getClientOriginalExtension();
        Storage::disk('transitions')->put($transition_name, file_get_contents($request->file('transition_file')->getRealPath()));
        $transition_path = 'storage/transitions/' . $transition_name;

        Transition::create([
            'name' => $input['transition_original_name'],
            'transition_name' => $transition_name,
            'transition_type' => $transition_type,
            'transition_path' => $transition_path,
        ]);
        return redirect()->route('transitions.index')->with('success','Music created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transition  $transition
     * @return \Illuminate\Http\Response
     */
    public function show(Transition $transition)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transition  $transition
     * @return \Illuminate\Http\Response
     */
    public function edit(Transition $transition)
    {
        $data['transition'] = $transition;
        return view('admin.transitions.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transition  $transition
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transition $transition)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'transition_original_name' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        //updating the name of the file
        $transition->update([
            'name' => $input['transition_original_name'],
        ]);
        //checking if the file is also included for update
        if ($request->file('transition_file')) {
            if (Storage::disk('transitions')->exists($transition->transition_name) && !empty($transition->transition_name)) {
                Storage::disk('transitions')->delete($transition->transition_name);
            }
            $transition_file = $input['transition_file'];
            $transition_name = md5(uniqid(rand(), true)).'.'.$transition_file->getClientOriginalExtension();
            $transition_type = $transition_file->getClientOriginalExtension();
            Storage::disk('transitions')->put($transition_name, file_get_contents($request->file('transition_file')->getRealPath()));
            $transition_path = 'storage/transitions/' . $transition_name;

            $transition->update([
                'transition_name' => $transition_name,
                'transition_type' => $transition_type,
                'transition_path' => $transition_path,
            ]);
        }
        return redirect()->route('transitions.index')->with('success','Transition updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transition  $transition
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transition $transition)
    {
        if (!is_null($transition)) {
            if (Storage::disk('transitions')->exists($transition->transition_name) && !empty($transition->transition_name)) {
                Storage::disk('transitions')->delete($transition->transition_name);
            }

            $transition->delete();
            return Response(['status'=>'success','message'=>'Transition deleted successfully']);
        }
        return Response(['status'=>'error','message'=>'Something went wrong!']);
    }
}