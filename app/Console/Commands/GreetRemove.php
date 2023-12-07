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


class GreetRemove extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'greet:remove';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Greet Delete in after 6 month';

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
        $sixmonthdate  =  Carbon::now()->subMonths(6);
        //echo $sixmonthdate;
        $deleteGreet = Greet::where('created_at', '<=', $sixmonthdate)->delete();
        return 0;
    }
}