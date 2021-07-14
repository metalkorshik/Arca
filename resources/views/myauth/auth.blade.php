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
				<div class="modal__logo"><img class="logo" src="src/blocks/logo/assets/img/logo.svg"></div>
				<div class="modal__sign-in-container">
				<div class="modal__title">Вход</div>
				<form action="{{route('login')}}" method="POST">
					@csrf
					<div class="modal__form-inner">
						<div class="modal__label">Логин</div>
						<input class="modal__input @error('email') error @enderror" type="text" name="email" value="{{old('email')}}">
						@error('email') <span class="error__text">{{ $message }}</span> @enderror
						<div class="modal__label">Пароль</div>
						<div class="modal__input-box @error('password') error @enderror">
							<input class="modal__input modal__input-password" type="password" name="password" value="{{old('password')}}">
							<div class="modal__pass-container">
								<div class="modal__pass-icon modal__pass-icon--show-icon"></div>
								<div class="modal__pass-icon modal__pass-icon--hide-icon modal__pass-icon--hide"></div>
							</div>
						</div>
						@error('password') <span class="error__text">{{ $message }}</span> @enderror
					</div>
					<a class="modal__pass-link" href="{{route('forgot-pass')}}">Забыли пароль?</a>
					<button class="button button--width modal__button">Войти</button>
				</form>
			</div>
		</div>
	</div>
</div>
@endsection