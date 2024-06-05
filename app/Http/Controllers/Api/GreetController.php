<?php

namespace App\Http\Controllers\Api;
use App\Events\CreateVideo;
use App\Http\Controllers\Controller;
use App\Models\GenerateVideoRequest;
use App\Models\Greet;
use App\Models\GreetCelebrant;
use App\Models\GreetMedia;
use App\Models\Theme;
use App\Models\User;
use App\Models\PaymentTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\ProgressMail;
use Auth;
use Illuminate\Support\Str;
use FFMpeg;
use Session;
use Stripe;
use File;
use Carbon\Carbon;
use Image;
use VideoThumbnail;

class GreetController extends Controller
{
    
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'user_id' => ['required'],
            'occasion_name' => ['required', 'string', 'max:255'],
            'occasion_date' => ['required', 'date'],
            'contribution_deadline_date' => ['required', 'date'],
       //    'celebrants' => ['required']
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'fix errors',
                'errors' => $validator->errors()], 500
            );
        }

        try {
            $greetObj = Greet::create($request->all());
            $userId = Auth::user()->id;
            /*Sweet Greet*/
            $greet = Greet::find($greetObj->id);
            if($request->occasion_name=='Sweet Greet'){
                $greet->greet_plan = 1;
                $greet->save();
            }
            $plancheck = Greet::where('user_id', $userId)->where('greet_plan',3)->get()->count();
            if(!empty($plancheck)){
                if($plancheck < 3 ){
                    $greet->greet_plan = 3;
                    $greet->save();
                    $paymentArr = [
                                    'user_id' => $userId,
                                    'greet_id' => $greetObj->id,
                                    'payment_amount' => 134.47,
                                    'payment_status' => 'succeeded',
                                    'trasaction_date' => date('Y-m-d'),
                                ];
                    $paymentObj = PaymentTransaction::create($paymentArr);
                } /*else{
                    $planupdate = Greet::where('user_id', $userId)->where('greet_plan',3)->get();
                    foreach($planupdate as $value){
                        $value->greet_plan = Null;
                        $value->save();
                    }
                }*/
            }
             
            if (isset($greetObj->id)) {
                $celebrants = $request->celebrants;

                if (isset($celebrants) && sizeof($celebrants) > 0) {
                    foreach ($celebrants as $celebrant) {
                        //   print_r($celebrant);exit;
                        $celebrantArr = [
                            'greet_id' => $greetObj->id,
                            'first_name' => $celebrant['first_name'],
                            'last_name' => $celebrant['last_name'],
                        ];
                        $celebrantObj = GreetCelebrant::create($celebrantArr);
                    }
                }
            }

            $greetData = Greet::with('user')->find($greetObj->id);

            return response()->json([
                'status' => 201,
                'message' => 'Greet Created Successfully.',
                'greet' => $greetData
            ], 201
            );
        } catch (\Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e->getMessage()], 400
            );
        }
    }

    public function getGreetDetails($id, Request $request) {
        $greetObj = Greet::with('user','greetCelebrant', 'greetTheme', 'greetMusic', 'greetTransition')->find($id);

        if (isset($greetObj)) {
            return response()->json([
                'status' => 200,
                'message' => 'Gree Data load successfully',
                'greet' => $greetObj
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Gree Data not found',
                'greet' => null
            ], 400);
        }
    }
    /*Upload media*/
    public function storeMedia(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id'       => 'required',
            'greet_id'      => 'required',
            // 'media'      => 'required',
        ]);
        // echo "<pre>";print_r($validator->fails());exit;
        if($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'fix errors',
                'errors' => $validator->errors()], 500
            );
        }

        try {
            foreach ($request->file('media') as $key => $value) {
               
                $greetId = $request->greet_id;
                //  $mediaThumb = $request->file('media_thumb');
                $name = $value->getClientOriginalName();
                $extension = $value->getClientOriginalExtension();
                $MediaName = Str::random(10);
                $videocontentType = $value->getClientMimeType();
                if($videocontentType == 'video/quicktime'||$videocontentType == 'video/mp4' || $extension == 'mov'  || $extension == 'mp4'  ){
                    $extension = 'mp4';  
                }
                if(empty($extension)){
                     $extension = 'jpg';  
                }
                $generatedMediaName = $MediaName. '.'.$extension;

                $path = $greetId.'/'.$generatedMediaName;
                $fileName   = time() . '.' . $value->getClientOriginalExtension();
                // condition for mp4 and image thumb 
                if($extension =='mp4')
                {   
                    Storage::disk('greet_media_uploads')->put($path, file_get_contents($value));
                    $mediaPath = 'app/public/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
                    VideoThumbnail::createThumbnail(
                        storage_path($mediaPath), 
                        storage_path('app/public/greetMedia/uploads/'.$greetId.'/'), 
                        $MediaName.'.jpg', 
                        2, 
                        3000, 
                        3000
                    );
                }else{
                    // echo phpinfo();
                    $img = Image::make($value->getRealPath());
                    $img->stream(); // <-- Key point
                    Storage::disk('greet_media_uploads')->put($path.'/', $img, 'public');
                    // Storage::disk('greet_media_uploads')->put($path, file_get_contents($value));
                }
                
                $allowedMimeTypes = ['image/jpeg','image/gif','image/png'];
                $contentType = $value->getClientMimeType();
                if(! in_array($contentType, $allowedMimeTypes) ){
                    $mediatype = 'video';
                }else{
                    $mediatype = 'image';
                }
                $mediaPath = '/storage/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
                $file_path = public_path('/storage/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName);
                //  $thumbFilePath = asset('/storage/mediaThumb/'.$generatedThumbName);
                /*Last data get*/
                $latest = GreetMedia::where('greet_id', $greetId)->latest('order')->first();
                if(empty($latest)){
                    $order = 1;
                } else {
                    $order = $latest->order + 1;
                }
                /*custome duration */
                $ffprobe = FFMpeg\FFProbe::create();
                 $duration = 500;                        //$ffprobe->format($file_path)->get('duration');
                $totalSec = round($duration);
                $mint = floor($totalSec/3600).gmdate(":i:s", $totalSec%3600);
                $celebrantArr = [
                    'greet_id'              => $request->greet_id,
                    'media_name'            => $generatedMediaName,
                //  'media_thumb_name'      => $generatedThumbName,
                    'media_type'            => $mediatype,
                    'media_path'            => $mediaPath,
                //  'media_thumb'           => $thumbFilePath,
                    'greet_media_type'      => 'uploads',
                    'user_id'               => $request->user_id,
                    'order'                 => $order,
                    'media_sec'             => $totalSec,
                    'media_min'             => $mint,
                    'status'                => '1',
                ];
                $insertGreetMedia = GreetMedia::create($celebrantArr);
            }
            return response()->json([
                'status' => 201,
                'message' => 'Greet Media Created Successfully.'], 201
            );
        } catch (\Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e.''], 400
            );
        }
    }
    /*Viedo merch media*/
    public function mergeVideoImage(Request $request)
    {
        /* $validator = Validator::make($request->all(), [
             'greet_id'       => 'required|array|min:1',
        ]);*/
        
        /*Update Ordering*/
        foreach($request['media'] as $key =>$value){
            $update = GreetMedia::find($value['id']);
            if(!empty($update)){
                $update->order = $value['order'];
                $update->save();
            }

        }
        
        $usermedia = GreetMedia::where('greet_id',$request->greet_id)->whereNotNull('order')->orderby('order','ASC')->get();
        //echo "<pre>"; print_r($usermedia); exit;
        $random = Str::random(10);
        /*Image background*/
       

        if(count($usermedia) != 0){
            return response()->json([
                'status' => 200,
                'message' => 'Update Greet Order successfully',
                'getupcomingreet' => $usermedia
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Update Greet not found',
            ], 400);
        }

    }

    /* User upcoming greeet */
    public function getUpcomingGreets($id)
    {

        $greet = Greet::with('user','greetMusic','greetTheme','greetCelebrant')->where('occasion_date', '>=',date("Y-m-d"))->where('user_id',$id)->get();
        if(count($greet) != 0){
            return response()->json([
                'status' => 200,
                'message' => 'Upcoming Greet Loaded successfully',
                'getupcomingreet' => $greet
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Upcoming Greet  not found',
            ], 400);
        }
    }

    /* User All greeet */
    public function getAllGreets($id)
    {
        //  $auth = Auth::user();
        //echo "<pre>"; print_r($id); exit;
        $greet = Greet::with('user','greetMusic','greetTheme','greetCelebrant')->where('user_id',$id)->get();
        
        foreach ($greet as $key => $value) {
            if(!empty($value['greet_img_link'])){
                $value['greet_img_link'] = $value['greet_img_link'];
            } else {
                if($value['occasion_name'] == 'Sweet Greet'){
                    $value['greet_img_link'] = url('images/SWEET-GREET.jpg');
                }
                if($value['occasion_name'] == 'U-Greet'){
                    $value['greet_img_link'] = url('images/ugreet.jpg');
                }
                if($value['occasion_name'] == 'U-Age'){
                    $value['greet_img_link'] = url('images/uage.jpg');
                }
                if($value['occasion_name'] == 'U-Baby'){
                    $value['greet_img_link'] = url('images/ubaby.jpg');
                }
                if($value['occasion_name'] == 'U-Celebrate'){
                    $value['greet_img_link'] = url('images/ucelebrate.jpg');
                }
                if($value['occasion_name'] == 'U-Grad'){
                    $value['greet_img_link'] = url('images/ugrad.jpg');
                }
                if($value['occasion_name'] == 'U-Love'){
                    $value['greet_img_link'] = url('images/ulove.jpg');
                }
                  if($value['occasion_name'] == 'U-Miss'){
                    $value['greet_img_link'] = url('images/UMISS.jpg');
                }
                if($value['occasion_name'] == 'U-Parent'){
                    $value['greet_img_link'] = url('images/uparent.jpg');
                }
                if($value['occasion_name'] == 'U-Remember'){
                    $value['greet_img_link'] = url('images/uremember.jpg');
                }
                if($value['occasion_name'] == 'U-Retire'){
                    $value['greet_img_link'] = url('images/uretire.jpg');
                }
                if($value['occasion_name'] == 'U-Wed'){
                    $value['greet_img_link'] = url('images/uwed.jpg');
                }
            }
            // code...
        }
        //echo "<pre>";print_r($greet);exit;
        if(count($greet) != 0){
            return response()->json([
                'status' => 200,
                'message' => 'All Greet Loaded successfully',
                'allgreet' => $greet
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet  not found',
            ], 400);
        }
    }

    /*Preview User Video*/
    public function getPreviewMedia($id)
    {
        //$greetmedia = GreetMedia::where('greet_id',$id)->where('greet_media_type','final')->whereNotNull('final_media')->first();
       $greetfinal = Greet::where('id',$id)->first();
       $greetmediafinal = GreetMedia::where('greet_id',$id)->where('greet_media_type', 'final')->first();
        $greetmediapreview = GreetMedia::where('greet_id',$id)->where('greet_media_type', 'preview')->first();
        $uploads = GreetMedia::where('greet_id',$id)->where('greet_media_type', 'uploads')->first();
        $uploads_media = 'False';
        if(!empty($uploads)){
             $uploads_media = 'true';
        }
        // get payment status
        $greeetpayment = PaymentTransaction::where('greet_id',$id)->first();
        /*Video Request*/
        $request_video = GenerateVideoRequest::where('greet_id',$id)->latest()->first();
        
    
        $request_video_status = '';
        if(!empty($request_video)){
            if($request_video->status == '0'){
                $request_video_status = 'Pending';
            }
            if($request_video->status == '1'){
                $request_video_status = 'In Progress';
            }
            if($request_video->status == '2'){
                $request_video_status = 'Done';
            }
            if($request_video->status == '3'){
                $request_video_status = 'Failed';
            }
        } 
        $video_link_preview = null;
        $payment_status = null;
        $video_link_final = null;
        if(!empty($greetmediapreview))
        {
            $video_link_preview=('storage/greetMedia/final/'.$id.'/'.$greetmediapreview->media_name);
            
            if(!empty($greetfinal))
            {
                $duration=$greetmediafinal->media_sec/60;
                if($greetfinal->occasion_name=='Sweet Greet' && $duration<=3)
                {
                    $video_link_preview=('storage/greetMedia/final/'.$id.'/'.$greetmediafinal->media_name);
                } else if($greetfinal->greet_plan == '3')
                {
                    $video_link_preview=('storage/greetMedia/final/'.$id.'/'.$greetmediafinal->media_name);
                }
            }
        }
        if(!empty($greeetpayment))
        {
            if(!empty($greetmediapreview))
            {
                $video_link_preview=('storage/greetMedia/final/'.$id.'/'.$greetmediapreview->media_name);
            }
            $payment_status=$greeetpayment->payment_status;
            if(!empty($greetmediafinal)){
                 $video_link_final = ('storage/greetMedia/final/'.$id.'/'.$greetmediafinal->media_name);
            }
           
        }
        //echo "<pre>";print_r($request_video_status);exit;
        if(!empty($greetmediafinal) || !empty($greetmediapreview)){
            return response()->json([
                'status' => 200,
                'message' => 'Greet Media Preview successfully',
                'greetmedia' => $greetmediafinal,
                'Payment_status' =>$payment_status,
                'Video_link_preview' =>$video_link_preview,
                'Video_link_final' => $video_link_final,
                'video_request_status' => $request_video_status,
                'uploads' => $uploads_media
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet Media  not found',
                'greetmedia' => '',
                'Video_link_preview' => '',
                'video_request_status' => $request_video_status,
                'uploads' =>$uploads_media

            ], 200);
        }
    }

    /*Update*/
    public function greetUpdate(Request $request) 
    {
        //echo "<pre>"; print_r($request->all()); exit;
        $validator = Validator::make($request->all(), [
            'user_id' => ['required'],
            'occasion_name' => ['required', 'string', 'max:255'],
            'occasion_date' => ['required', 'date'],
            'contribution_deadline_date' => ['required', 'date'],
            //            'celebrants' => ['required']
        ]);

        if($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'fix errors',
                'errors' => $validator->errors()], 500
            );
        }
        //echo "<pre>"; print_r($request->all()); exit;
        if ($request->file('greet_img_name')) {
            $imageGellary    = $request->file('greet_img_name');
            $name = $imageGellary->getClientOriginalName();
            $file_name = explode('.', $name)[0];
            $extension = $imageGellary->getClientOriginalExtension();
            Storage::disk('greet_img')->put($name, file_get_contents($imageGellary->getRealPath()));
            $request['greet_img'] = $name;
            $request['greet_img_link'] = asset('storage/greet_img/'.$name);
        }

        try {

            $greetObj = Greet::find($request->greet_id);

            $greetObj->update($request->all());
            //echo "<pre>"; print_r($greetObj); exit;
            /*Old Delete*/
            $GreetCelebrantDel = GreetCelebrant::where('greet_id',$request->greet_id)->delete();

            if (isset($greetObj->id)) {
                $celebrants = $request->celebrants;

                if (isset($celebrants) && count($celebrants) > 0) {
                    foreach ($celebrants as $celebrant) {

                        $celebrantArr = [
                            'greet_id' => $greetObj->id,
                            'first_name' => $celebrant['first_name'],
                            'last_name' => $celebrant['last_name'],
                        ];
                        $celebrantObj = GreetCelebrant::create($celebrantArr);
                    }
                }
            }

            $greetData = Greet::with('user','greetCelebrant')->find($greetObj->id);

            return response()->json([
                'status' => 201,
                'message' => 'Greet Created Successfully.',
                'greet' => $greetData
            ], 201
            );
        } catch (\Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e->getMessage()], 400
            );
        }
    }

    /*Greet Wise Media Get*/
    public function getMedia($id)
    {
        $greetmedia = GreetMedia::with('user')->where('greet_id',$id)->where('greet_media_type', 'uploads')->whereNotNull('order')->orderBy('order','ASC')->get()->toArray();
        foreach($greetmedia as $key => $value){
            if($value['media_type'] == 'video'){
                $media_name = $value['media_name'];
                // Split the string by dot
                $parts = explode(".", $media_name);
                $value1 = $parts[0];
                $filePath = 'app/public/greetMedia/uploads/'.$id.'/'.$value1.'.jpg';
               
                if (File::exists(storage_path($filePath))) {
                    $viewpath = 'storage/greetMedia/uploads/'.$id.'/'.$value1.'.jpg';
                    $greetmedia[$key]['media_video_image'] =  $viewpath;
                }
                
            }
        }
        if(count($greetmedia) != 0){
            return response()->json([
                'status' => 200,
                'message' => 'All Greet Media successfully',
                'greetmedia' => $greetmedia
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet Media  not found',
            ], 400);
        }
    }

    /*User */
    public function urlGenerateInviteGreet($id)
    {
        if(!empty($id)){
            $greetid = base64_encode($id);
            $currenturl = url()->current();
            $Url = url('InvitedToGreet/'.$greetid);
            return response()->json([
                'status' => 200,
                'message' => 'Generate Link',
                'alluserdetail' => $Url
            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet Id  not found',
            ], 400);
        }
    }

    /* Upload Greet Media by Guest User */
    public function uploadGreetMediaByGuest(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required'],
            'email' => ['required'],
            'greet_token' => ['required'],
            //'media' => ['required'],
        ]);
        
        if($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'fix errors',
                'errors' => $validator->errors()], 500
            );
        }

        try {
            $greetId = base64_decode($request->greet_token);
            $userInput = [
                'first_name' => $request->first_name,
                'last_name'  => $request->last_name,
                'email'      => $request->email,
                'type'       => 'guest',
                'greet_id'    => $greetId,
            ];
            $greetmedia = '';
            $userFind = User::where('email',$request->email)->first();
            if(empty($userFind)){
                $userObj = User::create($userInput);
            } else {
                $greetmedia = GreetMedia::with('user')->where('greet_id',$greetId)->where('user_id',$userFind->id)->get();
                $userObj = $userFind;
            }
    
            if(!empty($request->file('media')) ){
                foreach ($request->file('media') as $key => $value) {
                //  $mediaThumb = $request->file('media_thumb');
                $name = $value->getClientOriginalName();
                $extension = $value->getClientOriginalExtension();
                $MediaName = Str::random(10);
                $videocontentType = $value->getClientMimeType();
                // dd( $name,$extension,$MediaName,$videocontentType);
                if($videocontentType == 'video/quicktime'||$videocontentType == 'video/mp4' || $extension == 'mov'  || $extension == 'mp4'  ){
                    $extension = 'mp4';  
                    // dd($extension);
                }
                if(empty($extension)){
                     $extension = 'jpg';  
                }
                $generatedMediaName = $MediaName. '.'.$extension;
                // dd($generatedMediaName);
                $path = $greetId.'/'.$generatedMediaName;
                $fileName   = time() . '.' . $value->getClientOriginalExtension();
                // condition for mp4 and image thumb 
                if($extension =='mp4')
                {   
                    // dd($fileName);
                    Storage::disk('greet_media_uploads')->put($path, file_get_contents($value));
                //    dd($ans,$generatedMediaName );
                    $mediaPath = '/storage/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
                    VideoThumbnail::createThumbnail(
                        storage_path($mediaPath), 
                        storage_path('app/public/greetMedia/uploads/'.$greetId.'/'), 
                        $MediaName.'.jpg', 
                        2, 
                        3000, 
                        3000
                    );
                }else{
                    $img = Image::make($value->getRealPath());
                    $img->stream(); // <-- Key point
                    Storage::disk('greet_media_uploads')->put($path.'/', $img, 'public');
                   // Storage::disk('greet_media_uploads')->put($path, file_get_contents($value));
                }
                
                $allowedMimeTypes = ['image/jpeg','image/gif','image/png'];
                $contentType = $value->getClientMimeType();
                if(! in_array($contentType, $allowedMimeTypes) ){
                    $mediatype = 'video';
                }else{
                    $mediatype = 'image';
                }
                $mediaPath = '/storage/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
                $file_path = storage_path('app/public/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName);
                //  $thumbFilePath = asset('/storage/mediaThumb/'.$generatedThumbName);
                /*Last data get*/
                $latest = GreetMedia::where('greet_id', $greetId)->latest('order')->first();

                if(empty($latest)){
                    $order = 1;
                } else {
                    $order = $latest->order + 1;
                }
                /*custome duration */
                // dd($file_path);

                $ffprobe = FFMpeg\FFProbe::create();
                $duration = $ffprobe->format($file_path)->get('duration');
                // dd($duration);
                // $c=' -i ' .  $file_path;
                // // dd('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c);
                // $videoDuration=exec('ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1'.$c,$output);
                // dd($videoDuration);

                $totalSec = round($duration);
                // dd($totalSec);
                $mint = floor($totalSec/3600).gmdate(":i:s", $totalSec%3600);
                // dd($duration);
                $celebrantArr = [
                    'greet_id'              => $greetId,
                    'media_name'            => $generatedMediaName,
                    'media_type'            => $mediatype,
                    'media_path'            => $mediaPath,
                    'greet_media_type'      => 'uploads',
                    'user_id'               => $userObj->id,
                    'order'                 => $order,
                    'media_sec'             => $totalSec,
                    'media_min'             => $mint,
                    'status'                => '1',
                ];
                $insertGreetMedia = GreetMedia::create($celebrantArr);
                // dd($duration,$totalSec,$mint,$celebrantArr,$insertGreetMedia);

            }
            }
            

            $greetmedia = GreetMedia::with('user')->where('greet_id',$greetId)->where('user_id',$userObj->id)->get();
         
            /*Mail send */
            $greetData = Greet::find($greetId);
            //echo "<pre>";print_r($greetmedia);exit;
            if(!empty($greetData)){
                $usermail = User::find($greetData['user_id']);
                $dataSend['contributter_name'] =  $request->first_name;
                $dataSend['occasions_name'] = $greetData['occasion_name'];
                $toEmail = $usermail['email'];
                //echo "<pre>";print_r($toEmail);exit;
                Mail::send('email.uploadgreet', $dataSend, function ($message) use ($toEmail) {
                     $message->to($toEmail, 'Sucessfuly Upload Greet Media')->subject('Your Guest has Contributed to your U-Greet!');
                });
            }
            /*End*/
            return response()->json([
                'status' => 201,
                'message' => 'Greet Media Created Successfully.',
                'greetmedia' => $greetmedia,
            ], 201
            );
        } catch (\Exception $e) {
            return response()->json([
                'status' => 400,
                'message' => $e->getMessage()], 400
            );
        }
    }

    /*Delete Greet Media*/
    public function deleteGreetMedia($id) 
    {
        $greetmedia = GreetMedia::find($id);
        if(!empty($greetmedia)){
            $file =public_path($greetmedia->media_path);
            $file_path=pathinfo(public_path($greetmedia->media_path));

            $extension=$file_path['extension'];
            if(file_exists($file)) {
                if($extension=='mp4')
                {
                    echo $img_path =$file_path['dirname'].'/'.$file_path['filename'].'.jpg';
                    if(file_exists($img_path))
                    {
                        unlink($img_path);
                    }

                }
               unlink($file);
            }
            $greetmedia->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Greet Media deleted successfully',

            ], 200);
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet Media  not found',
            ], 400);
        }
    }

    /*Finalize U-Greet*/
    public function finalizeGreet($id)
    {
        $greet = Greet::with('greetMedia', 'greetCelebrant')->where('id',$id)->first();
        $videorequest = GenerateVideoRequest::where('greet_id',$id)->first();
        $greeetpayment = PaymentTransaction::where('greet_id',$id)->first();

        if(!empty($greet) && isset($greet['greetMedia']) && sizeof($greet['greetMedia']) > 0) {
            $videosec = array();
            /*Plan Check */
            $userId = Auth::user()->id;
            $plancheck = Greet::where('user_id', $userId)->where('greet_plan',3)->get()->toArray();

            if(!empty($plancheck)){
                        if(count($plancheck) < 3 ){
                           $greet['payment_status']  = 'succeeded';
                            if(!empty($videorequest)){
                               $videorequest->payment_status = 1;
                               $videorequest->save();
                            }
                        } else {
                            // exit;
                            $plancheck1 = Greet::where('user_id', $userId)->where('greet_plan',3)->get();
                            foreach($plancheck1 as $key=> $value){
                                $value->greet_plan = "Null";
                                $value->save();
                            }
                        }
                    }
                    // exit;
                    if(!empty($videorequest)){
                        if($videorequest->payment_status==1)
                        {
                            $greet['payment_status']  = 'succeeded';
                        }
                    }        
                    if(!empty($greeetpayment) && $videorequest['payment_status'] != 0){
                        
                         $greet['payment_status'] = $greeetpayment->payment_status;
                    } else {
                       
                        $greet['payment_status']  = '';
                    }
                    

                   $videosec = 0;
                   $video_path = '';
                    foreach ($greet['greetMedia'] as $media) {
                        if ($media->greet_media_type == 'final') {
                            $video_path = asset($media->media_path);
                            $videosec = $media->media_sec;
                            $video_path = ('storage/greetMedia/final/'.$id.'/'.$media->media_name);
                           
                        } else if($media->greet_media_type == 'preview') {
                            $video_path = asset($media->media_path);
                            $videosec = $media->media_sec;
                        }

                    }
                    $totalSec = 0;
                    $totalSec = $videosec;
                    $duration = $totalSec / 60;
                    $greet['video_length'] = gmdate("H:i:s", $totalSec);
                    $greet['duration'] = $duration;
                    $greet['video_link'] = $video_path;
                    $greet['greet_for'] = $greet->greetCelebrant[0]->first_name;
                    $greet['plan2'] = 19.99 + 2.60;
                    //$greet['plan3'] = 49.99 +6.50;
                    $greet['plan3'] = 17.0;

                    if ($greet->occasion_name == 'Sweet Greet' && $duration <= 3) {
                        $greet['price'] = 'free';
                    } else if ($duration <= 30) {
                        /*13 HST*/
                        $greet['price'] = 19.99 + 2.60;
                    } else if ($duration <= 45) {
                        /*13 HST*/
                        $greet['price'] = 49.99 +6.50;
                    } 

        }
        /*Video Request*/
        $request_video = GenerateVideoRequest::where('greet_id',$id)->latest()->first();
        $greet['request_video_status'] = '';
        if(!empty($request_video)){
            if($request_video->status == '0'){
                $greet['request_video_status'] = 'Pending';
            }
            if($request_video->status == '1'){
                $greet['request_video_status'] = 'In Progress';
            }
            if($request_video->status == '2'){
                $greet['request_video_status'] = 'Done';
            }
            if($request_video->status == '3'){
                $greet['request_video_status'] = 'Failed';
            }
        }
        $uploads = GreetMedia::where('greet_id',$id)->where('greet_media_type', 'uploads')->first();
        $greet['uploads_media'] = 'False';
        if(!empty($uploads)){
            $greet['uploads_media'] = 'true';
        }
        //echo "<pre>";print_r($greet);exit;
        if(!empty($greet)) {
            return response()->json([
                'status' => 201,
                'message' => 'Greet finalize video get successfully.',
                'greetmedia' => $greet,
            ], 201
            );
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet not found',
            ], 400);
        }

    }

    public function createVideoBk(Request $request)
    {
        $greetId = $request->greet_id;
        $greetObj = Greet::find($greetId);
        $greetMediaFiles = GreetMedia::where('greet_id', $greetId)->where('greet_media_type','uploads')->orderBy('order')->get();

        $greetTheme = $greetObj->greetTheme;
        $greetThemeMusic = $greetObj->greetMusic;

        $suCmd = 'ffmpeg';
        $filter='-filter_complex "';
        $i=0;
        $img_index= '';
        $index='';
        $index_number='';

        $n=sizeof($greetMediaFiles);

        if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) {
            foreach ($greetMediaFiles as $greetMediaFile) {
                $allex = array('jpeg','png','jpg');
                $extension = pathinfo($greetMediaFile->media_path, PATHINFO_EXTENSION);
                $greetMediaType = $greetMediaFile->media_type;

                $greetMedia = asset($greetMediaFile->media_path);
                // image
                if(in_array($extension,$allex))
                {
                    $suCmd .= ' -loop 1 -framerate 24 -t 10 -i '.$greetMedia;
                    $img_index='[img'.$i.']';
                    $filter.='['.$i.']scale=432:432,setsar=1'.$img_index.';';
                    $index.=$img_index.'['.$n.']';
                    $i++;
                }

                // video
                if ($greetMediaType == 'video') {
                    $video='';
                    $video_index='[vid'.$i.']';
                    $suCmd .= ' -i ' . $greetMedia;
                    $filter .= '['.$i.']scale=432:432,setsar=1'.$video_index.';';
                    $index .= $video_index.'['.$i.']';
                    $i++;
                }
            }
        }
        $finalvideopath = storage_path('app/public/greetMedia/final/' . $greetId . '/');
        // exit;
        File::makeDirectory($finalvideopath, 0775, true, true);
        $rdname = date('YmdHis');
        $command = $suCmd.' '.$filter.$index.'concat=n='.$n.':v=1:a=1" '.$finalvideopath.$rdname.'lastvideoSu.mp4';
        // print_r($command);

        exec($command,$output, $retval);
        echo "Returned with status $retval and output:\n";

        $finalvideo=new GreetMedia();
        $finalvideo->greet_id=$greetId;
        $finalvideo->media_path=$finalvideopath;
        $finalvideo->media_name=$rdname.'lastvideoSu.mp4';
        $finalvideo->greet_media_type='final';
        $finalvideo->save();
        // audio merge:-

        //exit;
        $musicCmd ="";
        $path=" /var/www/html/ugreet/public/";
        if(isset($greetThemeMusic))
        {
            $greetMusicPath = $greetThemeMusic->file_path;

            $musicCmd .= ' -i ' . $greetMusicPath;

          //  echo $musicCmd = 'ffmpeg -i '.$path.$rdname.'lastvideoSu.mp4'.$musicCmd.' -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 '.$rdname.'lastvideoaudio.mp4';

            exec($musicCmd,$output, $retval);

            echo "Returned with status $retval and output:\n";
        }
        exit();

        // set background image
        $backimgcmd='ffmpeg ';
        if(isset($greetTheme))
        {
            $path=" /var/www/html/ugreet/public/";
            $greetThemePath = $greetTheme->file_path;

            $backimgcmd .= ' -loop 1 -i ' . $greetThemePath;

            $backimgfilter=' -filter_complex  "[1:v]scale=200:-1[fg];[0][fg]overlay=(W-w)/2:(H-h)/2:shortest=1"' ;

            echo $command2=$backimgcmd.' -i '.$path.$rdname.'lastvideoaudio.mp4'.$backimgfilter.' '.$rdname.'lastvideoSsss.mp4';
            // exit;
            exec($command2,$output, $retval);

            echo "Returned with status $retval and output:\n";

        }
        // print_r($greetThemePath);

        echo "Returned with status $retval and output:\n";


        // two audio play at same time
        //  exec('ffmpeg -i /var/www/html/darshan/laravel/video/public/t_v_1.mp4 -i /home/abbacus/Downloads/sunrise-114326.mp3 -filter_complex " [0:a]volume=0.5[mic];[1:a]volume=0.7[a1];[mic][a1]amix=[a]" -map 0:v -map "[a]" outputaudio.mp4',$output,$retval);

    }

    public function createVideo (Request $request) {

        $greetId = $request->greet_id;
        $greetObj = Greet::find($greetId);
            //        print_r("Here");exit;

            //        event(new CreateVideo($greetId));

        $createVideoReq = [
            'user_id' => $greetObj->user_id,
            'greet_id' => $greetId,
            'status' => '0',
            'payment_status' => '0',
        ];
        
        $greetVideoRequest = GenerateVideoRequest::where('greet_id', $greetId)->where('status', '0')->first();

        if (isset($greetVideoRequest)) {
            $greetVideoRequestObj = $greetVideoRequest->update($createVideoReq);
        } else {
            $greetVideoRequestObj = GenerateVideoRequest::create($createVideoReq);
        }
            exit;
        if (isset($greetVideoRequestObj)) {
            $data="Sucessfuly";
            Mail::to($greetObj->user->email)->send(new ProgressMail($data));
            return response()->json([
                'status' => 200,
                'message' => 'Create Video request generated successfully.'
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => 'There is some issue with video creating! Please contact support.'
            ], 500);
        }

        //  $greetObj = Greet::find($greetId);
        //  $greetMediaFiles = GreetMedia::where('greet_id', $greetId)->where('greet_media_type','uploads')->orderBy('order')->get();

        /*$greetTheme = $greetObj->greetTheme;
        $greetThemeMusic = $greetObj->greetMusic;

        $suCmd = 'ffmpeg';
        $filter='-filter_complex "';
        $i=0;
        $img_index= '';
        $index='';
        $index_number='';

        $n=sizeof($greetMediaFiles);

        if (isset($greetMediaFiles) && sizeof($greetMediaFiles) > 0) {
            foreach ($greetMediaFiles as $greetMediaFile) {
                $allex = array('jpeg','png','jpg');
                $extension = pathinfo($greetMediaFile->media_path, PATHINFO_EXTENSION);
                $greetMediaType = $greetMediaFile->media_type;

                $greetMedia = asset($greetMediaFile->media_path);
                // image
                if(in_array($extension,$allex))
                {
                    $suCmd .= ' -loop 1 -framerate 24 -t 10 -i '.$greetMedia;
                    $img_index = '[img'.$i.']';
                    $filter .= '['.$i.']scale=432:432,setsar=1'.$img_index.';';
                    $index .= $img_index.'['.$n.']';
                    $i++;
                }

                // video
                if ($greetMediaType == 'video') {
                    $video='';
                    $video_index = '[vid'.$i.']';
                    $suCmd .= ' -i ' . $greetMedia;
                    $filter .= '['.$i.']scale=432:432,setsar=1'.$video_index.';';
                    $index .= $video_index.'['.$i.']';
                    $i++;
                }
            }
        }*/

        // add Audio
        /*if(isset($greetThemeMusic))
        {
            $greetMusicPath = $greetThemeMusic->file_path;

            $suCmd .= ' -t 10 -i ' . $greetMusicPath;
        } else {
        }*/

        /*        $suCmd .=' -f lavfi -t 1 -i anullsrc ';
        $finalvideopath = storage_path('app/public/greetMedia/final/' . $greetId . '/');

        if(!File::isDirectory($finalvideopath)){
            File::makeDirectory($finalvideopath, 0775, true, true);
        }

        $rdname = date('YmdHis');
        $command=$suCmd.' '.$filter.$index.'concat=n='.$n.':v=1:a=1" '.$finalvideopath.$rdname.'finalVideo.mp4';

        exec($command,$output, $retval);

        //Find duration time

        $timecmd=exec('ffmpeg -i '.$finalvideopath.$rdname.'lastvideoSu.mp4 2>&1 | grep Duration | cut -d " " -f 4 | sed s/,//');
        $time=Carbon::create($timecmd);
        $time_sec=$time->minute*60 + $time->second;
        $time_min=$timecmd;

        //store video in database

        $finalvideo=new GreetMedia();
        $finalvideo->greet_id=$greetId;
        $finalvideo->media_type='video';
        $finalvideo->media_path=$finalvideopath.$rdname.'lastvideoSu.mp4';
        $finalvideo->media_name=$rdname.'lastvideoSu.mp4';
        $finalvideo->greet_media_type='final';
        $finalvideo->user_id=$greetObj->user_id;
        $finalvideo->media_sec=$time_sec;
        $finalvideo->media_min=$time_min;
        $finalvideo->save();

        if ($retval==0) {
            return response()->json([
                'status' => 200,
                'message' => 'Video Merge successfully',
                'data' => $finalvideo
            ], 200);
        }else {
            return response()->json([
                'status' => 204,
                'message' => 'Video Not Merge',
            ], 204);
        }*/

    }

    public function UpdateGreetImage(Request $request)
    {
        $alldata   = $request->all();
        $imagename = $request->file('image');
        $update    = GreetMedia::where('greet_id',$alldata['greetid'])->where('media_name',$imagename->getClientOriginalName())->first();
                                                             
        if(!empty($update['media_path'])){
            //unlink(public_path($update['media_path']));
            $oldmedia = $update['media_path'];
            $extension = $imagename->getClientOriginalExtension();
            $generatedMediaName = Str::random(10). '.'.$extension;
            $path = $alldata['greetid'].'/'.$generatedMediaName;
           
        
             //Storage::disk('greet_media_uploads')->put($path, file_get_contents($imagename->getRealPath()));
            $img = Image::make($imagename->getRealPath());
            $img->stream(); // <-- Key point
            Storage::disk('greet_media_uploads')->put($path.'/', $img, 'public');
            //Storage::disk('greet_media_uploads')->put($path.'/', $img, 'public');

            $mediaPath = '/storage/greetMedia/uploads/'.$alldata['greetid'].'/'.$generatedMediaName;
            $file_path = asset('/storage/greetMedia/uploads/'.$alldata['greetid'].'/'.$generatedMediaName);
            $update->media_name    = $generatedMediaName;
            $update->media_type    = 'image';
            $update->media_path    = $mediaPath;
            $update->save();
            unlink(public_path($oldmedia));
        }
        return response()->json([
            'status' => 201,
            'message' => 'Greet Media Created Successfully.'], 201
        );
        
    }

    public function UpdateGreetVideo(Request $request)
    {
        $alldata   = $request->all();
        // $request->file;
        $greetId=$alldata['greet_id'];
        $video_oldpath = public_path($request->file);
        $videorotation = $request->rotation;
        $MediaName= Str::random(10);
        $generatedMediaName =$MediaName. '.mp4';
        $mediaPath_db = '/storage/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
        $mediaPath=public_path($mediaPath_db);
        $update  = GreetMedia::where('greet_id',$greetId)->where('media_path',$request->file)->first();
        $transpose_filter=' -vf ';

        if($videorotation=='90')
        {
            $transpose_filter.='" transpose=1,transpose=1,transpose=1 "';
        }
        elseif ($videorotation=='180') {
            $transpose_filter.='" transpose=1,transpose=1 "';
        }
        elseif($videorotation=='270'){
            $transpose_filter.='" transpose=1 "';
        }
        else{
            $transpose_filter='';
        }
        // echo $transpose_filter;
        // echo "<pre>";print_r($update);exit;
        // exit;
        if($update['media_path'])
        {
            $videorotate_cmd='ffmpeg -i '.$video_oldpath.' '.$transpose_filter.' -c:v libx264 -preset ultrafast -crf 22 -c:a copy '.$mediaPath;
            // exit;
            exec($videorotate_cmd,$output, $retval);
            
            if($retval==0) 
            {
                $update->media_name    = $generatedMediaName;
                $update->media_type    = 'video';
                $update->media_path    = $mediaPath_db;
                $update->save();
                if($update)
                {
                    $mediaPath_thumb = 'app/public/greetMedia/uploads/'.$greetId.'/'.$generatedMediaName;
                    VideoThumbnail::createThumbnail(
                        storage_path($mediaPath_thumb), 
                        storage_path('app/public/greetMedia/uploads/'.$greetId.'/'), 
                        $MediaName.'.jpg', 
                        2, 
                        3000,
                        3000
                    );
                    unlink($video_oldpath);
                }
                return response()->json([
                    'status' => 201,
                    'message' => 'Greet Media Created Successfully.'], 201
                );
            } 
            else{
                return "failed";
            }
        }
    }

    /*User Wise Upload Greet Get*/
    public function getContributerMedia(Request $request)
    {
        $userFind = User::where('email',$request->email)->first();
        $greetId = base64_decode($request->greet_token);
        if(!empty($userFind)){
            $greetmedia = GreetMedia::with('user')->where('greet_id',$greetId)->where('user_id',$userFind->id)->get();
        }
        if(!empty($greetmedia)){
            return response()->json([
                'status' => 201,
                'message' => 'Greet Media Successfully Get.',
                'greetmedia' => $greetmedia,
            ], 201
            );
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'Greet Media  not found',
            ], 400);
        }
    }
}
