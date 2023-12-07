<?php


namespace App\Repository\Admin;


use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Storage;

class UserRepository
{
    public function index($request) {
        $data = User::orderBy('id','DESC');
        $data = $data->get();


        return Datatables::of($data)
            ->addIndexColumn()
            ->addColumn('created_at', function ($row) {
                return displayDate($row->created_at);
            })
            ->addColumn('first_name', function ($row) {
                return $row->first_name;
            })
            ->addColumn('profile_image', function ($row) {
                
                if (Storage::disk('user_image')->exists($row->profile_image) && !empty($row->profile_image)){
                    return '<img class="img-fluid" src="'.asset('/storage/user_image/'.$row->profile_image).'" style="max-width:100px;max-height:100px" alt="User picture">';
                } else {
                    return '-';
                }
               
            })
            ->addColumn('occassions', function ($row) {
                return '<a href="'.route("occasions.alloccasions",$row->id).'" data-toggle="tooltip"
                data-original-title="Show" class="btn btn-icon btn-hover-primary btn-sm">
                <i class="fa fa-eye text-primary"></i>
                </a>';
            })
            ->addColumn('action', function($row){
                $authUserObj = Auth::user();

                $btn = "";
                $btn .= '';

                $btn .= '<a href="'.url('admin/users/'. $row->id .'/edit').'" data-toggle="tooltip"
                data-original-title="Edit" class="btn btn-icon btn-hover-primary btn-sm edit"><i class="fa fa-edit text-primary"></i></a>';

                $btn .= '<a href="javascript:;" data-toggle="tooltip"  data-id="'.$row->id.'" data-original-title="Delete" data-href="' . url('admin/users/'. $row->id) . '" class="btn btn-icon btn-hover-primary btn-sm ml-2 delete"><i class="fas fa-trash text-danger"></i></a>';
                return $btn;
            })
            ->rawColumns(['action','occassions','profile_image'])
            ->make(true);
    }
}
