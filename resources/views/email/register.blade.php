<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>

<body>
	<div class="logo">
		<img alt="Logo" src="{{asset('assets/media/logos/logo-dark.png')}}" class="img logo-sticky">
	</div>
	<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
		<tr style="margin-top: 20px;">
			<td>
				<h3 style="margin-top: 20px;padding:0px 15px; font-family: 'Merriweather', serif; text-decoration: none; font-size: 18px; color: #000;font-weight: bolder;">Dear U-Greeter,</h3>
			</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<p style="font-size: 10pt; font-family: 'Open Sans', sans-serif; color: #000; text-align: justify; margin-top: 15px; text-decoration: none;">Your U-Greet journey is about to begin. Your account is now active and ready for you to start creating. Add photos and videos, invite friends to contribute and watch as your story begins to unfold.</p>
			</td>
		</tr>
		<tr style="margin-top: 20px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<a href="{{url('/dashboard')}}">My Dashboard</a>
			</td>
		</tr>
		<tr style="margin-top: 5px;">
			<td style="display: block;margin:0px auto; padding:0px 15px">
				<div>
					<span class=""><?php echo date("Y");  ?> ©</span>
					| Follow us on Facebook and Instagram as well for upcoming promotions, contests, blogs and new occasions <a class="" href="https://u-greet.com/" target="_blank" style="text-decoration: none;">U-Greet</a>
				</div>
			</td>
		</tr>
	</table>
	<div class="footer">

	</div>
</body>

</html>
<style>
	.logo {
		text-align: center;
		margin: 10px;
		border-bottom: solid 1px;
		color: lightgray;
	}

	.img {
		width: 100px;
		margin-bottom: 5px;
	}

	.footer {
		margin: 10px;
		text-align: center;
		border-top: solid 1px lightgray;
	}
</style>