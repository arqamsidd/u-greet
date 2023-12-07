<?php
namespace App\Repository\Admin;
use App\Models\Greet;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\Storage;
use App\Models\GreetMedia;

class DashboardRepository
{
    public function index() {

        $greetData = Greet::get();

        return Datatables::of($greetData)
            ->addIndexColumn()
            ->editColumn('user_id', function(Greet $greetData){
                if(!empty($greetData->user)){
                    return $greetData->user->first_name;
                }
                return '';
            })
            ->editColumn('email', function(Greet $greetData){
                if(!empty($greetData->user)){
                    return $greetData->user->email;
                }
                return '';
                
            })
            ->editColumn('greet_media', function(Greet $greetData){
                return $greetData->occasion_name;
            })
            ->editColumn('payment', function(Greet $greetData){
                foreach ($greetData->paymentTransaction as $key => $value) {
                    return $value->payment_amount;
                }
            })
            ->rawColumns(['celebrants','action'])
            ->make(true);
    }
    
}
