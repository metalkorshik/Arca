@extends('layouts.app')

@section('user-panel')
<style>
	.flats {
		padding: 30px 0 78px;
	}
</style>
<form class="container" action="{{route('flats')}}">
	<div class="user-panel__inner">
	<div class="user-panel__choice">
		<div class="user-panel__title">Квартиры</div>
	</div>
	<div class="user-panel__select-container">
		<div class="user-panel__box">
		<div class="user-panel__input-box user-panel__input-box--search-big">
			<input class="user-panel__input" type="text" placeholder="Введите адрес" value="{{is_null($filters) ? '' : $filters['address']}}" name="filters[address]">
			<div class="user-panel__input-icon"><img src="/src/blocks/user-panel/assets/img/search.svg"></div>
		</div>
		</div>
		<button class="button user-panel__search">Поиск</button>
		@if ($filters != null)
			<a href="{{route('flats')}}" class="button button--clear button button--clear--small">
				<div class="button__clear-icon"></div>
			</a>
		@endif
	</div>
	</div>
</form>
@endsection
@section('page', 'flats')
@section('content')
<div class="container">
	<div class="contracts__header">
		<form id="remove-flat" class="contracts__panel" action="{{route('remove-flat-multiple')}}" method="POST">
			{!! csrf_field() !!}
			<button class="contracts__remove" href="#">
				<div class="contracts__remove-icon"></div>Удалить
			</button>
		</form>
		<div class="button contracts__button"><a class="modal__flat-add" href="#">Добавить квартиру</a></div>
	</div>
	<div class="contracts__errors">
		<ul>
			@if($errors->any())
				@foreach ($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			@endif
		</ul>
	</div>
	<div class="contracts__wrapper">
		<div class="contracts__block">
			<div class="contracts__named contracts__named--staff">
				<div class="contracts__address">
					<div class="contracts__overhead">Адрес</div>
				</div>
				<div class="contracts__cost">
					<div class="contracts__overhead">Стоимость</div>
				</div>
			</div>

			@foreach($flats as $flat)
				<div class="contracts__row flat-{{$flat->id}}">
					<div class="contracts__checkbox contracts__checkbox-table">
						<input form="remove-flat" name="flats[]" value="{{$flat->id}}" class="contracts__input" type="checkbox">
						<div class="contracts__square"></div>
					</div>
					<div class="contracts__address">
						<div class="contracts__text">{{ $flat->address }}</div>
					</div>
					<div class="contracts__cost">
						<div class="contracts__text">{{ $flat->cost }} руб.</div>
					</div>
					<div class="button button--mr contracts__button-see">
						<a href="#" class="modal__apartments" data-id="{{$flat->id}}">Просмотр</a>
					</div>
					<div class="button contracts__button-see">
						<a href="#" class="modal__flat-edit" data-id="{{$flat->id}}">Редактирование</a>
					</div>
				</div>
			@endforeach

		</div>
	</div>
	{{ $flats->links('pagination.custom') }}
</div>

<div class="modal modal-flat">
	<form class="modal__content" action="{{ route('flat-store') }}" method="POST">
		{!! csrf_field() !!}
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__flat"><img class="modal__flat-img" src="/src/blocks/modal/assets/img/apartment.png">
		<div class="modal__header modal__header--flat">Добавить квартиру</div>
		<div class="modal__flat-inner">
			<div class="modal__address">
			<div class="modal__label">Адрес квартиры</div>
			<input class="modal__input" placeholder="Генерала Ермолова ул, 12" name="address" required maxlength="100" />
			</div>
			<div class="modal__flat-total">
			<div class="modal__label">Итого:</div>
			<div class="modal__input-box">
				<div class="modal__wallet"><img src="/src/blocks/modal/assets/img/wallet.svg"></div>
				<input class="modal__input modal__input--mb-none modal__input--pl modal__input--background-focus" name="cost" type="number" required min="0.01" step="0.01">
				<div class="modal__icon-rub"></div>
			</div>
			</div>
			<input class="button" type="submit" value="Сохранить" />
		</div>
		</div>
	</form>
</div>

<form class="modal modal-flat-edit">
	<div class="modal__content">
		{!! csrf_field() !!}
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__flat"><img class="modal__flat-img" src="/src/blocks/modal/assets/img/apartment.png">
		<div class="modal__header modal__header--flat">Редактировать квартиру</div>
		<div class="modal__flat-inner">
			<div class="modal__address">
			<div class="modal__label">Адрес квартиры</div>
			<input class="modal__input" placeholder="Генерала Ермолова ул, 12" name="address" required maxlength="100" />
			</div>
			<div class="modal__flat-total">
			<div class="modal__label">Итого:</div>
			<div class="modal__input-box">
				<div class="modal__wallet"><img src="/src/blocks/modal/assets/img/wallet.svg"></div>
				<input class="modal__input modal__input--mb-none modal__input--pl modal__input--background-focus" name="cost" type="number" required min="0.01" step="0.01">
				<div class="modal__icon-rub"></div>
			</div>
			</div>
			<input class="button" type="submit" value="Сохранить" />
		</div>
		</div>
	</div>
</form>

<div class="modal modal-apartments">
  <div class="modal__content">
    <div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
    <div class="modal__apartments-box">
      <div class="modal__header modal__header--apartments">Генерала Ермолова ул, 12</div>
      <div class="modal__apartments-inner">
        <div class="modal__apartments-overhead">
          <div class="modal__apartments-name modal__apartments-name--pb">
            <div class="modal__text">Проживают (ли) в квартире:</div>
          </div>
          <div class="modal__apartments-arrival">
            <div class="modal__text">Прибытие</div>
          </div>
          <div class="modal__apartments-departure">
            <div class="modal__text">Выезд</div>
          </div>
        </div>
        <div class="modal__apartments-row">
          <div class="modal__apartments-name">
            <div class="modal__text modal__text--hidden">Проживают (ли) в квартире:</div>
            <div class="modal__text modal__text--bold">1.Вимм Билль Данн</div>
          </div>
          <div class="modal__apartments-arrival">
            <div class="modal__text modal__text--hidden">Прибытие</div>
            <div class="modal__text">18. 08. 2020</div>
          </div>
          <div class="modal__apartments-departure">
            <div class="modal__text modal__text--hidden">Выезд</div>
            <div class="modal__text">19. 09. 2020</div>
          </div>
        </div>
        <div class="modal__apartments-row">
          <div class="modal__apartments-name">
            <div class="modal__text modal__text--hidden">Проживают (ли) в квартире:</div>
            <div class="modal__text modal__text--bold">2.Вимм Билль Данн</div>
          </div>
          <div class="modal__apartments-arrival">
            <div class="modal__text modal__text--hidden">Прибытие</div>
            <div class="modal__text">18. 08. 2020</div>
          </div>
          <div class="modal__apartments-departure">
            <div class="modal__text modal__text--hidden">Выезд</div>
            <div class="modal__text">19. 09. 2020</div>
          </div>
        </div>
        <div class="modal__apartments-row">
          <div class="modal__apartments-name">
            <div class="modal__text modal__text--hidden">Проживают (ли) в квартире:</div>
            <div class="modal__text modal__text--bold">3.Вимм Билль Данн</div>
          </div>
          <div class="modal__apartments-arrival">
            <div class="modal__text modal__text--hidden">Прибытие</div>
            <div class="modal__text">18. 08. 2020</div>
          </div>
          <div class="modal__apartments-departure">
            <div class="modal__text modal__text--hidden">Выезд</div>
            <div class="modal__text">19. 09. 2020</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection