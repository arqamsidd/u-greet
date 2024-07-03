<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ErrorLogController extends Controller
{
    public function logError(Request $request)
    {
        $error = $request->input('error');
        Log::error('Client Error: ' . $error);

        return response()->json(['message' => 'Error logged successfully'], 200);
    }
}
