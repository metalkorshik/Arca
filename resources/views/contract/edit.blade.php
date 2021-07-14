@extends('layouts.app')

@section('title', __('contract.edit_title', ['number' => $contract->offer_number]))

@section('user-panel')
<style>
	.disable__choice__remove {
		display: none;
	}
</style>
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Редактирование коммерческого предложения</div>
	</div>
</div>
@endsection
@section('page', 'commercial-offer')
@section('content')
<form action="{{ route('contract-update', $contract->id) }}" method="POST" class="container watched-form">
	{!! csrf_field() !!}
	<div class="commercial-offer__inner">
		@can('full_update', $contract)
			<div class="commercial-offer__container">
				<div class="commercial-offer__item @error('title') error @enderror">
					<div class="commercial-offer__label commercial-offer__label--necessarily">Название проекта/Наименование работ кратко</div>
					<input class="commercial-offer__input" type="text" required maxlength="70" name="title" value="{{old('title', $contract->title)}}">
					@error('title') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="commercial-offer__item @error('legal_entity') error @enderror">
					<div class="commercial-offer__label">Заказчик (юр.лицо)</div>
					<input class="commercial-offer__input" type="text" name="legal_entity" value="{{ old('legal_entity', $contract->legal_entity) }}" placeholder="">
					@error('legal_entity') <div class="error__text">{{ $message }}</div> @enderror
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item
					@error('customer_fname') error @enderror
					@error('customer_lname') error @enderror
					@error('customer_mname') error @enderror">
					<div class="commercial-offer__label commercial-offer__label--necessarily">ФИО представителя заказчика</div>
					<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_fname', $contract->customer_lname) }}" type="text" maxlength="50" name="customer_lname" required placeholder="фамилия">
					<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_lname', $contract->customer_fname) }}" type="text" maxlength="50" name="customer_fname" required placeholder="имя">
					<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_mname', $contract->customer_mname) }}" type="text" maxlength="50" name="customer_mname" placeholder="отчество">
					@error('customer_fname') <div class="error__text">{{ $message }}</div> @enderror
					@error('customer_lname') <div class="error__text">{{ $message }}</div> @enderror
					@error('customer_mname') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="commercial-offer__item">
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item @error('email') error @enderror">
					<div class="commercial-offer__label commercial-offer__label--necessarily">Email представителя заказчика</div>
					<input class="commercial-offer__input" type="email" name="email" required value="{{ old('email', $contract->email) }}">
					@error('email') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="commercial-offer__item @error('phone') error @enderror">
					<div class="commercial-offer__label">Номер представителя заказчика</div>
					<input class="commercial-offer__input js-phone" type="text" name="phone" value="{{ old('phone', $contract->phone) }}">
					@error('phone') <div class="error__text">{{ $message }}</div> @enderror
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item @error('date') error @enderror">
					<div class="commercial-offer__label commercial-offer__label--necessarily">Дата контракта</div>
					<input class="commercial-offer__input js-date" type="text" name="date" required value="{{ old('date', date('d/m/Y', strtotime($contract->date))) }}">
					@error('date') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="commercial-offer__item @error('offer_number') error @enderror">
					<div class="commercial-offer__label">Номер контракта</div>
					<input class="commercial-offer__input js-input-number" type="text" placeholder="" name="offer_number" maxlength="40" value="{{ old('offer_number', $contract->offer_number) }}">
					@error('offer_number') <div class="error__text">{{ $message }}</div> @enderror
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item @error('comment') error @enderror">
					<div class="commercial-offer__label">Комментарий</div>
					<textarea class="commercial-offer__textarea" name="comment">{{ old('comment', $contract->comment) }}</textarea>
					@error('comment') <div class="error__text">{{ $message }}</div> @enderror
				</div>
			</div>
		@endcan
			<div class="commercial-offer__container">
				<div class="commercial-offer__item">
				<div class="commercial-offer__label">Назначить сотрудника на контракт</div>
				<div class="commercial-offer__selector">
				@can('full_update', $contract)
					<div class="commercial-offer__named">Инженеры</div>
					<select class="js-select-engineer" name="engineers[]" multiple="multiple" required>
						@php
							// $currentEngineer = $contract->getEngineers();
							// $currentEngineer = old('engineer', $currentEngineer == null ? null : $currentEngineer->id);
							$currentEngineers = old('engineers[]', $contract->getEngineers()->pluck('user_id')->toArray());
						@endphp
						@foreach($engineers as $engineer)
							<option value="{{$engineer->id}}"
								{{count($currentEngineers) && in_array($engineer->id, $currentEngineers) ? 'selected' : '' }}>
								{{$engineer->getFio()}}</option>
						@endforeach
					</select>
					@if ($contract->getPlanner() == null)
						<div class="commercial-offer__named"> Проектировщик</div>
						<select class="js-select-designer" name="planner">
							<option disabled selected>Выберите</option>
							@php
								$currentPlanner = $contract->getPlanner();
								$currentPlanner = old('planner', $currentPlanner == null ? null : $currentPlanner->id);
							@endphp
							@foreach($planners as $planner)
								<option value="{{$planner->id}}"
									{{$currentPlanner != null && $planner->id == $currentPlanner ? 'selected' : '' }}>
									{{$planner->getFio()}}</option>
							@endforeach
						</select>
					@endif
				@endcan
				@can('staff_update', $contract)
					<div class="commercial-offer__named">Рабочий персонал</div>
						<select class="js-select-personal" name="staff[]" multiple="multiple">
							@php
								$currentStaff = old('staff[]', $contract->getWorkers()->pluck('user_id')->toArray());
							@endphp
							@foreach($staff as $worker)
								<option value="{{$worker->id}}"
									{{in_array($worker->id, $currentStaff) ? 'selected' : ''}}>{{$worker->getFio()}}</option>
							@endforeach
						</select>
					</div>
				@endcan
			</div>
		</div>
		<input type="submit" class="button commercial-offer__btn" value="Сохранить" />
	</div>
</div>
<script>

	document.getElementsByClassName('js-select-personal')[0].addEventListener('click', function() {
		console.log(123);
	});

</script>
@endsection