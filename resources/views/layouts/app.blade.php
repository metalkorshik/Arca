<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
		<title>@yield('title')</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="_token" content="{{ csrf_token() }}">
		<link rel="stylesheet" id="style-css" href="{{ asset('css/libs.css') }}" type="text/css" media="all">
		<link rel="stylesheet" id="style-css" href="{{ asset('css/style.css') }}" type="text/css" media="all">
		<style>
			.list__wrapper {
				overflow: auto;
			}
			.list__wrapper > .list {
				width: 1270px;
				overflow-x: auto;
				white-space: nowrap;
				border-collapse: collapse;
			}
			.list__wrapper > .list tr {
				border-radius: 5px;
			}
			.list__wrapper > .list th {
				font-weight: 600;
				font-size: 14px;
				line-height: 18px;
				color: #a4aeb9;
				position: relative;
				padding-left: 10px;
				padding-bottom: 16px;
				text-align: left;
			}
			.list__wrapper > .list td {
				font-size: 14px;
				line-height: 19px;
				color: #4b5561;
				word-break: break-word;
				padding: 5px 15px;
				max-height: 50px;
				height: 50px;
			}
			.list__wrapper > .list__two-color tbody tr:nth-child(odd) {
				background: #e9eef3;
			}
			.list td.selectable {
				width: 20px;
			}
			.list td.word-wrap {
				white-space: pre-wrap;
			}
			.list .action-block {
				display: flex;
				align-items: center;
				justify-content: flex-end;
			}
			.timesheet__wrapper {
				overflow: hidden;
			}
			.timesheet__wrapper > .list th:nth-of-type(1), .timesheet__wrapper > .list td:nth-of-type(1) {
				max-width: 350px;
			}
			.timesheet__wrapper > .list td:nth-of-type(1) {
				white-space: break-spaces;
			}

			.warning-text {
				color: #ff1a1a; !important;
			}

			/* FAST FIX */
			.button--noselect {
				background: none;
				color: black;
				border: 1px solid #4ba0ea;
			}
			.button--noselect:hover {
				color: white;
			}
			.contracts {
				min-height: calc(100vh - 280px);
			}
			.modal-contracts__title {
				white-space: pre-wrap;
			}
			.contracts__reset-icon {
				position: unset;
				margin-left: 5px;
			}
			.contracts__accept-btn, .contracts__show-btn {
				width: auto;
			}
			.contracts__square {
				margin: 0;
			}
			.timesheet__text--holiday,
			.calendar__overhead-text--holiday {
				background: #45a204;
				color: white;
			}
			.timesheet__cell--holiday,
			.calendar__cell--holiday {
				border: 1px solid #45a204;
			}
			.calendar__contract-title {
				margin-right: 34px;
			}
			.staff__phones {
				flex-direction: column;
			}
			.staff__phones > div:not(:first-of-type) {
				margin-top: 5px;
			}
			.staff__phone-field {
				display: flex;
				align-items: center;
			}

			.error > input,
			.error > textarea,
			input.error,
			textarea.error,
			.error input {
				border-color: #ff1a1a;
			}
			.error > .error__text,
			input.error + .error__text,
			textarea.error + .error__text {
				color: #ff1a1a;
				font-size: 12px;
				padding-top: 5px;
			}

			.modal-calendar-cell .additional-info {
				display: flex;
				margin-bottom: 13px;
			}
			.modal-calendar-cell .additional-info > *
			{
				margin-right: 10px;
			}
		</style>
    </head>
    <body>
		<header class="header">
			<div class="container">
				<div class="header__inner"><a class="header__logo" href="{{route('main')}}"><img class="logo" src="/src/blocks/logo/assets/img/logo.svg"></a>
				<nav class="header__nav">
					<div class="header__links">
						<a class="header__link {{ \Route::is('main') ? 'header__link--active' : '' }}" href="{{route('main')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/home.svg"></div>Главная
						</a>
						<a class="header__link {{ \Route::is('contracts') ? 'header__link--active' : '' }}" href="{{route('contracts')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/word.svg"></div>Контракты
						</a>
						<a class="header__link {{ \Route::is('staff') ? 'header__link--active' : '' }}" href="{{route('staff')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/personal.svg"></div>Персонал
						</a>
						<a class="header__link {{ \Route::is('timesheets') ? 'header__link--active' : '' }}" href="{{route('timesheets')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/tab.svg"></div>Табель
						</a>
						@can('viewAny', App\Flat::class)
							<a class="header__link {{ \Route::is('flats') ? 'header__link--active' : '' }}" href="{{route('flats')}}">
								<div class="header__link-icon"><img src="/src/blocks/header/assets/img/dots.svg"></div>Квартиры
							</a>
						@endcan
					</div>
				</nav>
				<div class="header__user">
					<div class="header__user-info"><a class="header__name" href="{{route('account')}}">{{Auth::user()->fname}} {{Auth::user()->lname}}</a>
					<div class="header__position">{{Auth::user()->role()->first()->title}}</div>
					</div><a class="header__user-img" href="{{route('account')}}"><img class="header__user-photo" src="/storage/users/{{Auth::user()->id . '/' . Auth::user()->info->photo_path}}"></a>
					<div class="header__menu-container"><a class="header__menu" href="#"></a>
					<div class="header__menu-list">
						<a class="header__link {{ \Route::is('main') ? 'header__link--active' : '' }}" href="{{route('main')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/home.svg"></div>Главная
						</a>
						<a class="header__link {{ \Route::is('contracts') ? 'header__link--active' : '' }}" href="{{route('contracts')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/word.svg"></div>Контракты
						</a>
						<a class="header__link {{ \Route::is('staff') ? 'header__link--active' : '' }}" href="{{route('staff')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/personal.svg"></div>Персонал
						</a>
						<a class="header__link {{ \Route::is('timesheets') ? 'header__link--active' : '' }}" href="{{route('timesheets')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/tab.svg"></div>Табель
						</a>
						<a class="header__link {{ \Route::is('flats') ? 'header__link--active' : '' }}" href="{{route('flats')}}">
							<div class="header__link-icon"><img src="/src/blocks/header/assets/img/dots.svg"></div>Квартиры
						</a>
					</div>
					</div>
					<a class="header__notification-box" href="{{route('user-notice')}}">
						<div class="header__notification-icon"></div>
						@php $count = \App\Notice::getUnread(); @endphp
						@if ($count > 0)
							<div class="header__notification">{{$count}}</div>
						@endif
					</a>
					@can('viewAny', App\Settings::class)
						<a href="{{route('settings')}}">
							<div class="header__settings-icon"></div>
						</a>
					@endcan
					<form action="{{route('logout')}}" method="POST">
						{!! csrf_field() !!}
						<button type="submit">
							<div class="header__logout-icon"></div>
						</button>
					</form>
				</div>
				</div>
			</div>
		</header>
		<div class="user-panel">
            @yield('user-panel')
		</div>
        <div class="@yield('page')">
            @yield('content')
		</div>
		<footer class="footer">
			<div class="container">
				<div class="footer__inner">
				<div class="footer__rights">
					<div class="footer__text">© {{ date('Y') }}</div>
				</div>
				<div class="footer__nav">
					<a class="footer__link" href="{{route('main')}}">Главная</a>
					<a class="footer__link" href="{{route('contracts')}}">Контракты</a>
					<a class="footer__link" href="{{route('staff')}}">Персонал</a>
					<a class="footer__link" href="{{route('timesheets')}}">Табель</a>
					<a class="footer__link" href="{{route('flats')}}">Квартиры</a>
				</div>
				<!-- <a class="footer__support" href="#">
					<div class="footer__support-icon"></div>Служба поддержки
				</a> -->
				</div>
			</div>
		</footer>
		<script src="{{ asset('js/libs.js') }}"></script>
		<script src="{{ asset('js/main.js') }}?i=10"></script>
		<script src="{{ asset('js/style.js') }}"></script>
		<script>
			window.addEventListener('load', function () {
				$.ajaxSetup({
					headers: {
						'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
					}
				});
			});

			var masks = {
				'phone': '+7(999) 999-9999'
			}

			var request = {
				'url': `//${window.location.hostname}/`,
				'api_url': `//${window.location.hostname}/api/`,
			}

			window.addEventListener('load', function () {
				$('.sortable').click(function (e) {
					if (e.target.classList.contains('contracts__reset-icon'))
						return;
					let field = $(this).attr('data-field');
					let type = $(this).attr('data-type');
					type = (type != 'asc' ? 'asc' : 'desc');

					$(`input[name="sort[${field}]"]`).val(type);
					$('.user-panel__search').click();
				})

				$('.contracts__reset-icon').click(function () {
					$(`input[name="sort[${$(this).attr('data-field')}]"]`).val('');
					$('.user-panel__search').click();
				});
			})
		</script>
    </body>
</html>