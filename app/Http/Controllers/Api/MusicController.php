<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repository\MusicRepository;
use Illuminate\Http\Request;

class MusicController extends Controller
{

    public $musicRepo;

    /**
     * MusicController constructor.
     */
    public function __construct(MusicRepository $musicRepository)
    {
        $this->musicRepo = $musicRepository;
    }

    public function getMusics(Request $request) {
        $musics = $this->musicRepo->getMusics();

        if (isset($musics) && sizeof($musics) > 0) {
            return response()->json([
                'status' => 200,
                'message' => 'Music Music Loaded successfully',
                'data' => $musics
            ], 200);
        } else {
            if (isset($greetMusic)) {
                return response()->json([
                    'status' => 204,
                    'message' => 'Music Music not found',
                ], 204);
            }
        }
    }

    public function getGreetMusic($id, Request $request) {
        $greetMusic = $this->musicRepo->getGreetMusic($id, $request);

        if (isset($greetMusic)) {
            return response()->json([
                'status' => 200,
                'message' => 'Greet Music  load successfully',
                'data' => $greetMusic
            ], 200);
        } else {
            return response()->json([
                'status' => 204,
                'message' => 'Gree Music not found',
                'greet' => null
            ], 204);
        }
    }

    public function storeGreetMusic(Request $request)
    {
        $greetMusic = $this->musicRepo->storeGreetMusic($request);

        if (isset($greetMusic)) {
            return response()->json([
                'status' => 200,
                'message' => 'Greet Music Selected successfully',
            ], 200);
        } else {
            if (isset($greetMusic)) {
                return response()->json([
                    'status' => 204,
                    'message' => 'Greet Music not updated',
                ], 204);
            }
        }
    }
}
