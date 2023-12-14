<?php

namespace App\Console\Commands;

use App\Models\GenerateVideoRequest;
use App\Models\Greet;
use App\Models\GreetMedia;
use App\Models\User;
use Illuminate\Console\Command;
use App\Mail\SucessMail;
use FFMpeg\FFMpeg;
use FFMpeg\FFProbe;
use File;
use Mail;
use Carbon\Carbon;


class GenerateRequestedVideo extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'video:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Video from requested greet';

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
        $requestedGreet = GenerateVideoRequest::where('status', 0)->first();
        
        if(!empty($requestedGreet)) {
            $greetId = $requestedGreet->greet_id;
            $userId = $requestedGreet->user_id;
            // Get User data
            $userdata=User::where('id',$userId)->first();
            $userEmail=$userdata->email;
          
            $greetObj = Greet::find($greetId);
            $isTheme = false;
            $isThemeMusic = false;
            $isTransition = false;
            $commandStatus = '';
            $commandMessage = '';
    
            $greetMediaFiles = GreetMedia::where('greet_id', $greetId)->where('greet_media_type','uploads')->orderBy('order')->get();
            $greetThemeMusic = $greetObj->greetMusic;
            $greetTheme = $greetObj->greetTheme;
            $greetTransition = $greetObj->greetTransition;
            
            $greetImage = array();
            if (isset($greetTheme)) {
                $isTheme = true;
            }
    
            if (isset($greetThemeMusic)) {
                $isThemeMusic = true;
            }

            if (isset($greetTransition) && !empty($greetTransition)) {
                $isTransition = true;
            }
    
            $vidMerCmd = 'ffmpeg';
            $filterComplex = '';
            $count = 0;
            $greetMediaCount = sizeof($greetMediaFiles);
            $check_media = array();
			$ffprobe = FFProbe::create();
            $ffmpeg = FFMpeg::create();
            foreach($greetMediaFiles as $key=>$greetMediaFile)
            {
                $check_media[]=$greetMediaFile->media_type;
                if($greetMediaFile->media_type=='image')
                {
                    $greetImage[]=$key;
                }
            }
            if(isset($greetImage)){
                $greetImageCount=count($greetImage);
            }
            
            $img_index = '';
            $index = '';
            $index_number = '';
            

            /////Take more time for larger image in theme
            $filterComplex_res='';
            if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) 
            {
                $rootPath = 'storage/app/public/greetMedia/final/';
                $rdname = date('YmdHis');
                $backgroundVideoPath = $rootPath . $greetId . '/' . $rdname . 'background.mp4';
                $imageVideofinalPath = $rootPath . $greetId . '/' . $rdname . 'imageVideofinal.mp4';
                $videofinalPath = $rootPath . $greetId . '/' . $rdname . 'videofinal.mp4';
                $finalVideoPath = $rootPath . $greetId . '/' . $rdname . 'final.mp4';
                $previewVideoPath = $rootPath . $greetId . '/' . $rdname . 'preview.mp4';
                $trimmedFinalVideoPath = $rootPath . $greetId . '/' . $rdname . 'trimmed_final.mp4';
                $audioFile = 'storage/app/public/music_audio/';

                exec('mkdir -p ' . $rootPath . $greetId);

                if ($isTheme) {
                    exec('ffmpeg -loop 1 -i ' . storage_path('app/public/theme_image/'.$greetTheme->file_name) . ' -c:v libx264 -t 5 -pix_fmt yuv420p -vf scale=2400:1600,setsar=1 ' . $backgroundVideoPath);
                }

				$new_filter = '';
                $offset = 0;
                $slide_offset =0;
                $transionOffset = 0;
                $arrCount=count($greetMediaFiles);

                foreach ($greetMediaFiles as $greetMediaFile) {
                    $greetMediaType = $greetMediaFile->media_type;
                    $greetMediaName = $greetMediaFile->media_name;
                    $greetMedia = storage_path('app/public/greetMedia/uploads/'.$greetId.'/'.$greetMediaName);
                    $imageVideoPath = $rootPath . $greetId . '/' . 'imageVideos/' . $rdname . $greetMediaName . '.mp4';
                    $resizedVideoPath = $rootPath . $greetId . '/' . 'resizedVideos/' . $rdname . $greetMediaName . '.mp4';
                    $mergedVideoPath = $rootPath . $greetId . '/' . 'mergedVideos/' . $rdname . $greetMediaName . '.mp4';
					$transparentVideoPath = $rootPath . $greetId . '/' . 'transparentVideos/' . $rdname . $greetMediaName . '.mp4';

                    if($greetMediaType == 'image') {
                        exec('echo "file transparentVideos/' . $rdname . $greetMediaName . '.mp4" >> ' . $rootPath . $greetId . '/imageVideolist.txt');
                        // Get the image size
                        list($mediaWidth, $mediaHeight) = getimagesize($greetMedia);
                        $ratioImage = $mediaWidth / $mediaHeight;
                        $ratioSetting = '';
                        if ($mediaWidth > 1920) {
                            if ($mediaHeight > 1080 && $ratioImage > 1920 / 1080) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        } else if ($mediaHeight > 1080)  {
                            if ($mediaWidth > 1920 && $ratioImage > 1920 / 1080) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        } else if ($mediaWidth < 1920 && $mediaHeight < 1080) {
                            if ($mediaWidth > $mediaHeight) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        }
                        $command = 'mkdir -p ' . $rootPath . $greetId . '/imageVideos && ffmpeg -loop 1 -i ' . $greetMedia . ' -vf "' . $ratioSetting . 'pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -t 5 -pix_fmt yuv420p ' . $imageVideoPath;
                        exec($command);

                        $dimension = $ffprobe -> streams($imageVideoPath)
                            ->videos()
                            ->first();

                        $imageVideoWidth = $dimension -> get('width');
                        $imageVideoHeight = $dimension -> get('height');
                        $transition = 'none';
                        if ($isTransition) {
                            $transition = $greetTransition->name;
                        }
                        exec('mkdir -p ' . $rootPath . $greetId . '/mergedVideos');

                        if ($transition == 'zoompan') {
                            $filterComplex = "scale=19200:10800,zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=in:st=0:d=1,setsar=1".$img_index.";";
                            exec('ffmpeg -i '. $backgroundVideoPath . ' -i ' . $imageVideoPath . ' -filter_complex ' . $filterComplex. ' ' . $mergedVideoPath);
                        } else if ($transition == 'fade' || $transition == 'circleopen' || $transition == 'circleclose' || $transition == 'slideleft' || $transition == 'hrslice' || $transition == 'radial' || $transition == 'dissolve' || $transition == 'rectcrop' || $transition == 'wipetl') {
                            $command = 'ffmpeg -f lavfi -i color=black@0.0:d=1 -i ' . $imageVideoPath . ' -f lavfi -i color=black@0.0:d=1 -filter_complex "[0:v]scale='.$imageVideoWidth.':'.$imageVideoHeight.',setsar=1,fps=fps=25  [color];[1:v]fps=fps=25 [video];[2:v]scale='.$imageVideoWidth.':'.$imageVideoHeight.',setsar=1,fps=fps=25 [end];[color][video]xfade=transition='.$transition.':duration=1:offset=0,format=yuva420p [begin];[begin][end]xfade=transition='.$transition.':duration=1:offset=4,format=yuva420p" ' . $mergedVideoPath;

                            exec($command);
                        } else {
                            $filterComplex = 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1;';
                            if ($isTheme) {
                                exec('ffmpeg -i '. $backgroundVideoPath . ' -i ' . $imageVideoPath . ' -filter_complex scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1; ' . $mergedVideoPath);
                            } else {
                                exec('mkdir -p ' . $rootPath . $greetId . '/transparentVideos && ffmpeg -i '. $imageVideoPath .' -vf "pad=1920:1080:(1920-iw)/2:(1080-ih)/2" ' . $transparentVideoPath);
                            }
                        }
                        if ($isTheme) {
                            exec('mkdir -p ' . $rootPath . $greetId . '/transparentVideos && ffmpeg -i '. $backgroundVideoPath .' -i ' . $mergedVideoPath . ' -filter_complex "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2:shortest=1,setsar=1,format=yuva420p" ' . $transparentVideoPath);
                        }
                        
                    } else if ($greetMediaType == 'video') {
                        exec('echo "file transparentVideos/' . $rdname . $greetMediaName . '.mp4" >> ' . $rootPath . $greetId . '/videoList.txt');
                        $videoInfo = $ffprobe -> streams($greetMedia)
                                        ->videos()
                                        ->first();

                        $duration = $videoInfo -> get('duration');
                        $mediaWidth = $videoInfo -> get('width');
                        $mediaHeight = $videoInfo -> get('height');
                        $ratioImage = $mediaWidth / $mediaHeight;
                        $ratioSetting = '';
                        if ($mediaWidth > 1920) {
                            if ($mediaHeight > 1080 && $ratioImage > 1920 / 1080) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        } else if ($mediaHeight > 1080)  {
                            if ($mediaWidth > 1920 && $ratioImage > 1920 / 1080) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        } else if ($mediaWidth < 1920 && $mediaHeight < 1080) {
                            if ($mediaWidth > $mediaHeight) {
                                $ratioSetting = "scale=1920:-1,";
                            } else {
                                $ratioSetting = "scale=-1:1080,";
                            }
                        }

                        exec('mkdir -p ' . $rootPath . $greetId . '/resizedVideos');

                        if ($isTheme) {
                            exec('ffmpeg -i ' . $greetMedia . ' -vf "' . $ratioSetting . 'pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -pix_fmt yuv420p ' . $resizedVideoPath);
                        } else {
                            exec('ffmpeg -i '. $greetMedia .' -vf "scale=1920:1080:force_original_aspect_ratio=decrease,setsar=1,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" ' . $resizedVideoPath);
                        }

                        $videoInfo = $ffprobe -> streams($resizedVideoPath)
                                        ->videos()
                                        ->first();

                        $duration = $videoInfo -> get('duration');
                        $mediaWidth = $videoInfo -> get('width');
                        $mediaHeight = $videoInfo -> get('height');

                        if ($isTransition) {
                            $command = 'mkdir -p ' . $rootPath . $greetId . '/transparentVideos && ffmpeg -f lavfi -i color=black@0.0:d=1 -i ' . $resizedVideoPath . ' -f lavfi -i color=black@0.0:d=1 -i ' . storage_path('app/public/theme_image/'.$greetTheme->file_name) . ' -filter_complex "[0:v]scale='.$mediaWidth.':'.$mediaHeight.',setsar=1,fps=fps=25 [color];[1:v]fps=fps=25 [video];[2:v]scale='.$mediaWidth.':'.$mediaHeight.',setsar=1,fps=fps=25 [end];[3:v]scale=2400:1600,setsar=1 [bg]; [color][video]xfade=transition='.$transition.':duration=1:offset=0,format=yuva420p [begin];[begin][end]xfade=transition='.$transition.':duration=1:offset=' . $duration - 1 . ',format=yuva420p[xfade]; [bg][xfade]overlay=(W-w)/2:(H-h)/2" ' . $transparentVideoPath;

                            exec($command);
                        } else {
                            exec('ffmpeg -i '. $resizedVideoPath .' -vf "pad=1920:1080:(1920-iw)/2:(1080-ih)/2" ' . $transparentVideoPath);
                        }
                    }
                }

                if ($isThemeMusic) {
                    $audioFile .= $greetThemeMusic->file_name;
                    exec('ffmpeg -f concat -safe 0 -i ' . $rootPath . $greetId . '/imageVideolist.txt -stream_loop -1 -i ' . $audioFile . ' -map 0:v -map 1:a -c:v copy -c:a aac -shortest ' . $imageVideofinalPath);
                } else {
                    exec('ffmpeg -f concat -safe 0 -i ' . $rootPath . $greetId . '/imageVideolist.txt -c copy ' . $imageVideofinalPath);
                }

                exec('ffmpeg -f concat -safe 0 -i ' . $rootPath . $greetId . '/videoList.txt -c copy ' . $videofinalPath);

                $retval = '';

                if ($isThemeMusic) {
                    exec('ffmpeg -i ' . $imageVideofinalPath . ' -i ' . $videofinalPath . ' -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0]concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]" ' . $finalVideoPath, $output, $retval);
                } else {
                    exec('ffmpeg -i ' . $imageVideofinalPath . ' -i ' . $videofinalPath . ' -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0[outv]" -map "[outv]" ' . $finalVideoPath, $output, $retval);
                }

                if($retval==0) {
                    $commandStatus = 200;
                    $commandMessage = 'Video Created Successfully';
                } else {
                    $commandStatus = 500;
                    $commandMessage = 'Video Creation Failed';
                }

                $dbfinalvideopath = $rootPath . $greetId . '/';
                $greetMediaMergeName = $rdname . 'final.mp4';
    
                //Find duration time 

                $timecmd = exec('ffmpeg -i '.$finalVideoPath.' 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
                $time=Carbon::create($timecmd);
                $time_sec=$time->minute*60 + $time->second;
                $time_min=$timecmd;
    
                //store video in database /data
    
                $greetMediaObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'final')->first();
                $greetMediaPreObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'preview')->first();
    
                $greetMediaValue = [
                    'greet_id' => $greetId,
                    'media_type' => 'video',
                    'media_path' => $dbfinalvideopath.$greetMediaMergeName,
                    'media_name' => $greetMediaMergeName,
                    'greet_media_type' => 'final',
                    'user_id' => $greetObj->user_id,
                    'media_sec' => $time_sec,
                    'media_min' => $time_min,
                ];
                
                // sweet greet video trim if duration > 3 min
                $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id', $greetId)->first();
                
                $duration = $time_sec / 60;
                if ($greet->occasion_name == 'Sweet Greet' && $duration > 3) {
                    $trim_cmd='ffmpeg -i '.$finalVideoPath. ' -ss 00:00:00 -t 00:03:00 -c:v copy -c:a copy ' .$trimmedFinalVideoPath;
                    
                    exec($trim_cmd, $output, $retval);
                    $greetMediaValue = [
                        'greet_id' => $greetId,
                        'media_type' => 'video',
                        'media_path' => $dbfinalvideopath.$rdname.'trimmed_final.mp4',
                        'media_name' => $rdname.'trimmed_final.mp4',
                        'greet_media_type' => 'final',
                        'user_id' => $greetObj->user_id,
                        'media_sec' => $time_sec=180,
                        'media_min' => $time_min=3,
                    ];
                }

                if ($duration > 45) {
                    $trim_cmd='ffmpeg -i '.$finalVideoPath. ' -ss 00:00:00 -t 00:45:00 -c:v copy -c:a copy ' .$trimmedFinalVideoPath;
                    
                    exec($trim_cmd,$output,$retval);

                    $greetMediaValue = [
                        'greet_id' => $greetId,
                        'media_type' => 'video',
                        'media_path' => $dbfinalvideopath.$rdname.'trimmed_final.mp4',
                        'media_name' => $rdname.'trimmed_final.mp4',
                        'greet_media_type' => 'final',
                        'user_id' => $greetObj->user_id,
                        'media_sec' => $time_sec=180,
                        'media_min' => $time_min=3,
                    ];
                }

                $img=public_path('/images/water_mark.png');

                exec('ffmpeg -i '. $finalVideoPath .' -i '. $img .' -filter_complex "overlay=W/2-w/2:H/2-h/2" '.$previewVideoPath, $output, $retval);

                //     /*User mail functionality*/
                if($retval==0) {
                    $commandStatus = 200;
                    $commandMessage = 'Video Created Successfully';
                    $data['message']=$commandMessage;
                    $data['link']=$dbfinalvideopath.$rdname.'preview.mp4';
                    $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                    $duration = $time_sec / 60;
                    if ($greet->occasion_name == 'Sweet Greet' && $duration <= 3) {
                        $data['link']=$dbfinalvideopath.$rdname.'trimmed_final.mp4';
                    }
                    // Mail::to($userEmail)->send(new SucessMail($data));
                } else {
                    $commandStatus = 500;
                    $commandMessage = 'Video Creation Failed';
                //    Mail::to($userEmail)->send(new SucessMail($commandMessage));
                }
                /*End*/
                //$greetPreMediaValue 
                $greetPreMediaValue = [
                    'greet_id' => $greetId,
                    'media_type' => 'video',
                    'media_path' => $dbfinalvideopath.$rdname.'preview.mp4',
                    'media_name' => $rdname.'preview.mp4',
                    'greet_media_type' => 'preview',
                    'user_id' => $greetObj->user_id,
                    'media_sec' => $time_sec,
                    'media_min' => $time_min,
                ];
                //// $greetMediaPreObj 
                if (isset($greetMediaPreObj)) {
                    $greetMediaPreObj->update($greetPreMediaValue);
                } else {
                    $greetMediaCreateObj = GreetMedia::create($greetPreMediaValue);
                }
                if (isset($greetMediaObj)) {
                    $greetMediaObj->update($greetMediaValue);
                } else {
                    $greetMediaCreateObj = GreetMedia::create($greetMediaValue);
                }
                $greetMediaRequestArr = [
                    'comments' => $commandMessage,
                    'status' => isset($commandStatus) && $commandStatus == 200 ? 2 : 3
                ];
                // $greetMediaRequest = $requestedGreet->update($greetMediaRequestArr);
            } 
            else {
    
                $mediaRequestInsertArr = [
                    'comments' => 'There are no media found in greet. Please upload again or contact support!',
                    'status' => 500
                ];
                $greetMediaRequest = $requestedGreet->update($mediaRequestInsertArr);
            }
            return 0;
        }
    }
}