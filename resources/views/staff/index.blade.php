@extends('layouts.app')

@section('user-panel')
<style>
	.sortable {
		text-decoration: underline;
	}
	.contracts__input {
		position: unset;
		display: none;
	}
</style>
<form class="container" action="{{route('staff')}}">

	<input type="hidden" name="sort[lname]" value="{{! is_null($sort) && isset($sort['lname']) ? $sort['lname'] : ''}}" />
	<input type="hidden" name="sort[role]" value="{{! is_null($sort) && isset($sort['role']) ? $sort['role'] : ''}}" />
	<input type="hidden" name="sort[rate]" value="{{! is_null($sort) && isset($sort['rate']) ? $sort['rate'] : ''}}" />

	<div class="user-panel__inner">
	<div class="user-panel__choice">
		<div class="user-panel__title">Персонал</div>
	</div>
	<div class="user-panel__selected">
		<div class="user-panel__select-box user-panel__select-box--mr">
			<div class="user-panel__output-label">Выводить по:</div>
			<div class="user-panel__sort-box user-panel__sort-box-page">
				<select class="user-panel__sort user-panel__sort-page" name="filters[show]">
					@php
						$rows = [10 => 10, 20 => 20, 30 => 30, 50 => 50, 'all' => 'Все'];
					@endphp
					@foreach($rows as $key => $value)
						<option value="{{$key}}" {{! is_null($filters) && isset($filters['show']) && $filters['show'] == $key ? 'selected' : ''}}>{{$value}}</option>
					@endforeach
				</select>
			</div>
		</div>
		<div class="user-panel__select-box">
		<div class="user-panel__output-label">ФИО:</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="ФИО" value="{{! is_null($filters) && isset($filters['full_name']) ? $filters['full_name'] : ''}}" name="filters[full_name]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		{{-- <div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Фамилия" value="{{! is_null($filters) && isset($filters['lname']) ? $filters['lname'] : ''}}" name="filters[lname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Имя" value="{{! is_null($filters) && isset($filters['fname']) ? $filters['fname'] : ''}}" name="filters[fname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Отчество" value="{{! is_null($filters) && isset($filters['mname']) ? $filters['mname'] : ''}}" name="filters[mname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div> --}}
		</div>
	</div>
	</div>
	<div class="user-panel__panel-container">
	<div class="user-panel__select-box user-panel__select-box--mr">
		<div class="user-panel__output-label">Ставка:</div>
		<div class="user-panel__input-box user-panel__input-box--search-rate">
		<input class="user-panel__input" type="number" placeholder="от" min="0" oninput="validity.valid||(value='');" value="{{! is_null($filters) && isset($filters['rate_from']) ? $filters['rate_from'] : ''}}" name="filters[rate_from]">
		<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-rate">
		<input class="user-panel__input" type="number" placeholder="до" min="0" oninput="validity.valid||(value='');" value="{{! is_null($filters) && isset($filters['rate_to']) ? $filters['rate_to'] : ''}}" name="filters[rate_to]">
		<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
	</div>
	<div class="user-panel__select-box">
		<div class="user-panel__output-label">Должность</div>
		<div class="user-panel__select user-panel__sort-box">
		<select class="js-user-position" name="filters[role]">
			<option value="" {{is_null($filters) || ! isset($filters['role']) ? 'selected' : '' }} disable>Выбрать</value>
			@foreach($roles as $role)
				<option {{(! is_null($filters) && isset($filters['role']) && $filters['role'] == $role->role) ? 'selected' : '' }} value="{{$role->role}}">{{$role->title}}</option>
			@endforeach
		</select>
		</div>
	</div>
	<button class="button user-panel__search">Поиск</button>
	@if ($filters != null)
		<a href="{{route('staff')}}" class="button button--clear button button--clear--small">
			<div class="button__clear-icon"></div>
		</a>
	@endif
	</div>
</form>
@endsection
@section('page', 'contracts')
@section('content')
	<div class="container">
		@if (count($errors->all()) > 0)
			<ul>
				@foreach ($errors->all() as $error)
					<li>{{$error}}</li>
				@endforeach
			</ul>
		@endif
		
		<div class="contracts__header">
			@can('delete', '\App\Staff')
				<form id="remove-staff" class="contracts__panel" action="{{route('remove-staff-multiple')}}" method="POST">
					{!! csrf_field() !!}
					<button class="contracts__remove" href="#">
						<div class="contracts__remove-icon"></div>Удалить
					</button>
				</form>
			@endcan
			@can('create', '\App\Staff')
			<div class="button contracts__button">
				<a href="{{route('staff-create')}}">Добавить сотрудника</a>
				<div class="contracts__button-icon"><img src="src/blocks/contracts/assets/img/person.svg"></div>
			</div>
			@endcan
		</div>
		<div class="list__wrapper">
			<table class="list list__two-color">
				<thead>
					<tr>
						<th></th>
						<th class="sortable" data-field="lname"
							data-type="{{! is_null($sort) && isset($sort['lname']) ? $sort['lname'] : ''}}">
							ФИО
							@if (! is_null($sort) && isset($sort['lname']))
								<button class="contracts__reset-icon" data-field="lname"></button>
							@endif
						</th>
						<th class="sortable" data-field="role"
							data-type="{{! is_null($sort) && isset($sort['role']) ? $sort['role'] : ''}}">
							Должность
							@if (! is_null($sort) && isset($sort['role']))
								<button class="contracts__reset-icon" data-field="role"></button>
							@endif
						</th>
						<th class="sortable" data-field="rate"
							data-type="{{! is_null($sort) && isset($sort['rate']) ? $sort['rate'] : ''}}">
							Ставка
							@if (! is_null($sort) && isset($sort['rate']))
								<button class="contracts__reset-icon" style="position: absolute; left: 55px;" data-field="rate"></button>
							@endif
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					@foreach($staff as $user)
						<tr class="list__row">
							<td class="selectable">
								<label>
									<input form="remove-staff" name="users[]" value="{{$user->id}}" class="contracts__input" type="checkbox">
									<div class="contracts__square"></div>
								</label>
							</td>
							<td class="word-wrap">{{$user->getFio()}}</td>
							<td>{{$user->role()->first()->title}}</td>
							<td>
								@if(Auth::user()->can('view_rate', $user))
									{{$user->rate}}
								@endif
							</td>
							<td class="action-block">
								<a class="button contracts__show-btn" href="{{route('staff-info', $user->id)}}">Просмотр</a>
							</td>
						</tr>
					@endforeach
				</tbody>
			</table>
		</div>
		{{ $staff->links('pagination.custom') }}
	</div>

@endsection