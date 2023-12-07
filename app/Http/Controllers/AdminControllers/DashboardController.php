<?php

namespace App\Http\Controllers\AdminControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GreetMedia;
use App\Models\User;
use App\Repository\Admin\DashboardRepository;

class DashboardController extends Controller
{
    //
    public function __construct(DashboardRepository $dashboardRepository)
    {
        $this->dashboardRepo = $dashboardRepository;
    }

    public function index(Request $request) {
        if ($request->ajax()) {
            return $this->dashboardRepo->index($request);
        }
        
        return view('admin.dashboard.index');
    }
}
