<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Greet;
use App\Models\GreetMedia;
use App\Models\PaymentTransaction;
use App\Models\GenerateVideoRequest;
use Illuminate\Http\Request;
use App\Mail\SucessMail;
use Mail;
use Session;
use Stripe;

class StripePaymentController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripe(Request $request)
    {

        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $chargeArr = [
            "amount" => $request->amount * 100,
            "currency" => "cad",
            //    "source" => $token->id,
            "source" => $request->stripeToken,
        ];

        $chargeObj = Stripe\Charge::create($chargeArr);
        $paymentArr = [
            'user_id' => $request->userId,
            'greet_id' => $request->greetId,
            'payment_amount' => ($chargeObj->amount / 100),
            'payment_status' => $chargeObj->status,
            'transaction_id' => $chargeObj->id,
            'description' => $chargeObj->description,
            'trasaction_date' => date('Y-m-d', $chargeObj->created),
            'payment_gateway' => $chargeObj->payment_method,

        ];
        /*Plan Wise condtion check */
        if (!empty($request->plan)) {
            if ($request->plan == 'plan3') {
                $plan = 3;
            } else if ($request->plan == 'plan2') {
                $plan = 2;
            } else {
                $plan = 1;
            }
            $planupdate = Greet::find($request->greetId);
            $planupdate->greet_plan = $plan;
            $planupdate->save();
        }
        /**/
        /*$planchange = Greet::where('user_id', $request->userId)->where('greet_plan',3)->get()->count();
        echo "<pre>";print_r($planchange);exit;
        if($planchange >= 3){
            foreach($planchange as $key=> $value){
                $value->greet_plan = 4;
                $value->save();
            }
            
        }*/
        /*End*/
        $dbfinalvideopath = 'storage/greetMedia/final/' . $request->greetId . '/';
        $paymentData = PaymentTransaction::where('greet_id', $request->greetId)->where('payment_status', 'succeeded')->latest()->first();

        if (isset($paymentData)) {
            $greetMediaObj = GreetMedia::where('greet_id', $request->greetId)->where('greet_media_type', 'final')->first();
            if (sizeof($greetMediaObj) > 0) {
                $data['link'] = $dbfinalvideopath . $greetMediaObj->media_name . 'final.mp4';
                $userdata = User::where('id', $request->userId)->first();
                $userEmail = $userdata->email;
                Mail::send('email.payment', $data, function ($message) use ($userEmail) {
                    $message->to($userEmail, 'Your U-Greet is Complete')->subject('Your U-Greet is Complete');
                });
                Mail::to($userEmail)->send(new SucessMail($data));
            }
        }

        //$id = $request->get('id');
        $videorequest = GenerateVideoRequest::where('greet_id', $request->greetId)->first();

        $paymentObj = PaymentTransaction::create($paymentArr);
        $videorequest->payment_status = 1;
        $videorequest->save();
        return $chargeObj;
    }
}
