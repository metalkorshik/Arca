@extends('layouts.app')

@section('user-panel')

<style>
	.modal__editing-item {
		min-height: 40px;
	}
	.modal__editing-item div {
		user-select: none;
	}
	#show-business {
		margin-right: 5px;
	}
	#show-business:not(:checked) ~ input[name="business"] {
		display: none;
		pointer-events: none;
		user-select: none;
	}
	input[name="business"] {
		width: 80px;
	}
	.modal__editing-input[name="premium"],
	.modal__editing-input[name="retention"]
	{
		width: 60px;
	}
	.timesheet__title {
		margin-bottom: 30px;
	}
	.timesheet__d {
		width: 50px;
	}
</style>

<div class="container">
	<div class="user-panel__inner user-panel__inner--start">
		<div class="user-panel__choice">
			<div class="user-panel__title">Табель</div>
		</div>
		<form class="user-panel__select-container" action="">
			<input type="hidden" name="month" value="{{$visibleMonth}}" />
			<input type="hidden" name="year" value="{{$visibleYear}}" />
			<div class="user-panel__sort-box user-panel__sort-box-date user-panel__sort-box-date--mr">
				<!-- <div class="user-panel__output-label">По дате:</div>
				<div class="user-panel__date-contracts">
					<input class="user-panel__input user-panel__input-date js-date" type="text" placeholder="от">
          			<input class="user-panel__input user-panel__input-date js-date" type="text" placeholder="до">
				</div> -->
				<div class="user-panel__output-label">ФИО работника:</div>
				<div class="user-panel__input-box user-panel__input-box--search-small">
					<input class="user-panel__input" type="text" placeholder="ФИО" value="{{is_null($filters) ? '' : $filters['full_name'] ?? ''}}" name="filters[full_name]">
					<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
				</div>
				{{-- <div class="user-panel__input-box user-panel__input-box--search-small">
					<input class="user-panel__input" type="text" placeholder="Фамилия" value="{{is_null($filters) ? '' : $filters['lname']}}" name="filters[lname]">
					<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
				</div>
				<div class="user-panel__input-box user-panel__input-box--search-small">
					<input class="user-panel__input" type="text" placeholder="Имя" value="{{is_null($filters) ? '' : $filters['fname']}}" name="filters[fname]">
					<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
				</div>
				<div class="user-panel__input-box user-panel__input-box--search-small user-panel__input-box--mb-none">
					<input class="user-panel__input" type="text" placeholder="Отчество" value="{{is_null($filters) ? '' : $filters['mname']}}" name="filters[mname]">
					<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
				</div> --}}
			</div>
			<button class="button user-panel__search">Поиск</button>
      	</form>
	</div>
</div>
@endsection
@section('page', 'timesheet')
@section('content')
<div class="container">
	<div class="timesheet__title">
		<h2>{{$timesheet->contract->title}} {{$timesheet->contract->offer_number}}</h2>
	</div>
	<div class="date-items timesheet__items">
		@if (count($duration) != 0)
			<select class="js-select-timesheet-year timesheet__years" name="timesheet-years" data-link="{{route('timesheet', $timesheet->id)}}">
				@foreach ($duration['years'] as $year)
					<option {{ isset($visibleYear) ? ($visibleYear == $year ? 'selected' : '') : ($loop->last ? 'selected' : '')}}>{{$year}}</option>
				@endforeach
			</select>
			@php
				$monthLocale = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
					'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
			@endphp
			<div class="date-items__dates timesheet__dates">
					@foreach ($duration['date'] as $moment)
						<div class="button date-items__item
							{{($visibleMonth != $moment['m'] || $visibleYear != $moment['y'] ? 'button--noselect' : '')}}">
							<a href="{{route('timesheet', $timesheet->id)}}?month={{$moment['m']}}&year={{$moment['y']}}">{{$monthLocale[$moment['m'] - 1]}}, {{$moment['y']}}</a>
						</div>
					@endforeach
			</div>
		@endif
	</div>
	{{-- <div class="date-items">
		@php
			$monthLocale = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
				'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
		@endphp
		<div class="date-items__dates">
			@foreach ($duration['date'] as $moment)
				<div class="button date-items__item
					{{($visibleMonth != $moment['m'] || $visibleYear != $moment['y'] ? 'button--noselect' : '')}}">
					<a href="{{route('timesheet', $timesheet->id)}}?month={{$moment['m']}}&year={{$moment['y']}}">{{$monthLocale[$moment['m'] - 1]}}{{($duration['fewYear'] ? ',' . $moment['y'] : '')}}</a>
				</div>
			@endforeach
		</div>
	</div> --}}
	<div class="timesheet__wrapper">
	<div class="timesheet__scroll">
		<div class="timesheet__header">
		<div class="timesheet__number">
			<div class="timesheet__text">№</div>
		</div>
		<div class="timesheet__fullname">
			<div class="timesheet__text timesheet__text--name">ФИО</div>
		</div>
		<div class="timesheet__rate">
			<div class="timesheet__text">Ставка</div>
		</div>
		@for ($i = 1; $i <= $days; ++$i)
			@php $isHoliday = in_array(date('w', strtotime("$visibleYear-$visibleMonth-$i")), [0, 6]); @endphp
			<div class="timesheet__position">
				<div class="timesheet__text {{$isHoliday ? 'timesheet__text--holiday' : ''}}">{{$i}}</div>
			</div>
		@endfor
		<div class="timesheet__hours">
			<div class="timesheet__text">Часы</div>
		</div>
		<div class="timeheet__days">
			<div class="timesheet__text timesheet__text--days">Дни</div>
		</div>
		<div class="timesheet__business">
			<div class="timesheet__text">Коман</div>
		</div>
		<div class="timesheet__d timesheet__premium">
			<div class="timesheet__text">Прем</div>
		</div>
		<div class="timesheet__d timesheet__retention">
			<div class="timesheet__text">Удерж</div>
		</div>
		<div class="timesheet__d timesheet__salary">
			<div class="timesheet__text">Зарп</div>
		</div>
		</div>
		<!-- row -->
		@foreach($staff as $i => $worker)
			@if ($timesheet->isUnemployedStaff($worker->user->id))
				@continue
			@endif
			<div class="timesheet__row worker-{{$worker->user->id}}">
			<div class="timesheet__number">
				<div class="timesheet__cell">
				<div class="timesheet__table-text">{{$i + 1}}</div>
				</div>
			</div><a class="timesheet__fullname" target="_blank" href="{{route('staff-info', $worker->user->id)}}">
				<div class="timesheet__cell timesheet__cell--name">
				<div class="timesheet__table-text">
					{{$worker->user->getInitials(false)}}
				</div>
				</div></a>
			<div class="timesheet__rate">
				<div class="timesheet__cell">
					<div class="timesheet__table-text">{{$worker->user->rate}}</div>
				</div>
			</div>

			<!-- <div class="timesheet__position">
				<div class="timesheet__cell timesheet__cell--active">
				<div class="timesheet__table-text">10</div>
				</div>
			</div>
			<div class="timesheet__position">
				<div class="timesheet__cell"></div>
			</div> -->

			@php
				$hourses = 0;
				$activeDays = 0;
				$business = 0;

				$premium = 0;
				$retention = 0;
				$salary = 0;

				$timesheetData = $timesheet->getWorker($worker->user->id);
			@endphp
			@for ($j = 1; $j <= $days; ++$j)
				@php
					$date = "${visibleYear}-${visibleMonth}-" . ((strlen($j) == 1) ? '0' : '') . $j;
					$data = $timesheetData->where('date', $date)->first();

					$otherContractData = 0;
					if ($data == null)
						$otherContractData = \App\TimesheetData::where([['worker_id', $worker->user->id], ['date', $date]])->count();
					$isHoliday = in_array(date('w', strtotime("$visibleYear-$visibleMonth-$j")), [0, 6]);

					if ($data)
					{
						$business += $data->business;
						$hourses += $data->hourse;

						$premium += $data->premium;
						$retention += $data->retention;

						++$activeDays;
					}

					$class = '';

					if ($otherContractData == 0)
						$class .= 'calendar__show';

					if ($date == date('Y-m-d', time()))
						$class .= ' today';

					if ($data != null)
					{
						$class .= ' timesheet__cell--fill';
						$class .= ' timesheet__cell--active';
						if ($data->comment != null)
							$class .= ' timesheet__comment-cell';
					}
					else if ($data == null && ($date < date($contract->date) || $date > date('Y-m-d', time())))
						$class = 'timesheet__cell--disabled';

					if ($isHoliday)
						$class .= ' timesheet__cell--holiday';
				@endphp
				<div class="timesheet__position">
					<div @can('sunday_conditions', ['\App\Timesheet', $worker->user, $date]) data-sunday="1" @else data-sunday="0" @endcan
						data-engineer="{{+($worker->user->role == 'engineer')}}" class="timesheet__cell {{$class}} worker-{{$worker->user->id}} day-{{$j}}"
						{{$data && $data->comment != null ? 'data-comment=' . $data->comment : ''}}
						{{$data && $data->business != null ? 'data-business=' . $data->business : ''}}
						data-date="{{$date}}" data-worker="{{$worker->user->id}}" data-day="{{$j}}"
						data-premium="{{$data ? $data->premium : 0}}"
						data-retention="{{$data ? $data->retention : 0}}"
						data-timesheet="{{$timesheet->id}}">
						@if ($data)
							<div class="timesheet__table-text">{{$data->hourse}}</div>
						@endif
					</div>
				</div>
			@endfor

				<div class="timesheet__hours">
					<div class="timesheet__cell">
						<div class="timesheet__table-text">{{$hourses}}</div>
					</div>
				</div>
				<div class="timesheet__days">
					<div class="timesheet__cell">
					<div class="timesheet__table-text">{{$activeDays}}</div>
					</div>
				</div>
				<div class="timesheet__business">
					<div class="timesheet__cell">
					<div class="timesheet__table-text">{{$business}}</div>
					</div>
				</div>
				<div class="timesheet__d timesheet__premium">
					<div class="timesheet__cell">
					<div class="timesheet__table-text">{{$premium}}</div>
					</div>
				</div>
				<div class="timesheet__d timesheet__retention">
					<div class="timesheet__cell">
					<div class="timesheet__table-text">{{$retention}}</div>
					</div>
				</div>
				<div class="timesheet__d timesheet__salary">
					<div class="timesheet__cell">
					<div class="timesheet__table-text">
						{{($worker->user->rate * $hourses + $business + $premium - $retention)}}
					</div>
				</div>
			</div>
			</div>
		@endforeach

	</div>
	</div>
	<div class="timesheet__info" style="display: none">
		<div class="timesheet__info-block">
			<div class="timesheet__info-text timesheet__info-text--mr">ИТР</div>
			<div class="timesheet__info-text">Рабочие</div>
		</div>
	</div>
	<div class="timesheet__total" style="display: none">
		<div class="timesheet__info-text timesheet__info-text--mr">Итого</div>
		<div class="timesheet__total-text"> 5654645</div>
		<div class="timesheet__total-text"> 5654645</div>
	</div>
</div>

<!-- <div class="modal modal-show-comment">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__edit-table">
		<div class="modal__header">Комментарий:</div>
		<div class="modal__editing-inner">
			<div class="modal__comment-text"></div>
		</div>
		</div>
	</div>
</div> -->

<form class="modal modal-calendar-cell">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__edit-table">
		<div class="modal__header">Редактирование: &nbsp; <span class="modal-calendar-date"></span></div>
		<div class="modal__editing-inner">
			<div class="modal__editing-row">
				<div class="modal__editing-item">
					<div class="modal__editing-title">Количество часов</div>
					<input class="modal__editing-input" name="hourses" type="number" value="10" min="0" max="24">
				</div>
			</div>
			<textarea class="modal__editing-area" name="comment" placeholder="Комментарий"></textarea>
			<div class="modal__editing-row">
				<div class="modal__editing-item">
					<input type="checkbox" id="show-business">
					<label for="show-business">
						<div class="modal__editing-title">Командировочные</div>
					</label>
					<input class="modal__editing-input" name="business" type="number" value="600" min="0.01" step="0.01">
				</div>
			</div>
			<div class="additional-info">
				<div class="modal__editing-item">
					<div class="modal__editing-title">Премия</div>
					<input class="modal__editing-input" name="premium" type="number" value="0" min="0">
				</div>
				<div class="modal__editing-item">
					<div class="modal__editing-title">Удержание</div>
					<input class="modal__editing-input" name="retention" type="number" value="0" min="0">
				</div>
			</div>
			<div class="modal__editing-box">
				<button class="button button--mr" id="modal-calendar-cell__clear">Очистить</button>
				<input type="submit" class="button modal__editing-btn" value="Сохранить" />
			</div>
		</div>
		</div>
	</div>
</form>
@endsection