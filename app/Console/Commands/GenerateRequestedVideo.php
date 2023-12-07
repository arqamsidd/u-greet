<?php

namespace App\Console\Commands;

use App\Models\GenerateVideoRequest;
use App\Models\Greet;
use App\Models\GreetMedia;
use App\Models\User;
use Illuminate\Console\Command;
use App\Mail\SucessMail;
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
            $filterComplex = '-filter_complex "';
            $count = 0;
            $greetMediaCount = sizeof($greetMediaFiles);
            $check_media = array();
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
            
//             if(in_array('image',$check_media) && in_array('video',$check_media) && isset($greetThemeMusic) && false)
//             {
//                 if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) 
//                 {
//                     foreach ($greetMediaFiles as $key=>$greetMediaFile) {
//                         $greetMediaType = $greetMediaFile->media_type;
            
//                         $greetMedia = asset($greetMediaFile->media_path);
//                         // image
//                         if($greetMediaType == 'image')
//                         {
//                             $vidMerCmd .= ' -loop 1 -framerate 24 -t 5 -i ' . $greetMedia;
//                             $img_index = '[img'.$count.']';
//                             $filterComplex .= '['.$count.']scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2,setsar=1' . $img_index . ';';
//                             $index .= $img_index . '[' . $greetImageCount . ']';
//                             $count++;
//                         }
                        
//                         if ($greetMediaType == 'video') {
//                             $video_index1[]=$key;
//                             $greetMedias[$key]=$greetMedia;
//                         }
//                     }
//                     $vidMerCmd .=' -f lavfi -t 1 -i anullsrc ';
//                     $finalvideopath = storage_path('app/public/greetMedia/final/'.$greetId.'/');
//                     // $finalvideopath =  $finalvideopath.'/';
//                     $dbfinalvideopath = 'storage/greetMedia/final/' . $greetId . '/';
//                     if(!File::isDirectory($finalvideopath)){
//                         File::makeDirectory($finalvideopath, 0775, true, true);
//                     }
//                     foreach(glob("{$finalvideopath}/*") as $file)
//                     {
//                         if(is_dir($file)) { 
//                             recursiveRemoveDirectory($file);
//                         } else {
//                             unlink($file);
//                         }
//                     }
//                     $rdname = date('YmdHis');
                    
//                     // get final and preview video data if available

//                     $greetMediaObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'final')->first();
//                     $greetMediaPreObj = GreetMedia::where('greet_id', $greetId)->where('greet_media_type', 'preview')->first();

//                     // image merge command 

//                     // start

//                     if ($isTheme || $isThemeMusic) {
//                         $greetmediaType = 'imageMerge';
//                     } else {
//                         $greetmediaType = 'final';
//                     }
//                     $greetMediaMergeName = $rdname . $greetmediaType . '.mp4';

                  
//                     $command= $vidMerCmd . ' ' . $filterComplex . $index . 'concat=n=' . $greetImageCount . ':v=1:a=1" ' . $finalvideopath . $greetMediaMergeName;
//                     exec($command,$output, $retval);

//                     if($retval==0) {
//                         $commandStatus = 200;
//                         $commandMessage = 'Video Created Successfully';
//                     } else {
//                         $commandStatus = 500;
//                         $commandMessage = 'Video Creation Failed';
//                     }

//                     // end

//                     // image audio merge

//                     // start
                    
//                     if($isThemeMusic)
//                     {
//                         $musicCmd ="";
//                         $greetMusicPath = asset($greetThemeMusic->file_path);
        
//                         $musicCmd .= ' -stream_loop -1 -i ' . $greetMusicPath;
//                         if ($isTheme) {
//                             $greetmediaType = 'imageAudioMerge';
//                         } else {
//                             $greetmediaType = 'finalaudiomerge';
//                         }
        
//                         $greetMediaThemeName = $rdname . $greetmediaType . '.mp4';
                     
//                         $musicCmd = 'ffmpeg -i '.$finalvideopath.$greetMediaMergeName.$musicCmd.' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest '.$finalvideopath.$greetMediaThemeName;
        
//                         // print_r($musicCmd);exit;
        
//                         exec($musicCmd,$output, $retval);
//                     }

//                     // end 

//                     // split image merged video in 10 sec command

//                     // start

//                     $greetMediasplitName = 'split%d.mp4';

//                     $splitcmd='ffmpeg -i '.$finalvideopath.$greetMediaThemeName.' -f segment -segment_time 10 -vcodec copy '.$finalvideopath.$greetMediasplitName;
                    
//                     exec($splitcmd,$output, $retval);

//                     // end 

//                     // merge video and image split video with order

//                     // start
                    
//                     $videomergecmd='ffmpeg';
//                     $j=0;
//                     $filterComplex_vid=' -filter_complex "';
//                     $index_video='';
//                     foreach($greetMediaFiles as $key=>$totalcount)
//                     {
//                         if(isset($greetMedias[$key]))
//                         {
//                             foreach($greetMedias as $key1=>$video_data)
//                             {
//                                 if($key==$key1)
//                                 {
//                                     $video_index = '[vid'.$key.']';
//                                     $videomergecmd .=' -i '.$video_data;
//                                     $filterComplex_vid .='['.$key.']scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2,setsar=1'.$video_index.';';
//                                     $audiocheck=exec('ffprobe -i '.$video_data.' -show_streams -select_streams a -loglevel error 2>&1',$output);
//                                     // exit;
//                                     if($audiocheck==null)
//                                     {
//                                         echo "string";
//                                         $index_video .=$video_index.'['.$greetMediaCount.']';
//                                     }
//                                     else{
//                                         $index_video .= $video_index.'['.$key.']';
//                                     }
//                                 }
//                             }
//                         }
//                         else
//                         {
//                             $video_index = '[vid'.$key.']';
//                             $videomergecmd .=' -i '.$finalvideopath.'split'.$j.'.mp4';
//                             if($key)
//                             {
//                             }
//                             $filterComplex_vid .='['.$key.']scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2,setsar=1'.$video_index.';';
//                             $index_video .= $video_index . '[' . $key . ']';
//                             $j++;
//                         }
//                     }
//                     if ($isTheme) {
//                         $greetmediaType='final_video_merge';
//                         $final_video=$rdname .'final_video_merge.mp4';
//                     }
//                     else{
//                         $greetmediaType='final';
//                         $final_video=$rdname .'final.mp4';
//                     }
//                     $vidcmd=$videomergecmd . ' -f lavfi -t 1 -i anullsrc ' . $filterComplex_vid . $index_video . 'concat=n=' . $greetMediaCount . ':v=1:a=1" -pix_fmt yuvj422p -vsync 2 ' .$finalvideopath.$final_video;
//                     // exit;

//                     exec($vidcmd,$output, $retval);

//                     // end

//                     // get video duration and convert into sec and min 

//                     // start  
                    
//                     $timecmd = exec('ffmpeg -i '.$finalvideopath.$final_video.' 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
//                     $time=Carbon::create($timecmd);
//                     $time_sec=$time->minute*60 + $time->second;
//                     $time_min=$timecmd;

//                     // end

//                     // store final video

//                     $greetMediaValue = [
//                         'greet_id' => $greetId,
//                         'media_type' => 'video',
//                         'media_path' => $dbfinalvideopath.$final_video,
//                         'media_name' => $final_video,
//                         'greet_media_type' => $greetmediaType,
//                         'user_id' => $greetObj->user_id,
//                         'media_sec' => $time_sec,
//                         'media_min' => $time_min,
//                     ];
// // exit();
//                     if($isTheme)
//                     {
//                         $backimgcmd='ffmpeg ';
//                         $greetThemePath = asset($greetTheme->file_path);
        
//                         // if ($isThemeMusic) {
//                         //     $themeVideoName = $greetMediaThemeName;
//                         // } else {
//                         //     $themeVideoName = $greetMediaMergeName;
//                         // }
        
//                         $backimgcmd .= ' -loop 1 -i ' . $greetThemePath;
        
//                        $backimgfilter=' -filter_complex "[1:v]scale=1900:1280[fg];[0]scale=2800:1900[fg0];[fg0][fg]overlay=(W-w)/2:(H-h)/2:shortest=1"' ;
                            
//                         echo $command2 = $backimgcmd.' -i '.$finalvideopath.$final_video.$backimgfilter.' '.$finalvideopath.$rdname.'final.mp4';
//                 // exit;
//                         exec($command2,$output, $retval);
        
//                         if($retval==0) {
//                             $commandStatus = 200;
//                             $commandMessage = 'Video Created Successfully';
//                         } else {
//                             $commandStatus = 500;
//                             $commandMessage = 'Video Creation Failed';
//                         }
//                         $greetMediaValue = [
//                             'greet_id' => $greetId,
//                             'media_type' => 'video',
//                             'media_path' => $dbfinalvideopath.$rdname.'final.mp4',
//                             'media_name' => $rdname.'final.mp4',
//                             'greet_media_type' => 'final',
//                             'user_id' => $greetObj->user_id,
//                             'media_sec' => $time_sec,
//                             'media_min' => $time_min,
//                         ];
        
//                     }

//                     // water mark

//                     $img=asset('/images/water_mark.png');

//                     exec('ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -i '.$img.' -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[logo]scale=200:200[b];[b][0]scale2ref=oh*mdar:ih[b][video];[video][b]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" '.$finalvideopath.$rdname.'preview.mp4',$output, $retval);
                   
//                     // 26-6-2023 ======================= video trim if min>3

//                     $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                    
//                     $duration = $time_sec / 60;
//                     if ($greet->occasion_name == 'Sweet Greet' && $duration > 3) {
//                         $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:03:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                        
//                         exec($trim_cmd,$output,$retval);
//                         $greetMediaValue = [
//                             'greet_id' => $greetId,
//                             'media_type' => 'video',
//                             'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
//                             'media_name' => $rdname.'trimed_final.mp4',
//                             'greet_media_type' => 'final',
//                             'user_id' => $greetObj->user_id,
//                             'media_sec' => $time_sec=180,
//                             'media_min' => $time_min=3,
//                         ];
//                     }
//                     if ($duration > 45) {
//                         $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:45:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                        
//                         exec($trim_cmd,$output,$retval);

//                         $greetMediaValue = [
//                             'greet_id' => $greetId,
//                             'media_type' => 'video',
//                             'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
//                             'media_name' => $rdname.'trimed_final.mp4',
//                             'greet_media_type' => 'final',
//                             'user_id' => $greetObj->user_id,
//                             'media_sec' => $time_sec=180,
//                             'media_min' => $time_min=3,
//                         ];
//                     }
                    
//                     // preview video
//                     // if($greetMediaFiles)
//                     // {
//                     //     $pre_command='ffmpeg -i '.$finalvideopath;
//                     //     $preVideoname=$final_video;
//                         // if($isTheme && $isThemeMusic)
//                         // {
//                         //     $preVideoname=$rdname.'final.mp4';
//                         // }
//                         // if($isThemeMusic)
//                         // {
//                         //     $preVideoname=$greetMediaThemeName;
//                         // }
//                         // if($isTheme)
//                         // {
//                         //     $preVideoname=$rdname.'final.mp4';
//                         // }
//                         // $pre_command .=$preVideoname.' -ss 00:00:00 -t 00:00:30 -async 1 '.$finalvideopath.$rdname.'preview.mp4';
//                         // exec($pre_command,$output, $retval);
                        
//                         /*User mail functionality*/
//                         if($retval==0) {
//                             $commandStatus = 200;
//                             $commandMessage = 'Video Created Successfully';
//                             $data['message']=$commandMessage;
//                             $data['link']=$dbfinalvideopath.$rdname.'preview.mp4';
//                             $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
//                             $duration = $time_sec / 60;
//                             if ($greet->occasion_name == 'Sweet Greet' && $duration <= 3) {
//                                 $data['link']=$dbfinalvideopath.$rdname.'trimed_final.mp4';
//                             }
//                             Mail::to($userEmail)->send(new SucessMail($data));
//                         } else {
//                             $commandStatus = 500;
//                             $commandMessage = 'Video Creation Failed';
//                            Mail::to($userEmail)->send(new SucessMail($commandMessage));
//                         }
//                         /*End*/
        
//                         $greetPreMediaValue = [
//                             'greet_id' => $greetId,
//                             'media_type' => 'video',
//                             'media_path' => $dbfinalvideopath.$rdname.'preview.mp4',
//                             'media_name' => $rdname.'preview.mp4',
//                             'greet_media_type' => 'preview',
//                             'user_id' => $greetObj->user_id,
//                             'media_sec' => $time_sec,
//                             'media_min' => $time_min,
//                         ];
//                     // }
//                     if (isset($greetMediaPreObj)) {
//                         $greetMediaPreObj->update($greetPreMediaValue);
//                     } else {
//                         $greetMediaCreateObj = GreetMedia::create($greetPreMediaValue);
//                     }
//                     if (isset($greetMediaObj)) {
//                         $greetMediaObj->update($greetMediaValue);
//                     } else {
//                         $greetMediaCreateObj = GreetMedia::create($greetMediaValue);
//                     }
//                     $greetMediaRequestArr = [
//                         'comments' => $commandMessage,
//                         'status' => isset($commandStatus) && $commandStatus == 200 ? 2 : 3
//                     ];
//                     $greetMediaRequest = $requestedGreet->update($greetMediaRequestArr);

//                 }
//                 else {
        
//                     $mediaRequestInsertArr = [
//                         'comments' => 'There are no media found in greet. Please upload again or contact support!',
//                         'status' => 500
//                     ];
//                    // $greetMediaRequest = $requestedGreet->update($mediaRequestInsertArr);
//                 }
//                 return 0;
//             }
/////Take more time for larger image in theme
                $filterComplex_res='';
                if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) 
                {
                    $new_filter = '';
                    $offset = 0;
                    $slide_offset =0;
                    $transionOffset = 0;
                    $offset_limit=0;
                    $arrCount=count($greetMediaFiles);
                    foreach ($greetMediaFiles as $greetMediaFile) {

                        $greetMediaType = $greetMediaFile->media_type;
        
                        $greetMedia = storage_path('app/public/greetMedia/uploads/'.$greetId.'/'.$greetMediaFile->media_name);
                        // image
                        if($greetMediaType == 'image')
                        {
                            $vidMerCmd .= ' -loop 1 -framerate 24 -t 5 -i ' . $greetMedia ;
                            $img_index = '[img'.$count.']';
                            //$greetTransition->name=='fade' images
                            // if ($isTransition && $greetTransition->name == 'fade') {
                            //     if($count>0){
                            //      $filterComplex .= '['.$count.']scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2,setsar=1,fade=t=in:st=0:d=1,fade=t=out:st=4:d=1' . $img_index . ';';
                            //     }
                            //     else{
                            //      $filterComplex .= '['.$count.']scale=640:480:force_original_aspect_ratio=decrease,pad=640:480:(ow-iw)/2:(oh-ih)/2,setsar=1,fade=t=out:st=4:d=1' . $img_index . ';';
                            //     }
                            //     //$greetTransition->name == 'circleopen' images 
                            // }
                            // scale changed to 1080p
                            if ($isTransition && $greetTransition->name == 'fade') {

                                $filterComplex_res.= '['.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    $offset = $offset+4;
                                }
                                else{
                                    $offset = $offset+4;
                                }
                            }
                            //scale changed to 1080p
                             else if ($isTransition && $greetTransition->name == 'circleopen') {

                                $filterComplex_res.= '['.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    $offset = $offset+4;
                                }
                                else{
                                    $offset = $offset+4;
                                }
                                //$greetTransition->name = 'circleclose' /images 
                                //scale changed to 1080p
                            } else if ($isTransition && $greetTransition->name == 'circleclose') {

                                $filterComplex_res.= '['.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    $offset = $offset+4;
                                }
                                else{
                                    $offset = $offset+4;
                                }
                            //$greetTransition->name == 'zoompan' /images
                            //this is for zoompan transition/images 
                            //$isTransition->name == 'zoompan'/video
                            //scale changed to 1080p
                            }elseif ($isTransition && $greetTransition->name == 'zoompan') {

                                if($count>0){
                                    $filterComplex.="[".$count."]"."scale=19200:10800,zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=in:st=0:d=1,setsar=1".$img_index.";";
                                // $new_filter .="[vid".$count."]"."fade=t=in:st=0:d=".($duration-1).$video_index.";";

                                }
                                else{
                                    $filterComplex.="[".$count."]"."scale=19200:10800,zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=out:st=4:d=1,setsar=1".$img_index.";";

                                }
                                //this is for slideleft transition /images
                                //scale changed to 1080p
                            }elseif ($isTransition && $greetTransition->name == 'slideleft') {
                                $filterComplex_res.= '['.$count.':v]scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'hrslice') {
                                $filterComplex_res.= '['.$count.':v]scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            //this is for radial transition / images
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'radial') {
                                $filterComplex_res.= '['.$count.':v]scale=1920:1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            //this is for dissolve transition/images
                            //DURATION=1
                            //scale changed to 1080p
                            elseif($isTransition && $greetTransition->name == 'dissolve') {
                                $filterComplex_res.= '['.$count.':v]scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            ///this is for rectcrop transition/images
                            ////$duration=1
                            //scale changed to 1080p
                            elseif($isTransition && $greetTransition->name == 'rectcrop') {
                                $filterComplex_res.= '['.$count.':v]scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            // duration =1
                            //$isTransition && $greetTransition->name == 'wipetl'
                            //scale changed to 1080p
                            elseif($isTransition && $greetTransition->name == 'wipetl') {
                                $filterComplex_res.= '['.$count.':v]scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    $slide_offset = $slide_offset + 4;
                                }
                                else{
                                    $slide_offset = $slide_offset + 4;
                                }
                            }
                            //scale changed to 1080p
                            else{
                                $filterComplex .= '['.$count.']scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1' . $img_index . ';';
                            }

                            if (($isTransition && $greetTransition->name == 'zoompan') ||(!$isTransition) ) {
                                $index .= $img_index;
                            }
                            else{
                                $index .= $img_index . '[' . $greetMediaCount . ']';
                            }
                            $count++;
                        }
        
                        // video transitions are working
                        if ($greetMediaType == 'video') {
                            
                            $video='';
                            $video_index = '[vid'.$count.']';
                            $vidMerCmd .= $c=' -i ' . $greetMedia ;
                            //scale changed to 1080p
                            if($isTransition && $greetTransition->name == 'zoompan'){
                                $filterComplex .= '['.$count.']fps=24,scale=19200:10800:force_original_aspect_ratio=decrease,pad=19200:10800:(ow-iw)/2:(oh-ih)/2,setsar=1'.$video_index.';';
                            }
                            else{
                                $filterComplex .= '['.$count.']fps=24,scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1'.$video_index.';';
                            }
                            $audiocheck=exec('ffprobe '.$c.' -show_streams -select_streams a -loglevel error 2>&1',$output);
                            //$duration = $videoDuration-1;
                            $videoDuration=floor(exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c,$output));
                            // $videoFps =exec('ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate -of default=noprint_wrappers=1:nokey=1 ' . $c,$output);
                            // $videoDuration=(float)$videoDuration*($videoFps/24);
                            // $fraction_str = $videoFps; N/A
                            // list($numerator, $denominator) = explode('/', $fraction_str); N/A
                            // $fps = (float) $numerator / (float) $denominator; N/A
                            // $videoDuration=$videoDuration*($fps/24); N/A
                            // dump($videoFps,$videoDuration,$fps);
                            if($audiocheck==null)
                            {
                                $index .=$video_index;
                            }
                            else{
                                $index .= $video_index;
                            }
                            //this is for fade transition/video...
                            //$greetTransition->name == 'fade'  /video $duration-1.
                            //duration=1;
                            //working
                            //scale changed to 1080p
                            if($isTransition && $greetTransition->name == 'fade'){
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=fade:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=fade:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $offset = $offset+$videoDuration-1;
                            }
                            //$greetTransition->name == 'circleopen' /video $duration =1
                            //this is for circleopen transition /video...
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'circleopen') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleopen:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleopen:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $offset = $offset+$videoDuration-1;
                            }
                            // new video input get();
                            //this is for circleclose transitions /video
                            //duration=1
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'circleclose') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=circleclose:duration=1:offset='.($offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=circleclose:duration=1:offset='.$offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $offset = $offset+$videoDuration-1;
                            }
                            //this is for slideleft transition/video 
                            // video offset changed reduced floor();
                            //video $greetTransition->name == 'slideleft'
                            //duration=1
                            //scale changed 1080p
                            elseif ($isTransition && $greetTransition->name == 'slideleft') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=slideleft:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=slideleft:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset = $slide_offset + $videoDuration-1;
                            }
                            //$greetTransition->name == 'hrslice'/video
                            //this is for distance transition /video
                            //duration
                            //working ok
                            //with theme (ok)
                            //scale changed 1080p
                            elseif ($isTransition && $greetTransition->name == 'hrslice') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=hrslice:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }
                                    elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }
                                    else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=hrslice:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset = $slide_offset + $videoDuration-1;

                            }
                            //$greetTransition->name='radial' /video
                            //this is for radial transition/ video...
                            //duration
                            //with theme (OK)
                            //working fine for  video
                            //scale changed 1080p
                            elseif ($isTransition && $greetTransition->name == 'radial') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920:1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=radial:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }
                                    elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }
                                    else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=radial:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset =$slide_offset + $videoDuration-1;
                                // dd($slide_offset);
                            }
                            //$greetTransition->name = 'dissolve'/video
                            //this is for dissolve transition/ video transitions  dissolve
                            //duration
                            //testing (ok)
                            //working fine for video
                            //with theme (ok)
                            //scale changed 1080p
                            elseif ($isTransition && $greetTransition->name == 'dissolve') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=dissolve:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }
                                    elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }
                                    else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=dissolve:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset = $slide_offset + $videoDuration-1;

                            }
                            // $greetTransition->name = 'rectcrop'/video...rectcrop
                            //this is for rectcrop transition/ video transitions
                            //duration
                            //working fine for video
                            //working with theme(ok)
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'rectcrop') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';
                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=rectcrop:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }
                                    elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }
                                    else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=rectcrop:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset = $slide_offset + $videoDuration-1;

                            }
                            // $greetTransition->name == 'zoompan'/video  t--
                            //wipetl /video transitions /duration=1
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'wipetl') {
                                $filterComplex_res.= '[vid'.$count.']scale=1920x1080,format=yuv420p[v'.$count.'];';

                                if ($count > 0) {
                                    $transionOffset = $count-1;
                                    if ($transionOffset < 1 && $arrCount==$count+1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                    elseif ($transionOffset < 1){
                                        $new_filter .= '[v'.$transionOffset.'][v'.$count .']xfade=transition=wipetl:duration=1:offset='.($slide_offset).'[f'.$transionOffset.']; ';
                                    }
                                    elseif ($transionOffset < $greetMediaCount-2) {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.'];';
                                    }
                                    else {
                                        $new_filter .= '[f'.$transionOffset-1 .'][v'.$count.']xfade=transition=wipetl:duration=1:offset='.$slide_offset.'[f'.$transionOffset.']';
                                    }
                                }
                                $slide_offset = $slide_offset + $videoDuration-1;
                            }
                            ///Transition zoompan duration=1 
                            //$isTransition && $greetTransition->name=='zoompan'
                            //scale changed to 1080p
                            elseif ($isTransition && $greetTransition->name == 'zoompan') {

                                $duration=2;
                                $videoDuration=exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c,$output);
                                if($count>0){
                                    $new_filter.="[vid".$count."]"."zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=in:st=0:d=".($duration-1).$video_index.";";
                                }
                                else{
                                    $new_filter.="[vid".$count."]"."zoompan=z='min(max(zoom,pzoom)+0.002,3)':d=1".":s=1920x1080:fps=24:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'".",fade=t=out:st=".($videoDuration-$duration).":d=".($duration-1).$video_index.";";
                                }
                            }
                            $count++;
                        }
                    }
                    $filterComplex .= $filterComplex_res.$new_filter;
                    
                    $finalvideopath = storage_path('app/public/greetMedia/final/'.$greetId.'/');
                    // $finalvideopaadadafianadnl final final.=$new th =  $finalvideopath.'/'; $finalvideopath=finalvideopath.'/'
                    $dbfinalvideopath = 'storage/greetMedia/final/' . $greetId . '/';
                  
                    if(!File::isDirectory($finalvideopath)){
                        File::makeDirectory($finalvideopath, 0775, true, true);
                    }
                    foreach(glob("{$finalvideopath}/*") as $file)
                    {
                        if(is_dir($file)) { 
                            recursiveRemoveDirectory($file);
                        } else {
                            unlink($file);
                        }
                    }
                    $rdname = date('YmdHis');
                    if ($isTheme || $isThemeMusic) {
                        $greetmediaType = 'videoMerge';
                    } else {
                        $greetmediaType = 'final';
                    }
                    $greetMediaMergeName = $rdname . $greetmediaType . '.mp4';
        
                    if ($isTransition && $greetTransition->name == 'fade') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    else if ($isTransition && $greetTransition->name == 'circleopen') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    else if ($isTransition && $greetTransition->name == 'circleclose') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'zoompan') {
                        $command= $vidMerCmd . ' ' . $filterComplex . $index . 'concat=n=' . $greetMediaCount . ':v=1:a=0" -pix_fmt yuv420p -vcodec libx264  -an ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'slideleft') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'hrslice') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 25 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'radial') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'dissolve') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    //additional//
                    //+1
                    elseif ($isTransition && $greetTransition->name == 'rectcrop') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    elseif ($isTransition && $greetTransition->name == 'wipetl') {
                        $command= $vidMerCmd . ' ' . $filterComplex . '" -map "[f'.$transionOffset.']" -r 26 -pix_fmt yuv420p -vcodec libx264 ' . $finalvideopath . $greetMediaMergeName;
                    }
                    //////////////
                    else {
                        $command= $vidMerCmd . ' ' . $filterComplex . $index . 'concat=n=' . $greetMediaCount . ':v=1:a=0" -pix_fmt yuv420p -vcodec libx264 -an ' . $finalvideopath . $greetMediaMergeName;
                    }
                    // exit;
                    // dd($command);
                    echo $command;
                    // return "ajay";
                    exec($command,$output, $retval);
                    
                    if($retval==0) {
                        $commandStatus = 200;
                        $commandMessage = 'Video Created Successfully';
                    } else {
                        $commandStatus = 500;
                        $commandMessage = 'Video Creation Failed';
                    }
        
                    //Find duration time 

                    $timecmd = exec('ffmpeg -i '.$finalvideopath.$greetMediaMergeName.' 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
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
                        'greet_media_type' => $greetmediaType,
                        'user_id' => $greetObj->user_id,
                        'media_sec' => $time_sec,
                        'media_min' => $time_min,
                    ];
                    
                    // video audio merge
                    // start
                    

                    if($isThemeMusic && $commandStatus == 200)
                    {
                        $musicCmd ="";
                        $greetMusicPath = storage_path('app/public/music_audio/'.$greetThemeMusic->file_name);
        
                        $musicCmd .= ' -stream_loop -1 -i ' . $greetMusicPath;
                        if ($isTheme) {
                            $greetmediaType = 'videoAudioMerge';
                        } else {
                            $greetmediaType = 'final';
                        }
        
                        $greetMediaThemeName = $rdname . $greetmediaType . '.mp4';           //convert to mp4
                     
                        $musicCmd = 'ffmpeg -i '.$finalvideopath.$greetMediaMergeName.$musicCmd.' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest '.$finalvideopath.$greetMediaThemeName;     //Theme merge
        
                        // print_r($musicCmd);exit;
        
                        exec($musicCmd,$output, $retval);
        
                        if($retval==0) {
                            $commandStatus = 200;
                            $commandMessage = 'Video Created Successfully';
                        } else {
                            $commandStatus = 500;
                            $commandMessage = 'Video Creation Failed';
                        }
        
                        $greetMediaValue = [
                            'greet_id' => $greetId,
                            'media_type' => 'video',
                            'media_path' => $dbfinalvideopath.$greetMediaThemeName,
                            'media_name' => $greetMediaThemeName,
                            'greet_media_type' => $greetmediaType,
                            'user_id' => $greetObj->user_id,
                            'media_sec' => $time_sec,
                            'media_min' => $time_min,
                        ];
                    }
                    // end

                    ///adding text into te video
                    ///start
                    // dd( $musicCmd );
                    // if($isThemeMusic && $commandStatus == 200)
                    // if(true)
                    // {
                    //     $text1 = "HELLO HOW ARE YOU?";
                    //     $text2="FINE";
                    //     $fontPath = "/fonts/Flaticon.ttf"; // Replace with the actual path to your font file
                    //     $fontsize = 24;
                    //     $greetmediaType = 'videoTextOverlay';
                    //     $greetMediaThemeName = $rdname . $greetmediaType . '.mp4'; 
                    //     $inputVideoPath = $finalvideopath . $greetMediaMergeName;
                    //     $outputVideoPath = $finalvideopath . $greetMediaThemeName;
                    //     $videoDurationNew=floor(exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.' -i '.$inputVideoPath));
                    //     // dd($videoDurationNew);
                    //     $ffmpegCmd = 'ffmpeg -i ' . $inputVideoPath .
                    //     ' -vf "drawtext=text=' . $text1 . ':fontfile=' . $fontPath . ':fontsize=' . $fontsize . ':fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:enable=between(t\,0\,3),' .
                    //     'drawtext=text=' . $text2 . ':fontfile=' . $fontPath . ':fontsize=' . $fontsize . ':fontcolor=black:x=(w-text_w)/2:y=(h-text_h)/2:enable=between(t\,' . ($videoDurationNew - 3) . '\,' . $videoDurationNew . ')" -c:a copy ' . $outputVideoPath;
                    //     // dd($ffmpegCmd);
                    //     exec($ffmpegCmd, $output, $retval);

                    //     if ($retval == 0) {
                    //         $commandStatus = 200;
                    //         $commandMessage = 'Video Created Successfully';
                    //     } else {
                    //         $commandStatus = 500;
                    //         $commandMessage = 'Video Creation Failed';
                    //     }

                    //     $greetMediaValue = [
                    //         'greet_id' => $greetId,
                    //         'media_type' => 'video',
                    //         'media_path' => $dbfinalvideopath . $greetMediaThemeName,
                    //         'media_name' => $greetMediaThemeName,
                    //         'greet_media_type' => $greetmediaType,
                    //         'user_id' => $greetObj->user_id,
                    //         'media_sec' => $time_sec,
                    //         'media_min' => $time_min,
                    //     ];
                        
                        
                    // }
                    
                    // backgroung image set on video.
                    //start 
                    //image size= ++t
                    if($isTheme && $commandStatus == 200)
                    {
                        $backimgcmd='ffmpeg ';
                        $greetThemePath =  storage_path('app/public/theme_image/'.$greetTheme->file_name);
        
                        if ($isThemeMusic) {
                            $themeVideoName = $greetMediaThemeName;
                        } else {
                            $themeVideoName = $greetMediaMergeName;
                        }
        
                        $backimgcmd .= ' -loop 1 -i ' . $greetThemePath;
        
                        $backimgfilter=' -filter_complex "[1:v]scale=1900:1280[fg];[0]scale=2800:1900[fg0];[fg0][fg]overlay=(W-w)/2:(H-h)/2:shortest=1"' ;
        
                        $command2 = $backimgcmd.' -i '.$finalvideopath.$themeVideoName.$backimgfilter.' '.$finalvideopath.$rdname.'final.mp4';
        
                        exec($command2,$output, $retval);
                            
        
                        if($retval==0) {
                            $commandStatus = 200;
                            $commandMessage = 'Video Created Successfully';
                        } else {
                            $commandStatus = 500;
                            $commandMessage = 'Video Creation Failed';
                        }
                        $greetMediaValue = [
                            'greet_id' => $greetId,
                            'media_type' => 'video',
                            'media_path' => $dbfinalvideopath.$rdname.'final.mp4',
                            'media_name' => $rdname.'final.mp4',
                            'greet_media_type' => 'final',
                            'user_id' => $greetObj->user_id,
                            'media_sec' => $time_sec,
                            'media_min' => $time_min,
                        ];
                    }
                    // end

                    $img=public_path('/images/water_mark.png');

                    exec('ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -i '.$img.' -filter_complex "[1]format=rgba,colorchannelmixer=aa=0.5[logo];[logo]scale=200:200[b];[b][0]scale2ref=oh*mdar:ih[b][video];[video][b]overlay=(main_w-overlay_w)/2:(main_h-overlay_h)/2" '.$finalvideopath.$rdname.'preview.mp4',$output, $retval);
                    
                    // 26-6-2023 ============== video trim if duration min>3
                    // this part is for sweet greet /video trim
                    $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                    
                    $duration = $time_sec / 60;
                    if ($greet->occasion_name == 'Sweet Greet' && $duration > 3) {
                        $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:03:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                        
                        exec($trim_cmd,$output,$retval);
                        $greetMediaValue = [
                            'greet_id' => $greetId,
                            'media_type' => 'video',
                            'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
                            'media_name' => $rdname.'trimed_final.mp4',
                            'greet_media_type' => 'final',
                            'user_id' => $greetObj->user_id,
                            'media_sec' => $time_sec=180,
                            'media_min' => $time_min=3,
                        ];
                    }
                    if ($duration > 45) {
                        $trim_cmd='ffmpeg -i '.$finalvideopath.$rdname.'final.mp4 -ss 00:00:00 -t 00:45:00 -c:v copy -c:a copy ' .$finalvideopath.$rdname.'trimed_final.mp4';
                        
                        exec($trim_cmd,$output,$retval);

                        $greetMediaValue = [
                            'greet_id' => $greetId,
                            'media_type' => 'video',
                            'media_path' => $dbfinalvideopath.$rdname.'trimed_final.mp4',
                            'media_name' => $rdname.'trimed_final.mp4',
                            'greet_media_type' => 'final',
                            'user_id' => $greetObj->user_id,
                            'media_sec' => $time_sec=180,
                            'media_min' => $time_min=3,
                        ];
                    }
                    // if($greetMediaFiles)
                    // {
                    //     $pre_command='ffmpeg -i '.$finalvideopath;
                    //     $preVideoname=$greetMediaMergeName;
                    //     if($isTheme && $isThemeMusic)
                    //     {
                    //         $preVideoname=$rdname.'final.mp4';
                    //     }
                    //     if($isThemeMusic)
                    //     {
                    //         $preVideoname=$greetMediaThemeName;
                    //     }
                    //     if($isTheme)
                    //     {
                    //         $preVideoname=$rdname.'final.mp4';
                    //     }
                    //     $pre_command .=$preVideoname.' -ss 00:00:00 -t 00:00:30 -async 1 '.$finalvideopath.$rdname.'preview.mp4';
                    //     exec($pre_command,$output, $retval);

                    //     /*User mail functionality*/
                        if($retval==0) {
                            $commandStatus = 200;
                            $commandMessage = 'Video Created Successfully';
                            $data['message']=$commandMessage;
                            $data['link']=$dbfinalvideopath.$rdname.'preview.mp4';
                            $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$greetId)->first();
                            $duration = $time_sec / 60;
                            if ($greet->occasion_name == 'Sweet Greet' && $duration <= 3) {
                                $data['link']=$dbfinalvideopath.$rdname.'trimed_final.mp4';
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
                    // }
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
                    $greetMediaRequest = $requestedGreet->update($greetMediaRequestArr);
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