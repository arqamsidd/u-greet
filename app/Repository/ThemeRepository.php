<?php


namespace App\Repository;


use App\Models\Greet;
use App\Models\Theme;

class ThemeRepository
{
    public function getGreetTheme ($id, $request) {
        $greetThemeObj = Greet::with('greetTheme')->find($id);

        return $greetThemeObj->greetTheme;
    }

    public function storeGreetTheme($request) {
        $themeId = $request->theme_id;
        $greetId = $request->greet_id;

        $greetObj = Greet::find($greetId);
        $greetObj->update(['theme_id' => $themeId]);

        return $greetObj;
    }

    public function getThemes() {
        $themes = Theme::get()->map(function($themeImg){

            $themeData = $themeImg;
            $themeData->file_url = asset('/storage/theme_image/' . $themeData->file_name);

            return $themeData;
        });
        return $themes;
    }
}
