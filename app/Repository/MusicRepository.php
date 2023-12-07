<?php


namespace App\Repository;


use App\Models\Greet;
use App\Models\Music;

class MusicRepository
{
    public function getMusics() {
        $musics = Music::all()->map(function($musics){

            $musicData = $musics;
            $musicData->file_url = asset('/storage/music_audio/' . $musicData->file_name);

            return $musicData;
        });

        return $musics;
    }


    public function storeGreetMusic($request) {
        $musicId = $request->music_id;
        $greetId = $request->greet_id;

        $greetObj = Greet::find($greetId);
        $greetObj->update(['music_id' => $musicId]);

        return $greetObj;
    }

    public function getGreetMusic($id, $request) {
        $greetMusicObj = Greet::with('greetMusic')->find($id);

        return $greetMusicObj->greetMusic;
    }
}
