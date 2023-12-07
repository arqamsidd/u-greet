<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>
	<div class="logo">
		<img alt="Logo" src="{{asset('assets/media/logos/logo-dark.png')}}"  class="img logo-sticky">
	</div>
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr style="margin-top: 20px;" >
		<td>
			<h3 style="margin-top: 20px;padding:0px 15px; font-family: 'Merriweather', serif;text-align: center; text-decoration: none; font-size: 18px; color: #000;font-weight: bolder;">Greetings, fellow U-Greeter!</h3>
		</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">We are so proud to share that your tribute video is completed. We hope you love the story that unfolds in this timeless legacy collaboration.</p>

				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">We ask that you download your video today. We do store this for you for 6 months but it is strongly recommended that you download and save this right away. We would love to store this forever, but as you can imagine there are so many stories that need to be told! We want to always make sure that our site remains affordable and fast!</p>

				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">You may not know but U-Greet was born out of loss. The founders of U-Greet had empty holes in their hearts for loved ones who had gone too soon. The concept of U-Greet was to make sure that each and every person has the opportunity to leave behind not just memories but full stories. Memories fade, legends live forever.</p>

				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">Stamp in time the little things that make us who we are; all the moments in life, sealed in time in our easy to use video time capsule</p>

				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">No matter the occasion, we want to capture it for you forever; from adventures stories, birthday tales or a documentary told by loved ones for those who’ve passed on so they can ‘live’ in remembrance. </p>


				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">U -Greet has you covered for all of life’s moments.</p>

				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px;">We thank you for allowing us the honour of being a part of your family.</p>
			</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<a href="{{$link}}">Video Link</a>
			</td>
		</tr>
		<tr style="margin-top: 20px;" >
			<td>
				<h3 style="margin-top: 20px;padding:0px 15px; font-size: 18px; color: #000;font-weight: bolder;">Love Always,
					U-Greet XO</h3>
			</td>
		</tr>
		<tr>
		<td>
			<h3 style="margin-top: 20px;padding:0px 15px; font-size: 18px; color: #000;font-weight: bolder;">P.S. yes, it is totally normal to watch your video a hundred times over and smile every single time!</h3>
		</td>
		</tr>
	</table>
	<div class="footer">
		<div style="margin-top: 5px;">
			<span class=""><?php echo date("Y");  ?>©</span>
			<a class="" href="{{url('/')}}" target="_blank" style="text-decoration: none;">U-Greet</a>
		</div>
	</div>
</body>
</html>
<style>
	.logo{
		text-align: center;
		margin: 10px;
		border-bottom: solid 1px;
		color: lightgray;
	}
	.img{
		width: 100px;
		margin-bottom: 5px;
	}
	.footer{
		margin: 10px;
		text-align: center; 
		border-top: solid 1px lightgray;
	}
</style>