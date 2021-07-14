<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
		<title>@yield('title')</title>
		<link rel="stylesheet" id="style-css" href="{{ asset('css/libs.css') }}" type="text/css" media="all">
		<link rel="stylesheet" id="style-css" href="{{ asset('css/style.css') }}" type="text/css" media="all">
		<style>
			/* FAST FIX */
			.error > input {
				border-color: #ff1a1a;
			}
			input.error {
				border-color: #ff1a1a;
			}
			input.error ~ .error__text,
			.error > .error__text,
			.error + .error__text {
				color: #ff1a1a;
				font-size: 12px;
				padding-top: 5px;
			}
		</style>
	</head>
	<body>
		<div class="@yield('page')">
            @yield('content')
		</div>
		<script src="{{ asset('js/libs.js') }}"></script>
		<script src="{{ asset('js/main.js') }}"></script>
		<script src="{{ asset('js/style.js') }}"></script>
	</body>
</html>