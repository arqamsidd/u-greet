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
                $finalVideoPath = $rootPath . $greetId . '/' . $rdname . 'final.mp4';

                exec('mkdir -p ' . $rootPath . $greetId . '&& ffmpeg -loop 1 -i ' . storage_path('app/public/theme_image/'.$greetTheme->file_name) . ' -c:v libx264 -t 5 -pix_fmt yuv420p -vf scale=2800:1900 ' . $backgroundVideoPath);

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
                        exec('echo "file transparentVideos/' . $rdname . $greetMediaName . '.mp4" >> ' . $rootPath . $greetId . '/mylist.txt');
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

                        if ($isTransition) {
							$dimension = $ffprobe -> streams($imageVideoPath)
								->videos()
								->first();

							$imageVideoWidth = $dimension -> get('width');
							$imageVideoHeight = $dimension -> get('height');
                            $transition = $greetTransition->name;

                            if ($transition == 'zoompan') {
                                $filterComplex.="scale=19200:10800,zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=in:st=0:d=1,setsar=1".$img_index.";";
								exec('mkdir -p ' . $rootPath . $greetId . '/mergedVideos && ffmpeg -i '. $backgroundVideoPath . ' -i ' . $imageVideoPath . ' -filter_complex ' . $filterComplex. ' ' . $mergedVideoPath);
                            } else if ($transition == 'fade' || $transition == 'circleopen' || $transition == 'circleclose' || $transition == 'slideleft' || $transition == 'hrslice' || $transition == 'radial' || $transition == 'dissolve' || $transition == 'rectcrop' || $transition == 'wipetl') {
								$command = 'mkdir -p ' . $rootPath . $greetId . '/mergedVideos && ffmpeg -f lavfi -i color=black@0.0:d=1 -i ' . $imageVideoPath . ' -f lavfi -i color=black@0.0:d=1 -filter_complex "[0:v]scale='.$imageVideoWidth.':'.$imageVideoHeight.',setsar=1,fps=fps=25  [color];[1:v]fps=fps=25 [video];[2:v]scale='.$imageVideoWidth.':'.$imageVideoHeight.',setsar=1,fps=fps=25 [end];[color][video]xfade=transition='.$transition.':duration=1:offset=0,format=yuva420p [begin];[begin][end]xfade=transition='.$transition.':duration=1:offset=4,format=yuva420p" ' . $mergedVideoPath;

								exec($command);
                            } else {
                                $filterComplex .= 'scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1' . $img_index . ';';
								exec('mkdir -p ' . $rootPath . $greetId . '/mergedVideos && ffmpeg -i '. $backgroundVideoPath . ' -i ' . $imageVideoPath . ' -filter_complex ' . $filterComplex. ' ' . $mergedVideoPath);
                            }

                            exec('mkdir -p ' . $rootPath . $greetId . '/transparentVideos && ffmpeg -i '. $backgroundVideoPath .' -i ' . $mergedVideoPath . ' -filter_complex "overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2:shortest=1,format=yuva420p" ' . $transparentVideoPath);
                        }
                    } else if ($greetMediaType == 'video') {
                        exec('echo "file transparentVideos/' . $rdname . $greetMediaName . '.mp4" >> ' . $rootPath . $greetId . '/mylist.txt');
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

                        $command = 'mkdir -p ' . $rootPath . $greetId . '/resizedVideos && ffmpeg -i ' . $greetMedia . ' -vf "' . $ratioSetting . 'pad=ceil(iw/2)*2:ceil(ih/2)*2" -c:v libx264 -t 5 -pix_fmt yuv420p ' . $resizedVideoPath;
                        exec($command);

                        $videoInfo = $ffprobe -> streams($resizedVideoPath)
                                        ->videos()
                                        ->first();

                        $duration = $videoInfo -> get('duration');
                        $mediaWidth = $videoInfo -> get('width');
                        $mediaHeight = $videoInfo -> get('height');

                        if ($isTransition) {
                            $command = 'mkdir -p ' . $rootPath . $greetId . '/transparentVideos && ffmpeg -f lavfi -i color=black@0.0:d=1 -i ' . $resizedVideoPath . ' -f lavfi -i color=black@0.0:d=1 -i ' . storage_path('app/public/theme_image/'.$greetTheme->file_name) . ' -filter_complex "[0:v]scale='.$mediaWidth.':'.$mediaHeight.',setsar=1,fps=fps=25 [color];[1:v]fps=fps=25 [video];[2:v]scale='.$mediaWidth.':'.$mediaHeight.',setsar=1,fps=fps=25 [end];[3:v]scale=2800:1900 [bg]; [color][video]xfade=transition='.$transition.':duration=1:offset=0,format=yuva420p [begin];[begin][end]xfade=transition='.$transition.':duration=1:offset=' . $duration - 1 . ',format=yuva420p[xfade]; [bg][xfade]overlay=(W-w)/2:(H-h)/2" ' . $transparentVideoPath;

                            exec($command);
                        }
                    }

                }

                exec('ffmpeg -f concat -safe 0 -i ' . $rootPath . $greetId . '/mylist.txt -c copy ' . $finalVideoPath, $output, $retval);

                if($retval==0) {
                    $commandStatus = 200;
                    $commandMessage = 'Video Created Successfully';
                } else {
                    $commandStatus = 500;
                    $commandMessage = 'Video Creation Failed';
                }

// $new_filter = '';
                // $offset = 0;
                // $slide_offset =0;
                // $transionOffset = 0;
                // $offset_limit=0;
                // $arrCount=count($greetMediaFiles);
                // foreach ($greetMediaFiles as $greetMediaFile) {
    
                //     // video transitions are working
                //     if ($greetMediaType == 'video') {
                        
                //         $video='';
                //         $video_index = '[vid'.$count.']';
                //         $vidMerCmd .= $c=' -i ' . $greetMedia ;
                //         //scale changed to 1080p
                //         if($isTransition && $greetTransition->name == 'zoompan'){
                //             $filterComplex .= '['.$count.']fps=24,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=00000000,setsar=1'.$video_index.';';
                //         }
                //         else{
                //             $filterComplex .= '['.$count.']fps=24,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:color=00000000,setsar=1'.$video_index.';';
                //         }
                //         $audiocheck=exec('ffprobe '.$c.' -show_streams -select_streams a -loglevel error 2>&1',$output);
                //         //$duration = $videoDuration-1;
                //         $videoDuration=floor(exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c,$output));
                        
                //         if($audiocheck==null)
                //         {
                //             $index .=$video_index;
                //         }
                //         else{
                //             $index .= $video_index;
                //         }
                //         //scale changed to 1080p
                //         if($isTransition && $greetTransition->name == 'fade'){
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                //                 }elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                //                 }else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $offset = $offset+$videoDuration-1;
                //         }
                //         //$greetTransition->name == 'circleopen' /video $duration =1
                //         //this is for circleopen transition /video...
                //         //scale changed to 1080p
                //         elseif ($isTransition && $greetTransition->name == 'circleopen') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                //                 }elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                //                 }else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $offset = $offset+$videoDuration-1;
                //         }
                //         // new video input get();
                //         //this is for circleclose transitions /video
                //         //duration=1
                //         //scale changed to 1080p
                //         elseif ($isTransition && $greetTransition->name == 'circleclose') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleclose:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                //                 }elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                //                 }else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $offset = $offset+$videoDuration-1;
                //         }
                //         //this is for slideleft transition/video 
                //         // video offset changed reduced floor();
                //         //video $greetTransition->name == 'slideleft'
                //         //duration=1
                //         //scale changed 1080p
                //         elseif ($isTransition && $greetTransition->name == 'slideleft') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset = $slide_offset + $videoDuration-1;
                //         }
                //         //$greetTransition->name == 'hrslice'/video
                //         //this is for distance transition /video
                //         //duration
                //         //working ok
                //         //with theme (ok)
                //         //scale changed 1080p
                //         elseif ($isTransition && $greetTransition->name == 'hrslice') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }
                //                 elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }
                //                 else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset = $slide_offset + $videoDuration-1;

                //         }
                //         //$greetTransition->name='radial' /video
                //         //this is for radial transition/ video...
                //         //duration
                //         //with theme (OK)
                //         //working fine for  video
                //         //scale changed 1080p
                //         elseif ($isTransition && $greetTransition->name == 'radial') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920:1080,format=yuv420p[v'.$count.'];';

                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }
                //                 elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }
                //                 else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset =$slide_offset + $videoDuration-1;
                //             // dd($slide_offset);
                //         }
                //         //$greetTransition->name = 'dissolve'/video
                //         //this is for dissolve transition/ video transitions  dissolve
                //         //duration
                //         //testing (ok)
                //         //working fine for video
                //         //with theme (ok)
                //         //scale changed 1080p
                //         elseif ($isTransition && $greetTransition->name == 'dissolve') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }
                //                 elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }
                //                 else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset = $slide_offset + $videoDuration-1;

                //         }
                //         // $greetTransition->name = 'rectcrop'/video...rectcrop
                //         //this is for rectcrop transition/ video transitions
                //         //duration
                //         //working fine for video
                //         //working with theme(ok)
                //         //scale changed to 1080p
                //         elseif ($isTransition && $greetTransition->name == 'rectcrop') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }
                //                 elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }
                //                 else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset = $slide_offset + $videoDuration-1;

                //         }
                //         // $greetTransition->name == 'zoompan'/video  t--
                //         //wipetl /video transitions /duration=1
                //         //scale changed to 1080p
                //         elseif ($isTransition && $greetTransition->name == 'wipetl') {
                //             $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                //             if ($count > 0) {
                //                 $transionOffset = $count-1;
                //                 if ($transionOffset < 1 && $arrCount==$count+1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //                 elseif ($transionOffset < 1){
                //                     $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                //                 }
                //                 elseif ($transionOffset < $greetMediaCount-2) {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                //                 }
                //                 else {
                //                     $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                //                 }
                //             }
                //             $slide_offset = $slide_offset + $videoDuration-1;
                //         }
                //         ///Transition zoompan duration=1 
                //         //$isTransition && $greetTransition->name=='zoompan'
                //         //scale changed to 1080p
                //         elseif ($isTransition && $greetTransition->name == 'zoompan') {

                //             $duration=2;
                //             $videoDuration=exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c,$output);
                //             if($count>0){
                //                 $new_filter.="[vid".$count."]"."zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=in:st=0:d=".($duration-1).$video_index.";";
                //             }
                //             else{
                //                 $new_filter.="[vid".$count."]"."zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=out:st=".($videoDuration-$duration).":d=".($duration-1).$video_index.";";
                //             }
                //         }
                //         $count++;
                //     }
                // }
                // $filterComplex .= $filterComplex_res.$new_filter;
                
                // $finalvideopath = storage_path('app/public/greetMedia/final/'.$greetId.'/');
                // // $finalvideopaadadafianadnl final final.=$new th =  $finalvideopath.'/'; $finalvideopath=finalvideopath.'/'
                // $dbfinalvideopath = 'storage/app/public/greetMedia/final/' . $greetId . '/';
                
                // if(!File::isDirectory($finalvideopath)){
                //     File::makeDirectory($finalvideopath, 0775, true, true);
                // }
                // foreach(glob("{$finalvideopath}/*") as $file)
                // {
                //     if(is_dir($file)) { 
                //         recursiveRemoveDirectory($file);
                //     } else {
                //         unlink($file);
                //     }
                // }
                // $rdname = date('YmdHis');
                // if ($isTheme || $isThemeMusic) {
                //     $greetmediaType = 'videoMerge';
                // } else {
                //     $greetmediaType = 'final';
                // }
                // $greetMediaMergeName = $rdname . $greetmediaType . '.mp4';
    
                // if ($isTransition && $greetTransition->name == 'fade') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // else if ($isTransition && $greetTransition->name == 'circleopen') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // else if ($isTransition && $greetTransition->name == 'circleclose') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'zoompan') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . $index . 'concat=n=' . $greetMediaCount . ':v=1:a=0" -pix_fmt yuv420p -vcodec libx264  -an ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'slideleft') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'hrslice') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 25 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'radial') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'dissolve') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // //additional//
                // //+1
                // elseif ($isTransition && $greetTransition->name == 'rectcrop') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // elseif ($isTransition && $greetTransition->name == 'wipetl') {
                //     $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                // }
                // //////////////
                // else {
                //     $command= $vidMerCmd . ' ' . $filterComplex . $index . 'concat=n=' . $greetMediaCount . ':v=1:a=0" -pix_fmt yuv420p -vcodec libx264 -an ' . $finalvideopath . $greetMediaMergeName;
                // }
                // // exit;
                // // dd($command);
                // echo $command;
                // // return "ajay";
                // exec($command,$output, $retval);
                
                // if($retval==0) {
                //     $commandStatus = 200;
                //     $commandMessage = 'Video Created Successfully';
                // } else {
                //     $commandStatus = 500;
                //     $commandMessage = 'Video Creation Failed';
                // }
    
                // //Find duration time 

                // $timecmd = exec('ffmpeg -i '.$finalvideopath.$greetMediaMergeName.' 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
                // $time=Carbon::create($timecmd);
                // $time_sec=$time->minute*60 + $time->second;
                // $time_min=$timecmd;
    
                // //store video in database /data
    
                // $greetMediaObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'final')->first();
                // $greetMediaPreObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'preview')->first();
    
                // $greetMediaValue = [
                //     'greet_id' => $greetId,
                //     'media_type' => 'video',
                //     'media_path' => $dbfinalvideopath.$greetMediaMergeName,
                //     'media_name' => $greetMediaMergeName,
                //     'greet_media_type' => $greetmediaType,
                //     'user_id' => $greetObj->user_id,
                //     'media_sec' => $time_sec,
                //     'media_min' => $time_min,
                // ];
                
                // // video audio merge
                // // start
                
                // if($isThemeMusic && $commandStatus == 200)
                // {
                //     $musicCmd ="";
                //     $greetMusicPath = storage_path('app/public/music_audio/'.$greetThemeMusic->file_name);
    
                //     $musicCmd .= ' -stream_loop -1 -i ' . $greetMusicPath;
                //     if ($isTheme) {
                //         $greetmediaType = 'videoAudioMerge';
                //     } else {
                //         $greetmediaType = 'final';
                //     }
    
                //     $greetMediaThemeName = $rdname . $greetmediaType . '.mp4';           //convert to mp4
                    
                //     $musicCmd = 'ffmpeg -i '.$finalvideopath.$greetMediaMergeName.$musicCmd.' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest '.$finalvideopath.$greetMediaThemeName;     //Theme merge
    
                //     // print_r($musicCmd);exit;
    
                //     exec($musicCmd,$output, $retval);
    
                //     if($retval==0) {
                //         $commandStatus = 200;
                //         $commandMessage = 'Video Created Successfully';
                //     } else {
                //         $commandStatus = 500;
                //         $commandMessage = 'Video Creation Failed';
                //     }
    
                //     $greetMediaValue = [
                //         'greet_id' => $greetId,
                //         'media_type' => 'video',
                //         'media_path' => $dbfinalvideopath.$greetMediaThemeName,
                //         'media_name' => $greetMediaThemeName,
                //         'greet_media_type' => $greetmediaType,
                //         'user_id' => $greetObj->user_id,
                //         'media_sec' => $time_sec,
                //         'media_min' => $time_min,
                //     ];
                // }
                // // end
                
                // // backgroung image set on video.
                // //start 
                // //image size= ++t
                // if($isTheme && $commandStatus == 200)
                // {
                //     $backimgcmd='ffmpeg ';
                //     $greetThemePath =  storage_path('app/public/theme_image/'.$greetTheme->file_name);
    
                //     if ($isThemeMusic) {
                //         $themeVideoName = $greetMediaThemeName;
                //     } else {
                //         $themeVideoName = $greetMediaMergeName;
                //     }
    
                //     $command = 'ffmpeg -loop 1 -i ' . $greetThemePath . ' -i ' . $finalvideopath . $themeVideoName . ' -filter_complex "[0:v]scale=2800:1900[bg]; [1:v]scale=1920:-1[fg]; [bg][fg]overlay=(W-w)/2:(H-h)/2:shortest=1" -pix_fmt yuv420p ' . $finalvideopath . $rdname . 'final.mp4';

                //     exec($command, $output, $retval);
                        
                //     if($retval==0) {
                //         $commandStatus = 200;
                //         $commandMessage = 'Video Created Successfully';
                //     } else {
                //         $commandStatus = 500;
                //         $commandMessage = 'Video Creation Failed';
                //     }
                //     $greetMediaValue = [
                //         'greet_id' => $greetId,
                //         'media_type' => 'video',
                //         'media_path' => $dbfinalvideopath.$rdname.'final.mp4',
                //         'media_name' => $rdname.'final.mp4',
                //         'greet_media_type' => 'final',
                //         'user_id' => $greetObj->user_id,
                //         'media_sec' => $time_sec,
                //         'media_min' => $time_min,
                //     ];
                // }
                // // end

                // $img=public_path('/images/water_mark.png');

                // exec('ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -i '.$img.' -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[logo]scale=200:200[b];[b][0]scale2ref=oh*mdar:ih[b][video];[video][b]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" '.$finalvideopath.$rdname.'preview.mp4',$output, $retval);
                
                // // 26-6-2023 ============== video trim if duration min>3
                // // this part is for sweet greet /video trim
                // $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                
                // $duration = $time_sec / 60;
                // if ($greet->occasion_name == 'Sweet Greet' && $duration > 3) {
                //     $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:03:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                    
                //     exec($trim_cmd,$output,$retval);
                //     $greetMediaValue = [
                //         'greet_id' => $greetId,
                //         'media_type' => 'video',
                //         'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
                //         'media_name' => $rdname.'trimed_final.mp4',
                //         'greet_media_type' => 'final',
                //         'user_id' => $greetObj->user_id,
                //         'media_sec' => $time_sec=180,
                //         'media_min' => $time_min=3,
                //     ];
                // }
                // if ($duration > 45) {
                //     $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:45:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                    
                //     exec($trim_cmd,$output,$retval);

                //     $greetMediaValue = [
                //         'greet_id' => $greetId,
                //         'media_type' => 'video',
                //         'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
                //         'media_name' => $rdname.'trimed_final.mp4',
                //         'greet_media_type' => 'final',
                //         'user_id' => $greetObj->user_id,
                //         'media_sec' => $time_sec=180,
                //         'media_min' => $time_min=3,
                //     ];
                // }

                // //     /*User mail functionality*/
                //     if($retval==0) {
                //         $commandStatus = 200;
                //         $commandMessage = 'Video Created Successfully';
                //         $data['message']=$commandMessage;
                //         $data['link']=$dbfinalvideopath.$rdname.'preview.mp4';
                //         $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                //         $duration = $time_sec / 60;
                //         if ($greet->occasion_name == 'Sweet Greet' && $duration <= 3) {
                //             $data['link']=$dbfinalvideopath.$rdname.'trimed_final.mp4';
                //         }
                //         // Mail::to($userEmail)->send(new SucessMail($data));
                //     } else {
                //         $commandStatus = 500;
                //         $commandMessage = 'Video Creation Failed';
                //     //    Mail::to($userEmail)->send(new SucessMail($commandMessage));
                //     }
                //     /*End*/
                //     //$greetPreMediaValue 
                //     $greetPreMediaValue = [
                //         'greet_id' => $greetId,
                //         'media_type' => 'video',
                //         'media_path' => $dbfinalvideopath.$rdname.'preview.mp4',
                //         'media_name' => $rdname.'preview.mp4',
                //         'greet_media_type' => 'preview',
                //         'user_id' => $greetObj->user_id,
                //         'media_sec' => $time_sec,
                //         'media_min' => $time_min,
                //     ];
                // // }
                // //// $greetMediaPreObj 
                // if (isset($greetMediaPreObj)) {
                //     $greetMediaPreObj->update($greetPreMediaValue);
                // } else {
                //     $greetMediaCreateObj = GreetMedia::create($greetPreMediaValue);
                // }
                // if (isset($greetMediaObj)) {
                //     $greetMediaObj->update($greetMediaValue);
                // } else {
                //     $greetMediaCreateObj = GreetMedia::create($greetMediaValue);
                // }
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
                // $greetMediaRequest = $requestedGreet->update($mediaRequestInsertArr);
            }
            return 0;
        }
    }
}