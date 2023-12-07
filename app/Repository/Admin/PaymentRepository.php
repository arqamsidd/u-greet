<?php


namespace App\Repository\Admin;
use App\Models\PaymentTransaction;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\DataTables;

class PaymentRepository
{
	public function index($id) {
      $paymentData = PaymentTransaction::where('greet_id',$id)->orderBy('id','DESC')->get();
      return Datatables::of($paymentData)
            //->addIndexColumn()
                ->editColumn('user_id', function(PaymentTransaction $paymentData){
                    return $paymentData->user->first_name;
                })
                ->editColumn('montage', function(PaymentTransaction $paymentData){
                    return '<a  href="'.route('greetMontage',$paymentData->greet_id).'" class="btn btn-info">Montage</a>';
                })
                ->editColumn('created_at', function(PaymentTransaction $paymentData){
                    return dbDate($paymentData->created_at);
                })
                 ->editColumn('payment_status', function(PaymentTransaction $paymentData){
                    return '<span class="btn btn-info">'.$paymentData->payment_status.'</span>';
                })
           ->rawColumns(['montage','payment_status'])
            ->make(true);
      
     }
    /*Payment module data*/
     public function allPayment($request) {
      $paymentData = PaymentTransaction::orderBy('id','DESC')->get();
      return Datatables::of($paymentData)
            //->addIndexColumn()
                ->editColumn('user_id', function(PaymentTransaction $paymentData){
                    return $paymentData->user->first_name;
                })
                ->editColumn('montage', function(PaymentTransaction $paymentData){
                    return '<a  href="'.route('greetMontage',$paymentData->greet_id).'" class="btn btn-info">Montage</a>';
                })
                ->editColumn('created_at', function(PaymentTransaction $paymentData){
                    return dbDate($paymentData->created_at);
                })
                 ->editColumn('payment_status', function(PaymentTransaction $paymentData){
                    return '<span class="btn btn-info">'.$paymentData->payment_status.'</span>';
                })
           ->rawColumns(['montage','payment_status'])
            ->make(true);
      
     }
}