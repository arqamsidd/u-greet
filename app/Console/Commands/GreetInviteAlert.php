<?php

namespace App\Console\Commands;

use App\Models\GenerateVideoRequest;
use App\Models\Greet;
use App\Models\GreetMedia;
use App\Models\User;
use Illuminate\Console\Command;
use App\Mail\SucessMail;
use File;
use Mail;
use Carbon\Carbon;


class GreetInviteAlert extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'greet:InviteAlert';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Greet Invite Alert Reminder Mail';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $user = User::whereNotNull('greet_id')->get();
        foreach ($user as $key => $value) {
           $todaydate = Date('Y-m-d');
            $previousDate = Date('Y-m-d', strtotime('+3 days'));
            $greetObj = Greet::where('id',$value->greet_id)->whereBetween('occasion_date',[$todaydate,$previousDate])->first();
            if(!empty($greetObj)){
                $latest = GreetMedia::where('greet_id', $value->greet_id)->where('user_id',$value->Id)->get();
                $datasend['occasion_date'] = $greetObj->occasion_date;
                $datasend['name'] = $value->first_name .' '. $value->last_name;
                $datasend['occasion_name'] = $greetObj->occasion_name;
                Mail::send('email.GreetInviteAlert', $datasend,function ($message) use ($value) {
                    $message->to($value->email, 'You Have Been Invited to U-Greet')->subject('You Have Been Invited to U-Greet');
                });
            }
        }
        return 0;
    }
}