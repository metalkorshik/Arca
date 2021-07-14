@extends('layouts.app')

@section('title', __('contract.index_title'))

@section('user-panel')

<style>
	.sortable {
		text-decoration: underline;
		cursor: pointer;
	}
	.list__wrapper th {
		min-width: 100px;
	}
</style>

<form class="container" action="{{route('contracts')}}">
	<input type="hidden" name="status" value="{{$status}}" />

	{{-- <input type="hidden" name="sort[customer]" value="{{! is_null($sort) && isset($sort['customer']) ? $sort['customer'] : ''}}" />
	<input type="hidden" name="sort[date]" value="{{! is_null($sort) && isset($sort['date']) ? $sort['date'] : ''}}" />
	<input type="hidden" name="sort[sum]" value="{{! is_null($sort) && isset($sort['sum']) ? $sort['sum'] : ''}}" />
	<input type="hidden" name="sort[customer_agent]" value="{{! is_null($sort) && isset($sort['customer_agent']) ? $sort['customer_agent'] : ''}}" />
	<input type="hidden" name="sort[contract_number]" value="{{! is_null($sort) && isset($sort['contract_number']) ? $sort['contract_number'] : ''}}" />
	<input type="hidden" name="sort[title]" value="{{! is_null($sort) && isset($sort['title']) ? $sort['title'] : ''}}" />
	<input type="hidden" name="sort[engineer]" value="{{! is_null($sort) && isset($sort['engineer']) ? $sort['engineer'] : ''}}" /> --}}

	<input type="hidden" name="sort[customer]" value="" />
	<input type="hidden" name="sort[date]" value="" />
	<input type="hidden" name="sort[sum]" value="" />
	<input type="hidden" name="sort[customer_agent]" value="" />
	<input type="hidden" name="sort[contract_number]" value="" />
	<input type="hidden" name="sort[title]" value="" />
	<input type="hidden" name="sort[engineer]" value="" />

	<div class="user-panel__inner">
		<div class="user-panel__choice">
			<div class="user-panel__title">Контракты</div>
			<div class="user-panel__type-box">
				<a class="user-panel__type {{$status == 'active' ? 'user-panel__type--active' : ''}}" href="{{route('contracts')}}?status=active">Открытые</a>
				<a class="user-panel__type {{$status == 'close' ? 'user-panel__type--active' : ''}}" href="{{route('contracts')}}?status=close">Закрытые</a>
				<a class="user-panel__type {{$status == 'commercial' ? 'user-panel__type--active' : ''}}" href="{{route('contracts')}}?status=commercial">Контракты</a>
			</div>
		</div>
	</div>
	<div class="user-panel__selected user-panel__selected--direction">
	<div class="user-panel__select-box user-panel__select-box--mb">
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
		<div class="user-panel__output-label">ФИО заказчика:</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Поиск" value="{{! is_null($filters) && isset($filters['full_name']) ? $filters['full_name'] : ''}}" name="filters[full_name]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		{{-- <div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Фамилия" value="{{! is_null($filters) && isset($filters['customer_lname']) ? $filters['customer_lname'] : ''}}" name="filters[customer_lname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
			<input class="user-panel__input" type="text" placeholder="Имя" value="{{! is_null($filters) && isset($filters['customer_fname']) ? $filters['customer_fname'] : ''}}" name="filters[customer_fname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small user-panel__input-box--mb-none">
			<input class="user-panel__input" type="text" placeholder="Отчество" value="{{! is_null($filters) && isset($filters['customer_mname']) ? $filters['customer_mname'] : ''}}" name="filters[customer_mname]">
			<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div> --}}
	</div>
	<!-- <div class="user-panel__select-box">
		<div class="user-panel__output-label">ФИО инженера:</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
		<input class="user-panel__input" type="text" placeholder="Фамилия">
		<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small">
		<input class="user-panel__input" type="text" placeholder="Имя">
		<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		<div class="user-panel__input-box user-panel__input-box--search-small user-panel__input-box--mb-none">
		<input class="user-panel__input" type="text" placeholder="Отчество">
		<div class="user-panel__input-icon"><img src="src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
	</div> -->
	</div>
	<div class="user-panel__panel-container">
	<div class="user-panel__sort-box user-panel__sort-box-date user-panel__sort-box-date--mr">
		<div class="user-panel__output-label">По дате:</div>
		<div class="user-panel__date-contracts">
		<input class="user-panel__input user-panel__input-date js-date" type="text" placeholder="от" name="filters[date_from]" value="{{! is_null($filters) && isset($filters['date_from']) ? $filters['date_from'] : ''}}">
		<input class="user-panel__input user-panel__input-date js-date" type="text" placeholder="до" name="filters[date_to]" value="{{! is_null($filters) && isset($filters['date_to']) ? $filters['date_to'] : ''}}">
		</div>
	</div>
	<button class="button user-panel__search user-panel__search--ml-none">Поиск</button>
	@if ($filters != null)
		<a href="{{route('contracts')}}" class="button button--clear button button--clear--small">
			<div class="button__clear-icon"></div>
		</a>
	@endif
	</div>
</form>
@endsection

@section('page', 'contracts')

@section('content')
<div class="container">
	<div class="contracts__header">
		<div class="contracts__panel"><a class="contracts__remove" href="#"></a>
			<!-- <div class="contracts__remove-icon"></div>Удалить</a> -->
			<div class="contracts__checkbox">
			<input class="contracts__input" type="checkbox">
			</div>
		</div>
		@can('create', 'App\Contract')
			<div class="button contracts__button"><a href="{{ route('contract-create') }}">Создать контракт</a>
				<div class="contracts__button-icon"><img src="src/blocks/contracts/assets/img/contract.svg"></div>
			</div>
		@endcan
	</div>
	<div class="list__wrapper">
		<table class="list list__two-color">
			<thead>
				<tr>
					<th class="sortable" data-field="customer"
						data-type="{{! is_null($sort) && isset($sort['customer']) ? $sort['customer'] : ''}}">
						Заказчик (юр.лицо)
						@if (! is_null($sort) && isset($sort['customer']))
							<button class="contracts__reset-icon" data-field="customer"></button>
						@endif
					</th>
					<th class="sortable" data-field="customer_agent"
						data-type="{{! is_null($sort) && isset($sort['customer_agent']) ? $sort['customer_agent'] : ''}}">
						Представитель заказчика
						@if (! is_null($sort) && isset($sort['customer_agent']))
							<button class="contracts__reset-icon" data-field="customer_agent"></button>
						@endif
					</th>
					<th class="sortable" data-field="contract_number"
						data-type="{{! is_null($sort) && isset($sort['contract_number']) ? $sort['contract_number'] : ''}}">
						Номер Контракта
						@if (! is_null($sort) && isset($sort['contract_number']))
							<button class="contracts__reset-icon" data-field="contract_number"></button>
						@endif
					</th>
					<th class="sortable" data-field="date"
						data-type="{{! is_null($sort) && isset($sort['date']) ? $sort['date'] : ''}}">
						Дата контракта
						@if (! is_null($sort) && isset($sort['date']))
							<button class="contracts__reset-icon" data-field="date"></button>
						@endif
					</th>
					<th class="sortable" data-field="title"
						data-type="{{! is_null($sort) && isset($sort['title']) ? $sort['title'] : ''}}">
						Название проекта
						@if (! is_null($sort) && isset($sort['title']))
							<button class="contracts__reset-icon" data-field="title"></button>
						@endif
					</th>
					<th class="sortable" data-field="sum"
						data-type="{{! is_null($sort) && isset($sort['sum']) ? $sort['sum'] : ''}}">
						Итого
						@if (! is_null($sort) && isset($sort['sum']))
							<button class="contracts__reset-icon" data-field="sum"></button>
						@endif
					</th>
					<th class="sortable" data-field="engineer"
						data-type="{{! is_null($sort) && isset($sort['engineer']) ? $sort['engineer'] : ''}}">
						Инженер
						@if (! is_null($sort) && isset($sort['engineer']))
							<button class="contracts__reset-icon" data-field="engineer"></button>
						@endif
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				@foreach($contracts as $contract)
					<tr class="list__row">
						<td class="word-wrap">{{$contract->legal_entity}}</td>
						<td class="word-wrap">{{$contract->customerFio()}}</td>
						<td class="word-wrap">{{$contract->offer_number}}</td>
						<td>{{date('d/m/Y', strtotime($contract->date))}}</td>
						<td class="word-wrap">{{$contract->title}}</td>
						<td class="{{$contract->profit < 0 ? 'warning-text' : ''}}">{{$contract->profit}} руб.</td>
						@php $engineer = $contract->getEngineers()->first(); @endphp
						<td class="word-wrap">{{$engineer != null ? $engineer->user->getFio() : ''}}</td>
						<td class="action-block">
							<a class="button button--mr contracts__show-btn" href="{{route('contract', $contract->id)}}">Просмотр</a>
							@can('update', $contract)
								<a class="button button--mr contracts__show-btn" href="{{route('contract-edit', $contract->id)}}">Редактирование</a>
							@endcan

							@if ($status == 'commercial' && Auth::user()->can('confirm', $contract))
								<a class="button contracts__open-modal-btn contracts__accept-btn" data-modal="accept-contract-modal" href="#">Подтвердить</a>
								<div class="modal-contracts-box" data-modal="accept-contract-modal">
									<div class="background-overlay"></div>
									<div class="modal-contracts">
									<div class="modal-contracts__title">Вы уверены что хотите создать контракт?</div>
									<div class="modal-contracts__buttons">
										<a class="button modal-contracts__button js-contracts-accept" data-id="{{$contract->id}}" data-action="access" data-target="commercial">Да</a>
										<a class="button button--light modal-contracts__button js-contracts-close">Нет</a>
									</div>
									</div>
								</div>
							@endif

							@if ($status == 'close' && Auth::user()->can('open', $contract))
								<a class="button contracts__open-modal-btn contracts__accept-btn" data-modal="accept-contract-modal" href="#">Открыть</a>
								<div class="modal-contracts-box" data-modal="accept-contract-modal">
									<div class="background-overlay"></div>
									<div class="modal-contracts">
									<div class="modal-contracts__title">Вы уверены что хотите открыть контракт?</div>
									<div class="modal-contracts__buttons">
										<a class="button modal-contracts__button js-contracts-accept" data-id="{{$contract->id}}" data-action="open" data-target="contract">Да</a>
										<a class="button button--light modal-contracts__button js-contracts-close">Нет</a>
									</div>
									</div>
								</div>
							@endif

							@if ($status == 'active' && Auth::user()->can('close', $contract))
								<a class="button contracts__open-modal-btn contracts__close-btn" data-modal="close-contract-modal"  href="#">Закрыть</a>
								<div class="modal-contracts-box" data-modal="close-contract-modal" data-modal="close-contract-modal">
									<div class="background-overlay"></div>
									<div class="modal-contracts">
									<div class="modal-contracts__title">Вы уверены что хотите закрыть контракт?</div>
									<div class="modal-contracts__buttons">
										<a class="button modal-contracts__button js-contracts-accept" data-id="{{$contract->id}}" data-action="close" data-target="contract">Да</a>
										<a class="button button--light modal-contracts__button js-contracts-close">Нет</a>
									</div>
									</div>
								</div>
							@endif

							@if ($status != 'active' && Auth::user()->can('delete', $contract))
								<a class="button contracts__open-modal-btn contracts__remove-btn" data-modal="remove-contract-modal" href="#">Удалить</a>
								<div class="modal-contracts-box" data-modal="remove-contract-modal">
									<div class="background-overlay"></div>
									<div class="modal-contracts">
									<div class="modal-contracts__title">Вы уверены что хотите удалить контракт?</div>
									<div class="modal-contracts__buttons">
										<a class="button modal-contracts__button js-contracts-accept" data-id="{{$contract->id}}" data-action="remove" data-target="contract">Да</a>
										<a class="button button--light modal-contracts__button js-contracts-close">Нет</a>
									</div>
									</div>
								</div>
							@endif
						</td>
					</tr>
				@endforeach
			</tbody>
		</table>
	</div>
	<!-- <div class="contracts__wrapper">
		<div class="contracts__block">
			<div class="contracts__named">
				<div class="contracts__box-row" style="display: flex;">
					<div class="contracts__overhead sortable" data-type="{{! is_null($sort) && isset($sort['customer']) ? $sort['customer'] : ''}}" data-field="customer">
						Заказчик
						@if (! is_null($sort) && isset($sort['customer']))
							<button class="contracts__reset-icon" data-field="customer"></button>
						@endif
					</div>
				</div>
				<div class="contracts__box-row">
					<div class="contracts__overhead"># Контракта</div>
				</div>
				<div class="contracts__box-row">
					<div class="contracts__overhead">Статус</div>
				</div>
				<div class="contracts__box-row" style="display: flex;">
					<div class="contracts__overhead sortable" data-type="{{! is_null($sort) && isset($sort['date']) ? $sort['date'] : ''}}" data-field="date">
						Дата
						@if (! is_null($sort) && isset($sort['date']))
							<button class="contracts__reset-icon" data-field="date"></button>
						@endif
					</div>
				</div>
				<div class="contracts__box-row" style="display: flex;">
					<div class="contracts__overhead sortable" data-type="{{! is_null($sort) && isset($sort['sum']) ? $sort['sum'] : ''}}" data-field="sum">
						Итого
						@if (! is_null($sort) && isset($sort['sum']))
							<button class="contracts__reset-icon" data-field="sum"></button>
						@endif
					</div>
				</div>
				<div class="contracts__box-row">
					<div class="contracts__overhead">Инженер</div>
				</div>
			</div>

			@foreach($contracts as $contract)
				<div class="contracts__row">
					<!-- <div class="contracts__checkbox contracts__checkbox-table">
						<input class="contracts__input" type="checkbox">
						<div class="contracts__square"></div>
					</div>
					<div class="contracts__edit"></div> ->
					<div class="contracts__customer">
						<div class="contracts__text">{{$contract->customerFio()}}</div>
					</div>
					<div class="contracts__number">
						<div class="contracts__text">№{{$contract->offer_number}}</div>
					</div>
					<div class="contracts__status">
						<div class="contracts__text">
							{{($contract->status == 0 ? 'Коммерческое' : ($contract->status == 1 ? 'Контракт' : 'Закрытый'))}}
						</div>
					</div>
					<div class="contracts__date">
						<div class="contracts__text">{{date('d.m.Y', strtotime($contract->date))}}</div>
					</div>
					<div class="contracts__total">
						<div class="contracts__text {{$contract->profit < 0 ? 'warning-text' : ''}}">{{$contract->profit}} руб</div>
					</div>
					<div class="contracts__client">
						@php
							$engineer = $contract->getEngineers()->first();
						@endphp
						<div class="contracts__text">{{$engineer != null ? $engineer->user->getFio() : ''}}</div>
					</div>
					<div class="contracts__show" style="display: flex">
						<a class="button button--mr contracts__show-btn" href="{{route('contract', $contract->id)}}">Просмотр</a>
						@can('update', $contract)
							<a class="button contracts__show-btn" href="{{route('contract-edit', $contract->id)}}">Редактирование</a>
						@endcan
					</div>
					@if ($status == 'commercial' && Auth::user()->can('confirm', $contract))
						<div class="contracts__accept">
							<a class="button contracts__accept-btn" href="#">Подтвердить</a>
							<div class="contracts__text"></div>
						</div>
						<div class="modal-contracts-box">
							<div class="background-overlay"></div>
							<div class="modal-contracts">
							<div class="modal-contracts__title">Вы уверены что хотите создать контракт?</div>
							<div class="modal-contracts__buttons">
								<a class="button modal-contracts__button js-contracts-accept" href="#" data-id="{{$contract->id}}">Да</a>
								<a class="button button--light modal-contracts__button js-contracts-close" href="#">Нет</a>
							</div>
							</div>
						</div>
					@endif
				</div>
			@endforeach
		</div>
	</div> -->
</div>
{{ $contracts->links('pagination.custom') }}
@endsection