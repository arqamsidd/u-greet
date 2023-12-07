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
			<h3 style="margin-top: 20px;padding:0px 15px; font-family: 'Merriweather', serif; text-decoration: none; font-size: 18px; color: #000;font-weight: bolder;">Greetings fellow U-Greeter,</h3>
		</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">We are beyond excited to share that you have been personally selected to join a video tribute for {{$name}}</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;"> {{$name}} loved ones have personally invited you to be a part of this forever story that they want to tell. Being included in someone’s video time capsule is a huge honour; it says that {{$occasion_name}}, U are important and U should be recorded for all time. So, congratulations on being an awesome human!</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">We at U-Greet believe strongly in love, life, moments, stories and legacies. So much so that we built this site to ensure that no story goes untold and that no one gets left behind.</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Could you please help these extraordinary people tell the story they wish to share?</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Upload your favourite pictures and videos and be the reason someone smiles today!</p>
			</td>

		</tr>
	    <tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p>Love Always, U-Greet XO</p>
			</td>
		</tr>

		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<h3 style="margin-top: 20px;padding:0px 15px; font-size: 18px; color: #000;font-weight: bolder;">P.S. for tips on what to upload or creative ideas, check us out at <a href="{{url('/')}}">U-Greet</a></h3>
			</td>
		</tr>
	</table>
	<div class="footer">
		<div style="margin-top: 5px;">
			<span class=""><?php echo date("Y");  ?>©</span>
			<a class="" href="#" target="_blank" style="text-decoration: none;">U-Greet</a>
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