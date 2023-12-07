<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function index() {
        $time=Carbon::create('00:00:30.53');
        $time_sec = $time->second;
        $time_min= $time->minute;
        print_r($time);exit;
    }
}
