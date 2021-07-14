@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Cотрудник</div>
	</div>
</div>
@endsection
@section('page', 'commercial-offer')
@section('content')
<div class="container">
	<div class="">
		<div class="">
		<div class="modal__title">Карточка сотрудника</div>
		<div class="modal__tabs">
			<a href="{{route('staff-info', $user->id)}}" class="modal__tab-item">Персональная информация</a>
			<a href="{{route('staff-calendar', $user->id)}}" class="modal__tab-item">Календарь</a>
			<a href="{{route('staff-another', $user->id)}}" class="modal__tab-item modal__tab-item--active">Другое</a>
		</div>
		<div class="modal__employee-inner modal__employee-inner--active">
			<form class="calendar" action="{{route('add-flat', $user->id)}}" method="POST">
				{!! csrf_field() !!}
				<div class="calendar__title">Место и Дата</div>
				<div class="calendar__housing">
					<div class="calendar__box">
						<div class="modal__label">Квартира</div>
						<div class="calendar__flat-box">
							@php
								$selectedFlat = $user->getFlat();
							@endphp
							<select class="js-select-flat" name="flat" required>
								<option disable>Выберите</option>
								@foreach ($flats as $flat)
									<option value="{{$flat->id}}" {{$selectedFlat && $selectedFlat->id == $flat->id ? 'selected' : '' }}>{{$flat->address}}</option>
								@endforeach
							</select>
						</div>
					</div>
					<div class="calendar__box">
						<div class="calendar__box-dates">
							<div class="calendar__dates-container calendar__dates-container--center-border">
								<div class="modal__label">Въезд</div>
								<input class="calendar__date calendar__date--right" type="text" name="entrance" required
									value="{{$selectedFlat ? date('d/m/Y', strtotime($user->flat->entrance)) : ''}}" placeholder="11/17/2020" id="from">
							</div>
							<div class="calendar__dates-container">
								<div class="modal__label modal__label--date-left">Выезд</div>
								<input class="calendar__date calendar__date--left" type="text" name="leaving" required
									value="{{$selectedFlat ? date('d/m/Y', strtotime($user->flat->leaving)) : ''}}" placeholder="11/17/2020" id="to">
							</div>
						</div>
					</div>
				</div>
				<div style="display: flex;">
					<button type="submit" class="button button--mr calendar__save-btn">Сохранить</button>
					@if ($selectedFlat)
						<a class="button calendar__save-btn" href="{{route('remove-flat', [$user->id, $selectedFlat->id])}}">Удалить</a>
					@endif
				</div>
				<!-- <div class="calendar__title">Расходы</div>
				<div class="calendar__expenses">
					<div class="calendar__costs-box">
					<div class="calendar__costs-item">
						<div class="calendar__costs-headtitle">
						<div class="calendar__costs-status"></div>
						<div class="calendar__costs-title">Доходы (80%)</div>
						</div>
						<div class="calendar__costs-value calendar__costs-value--green">50 000 руб.</div>
					</div>
					<div class="calendar__costs-item">
						<div class="calendar__costs-headtitle">
						<div class="calendar__costs-status calendar__costs-status--black"></div>
						<div class="calendar__costs-title">Расходы (20%)</div>
						</div>
						<div class="calendar__costs-value">-10 000 руб</div>
					</div>
					</div>
					<figure class="highcharts-figure">
					<div id="container2"></div>
					</figure>
				</div> -->
			</form>
		</div>
	</div>
</div>
</div>
@endsection