<!DOCTYPE html>
<html id="ugreetAppHtml" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>❣️ U-Greet</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

        .invalid-feedback {
            display: block !important;
        }
    </style>

    <link href="{{mix('css/app.css')}}" type="text/css" rel="stylesheet" />
    <link href="{{ asset('assets/css/bootstrap.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/stack-interface.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/socicon.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/lightbox.min.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/flickity.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/iconsmind.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/jquery.steps.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/theme.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/custom.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/font-roboto.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/2.d11a5725.chunk.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/main.4afb4b3e.chunk.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/plugins/custom/fullcalendar/fullcalendar.bundle-v%3d7.2.7.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/plugins/global/plugins.bundle-v%3d7.2.7.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/plugins/custom/prismjs/prismjs.bundle-v%3d7.2.7.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="{{ asset('assets/css/style.bundle-v%3d7.2.7.css') }}" rel="stylesheet" type="text/css" media="all" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Start cookieyes banner --> <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1d3b60f3b5dd8c5af389ada8/script.js"></script> <!-- End cookieyes banner -->

</head>
<body class="antialiased">

<noscript>You need to enable JavaScript to run this app.</noscript>

<div><div id="app"></div></div>
<script src="{{mix('js/app.js')}}" type="text/javascript"></script>
<script src="{{ asset('assets/js/jquery-3.1.1.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/flickity.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/easypiechart.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/parallax.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/typed.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/datepicker.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/isotope.min.js') }}" type="text/javascript"></script>
<!-- <script src="{{ asset('assets/js/ytplayer.min.js') }}" type="text/javascript"></script> -->
<script src="{{ asset('assets/js/lightbox.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/granim.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/jquery.steps.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/countdown.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/twitterfetcher.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/spectragram.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/smooth-scroll.min.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/scripts.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/rellax.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/auth/js/2.f55cc9b8.chunk.js') }}" type="text/javascript"></script>
<script src="{{ asset('/assets/auth/js/main.e3b20165.chunk.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/plugins.bundle7a50.js') }}" type="text/javascript"></script>
<script src="{{ asset('assets/js/scripts.bundle-v=7.2.7.js') }}" type="text/javascript"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script> var KTAppSettings = { "breakpoints": { "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1200 }, "colors": { "theme": { "base": { "white": "#ffffff", "primary": "#6993FF", "secondary": "#E5EAEE", "success": "#1BC5BD", "info": "#8950FC", "warning": "#FFA800", "danger": "#F64E60", "light": "#F3F6F9", "dark": "#212121" }, "light": { "white": "#ffffff", "primary": "#E1E9FF", "secondary": "#ECF0F3", "success": "#C9F7F5", "info": "#EEE5FF", "warning": "#FFF4DE", "danger": "#FFE2E5", "light": "#F3F6F9", "dark": "#D6D6E0" }, "inverse": { "white": "#ffffff", "primary": "#ffffff", "secondary": "#212121", "success": "#ffffff", "info": "#ffffff", "warning": "#ffffff", "danger": "#ffffff", "light": "#464E5F", "dark": "#ffffff" } }, "gray": { "gray-100": "#F3F6F9", "gray-200": "#ECF0F3", "gray-300": "#E5EAEE", "gray-400": "#D6D6E0", "gray-500": "#B5B5C3", "gray-600": "#80808F", "gray-700": "#464E5F", "gray-800": "#1B283F", "gray-900": "#212121" } }, "font-family": "Poppins" };</script>
<script>
    var rellax = new Rellax('.rellax');
</script>


</body>
</html>
