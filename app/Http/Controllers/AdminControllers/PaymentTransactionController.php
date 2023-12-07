<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use App\Models\PaymentTransaction;
use App\Http\Requests\StorePaymentTransactionRequest;
use App\Http\Requests\UpdatePaymentTransactionRequest;
use App\Repository\Admin\PaymentRepository;
use Illuminate\Http\Request;

class PaymentTransactionController extends Controller
{
    public $paymentRepo;

    /**
     * UserController constructor.
     */
    public function __construct(PaymentRepository $paymentRepository)
    {
        $this->paymentRepo = $paymentRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $greetid = $id;
        $paymentData = PaymentTransaction::where('greet_id',$id)->first();
        return view('admin.payment.index',compact('greetid','paymentData'));
    }

     /*Ajax listing*/
    public function greetAllPayment(Request $request)
    {
       
        if (!empty($request->id)) {
            return $this->paymentRepo->index($request->id);
        }
       
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function listing(Request $request)
    {
      if ($request->ajax()) {
            return $this->paymentRepo->allPayment($request);
        } 
        return view('admin.payment.allListing');
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
     * @param  \App\Http\Requests\StorePaymentTransactionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentTransactionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PaymentTransaction  $paymentTransaction
     * @return \Illuminate\Http\Response
     */
    public function show(PaymentTransaction $paymentTransaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PaymentTransaction  $paymentTransaction
     * @return \Illuminate\Http\Response
     */
    public function edit(PaymentTransaction $paymentTransaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePaymentTransactionRequest  $request
     * @param  \App\Models\PaymentTransaction  $paymentTransaction
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePaymentTransactionRequest $request, PaymentTransaction $paymentTransaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PaymentTransaction  $paymentTransaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(PaymentTransaction $paymentTransaction)
    {
        //
    }
}
