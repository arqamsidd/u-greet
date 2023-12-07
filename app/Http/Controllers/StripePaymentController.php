<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use Stripe;
use App\Models\PaymentTransaction;
class StripePaymentController extends Controller
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripe()
    {
//print_r("Here");exit;

        $stripe = new \Stripe\StripeClient(
          'sk_test_51MD0ulEyfMOJijwDx3Nelp3X9AMN332OAF4Y2m0qTk05H1FBtxay7lfBNZ7eZtMoQI25xgezGsXR6mOeZtesXLs3009G79erDD'
        );
        /*$test =  $stripe->webhookEndpoints->create([
          'url' => 'http://192.168.192.155/ugreet/public/stripe',
          'enabled_events' => [
            'charge.failed',
            'charge.succeeded',
          ],
        ]);*/

        return view('stripe');


    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function stripePost(Request $request)
    {
//        print_r($request->all());exit;
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        //echo "<pre>"; print_r($request->all()); exit;
        $change  = Stripe\Charge::create ([
                "amount" => 100 * 100,
                "currency" => "usd",
                "source" => $request->stripeToken,
                "description" => "Test payment from itsolutionstuff.com."
        ]);
       //echo "<pre>"; print_r($testing); exit;
       PaymentTransaction::create([
            'user_id' => 1,
            'greet_id' => 1,
            'payment_amount' =>$change['amount'],
            'payment_status' => $change['status'],
            'transaction_id' => $change['id'],
            'invoice_id' => $change['id'],
            'description' =>$change['amount'],
            'trasaction_date' => $change['amount'],
            'payment_gateway' => $change['payment_method'],

        ]);
        Session::flash('success', 'Payment successful!');

        return back();
    }
}
