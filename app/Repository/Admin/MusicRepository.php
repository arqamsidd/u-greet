<?php


namespace App\Repository\Admin;
use App\Models\Music;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\DataTables;

class MusicRepository
{
	public function index($request) {
        $data = Music::orderBy('id','DESC');
        $data = $data->get();

        //echo "<pre>"; print_r($data); exit;
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
            ->addColumn('music', function ($row) {
                //$musicPath = $row->file_path;
                $musicFileName = $row->file_name;
//                $url= asset('/storage/music_audio/' . $musicFileName);
                $url= asset($row->file_path);
                return '<audio controls><source src="'.$url.'" ></audio>';
            })
            ->addColumn('action', function($row){
                $btn = "";
                /*$btn .= '<a href="'.url('admin/musics/'. $row->id ) .'" data-toggle="tooltip"
                data-original-title="Show" class="btn btn-icon btn-hover-primary btn-sm">
                <i class="fa fa-eye text-primary"></i>
                </a>';*/

                $btn .= '<a href="'.url('admin/musics/'. $row->id .'/edit').'" data-toggle="tooltip"
                data-original-title="Edit" class="btn btn-icon btn-hover-primary btn-sm edit"><i class="fa fa-edit text-primary"></i></a>';

                $btn .= '<a href="javascript:;" data-toggle="tooltip"  data-id="'.$row->id.'" data-original-title="Delete" data-href="' . url('admin/musics/'. $row->id) . '" class="btn btn-icon btn-hover-primary btn-sm ml-2 delete"><i class="fas fa-trash text-danger"></i></a>';
                return $btn;
            })
            ->rawColumns(['music', 'action'])
            ->make(true);
    }

}
