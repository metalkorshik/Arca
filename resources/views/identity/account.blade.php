@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Личный кабинет</div>
		<a class="button user-panel__notes-link" href="{{route('user-notes')}}">Заметки</a>
	</div>
</div>
@endsection
@section('page', 'personal-area')
@section('content')
<div class="container">
	<form class="personal-area__inner" action="{{route('user-update')}}" method="POST" enctype="multipart/form-data">
		{!! csrf_field() !!}
		<div class="personal-area__photo-img"><img class="personal-area__image" src="/storage/users/{{Auth::user()->id . '/' . old('photo_path', Auth::user()->info->photo_path)}}" id="imgOutput">
			<div class="personal-area__download-box @error('photo') error @enderror">
				<input type="hidden" name="photo_path" value="{{old('photo_path', $user->info->photo_path)}}" />
				<input class="personal-area__download-file" type="file" id="imgInput" name="photo">
				<button class="button personal-area__add-photo">Добавить фото</button>
				@error('photo') <div class="error__text">{{ $message }}</div> @enderror
			</div>
		</div>
		<div class="personal-area__container">
			<div class="personal-area__item personal-area__item @error('lname') error @enderror">
				<div class="personal-area__label">Фамилия</div>
				<input class="input-styled personal-area__input" type="text" name="lname" value="{{old('lname', $user->lname)}}" maxlength="50">
				@error('lname') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="personal-area__item personal-area__item @error('fname') error @enderror">
				<div class="personal-area__label">Имя</div>
				<input class="input-styled personal-area__input" type="text" name="fname" value="{{old('fname', $user->fname)}}" maxlength="50">
				@error('fname') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="personal-area__item personal-area__item--mb @error('mname') error @enderror">
				<div class="personal-area__label">Отчество</div>
				<input class="input-styled personal-area__input" type="text" name="mname" value="{{old('mname', $user->mname)}}" maxlength="50">
				@error('mfname') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			<div class="personal-area__row">
			<div class="personal-area__item personal-area__item--mr">
				<div class="personal-area__label">Телефон</div>
				@if (old('phones'))
					@foreach (old('phones') as $i => $phone)
						<div class="@error("phones.$i") error @enderror">
							<input class="input-styled personal-area__input js-phone" name="phones[]" value="{{$phone}}" type="text" readonly>
							@error("phones.$i") <div class="error__text">{{ $message }}</div> @enderror
						</div>
					@endforeach
				@else
					<input class="input-styled personal-area__input js-phone" required name="phones[]" value="{{$user->contacts()->first() ? $user->contacts()->first()->value : ''}}" type="text">
				@endif
			</div>
			<div class="personal-area__item @error('email') error @enderror">
				<div class="personal-area__label">E-mail</div>
				<input class="input-styled personal-area__input" type="email" name="email" value="{{old('email', $user->email)}}">
				@error('email') <div class="error__text">{{ $message }}</div> @enderror
			</div>
			</div>
			<div class="personal-area__passwords">
				<div class="personal-area__item personal-area__item--mr @error('password') error @enderror">
					<div class="personal-area__label">Старый пароль</div>
					<input class="input-styled personal-area__input" type="password" name="old_password" minlength="6">
					@error('password') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="personal-area__item personal-area__item--mr">
					<div class="personal-area__label">Новый пароль</div>
					<input class="input-styled personal-area__input" type="password" name="password" minlength="6">
				</div>
				<div class="personal-area__item">
					<div class="personal-area__label">Повторите пароль</div>
					<input class="input-styled personal-area__input" type="password" name="password_confirmation" minlength="6">
				</div>
			</div>
			<button class="button personal-area__btn-change">Обновить</button>
		</div>
	</form>
</div>
@endsection