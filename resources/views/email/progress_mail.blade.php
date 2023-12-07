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
			<h3 style="margin-top: 20px;padding:0px 15px; font-family: 'Merriweather', serif; text-decoration: none; font-size: 18px; color: #000;font-weight: bolder;">Greetings, U-Greeter!</h3>
		</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">It’s official, you are now part of the U-Greet family!</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">We wanted to share with you that we have received your final video for compilation and that we are busy at work making it worthy of your loved one.</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">We get excited every time we are able to tell someone’s story and be a part of their forever. We can’t wait for you to see the love when your video is done.</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Full disclosure: there’s generally not a dry eye in the house! U-Greet tends to hit people right in the heart! Be prepared to shed a tear or two.</p>
			</td>

			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">We will let you know when your video has been completed. If you need anything from us, please do reach out to us at support@u-greet.com so we can ensure that your story is told your way!</p>
			</td>
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Happy Greeting and we will be in touch in the next 72 hours with your video.</p>
			</td>
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Happy Greeting and we will be in touch in the next 72 hours with your video.</p>
			</td>
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Happy Greeting and we will be in touch in the next 72 hours with your video.</p>
			</td>

		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p>Love Always, U-Greet XO</p>
			</td>
		</tr>

		<tr style="margin-top: 20px;" >
			<td>
				<h3 style="margin-top: 20px;padding:0px 15px; font-size: 18px; color: #000;font-weight: bolder;">P.S. we have some great suggestions on our website for presenting your video per the occasion if you need any creative help with your delivery<a href="{{url('/')}}">U-Greet</a></h3>
			</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p>Follow us on Facebook and Instagram as well for helpful tips to make your video the absolute best gift you have every given @u_greetofficial</p>
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