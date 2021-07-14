@extends('layouts.app')

@section('user-panel')
<style>
	.calendar {
		width: 100%;
		max-width: 1070px;
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
</style>

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
			<a href="{{route('staff-calendar', $user->id)}}" class="modal__tab-item modal__tab-item--active">Календарь</a>
			<a href="{{route('staff-another', $user->id)}}" class="modal__tab-item">Другое</a>
		</div>
		<div class="modal__employee-inner modal__employee-inner--active">
			<div class="calendar">
					@if (count($duration) != 0)
						<div class="date-items calendar__date-items">
							@php
								$monthLocale = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
									'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
							@endphp
							<div class="date-items__dates">
								@foreach ($duration['date'] as $moment)
									<div class="button date-items__item">
										<a href="{{route('staff-calendar', $user->id)}}?month={{$moment['m']}}&year={{$moment['y']}}">{{$monthLocale[$moment['m'] - 1]}}{{($duration['fewYear'] ? ',' . $moment['y'] : '')}}</a>
									</div>
								@endforeach
							</div>
						</div>
						<!-- <div class="calendar__panel">
							<div class="calendar__title">Табель</div>
							<div class="calendar__dates">
							<div class="calendar__date-box">
								<div class="calendar__date-text">От:</div>
								<div class="calendar__date-selector">
								<input class="calendar__date-input js-datepicker-year" type="text">
								</div>
							</div>
							<div class="calendar__date-box">
								<div class="calendar__date-text">До:</div>
								<div class="calendar__date-selector">
								<input class="calendar__date-input js-datepicker-year" type="text">
								</div>
							</div>
							</div>
						</div> -->
						<div class="calendar__tab">
							<div class="calendar__overhead">
							@for ($i = 1; $i <= $days; ++$i)
								@php $isHoliday = in_array(date('w', strtotime("$visibleYear-$visibleMonth-$i")), [0, 6]); @endphp
								<div class="calendar__overhead-text {{$isHoliday ? 'calendar__overhead-text--holiday' : ''}}">
									{{$i}}</div>
							@endfor
							<div class="calendar__overhead-text calendar__overhead-text--hours">Часы</div>
							<div class="calendar__overhead-text calendar__overhead-text--days">Дни</div>
							<div class="calendar__overhead-text calendar__overhead-text--business">Командировочные</div>
							</div>
							@foreach ($contracts as $contract)
								@php
									$date = "{$visibleYear}-{$visibleMonth}-01";

									$date = new DateTime("{$visibleYear}-{$visibleMonth}-01");
									$contractDate = (new DateTime($contract->date))->modify('first day of this month');

									if ($date < $contractDate)
										continue;
								@endphp
								<div class="calendar__contract">
									<div class="calendar__contract-title" style="width: 136px;">{{$contract->title}}</div>
									<div class="calendar__row">
										@php
											$hourses = 0;
											$activeDays = 0;
											$business = 0;
										@endphp
										@for ($i = 1; $i <= $days; ++$i)
											@php
												$date = "{$visibleYear}-{$visibleMonth}-" . ((strlen($i) == 1) ? '0' : '') . $i;
												$data = $contract->timesheet->data()->where([['worker_id', $user->id], ['date', $date]])->first();

												$otherContractData = 0;
												if ($data == null)
													$otherContractData = \App\TimesheetData::where([['worker_id', $user->id], ['date', $date]])->count();

												$isHoliday = in_array(date('w', strtotime("$visibleYear-$visibleMonth-$i")), [0, 6]);

												if ($data)
												{
													$business += $data->business;
													$hourses += $data->hourse;
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
													$class .= ' calendar__cell--holiday';
											@endphp
											<div class="calendar__cell {{$class}} worker-{{$user->id}} day-{{$i}}"
												{{$data && $data->comment != null ? 'data-comment=' . $data->comment : ''}}
												{{$data && $data->business != null ? 'data-business=' . $data->business : ''}}
												data-date="{{$date}}" data-worker="{{$user->id}}" data-day="{{$i}}" data-timesheet="{{$contract->timesheet->id}}">
												@if ($data)
													<div class="calendar__cell-text">{{$data->hourse}}</div>
												@endif
											</div>
										@endfor
										<div class="calendar__cell calendar__cell--hours">
											<div class="calendar__cell-text">{{$hourses}}</div>
										</div>
										<div class="calendar__cell calendar__cell--days">
											<div class="calendar__cell-text">{{$activeDays}}</div>
										</div>
										<div class="calendar__cell calendar__cell--business">
											<div class="calendar__cell-text">{{$business}}</div>
										</div>
									</div>
								</div>
							@endforeach
						</div>
					@else
						<div style="margin: 10px 0 20px 0;">
							<h2>Проектов нет</h2>
						</div>
					@endif

					<div class="calendar__buttons">
						<a class="button calendar__button modal__prize" style="width: auto;" href="#">
							<div class="calendar__button-icon calendar__button-icon--plus"></div>Премия
						</a>
						<a class="button calendar__button modal__salary" style="width: auto;" href="#">
							<div class="calendar__button-icon calendar__button-icon--plus"></div>Выплата
						</a>
					</div>

					<div class="calendar__title calendar__history-title">История</div>
					@foreach ($user->payments as $payment)
						<div class="calendar__history-row">
							<div class="calendar__history-text">{{$user->getFio()}}</div>
							<div class="calendar__history-text">{{$payment->type == 'salary' ? 'Выплата' : 'Премия'}}</div>
							<div class="calendar__history-text">{{date('d/m/Y', strtotime($payment->date))}}</div>
							<div class="calendar__history-text">+{{$payment->sum}} руб.</div>
							<div class="calendar__history-text">
								<button class="button calendar__history-remove-btn" data-id="{{$payment->id}}">Удалить</button>
							</div>
						</div>
					@endforeach
				</div>
			</div>
		</div>
	</div>
</div>

<div class="modal modal-show-comment">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__edit-table">
		<div class="modal__header">Комментарий:</div>
		<div class="modal__editing-inner">
			<div class="modal__comment-text"></div>
		</div>
		</div>
	</div>
</div>

<form class="modal modal-calendar-cell">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__edit-table">
		<div class="modal__header">Редактирование</div>
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
			<div class="modal__editing-box">
				<input type="submit" class="button modal__editing-btn" value="Сохранить" />
			</div>
		</div>
		</div>
	</div>
</form>

<form class="modal modal-prize" action="{{route('add-prize', $user->id)}}" method="POST">
	{!! csrf_field() !!}
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__subtract">
		<div class="modal__header modal__header--small">Премия</div>
		<div class="modal__subtract-inner">
			<div class="modal__subtract-value">
			<div class="modal__subtract-button minus"><img src="/src/blocks/modal/assets/img/minus.svg"></div>
			<input class="modal__subtract-input" name="sum" type="text" value="1000" id="input-prize">
			<div class="modal__subtract-currency">&#8381;</div>
			<div class="modal__subtract-button plus"><img src="/src/blocks/modal/assets/img/plus-grey.svg"></div>
			</div>
			<div class="modal__range-box">
			<input class="modal__range-slider" type="text" data-min="0" data-max="10000" data-from="1000" id="slider-prize">
			</div>
			<input type="submit" class="button modal__editing-btn" value="Выдать премию" />
		</div>
		</div>
	</div>
</form>

<form class="modal modal-salary" action="{{route('add-salary', $user->id)}}" method="POST">
	{!! csrf_field() !!}
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__subtract">
		<div class="modal__header modal__header--small">Выплата</div>
		<div class="modal__subtract-inner">
			<div class="modal__subtract-value">
			<div class="modal__subtract-button minus"><img src="/src/blocks/modal/assets/img/minus.svg"></div>
			<input class="modal__subtract-input" name="sum" type="text" value="1000" id="input-salary">
			<div class="modal__subtract-currency">&#8381;</div>
			<div class="modal__subtract-button plus"><img src="/src/blocks/modal/assets/img/plus-grey.svg"></div>
			</div>
			<div class="modal__range-box">
			<input class="modal__range-slider" type="text" data-min="0" data-max="10000" data-from="1000" id="slider-salary">
			</div>
			<input type="submit" class="button modal__editing-btn" value="Выдать выплату" />
		</div>
		</div>
	</div>
</form>

<script>
	window.addEventListener('load', function () {
		$('.calendar__history-remove-btn').on('click', function (e) {
			$.ajax({
				'url': request.url + `payment/${$(this).attr('data-id')}/remove`,
				'success': () => {
					$(this).closest('.calendar__history-row').remove();
				}
			});
		})
	})
</script>
@endsection