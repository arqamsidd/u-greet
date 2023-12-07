<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repository\ThemeRepository;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    public $themeRepo;
    /**
     * ThemeController constructor.
     */
    public function __construct(ThemeRepository $themeRepository)
    {
        $this->themeRepo = $themeRepository;
    }

    public function getGreetTheme($id, Request $request) {
        $greetTheme = $this->themeRepo->getGreetTheme($id, $request);

        if (isset($greetTheme)) {
            return response()->json([
                'status' => 200,
                'message' => 'Greet Theme  load successfully',
                'data' => $greetTheme
            ], 200);
        } else {
            return response()->json([
                'status' => 204,
                'message' => 'Gree Theme not found',
                'greet' => null
            ], 204);
        }
    }

    public function storeGreetTheme(Request $request)
    {
        $greetTheme = $this->themeRepo->storeGreetTheme($request);

        if (isset($greetTheme)) {
            return response()->json([
                'status' => 200,
                'message' => 'Greet Theme Selected successfully',
            ], 200);
        } else {
            if (isset($greetTheme)) {
                return response()->json([
                    'status' => 204,
                    'message' => 'Greet Theme not updated',
                ], 204);
            }
        }
    }

    public function getThemes(Request $request) {
        $themes = $this->themeRepo->getThemes();

        if (isset($themes) && sizeof($themes) > 0) {
            return response()->json([
                'status' => 200,
                'message' => 'Theme Loaded successfully',
                'data' => $themes
            ], 200);
        } else {
            if (isset($greetTheme)) {
                return response()->json([
                    'status' => 204,
                    'message' => 'Theme not found',
                ], 204);
            }
        }
    }


}
