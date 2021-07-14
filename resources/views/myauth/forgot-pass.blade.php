@extends('layouts.clear')

@section('content')
<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
<div class="container">
	<div class="">
		<div class="">
			<div class="modal__sign-in">
				<div class="modal__logo"><img class="logo" src="src/blocks/logo/assets/img/logo.svg">
				</div>
				<div class="modal__sign-in-container">
				<div class="modal__title">Восстановление пароля</div>
				<form action="{{route('fff')}}" method="POST">
					@csrf
					<div class="modal__form-inner @error('email') error @enderror">
						<div class="modal__label modal__label--mb">Введите email  (мы отправим письмо с подтверждением)</div>
						<input class="modal__input" type="email" name="email" value="{{old('email')}}">
						@error('email') <span class="error__text">{{ $message }}</span> @enderror
						@if (session('status'))
							<span style="margin-top: 5px;">{{ session('status') }}</span>
						@endif
					</div>
					<button class="button button--width modal__button">Восстановить пароль</button>
				</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection