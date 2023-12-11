<?php

namespace App\Listeners;

use App\Events\CreateVideo;
use App\Models\Greet;
use App\Models\GreetMedia;
use App\Repository\GreetRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use File;
use Carbon\Carbon;

class CreateVideoListener
{
    public $greetRepo;
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->greetRepo = $greetRepository;
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\CreateVideo  $event
     * @return void
     */
    public function handle(CreateVideo $event)
    {
        $greetId = $event->greetId;
        $greetObj = Greet::find($greetId);
        $isTheme = false;
        $isThemeMusic = false;

        $greetMediaFiles = GreetMedia::where('greet_id', $greetId)->where('greet_media_type','uploads')->orderBy('order')->get();
        $greetTheme = $greetObj->greetTheme;
        $greetThemeMusic = $greetObj->greetMusic;

        if (isset($greetTheme)) {
            $isTheme = true;
        }

        if (isset($greetThemeMusic)) {
            $isThemeMusic = true;
        }

        $cmd = 'ffmpeg';
        $filterComplex = '-filter_complex "';
        $i = 0;
        $img_index = '';
        $index = '';
        $index_number = '';

        $n = sizeof($greetMediaFiles);

        if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) {
            foreach ($greetMediaFiles as $greetMediaFile) {
                $allex = array('jpeg','png','jpg');
                $extension = pathinfo($greetMediaFile->media_path, PATHINFO_EXTENSION);
                $greetMediaType = $greetMediaFile->media_type;

                $greetMedia = asset($greetMediaFile->media_path);
                // image
                if($greetMediaType == 'image')
                {
                    $cmd .= ' -loop 1 -framerate 24 -t 10 -i ' . $greetMedia;
                    $img_index = '[img'.$i.']';
                    $filterComplex .= '['.$i.']scale=432:432,setsar=1' . $img_index . ';';
                    $index .= $img_index . '[' . $n . ']';
                    $i++;
                }

                // video
                if ($greetMediaType == 'video') {
                    $video='';
                    $video_index = '[vid'.$i.']';
                    $cmd .= $c=' -i ' . $greetMedia;
                    $filterComplex .= '['.$i.']scale=432:432,setsar=1'.$video_index.';';
                    $audiocheck=exec('ffprobe '.$c.' -show_streams -select_streams a -loglevel error 2>&1',$output);
                    if($audiocheck==null)
                    {
                        $index .=$video_index.'['.$n.']';
                    }
                    else{
                        $index .= $video_index.'['.$i.']';
                    }
                    $i++;
                }
            }
        }
        $cmd .=' -f lavfi -t 1 -i anullsrc ';
        // $finalvideopath = storage_path('app/public/greetMedia/final/' . $greetId . '/');
        $finalvideopath = 'storage/app/public/greetMedia/final/' . $greetId . '/';

        if(!File::isDirectory($finalvideopath)){
            File::makeDirectory($finalvideopath, 0775, true, true);
        }

        $rdname = date('YmdHis');
        if ($isTheme || $isThemeMusic) {
            $greetmediaType = 'videoMerge';
        } else {
            $greetmediaType = 'final';
        }
        $greetMediaMergeName = $rdname . $greetmediaType . '.mp4';

        $command= $cmd . ' ' . $filterComplex . $index . 'concat=n=' . $n . ':v=1:a=1" ' . $finalvideopath . $greetMediaMergeName;
// print_r($command);exit;
        exec($command,$output, $retval);

        //Find duration time
        $timecmd = exec('ffmpeg -i '.$finalvideopath.$greetMediaMergeName.' 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
        $time=Carbon::create($timecmd);
        $time_sec=$time->minute*60 + $time->second;
        $time_min=$timecmd;

        //store video in database

        $greetMediaObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'final')->first();

        $greetMediaValue = [
            'greet_id' => $greetId,
            'media_type' => 'video',
            'media_path' => $finalvideopath.$greetMediaMergeName,
            'media_name' => $greetMediaMergeName,
            'greet_media_type' => $greetmediaType,
            'user_id' => $greetObj->user_id,
            'media_sec' => $time_sec,
            'media_min' => $time_min,
        ];

        if($isThemeMusic)
        {
            $musicCmd ="";
            $greetMusicPath = $greetThemeMusic->file_path;

            $musicCmd .= ' -stream_loop -1 -i ' . $greetMusicPath;
            if ($isTheme) {
                $greetMediaType = 'videoAudioMerge';
            } else {
                $greetmediaType = 'final';
            }

            $greetMediaThemeName = $rdname . $greetMediaType . '.mp4';

            $musicCmd = 'ffmpeg -i '.$finalvideopath.$greetMediaMergeName.$musicCmd.' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest '.$finalvideopath.$greetMediaThemeName;

            // print_r($musicCmd);exit;

            exec($musicCmd,$output, $retval);



            $greetMediaValue = [
                'greet_id' => $greetId,
                'media_type' => 'video',
                'media_path' => $finalvideopath.$greetMediaThemeName,
                'media_name' => $greetMediaThemeName,
                'greet_media_type' => $greetmediaType,
                'user_id' => $greetObj->user_id,
                'media_sec' => $time_sec,
                'media_min' => $time_min,
            ];
        }
        if($isTheme)
        {
            $backimgcmd='ffmpeg ';
            $greetThemePath = $greetTheme->file_path;

            if ($isThemeMusic) {
                $themeVideoName = $greetMediaThemeName;
            } else {
                $themeVideoName = $greetMediaMergeName;
            }

            $backimgcmd .= ' -loop 1 -i ' . $greetThemePath;

            $backimgfilter=' -filter_complex "[1:v]scale=1900:1280[fg];[0]scale=2800:1900[fg0];[fg0][fg]overlay=(W-w)/2:(H-h)/2:shortest=1"' ;

            echo $command2=$backimgcmd.' -i '.$finalvideopath.$themeVideoName.$backimgfilter.' '.$finalvideopath.$rdname.'final.mp4';
            // exit;
            exec($command2,$output, $retval);

            $greetMediaValue = [
                'greet_id' => $greetId,
                'media_type' => 'video',
                'media_path' => $finalvideopath.$rdname.'final.mp4',
                'media_name' => $rdname.'final.mp4',
                'greet_media_type' => 'final',
                'user_id' => $greetObj->user_id,
                'media_sec' => $time_sec,
                'media_min' => $time_min,
            ];

            $greetMediaValue = [
                'greet_id' => $greetId,
                'media_type' => 'video',
                'media_path' => $finalvideopath.$rdname.'final.mp4',
                'media_name' => $rdname.'final.mp4',
                'greet_media_type' => 'final',
                'user_id' => $greetObj->user_id,
                'media_sec' => $time_sec,
                'media_min' => $time_min,
            ];
        }

        if (isset($greetMediaObj)) {
            $greetMediaObj->update($greetMediaValue);
        } else {
            $greetMediaCreateObj = GreetMedia::create($greetMediaValue);
        }

    }
}
