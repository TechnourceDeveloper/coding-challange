<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', '') }}</title>

    <base href="/">
    <link href="{{ asset('/admin/css/admin.css') }}" title="prod" rel="stylesheet" />
</head>

<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="app"></div>
</body>

<script src="{{ asset('/admin/js/manifest.js') }}"></script>
<script src="{{ asset('/admin/js/vendor.js') }}"></script>
<script src="{{ asset('/admin/js/admin.js') }}"></script>

</html>
