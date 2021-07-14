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
				<div class="modal__logo"><img class="logo" src="/src/blocks/logo/assets/img/logo.svg">
				</div>
				<div class="modal__sign-in-container">
				<div class="modal__title">Восстановление пароля</div>
				<form action="{{ route('password.update') }}" method="POST">
					@csrf
					<input type="hidden" name="token" value="{{$token}}">
					<input type="hidden" name="email" value="{{$email}}">
					<div class="modal__form-inner">
						<div class="modal__label modal__label--mb">Пароль</div>
						<input id="password" type="password" class="modal__input @error('password') error @enderror" name="password" required="" autocomplete="new-password" minlength="8">
						@error('password') <span class="error__text">{{ $message }}</span> @enderror
						<div class="modal__label modal__label--mb">Повторите пароль</div>
						<input id="password-confirm" type="password" class="modal__input @error('password_confirmation') error @enderror" name="password_confirmation" required="" autocomplete="new-password" minlength="8">
						@error('password_confirmation') <span class="error__text">{{ $message }}</span> @enderror
					</div>
					<button type="submit" class="button button--width modal__button">Восстановить пароль</button>
				</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection