@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Добавить сотрудника</div>
	</div>
</div>
@endsection
@section('page', 'commercial-offer')
@section('content')
<div class="container">
	<div class="commercial-offer__inner">
		<form class="commercial-offer__grid watched-form" method="POST" action="{{route('staff-store')}}"
			enctype="multipart/form-data">
			{!! csrf_field() !!}
			<input type="hidden" name="temp_path" value="{{ old('temp_path', $temp_path) }}" />
			<input type="hidden" name="photo_path" value="{{ old('photo_path') }}" />
			<div class="commercial-offer__photo"><img class="commercial-offer__image"
					src="{{ old('photo_path') ? '/storage/users/' . old('temp_path') . '/' . old('photo_path') : '../src/blocks/commercial-offer/assets/img/image.png' }}"
					id="imgshow">
				<div class="commercial-offer__file-photo @error('photo') error @enderror">
					<input class="commercial-offer__download-photo" type="file" name="photo" accept=".jpeg,.jpg,.png"
						{{ old('photo_path') ? '' : 'required' }} id="imgload">
					<div class="button">Добавить фото *</div>
					@error('photo') <div class="error__text">{{ $message }}</div> @enderror
				</div>
			</div>
			<div class="commerical-offer__block">
				<div class="commercial-offer__container">
					<div class="commercial-offer__item
				@error('fname') error @enderror
				@error('lname') error @enderror
				@error('mname') error @enderror">
						<div class="commercial-offer__label commercial-offer__label--necessarily">ФИО</div>
						<input class="commercial-offer__input" style="width: 32%" type="text" required name="lname"
							value="{{ old('lname') }}" placeholder="Фамилия" maxlength="50">
						<input class="commercial-offer__input" style="width: 32%" type="text" required name="fname"
							value="{{ old('fname') }}" placeholder="Имя" maxlength="50">
						<input class="commercial-offer__input" style="width: 32%" type="text" required name="mname"
							value="{{ old('mname') }}" placeholder="Отчество" maxlength="50">
						@error('fname') <div class="error__text">{{ $message }}</div> @enderror
						@error('lname') <div class="error__text">{{ $message }}</div> @enderror
						@error('mname') <div class="error__text">{{ $message }}</div> @enderror
					</div>
					<div class="commercial-offer__item @error('email') error @enderror">
						<div class="commercial-offer__label">Email</div>
						<input class="commercial-offer__input" name="email" value="{{ old('email') }}" type="email"
							maxlength="50" placeholder="">
						@error('email') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="commercial-offer__container">
					<div class="commercial-offer__item">
						<div class="commercial-offer__label commercial-offer__label--necessarily">Телефон</div>
						<div class="staff__phones">
							@if (old('phones'))
							@foreach (old('phones') as $i => $phone)
								<div class="staff__phone @error("phones.$i") error @enderror">
									<div class="staff__phone-field">
										<input class="commercial-offer__input js-phone" name="phones[]" type="text" value="{{$phone}}" />
										@if ($i == 0)
											<button class="button button--clear button--clear--small button-add-phone">
												<div class="button__plus-icon"></div>
											</button>
										@else
											<button class="button button--clear button--clear--small button-remove-phone">
												<div class="button__minus-icon"></div>
											</button>
										@endif
									</div>
									@error("phones.$i") <div class="error__text">{{ $message }}</div> @enderror
								</div>
							@endforeach
							@else
								<div class="staff__phone">
									<div class="staff__phone-field">
										<input class="commercial-offer__input js-phone" name="phones[]" type="text">
										<button class="button button--clear button--clear--small button-add-phone">
											<div class="button__plus-icon"></div>
										</button>
									</div>
								</div>
							@endif
						</div>
					</div>
					<div class="commercial-offer__item @error('birthday') error @enderror">
						<div class="commercial-offer__label">Дата рождения</div>
						<input class="commercial-offer__input js-date" name="birthday" value="{{ old('birthday') }}"
							type="text">
						@error('birthday') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="commercial-offer__container">
					<div class="commercial-offer__item">
						<div class="commercial-offer__document">
							<div class="commercial-offer__document-box @error('passport_seria') error @enderror">
								<div class="commercial-offer__label">Серия</div>
								<input class="commercial-offer__input js-input-series" name="passport_seria"
									value="{{ old('passport_seria') }}" type="text">
								@error('passport_seria') <div class="error__text">{{ $message }}</div> @enderror
							</div>
							<div class="commercial-offer__document-box @error('passport_number') error @enderror">
								<div class="commercial-offer__label">Номер</div>
								<input class="commercial-offer__input js-input-num" name="passport_number"
									value="{{ old('passport_number') }}" type="text">
								@error('passport_number') <div class="error__text">{{ $message }}</div> @enderror
							</div>
						</div>
					</div>
					<div class="commercial-offer__item select-style @error('role') error @enderror">
						<div class="commercial-offer__label commercial-offer__label--necessarily">Должность</div>
						<select class="js-select-position" type="text" maxlength="50" name="role" required>
							@foreach($roles as $role)
							<option value="{{$role->role}}" {{(old('role') == $role->role ? 'selected' : '')}}>
								{{$role->title}}</option>
							@endforeach
						</select>
						@error('role') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="commercial-offer__container">
					<div class="commercial-offer__item @error('rate') error @enderror">
						<div class="commercial-offer__label">Ставка</div>
						<input class="commercial-offer__input commercial-offer__input--width js-validate-rate"
							name="rate" value="{{ old('rate') }}" type="number" min="0.01" step="0.01" required>
						@error('rate') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="commercial-offer__container">
					<div class="commercial-offer__item">
						<div class="commercial-offer__label">Удостоверение</div>
						<div class="commercial-offer__container">
							<div class="commercial-offer__file">
								<input class="commercial-offer__file-input" type="file" multiple
									onchange="javascript:downloadIdentity()" id="inputIdentity">
								<div class="commercial-offer__file-icon"></div>
								<div class="commercial-offer__file-text">Выберите файлы или архив</div>
							</div>
						</div>
					</div>
				</div>
				<div class="commercial-offer__container">
					<div class="commercial-offer__item">
						<div class="commercial-offer__tab-block">
							<div class="commercial-offer__tab" id="listIdentity">
								<div class="commercial-offer__tab-head">
									<div class="commercial-offer__col">
										<div class="commercial-offer__text">Название</div>
									</div>
									<div class="commercial-offer__col">
										<div class="commercial-offer__text">Срок действия</div>
									</div>
									<div class="commercial-offer__col">
										<div class="commercial-offer__text">Дата выдачи</div>
									</div>
								</div>
								@if (old('documents'))
								@for ($i = 0, $l = count(old('documents')); $i < $l; ++$i) <div
									class="commercial-offer__row">
									<div class="commercial-offer__col">
										<div class="commercial-offer__name">
											<input name="documents[{{$i}}][title]" type="text" placeholder="Название"
												require="" value="{{old('documents')[$i]['title']}}" maxlength="50"
												class="commercial-offer__input_text">
											<input name="documents[{{$i}}][path]" type="hidden"
												value="{{old('documents')[$i]['path']}}">
										</div>
									</div>
									<div class="commercial-offer__col">
										<input name="documents[{{$i}}][validity]" type="text" placeholder="Дата"
											require="" value="{{old('documents')[$i]['validity']}}" maxlength="50"
											class="commercial-offer__input-date js-date hasDatepicker"
											id="dp1604509743094">
									</div>
									<div class="commercial-offer__col">
										<input name="documents[{{$i}}][date_of_issue]" type="text" placeholder="Дата"
											require="" value="{{old('documents')[$i]['date_of_issue']}}" maxlength="50"
											class=".commercial-offer__input-date js-date hasDatepicker"
											id="dp1604509743095">
									</div>
									<div class="commercial-offer__remove-box" data-file="1604509772.png">
										<div class="commercial-offer__remove"></div>
									</div>
							</div>
							@endfor
							@endif
						</div>
					</div>
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item">
					<div class="commercial-offer__label">Рост</div>
					<input class="commercial-offer__input js-input-height" name="height" value="{{ old('height') }}"
						type="text">
				</div>
				<div class="commercial-offer__item">
					<div class="commercial-offer__label">Размер обуви</div>
					<input class="commercial-offer__input js-input-shoes" name="shoe_size"
						value="{{ old('shoe_size') }}" type="text">
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item">
					<div class="commercial-offer__label">Размер одежды</div>
					<input class="commercial-offer__input commercial-offer__input--width" name="clothing_size"
						value="{{ old('clothing_size') }}" type="text" maxlength="4" id="inputClothes">
				</div>
			</div>
			<div class="commercial-offer__container">
				<div class="commercial-offer__item @error('password') error @enderror">
					<div class="commercial-offer__label">Пароль</div>
					<input class="commercial-offer__input" type="password" name="password" minlength="8" maxlength="50">
					@error('password') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="commercial-offer__item">
					<div class="commercial-offer__label">Подтверждение пароля</div>
					<input class="commercial-offer__input" type="password" name="password_confirmation" minlength="8" maxlength="50">
				</div>
			</div>
			<!-- <a class="button commercial-offer__btn" href="#">Сохранить</a> -->
			<input type="submit" class="button commercial-offer__btn" value="Сохранить" />
	</div>
</div>
</form>
</div>

<script>
	window.addEventListener('load', function () {
		$('.button-add-phone').bind('click', function (e) {
			e.preventDefault();
			$('.staff__phones').append(`
				<div class="staff__phone">
					<div class="staff__phone-field">
						<input class="commercial-offer__input js-phone" name="phones[]" type="text">
						<button class="button button--clear button--clear--small button-remove-phone">
							<div class="button__minus-icon"></div>
						</button>
					</div>
				</div>
			`);

			$('.js-phone').mask(masks.phone);

			$('.button-remove-phone').bind('click', function (e) {
				e.preventDefault();
				$(this).closest('.staff__phone').remove();
			})
		});

		$('.button-remove-phone').bind('click', function (e) {
			e.preventDefault();
			$(this).closest('.staff__phone').remove();
		})
	});
</script>
@endsection