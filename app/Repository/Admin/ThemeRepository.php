<?php


namespace App\Repository\Admin;


use App\Models\Theme;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\DataTables;

class ThemeRepository
{
    public function index($request) {
        $data = Theme::orderBy('id','DESC');
        $data = $data->get();


        return Datatables::of($data)
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
            ->addColumn('file_name', function ($row) {
                return $row->file_name;
            })
            ->addColumn('file_type', function ($row) {
                return $row->file_type;
            })
            ->addColumn('file_path', function ($row) {
                return $row->file_path;
            })
            ->addColumn('theme', function ($row) {
                $url= asset($row->file_path);
                return '<img src="'.$url.'" border="0" width="100" class="img-rounded" align="center" />';
            })
            ->addColumn('action', function($row){
                $btn = "";
                /*$btn .= '<a href="'.url('admin/themes/'. $row->id ) .'" data-toggle="tooltip"
                data-original-title="Show" class="btn btn-icon btn-hover-primary btn-sm">
                <i class="fa fa-eye text-primary"></i>
                </a>';*/

                $btn .= '<a href="'.url('admin/themes/'. $row->id .'/edit').'" data-toggle="tooltip"
                data-original-title="Edit" class="btn btn-icon btn-hover-primary btn-sm edit"><i class="fa fa-edit text-primary"></i></a>';

                $btn .= '<a href="javascript:;" data-toggle="tooltip"  data-id="'.$row->id.'" data-original-title="Delete" data-href="' . url('admin/themes/'. $row->id) . '" class="btn btn-icon btn-hover-primary btn-sm ml-2 delete"><i class="fas fa-trash text-danger"></i></a>';
                return $btn;
            })
            ->rawColumns(['theme', 'action'])
            ->make(true);
    }

}
