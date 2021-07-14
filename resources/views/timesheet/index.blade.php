@extends('layouts.app')

@section('user-panel')
<style>
	.sortable {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
<form class="container" action="{{route('timesheets')}}">

	<input type="hidden" name="sort[date]" value="" />
	<input type="hidden" name="sort[customer_agent]" value="" />
	<input type="hidden" name="sort[contract_number]" value="" />
	<input type="hidden" name="sort[title]" value="" />

	<div class="user-panel__inner">
	<div class="user-panel__choice user-panel__choice--width">
		<div class="user-panel__title">Табели</div>
		<div class="user-panel__choice">
			<div class="user-panel__type-box">
				<a class="user-panel__type {{$status == 'close' ? '' : 'user-panel__type--active'}}" href="{{route('timesheets')}}">Открытые</a>
				<a class="user-panel__type {{$status == 'close' ? 'user-panel__type--active' : ''}}" href="{{route('timesheets')}}?status=close">Архив</a>
			</div>
		</div>
		<div class="user-panel__selected">
			<div class="user-panel__select-box user-panel__select-box--mr">
				<div class="user-panel__output-label">Выводить по:</div>
				<div class="user-panel__sort-box user-panel__sort-box-page user-panel__sort-mounths">
					<select class="user-panel__sort user-panel__sort-page" name="filters[duration]">
						@php
							$duration = ['1' => 'за месяц', '3' => 'за 3 месяца', '6' => 'за 6 месяцев',
								'12' => 'за год', 'all' => 'за все время']
						@endphp
						<option value="" disable>Выберите</option>
						@foreach ($duration as $i => $time)
							<option value="{{$i}}" {{! is_null($filters) && isset($filters['duration']) && $filters['duration'] == $i ? 'selected' : ''}}>{{$duration[$i]}}</option>
						@endforeach
					</select>
				</div>
			</div>
			<div class="user-panel__input-box user-panel__input-box--search-big">
				<input class="user-panel__input" type="text" placeholder="Поиск" value="{{!is_null($filters) && isset($filters['common']) ? $filters['common'] : ''}}" name="filters[common]">
				<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
			</div>
			<button class="button user-panel__search user-panel__search">Поиск</button>
			@if ($filters != null)
				<a href="{{route('timesheets')}}" class="button button--clear button button--clear--small">
					<div class="button__clear-icon"></div>
				</a>
			@endif
		</div>
		</div>
	</div>
	</div>
	<div class="user-panel__panel-container">
	</div>
</div>
@endsection
@section('page', 'contracts')
@section('content')
<div class="container">
	<div class="contracts__header">
		<a href="{{route('timesheet-general')}}" class="button contracts__button 
			{{$status == 'close' ? 'hidden' : ''}}">Общий табель</a>
	</div>
	<div class="list__wrapper timesheet__wrapper">
		<table class="list list__two-color">
			<thead>
				<tr>
					<th class="sortable" data-field="title"
						data-type="{{! is_null($sort) && isset($sort['title']) ? $sort['title'] : ''}}">
						Название проекта
						@if (! is_null($sort) && isset($sort['title']))
							<button class="contracts__reset-icon" data-field="title"></button>
						@endif
					</th>
					<th class="sortable" data-field="contract_number"
						data-type="{{! is_null($sort) && isset($sort['contract_number']) ? $sort['contract_number'] : ''}}">
						Номер проекта
						@if (! is_null($sort) && isset($sort['contract_number']))
							<button class="contracts__reset-icon" data-field="contract_number"></button>
						@endif
					</th>
					<th class="sortable" data-field="customer_agent"
						data-type="{{! is_null($sort) && isset($sort['customer_agent']) ? $sort['customer_agent'] : ''}}">
						ФИО ответственного
						@if (! is_null($sort) && isset($sort['customer_agent']))
								<button class="contracts__reset-icon" data-field="customer_agent"></button>
						@endif
					</th>
					<th class="sortable" data-field="date"
						data-type="{{! is_null($sort) && isset($sort['date']) ? $sort['date'] : ''}}">
						Дата
						@if (! is_null($sort) && isset($sort['date']))
							<button class="contracts__reset-icon" data-field="date"></button>
						@endif
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				@foreach($contracts as $contract)
					<tr class="list__row">
						<td>{{$contract->title}}</td>
						<td>{{$contract->offer_number}}</td>
						<td>{{$contract->customerFio()}}</td>
						<td>{{date('d/m/Y', strtotime($contract->date))}}</td>
						<td class="action-block">
							<a class="button contracts__show-btn" href="{{route('timesheet', $contract->timesheet->id)}}">Просмотр</a>
						</td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>
	{{ $contracts->links('pagination.custom') }}
</div>
@endsection