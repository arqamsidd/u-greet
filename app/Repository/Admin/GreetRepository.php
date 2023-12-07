<?php
namespace App\Repository\Admin;
use App\Models\Greet;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Storage;
use App\Models\GreetMedia;

class GreetRepository
{
    public function index($id) {

        $greetData = Greet::where('user_id',$id)->orderBy('id','DESC')->get();
       
       
        return Datatables::of($greetData)
            //->addIndexColumn()
                ->editColumn('user_id', function(Greet $greetData){
                    return $greetData->user->first_name;
                })
                ->editColumn('celebrants', function(Greet $greetData){
                    $greetName = $greetData->greetCelebrant;
                    $celebrants = [];
                    foreach($greetName as $key => $value){
                        $celebrants[] = $value['first_name']; 
                    }
                    if(count($celebrants) != 0){
                        return implode(',',$celebrants);
                    } else {
                        return '-';
                    }
                })
                ->editColumn('created_at', function(Greet $greetData){
                    return dbDate($greetData->created_at);
                })
                -> addColumn('action', function(Greet $greetData){
                $btn = '<a  href="'.route('occasions.allUploads',$greetData->id).'" class="btn btn-primary">Uploads</a>  <a  href="'.route('greetMontage',$greetData->id).'" class="btn btn-info">Montage</a> <a class="btn btn-danger" href="'.route('occasions.payment',$greetData->id).'" >Payment</a>';
                return $btn;
            })
            ->rawColumns(['celebrants','action'])
            ->make(true);
    }
    public function allUpload($id) {
        $greetUploadData = GreetMedia::where('greet_id',$id)->get();
        return Datatables::of($greetUploadData)
                ->editColumn('user_id', function(GreetMedia $greetUploadData){
                    return $greetUploadData->user->first_name;
                })
                ->editColumn('email', function(GreetMedia $greetUploadData){
                    return $greetUploadData->user->email;
                })
                ->editColumn('created_at', function(GreetMedia $greetUploadData){
                     return dbDate($greetUploadData->created_at);
                })
                ->editColumn('media', function(GreetMedia $greetUploadData){
                    $src = asset($greetUploadData->media_path);
                    return$btn = '<button type="button" class="btn btn-danger alloveriew" data-toggle="modal" data-target="#uploadView" data-id="'.$src.'" data-mimetype="'.$greetUploadData->media_type.'">View</button>';
                })
                ->rawColumns(['media'])
                ->make(true);
    }
}
