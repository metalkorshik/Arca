@extends('layouts.app')

@section('user-panel')
<style>
	.select2-container {
		width: 150px;
	}
</style>
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Настройки CRM</div>
	</div>
</div>
@endsection
@section('page', 'settings')
@section('content')
<form class="container" action="{{route('settings-save')}}" method="POST">
	{!! csrf_field() !!}
	<div class="settings__inner">
	<div class="settings__row">
		<div class="settings__col">
		<div class="settings__text">За сколько дней до, предупредить о том, что уведомление будет просрочено</div>
		</div>
		<div class="settings__col">
		<div class="settings__block">
			<input class="input-styled settings__input js-valid-area" type="number" name="settings[expired_document]" value="{{\App\Settings::get('expired_document')}}">
			<div class="settings__text">дней</div>
		</div>
		</div>
	</div>
	<div class="settings__row hidden">
		<div class="settings__col">
		<div class="settings__text">Отправлять на email отвественного по проекту письмо, в случае если табель за неделю не был заполнен</div>
		</div>
		<div class="settings__col">
		<div class="settings__block">
			<select name="settings[empty_timesheet]">
				@php
					$options = ['0' => 'не отправлять', '1' => 'отправлять'];
					$current = \App\Settings::get('empty_timesheet');
				@endphp
				@foreach ($options as $key => $value)
					<option value="{{$key}}" {{$current == $key ? 'selected' : ''}}>{{$value}}</option>
				@endforeach
			</select>
		</div>
		</div>
	</div>
	</div>
	<button type="submit" class="button settings__button">Сохранить</button>
</form>

<script>
	window.addEventListener('load', function () {
		$('select[name="settings[empty_timesheet]"]').select2();
	})
</script>
@endsection