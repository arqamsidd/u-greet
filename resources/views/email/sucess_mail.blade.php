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
	@if(isset($data['message']))
	<p>Your video has been successfully generated. Please click the link given below to check your video.</p>
	<a style="text-align: center;" href="{{url($data['link'])}}"> Click here</a>
	@else
	<div style="text-align: center;">{{$data}}</div>
	@endif
	<div class="footer">
		<div style="margin-top: 5px;">
			<span class=""><?php echo date("Y"); ?> ©</span>
			<a class="" href="https://app.u-greet.com" target="_blank" style="text-decoration: none;">U-Greet</a>
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