@extends('layouts.app')

@section('title', __('contract.create_title'))

@section('user-panel')
	<div class="container">
		<div class="user-panel__inner">
			<div class="user-panel__title">Коммерческоe предложениe</div>
		</div>
	</div>
@endsection
@section('page', 'commercial-offer')
@section('content')
	<form action="{{ route('contract-store') }}" method="POST" class="container watched-form">
		{!! csrf_field() !!}
		<div class="commercial-offer__inner">
		<div class="commercial-offer__container">
			<div class="commercial-offer__item @error('title') error @enderror">
				<div class="commercial-offer__label commercial-offer__label--necessarily">Название проекта/Наименование работ кратко</div>
				<input class="commercial-offer__input" type="text" maxlength="50" name="title" required value="{{ old('title') }}">
				@error('title') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="commercial-offer__item @error('legal_entity') error @enderror">
				<div class="commercial-offer__label">Заказчик (юр.лицо)</div>
				<input class="commercial-offer__input" type="text" name="legal_entity" value="{{ old('legal_entity') }}" placeholder="">
				@error('legal_entity') <div class="error__text">{{ $message }}</div> @enderror
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item
				@error('customer_fname') error @enderror
				@error('customer_lname') error @enderror
				@error('customer_mname') error @enderror">
				<div class="commercial-offer__label commercial-offer__label--necessarily">ФИО представителя заказчика</div>
				<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_lname') }}" type="text" maxlength="50" name="customer_lname" required placeholder="фамилия">
				<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_fname') }}" type="text" maxlength="50" name="customer_fname" required placeholder="имя">
				<input class="commercial-offer__input" style="width: 32%;" value="{{ old('customer_mname') }}" type="text" maxlength="50" name="customer_mname" placeholder="отчество">
				@error('customer_fname') <div class="error__text">{{ $message }}</div> @enderror
				@error('customer_lname') <div class="error__text">{{ $message }}</div> @enderror
				@error('customer_mname') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="commercial-offer__item"></div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item @error('email') error @enderror">
				<div class="commercial-offer__label commercial-offer__label--necessarily">Email представителя заказчика</div>
				<input class="commercial-offer__input" type="email" name="email" required value="{{ old('email') }}">
				@error('phone') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="commercial-offer__item @error('phone') error @enderror">
				<div class="commercial-offer__label">Номер представителя заказчика</div>
				<input class="commercial-offer__input js-phone" type="text" name="phone" value="{{ old('phone') }}">
				@error('phone') <div class="error__text">{{ $message }}</div> @enderror
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item @error('date') error @enderror">
				<div class="commercial-offer__label commercial-offer__label--necessarily">Дата контракта</div>
				<input class="commercial-offer__input js-date" type="text" name="date" value="{{ old('date') }}" required>
				@error('date') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="commercial-offer__item @error('offer_number') error @enderror">
				<div class="commercial-offer__label">Номер контракта</div>
				<input class="commercial-offer__input js-input-number" type="text" name="offer_number" maxlength="40" value="{{ old('offer_number') }}" placeholder="">
				@error('offer_number') <div class="error__text">{{ $message }}</div> @enderror
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item">
			<div class="commercial-offer__label">Список расходов</div>
			<div class="commercial-offer__tab-block">
				<div class="commercial-offer__tab commercial-offer-costs__tab">
				<div class="commercial-offer__tab-head">
					<div class="commercial-offer__col">
					<div class="commercial-offer__text">Название</div>
					</div>
					<div class="commercial-offer__col">
					<div class="commercial-offer__text">Заложено</div>
					</div>
				</div>
				@if (old('costs'))
					@for($i = 0, $l = count(old('costs')); $i < $l; ++$i)
						<div class="commercial-offer__row">
							<div class="commercial-offer__col">
								<input type="text" placeholder="Название" name="costs[{{$i}}][title]" value="{{old('costs')[$i]['title']}}" maxlength="50" class="commercial-offer__text" required="">
							</div>
							<div class="commercial-offer__col">
								<input type="number" placeholder="Сумма" name="costs[{{$i}}][sum]" value="{{old('costs')[$i]['sum']}}" maxlength="50" class="commercial-offer__text" required="">
							</div>
							<div class="commercial-offer__remove-box">
								<div class="commercial-offer__remove"></div>Удалить
							</div>
						</div>
					@endfor
				@endif
				</div>
			</div>
			<a class="button commercial-offer__tab-btn js-add-row" href="#">Добавить расход</a>
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item">
			<div class="commercial-offer__label">Аренда квартир</div>
			<div class="commercial-offer__tab-block">
				<div class="commercial-offer__tab commercial-offer-flats__tab">
				<div class="commercial-offer__tab-head">
					<div class="commercial-offer__col">
					<div class="commercial-offer__text">Квартира</div>
					</div>
					<div class="commercial-offer__col">
						<div class="commercial-offer__text">Начало аренды</div>
					</div>
					<div class="commercial-offer__col">
						<div class="commercial-offer__text">Конец аренды</div>
					</div>
				</div>
				@if (old('flats'))
					@for($i = 0, $l = count(old('flats')); $i < $l; ++$i)
						<div class="commercial-offer__row">
							<div class="commercial-offer__col">
								<select name="flats[{{$i}}][id]">
									@foreach ($flats as $flat)
										<option>{{$flat['address']}}</option>
									@endforeach
								</select>
								<select class="js-select-flat" name="flats[{{$i}}][id]" multiple="multiple" required>
									@foreach($flats as $flat)
										<option value="{{$flat['id']}}">{{$flat['address']}}</option>
									@endforeach
								</select>
							</div>
							<div class="commercial-offer__col">
								<input type="number" placeholder="От" name="flats[{{$i}}][from]" value="{{old('flats')[$i]['from']}}" maxlength="50" class="commercial-offer__text" required="">
							</div>
							<div class="commercial-offer__col">
								<input type="number" placeholder="До" name="flats[{{$i}}][to]" value="{{old('flats')[$i]['to']}}" maxlength="50" class="commercial-offer__text" required="">
							</div>
							<div class="commercial-offer__remove-box">
								<div class="commercial-offer__remove"></div>Удалить
							</div>
						</div>
					@endfor
				@endif
				</div>
			</div><a class="button commercial-offer__tab-btn js-add-flat-row" data-flats="{{json_encode($flats)}}" href="#">Добавить квартиру</a>
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item @error('comment') error @enderror">
				<div class="commercial-offer__label">Комментарий</div>
				<textarea class="commercial-offer__textarea" name="comment" value="{{ old('comment') }}"></textarea>
				@error('comment') <div class="error__text">{{ $message }}</div> @enderror
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item">
			<div class="commercial-offer__label">Прикрепить файлы</div>
			<div class="commercial-offer__file">
				<input class="commercial-offer__file-input" type="file" multiple onchange="javascript:updateList()" id="file">
				<div class="commercial-offer__file-icon"></div>Выберите файлы
			</div>
			<div class="commercial-offer__files" id="fileList"></div>
			</div>
		</div>
		<div class="commercial-offer__container">
			<div class="commercial-offer__item">
			<div class="commercial-offer__label">Назначить сотрудника на контракт</div>
			<div class="commercial-offer__selector">
				<div class="commercial-offer__named">Инженеры</div>
				<select class="js-select-engineer" name="engineers[]" multiple="multiple" required>
					@foreach($engineers as $engineer)
						<option value="{{$engineer->id}}" {{old('engineer') == $engineer->id ? 'selected' : ''}}>{{$engineer->getFio()}}</option>
					@endforeach
				</select>
				<div class="commercial-offer__named"> Проектировщик</div>
				<select class="js-select-designer" name="planner">
					<option disabled selected>Выберите</option>
					@foreach($planners as $planner)
						<option value="{{$planner->id}}" {{old('planner') == $planner->id ? 'selected' : ''}}>{{$planner->getFio()}}</option>
					@endforeach
				</select>
				<div class="commercial-offer__named"> Рабочий персонал</div>
				<select class="js-select-personal" name="staff[]" multiple="multiple">
					@foreach($staff as $worker)
						<option value="{{$worker->id}}" {{old('staff') && in_array($worker->id, old('staff')) ? 'selected' : ''}}>{{$worker->getFio()}}</option>
					@endforeach
				</select>
			</div>
			</div>
		</div>
			<input type="submit" class="button commercial-offer__btn" value="Сохранить" />
			<!-- <a class="button commercial-offer__btn" href="#">Сохранить</a> -->
		</div>
	</form>
	<div class="modal-remove-box">
		<div class="modal-overlay"></div>
		<div class="modal-remove">
		<div class="modal-remove__text">Удалить выбранный файл?</div>
		<div class="modal-remove__buttons">
			<div class="button modal-remove__button js-file-accept">Подтвердить</div>
			<div class="button button--light modal-remove__button js-file-close">Отменить</div>
		</div>
		</div>
	</div>
@endsection