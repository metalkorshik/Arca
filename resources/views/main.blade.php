@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Дашборд</div>
	</div>
</div>
@endsection

@section('page', 'main')

@section('content')
<div class="container">
	<div class="main__inner">
		<div class="main__item">
			<div class="main__text main__text--mb">Количество сотрудников</div>
			<div class="main__information main__information--border">
			<div class="main__information-icon"><img src="src/blocks/main/assets/img/person.svg"></div>
			<div class="main__information-text">52</div>
			</div>
			<div class="main__box">
			<div class="main__information-small">
				<div class="main__information-icon main__information-icon--center"><img src="src/blocks/main/assets/img/map.svg"></div>
				<div class="main__text main__text--center">В объектах</div>
				<div class="main__information-text-small">25</div>
			</div>
			<div class="main__information-small">
				<div class="main__information-icon main__information-icon--center"><img src="src/blocks/main/assets/img/office.svg"></div>
				<div class="main__text main__text--center">В офисе</div>
				<div class="main__information-text-small">25</div>
			</div>
			</div>
		</div>
		<div class="main__item">
			<div class="main__text main__text--mb">Количество сотрудников</div>
			<div class="main__information">
			<div class="main__information-icon"><img src="src/blocks/main/assets/img/person.svg"></div>
			<div class="main__information-text main__information-text--row">52
				<div class="main__information-amount">1 000 000 руб.</div>
			</div>
			</div>
			<div class="main__text main__text--mb-small">Коммерческие предложения</div>
			<div class="main__information">
			<div class="main__information-icon"><img src="src/blocks/main/assets/img/commercial.svg"></div>
			<div class="main__information-text main__information-text--row">52
				<div class="main__information-amount">1 000 000 руб.</div>
			</div>
			</div>
		</div>
		<div class="main__item">
			<div class="main__text main__text--mb">Перерасход</div>
			<div class="main__information">
			<div class="main__information-icon"><img src="src/blocks/main/assets/img/wallet.svg"></div>
			<div class="main__information-text">50000 руб.</div>
			</div>
			<div class="main__text main__text--mb-small">Перерасход</div>
			<div class="main__information">
			<div class="main__information-icon"><img src="src/blocks/main/assets/img/connection.svg"></div>
			<div class="main__information-text">2</div>
			</div>
		</div>
	</div>
</div>
@endsection