<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="/logo-tiny.png"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <link rel="apple-touch-icon" href="{{ asset('/logo-tiny.png') }}/logo-tiny.png"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="manifest" href="/manifest.json"/>
    <script src="https://rawgit.com/enyo/dropzone/master/dist/dropzone.js"></script>
    <link rel="stylesheet" href="https://rawgit.com/enyo/dropzone/master/dist/dropzone.css">
    <title>❣️ U-Greet | @yield('title')</title>
    <style>
        body {
            overflow-x: hidden
        }
    </style>
    <link href="{{ asset('assets/auth/js/2.d11a5725.chunk.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/auth/js/main.4afb4b3e.chunk.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/auth/css/custom.css') }}" rel="stylesheet">
</head>

<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root">
    <div>
        <div class="Toastify"></div>
        @yield('content')
    </div>
</div>
<script src="{{ asset('assets/auth/js/2.f55cc9b8.chunk.js') }}"></script>
<script src="{{ asset('assets/auth/js/main.e3b20165.chunk.js') }}"></script>
</body>

</html>
