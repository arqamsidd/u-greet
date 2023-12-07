<?php

namespace App\Http\Controllers\Api;

use App\Models\Transition;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Greet;

class TransitionController extends Controller
{
    public function getTransitions()
    {
        try {
            $data['transitions'] = Transition::get();
            return response()->json(['success' => true, 'message' => 'transitions fetched successfully', 'data' => $data], 200);

        } catch (\Throwable $th) {
            return response([
                'error' => 'something went wrong'
            ], 500);
        }
    }

    public function storeGreetTransitions(Request $request)
    {
        try {
            $input = $request->input();
            $greet = Greet::find($input['greet_id']);
            $greet->update(['transition_id' => $input['transition_id']]);

            return response()->json([
                                    'status' => 200,
                                    'message' => 'Greet Transitions loaded successfully',
                                    'data' => $greet
                                ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 204,
                'message' => 'Greet Transition not found',
                'greet' => null
            ], 204);
        }
    }
}
