@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Cотрудник</div>
	</div>
</div>
@endsection
@section('page', 'commercial-offer')
@section('content')
<div class="container">
	<div class="">
		<div class="">
		<div class="modal__title">Карточка сотрудника</div>
		<div class="modal__tabs">
			<a href="{{route('staff-info', $user->id)}}" class="modal__tab-item modal__tab-item--active">Персональная информация</a>
			@if (Auth::user()->can('view_calendar', $user))
				<a href="{{route('staff-calendar', $user->id)}}" class="modal__tab-item">Календарь</a>
			@endif
			@if (Auth::user()->can('view_another', $user))
				<a href="{{route('staff-another', $user->id)}}" class="modal__tab-item">Другое</a>
			@endcan
		</div>
		<form class="modal__employee-inner modal__employee-inner--active watched-form" method="POST" action="{{route('staff-update', $user->id)}}" enctype="multipart/form-data">
			{!! csrf_field() !!}
			<input type="hidden" name="temp_path" value="{{ old('temp_path', $temp_path) }}" />
			<div class="modal__employee-box">
			<div class="modal__employee-preview"><img class="modal__employee-photo" src="/storage/users/{{$user->id . '/' . old('photo_path', $user->info->photo_path)}}" accept=".png,.jpeg,.jpg" id="imgOutput">
				<div class="modal__employee-download">
					<input type="hidden" name="photo_path" value="{{old('photo_path', $user->info->photo_path)}}" />
					@can('update', $user)
						<input class="modal__download-file" type="file" name="photo" id="imgInput"><a class="modal__add-photo" href="#">Добавить фото</a>
					@endcan
				</div>
			</div>
			<div class="modal__container">
				<div class="modal__named-row">
					<div class="modal__status">
						<select name="role">
							@foreach ($roles as $role)
								<option value="{{$role->role}}" {{$role->role == old('role', $user->role) ? 'selected': ''}}>{{$role->title}}</option>
							@endforeach
						</select>
					</div>
				<!-- <div class="modal__edit-icon"></div> -->
				</div>
				<div class="modal__profile-row">
					<div class="modal__input-box modal__input-box--mr @error('lname') error @enderror">
						<div class="modal__label modal__label--light-grey">Фамилия</div>
						<div class="modal__input-container">
							<input class="modal__input modal__input--mb-none modal__input-name modal__input-edit" name="lname" value="{{old('lname', $user->lname)}}" type="text" placeholder="Фамилия" readonly maxlength="50">
							<div class="modal__edit-icon modal__edit-icon--position"></div>
						</div>
						@error('lname') <div class="error__text">{{ $message }}</div> @enderror
					</div>
					<div class="modal__input-box @error('birthday') error @enderror">
						<div class="modal__label modal__label--light-grey">Дата рождения</div>
						<div class="modal__input-container">
							<input class="modal__input modal__input--mb-none modal__input-born modal__input-edit js-date" type="text" name="birthday" value="{{old('birthday', date('d/m/Y', strtotime($user->info->birthday)))}}" readonly>
							<div class="modal__edit-icon modal__edit-icon--position"></div>
						</div>
						@error('lname') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="modal__profile-row">
					<div class="modal__input-box @error('fname') error @enderror">
						<div class="modal__label modal__label--light-grey">Имя</div>
						<div class="modal__input-container">
							<input class="modal__input modal__input--mb-none modal__input-name modal__input-edit" name="fname" value="{{old('fname', $user->fname)}}" type="text" placeholder="Имя" readonly maxlength="50">
							<div class="modal__edit-icon modal__edit-icon--position"></div>
						</div>
						@error('fname') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="modal__profile-row">
					<div class="modal__input-box @error('mname') error @enderror">
						<div class="modal__label modal__label--light-grey">Отчество</div>
						<div class="modal__input-container">
							<input class="modal__input modal__input--mb-none modal__input-name modal__input-edit" name="mname" value="{{old('mname', $user->mname)}}" type="text" placeholder="Отчество" readonly maxlength="50">
							<div class="modal__edit-icon modal__edit-icon--position"></div>
						</div>
						@error('mname') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				</div>
				<div class="modal__profile-row">
				@if($is_visible_rate)
					<div class="modal__input-box modal__input-box--mr @error('rate') error @enderror">
						<div class="modal__label modal__label--light-grey">Ставка</div>
						<div class="modal__input-container">
							<input class="modal__input modal__input--mb-none modal__input-rate modal__input-edit js-valid-area" name="rate" value="{{old('rate', $user->rate)}}" type="number" readonly min="0.01" step="0.01">
							<div class="modal__edit-icon modal__edit-icon--position"></div>
						</div>
						@error('rate') <div class="error__text">{{ $message }}</div> @enderror
					</div>
				@endif
				<div class="modal__input-box modal__email-input-box @error('email') error @enderror">
					<div class="modal__label modal__label--light-grey">E-mail</div>
					<div class="modal__input-container">
						<input class="modal__input modal__input--mb-none modal__input-email modal__input-edit" name="email" value="{{old('email', $user->email)}}" type="text" readonly>
						<div class="modal__edit-icon modal__edit-icon--position"></div>
					</div>
					@error('email') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				</div>
				<div class="modal__profile-row">
					<div class="modal__input-box modal__input-box--mr">
						<div class="modal__label modal__label--light-grey">Телефон</div>
						<div class="modal__input-container staff__phones">
							@foreach (old('phones', $user->contacts) as $i => $phone)
								<div class="staff__phone @error("phones.$i") error @enderror">
									<div class="staff__phone-field">
										<input class="modal__input modal__input--mb-none modal__input-phone modal__input-edit js-phone" name="phones[]" value="{{is_object($phone) ? $phone->value : $phone}}" type="text">
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
						</div>
					</div>
				</div>
				@can('change_password', $user)
					<div class="commercial-offer__container commercial-offer__password-reset-container">
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
				@endcan
				<div class="modal__parameters">
				<div class="modal__parameters-item @error('clothing_size') error @enderror">
					<div class="modal__label modal__label--light-grey">Размер одежды</div>
					<div class="modal__parameters-info">
						<input class="modal__parameters-text modal__parameters-text--width-size modal__input-edit" name="clothing_size" value="{{old('clothing_size', $user->info->clothing_size)}}" type="text" maxlength="5" readonly>
						<div class="modal__edit-icon"></div>
					</div>
					@error('rate') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="modal__parameters-item @error('height') error @enderror">
					<div class="modal__label modal__label--light-grey">Рост:</div>
					<div class="modal__parameters-info">
						<input class="modal__parameters-text modal__input-edit js-input-height" name="height" value="{{old('height', $user->info->height)}}" type="text" readonly>
						<div class="modal__edit-icon"></div>
					</div>
					@error('height') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				<div class="modal__parameters-item @error('shoe_size') error @enderror">
					<div class="modal__label modal__label--light-grey">Размер обуви:</div>
					<div class="modal__parameters-info">
						<input class="modal__parameters-text modal__parameters-text--width-small modal__input-edit js-input-shoes" name="shoe_size" value="{{old('shoe_size', $user->info->shoe_size)}}" type="text" readonly>
						<div class="modal__edit-icon"></div>
					</div>
					@error('shoe_size') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				</div>
				@can('view_documents', '\App\Staff')
					<div class="commercial-offer__container">
						<div class="commercial-offer__item">
							<div class="commercial-offer__label">Удостоверение</div>
							@can('edit_documents', '\App\Staff')
								<div class="commercial-offer__container">
									<div class="commercial-offer__file">
										<input class="commercial-offer__file-input" type="file" multiple
											onchange="javascript:downloadIdentity()" id="inputIdentity">
										<div class="commercial-offer__file-icon"></div>
										<div class="commercial-offer__file-text">Выберите файлы или архив</div>
									</div>
								</div>
							@endcan
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
									@if ($documents)
										@for ($i = 0, $l = count($documents); $i < $l; ++$i) 
											<div class="commercial-offer__row commercial-document__row">
												<div class="commercial-offer__col">
													<div class="commercial-offer__name">
														<input name="documents[{{$i}}][id]" value="{{$documents[$i]['id']}}" type="hidden"/>
														<input name="documents[{{$i}}][title]" type="text" placeholder="Название" @cannot('edit_documents', '\App\Staff') {{'disabled'}} @endcan
															 value="{{$documents[$i]['title']}}" maxlength="50"
															class="commercial-offer__input_text">
														<input name="documents[{{$i}}][path]" type="hidden"
															value="{{$documents[$i]['path']}}">
													</div>
												</div>
												<div class="commercial-offer__col">
													<input name="documents[{{$i}}][validity]" type="text" placeholder="Дата" @cannot('edit_documents', '\App\Staff') {{'disabled'}} @endcan
														require="" value="{{date('d/m/Y', strtotime($documents[$i]['validity']))}}" maxlength="50"
														class="commercial-offer__input-date js-date "
														id="dp1604509743094">
												</div>
												<div class="commercial-offer__col">
													<input name="documents[{{$i}}][date_of_issue]" type="text" placeholder="Дата" @cannot('edit_documents', '\App\Staff') {{'disabled'}} @endcan
														require="" value="{{date('d/m/Y', strtotime($documents[$i]['date_of_issue']))}}" maxlength="50"
														class=".commercial-offer__input-date js-date "
														id="dp1604509743095">
												</div>
												@can('edit_documents', '\App\Staff')
													<div class="commercial-offer__remove-box" data-file="1604509772.png">
														<div class="commercial-offer__remove"></div>
													</div>
												@endcan
												<div class="commercial-offer__download-box">
													<a class="commercial-offer__download" href="{{$documents[$i]['path']}}" download></a>
												</div>
											</div>
										@endfor
									@endif
								</div>
							</div>
						</div>
					</div>
				@endcan
				<div class="modal__passport-title">Паспорт</div>
				<div>
					<div class="modal__profile-row modal__profile-row--mobile-row">
						<div class="modal__input-box modal__box-series modal__input-box--mr @error('passport_seria') error @enderror">
							<div class="modal__label modal__label--light-grey">Серия</div>
							<input class="modal__input-pass modal__input modal__input--mb-none modal__input-series js-edit-input js-valid-area" name="passport_seria" value="{{old('passport_seria', $user->info->passport_seria)}}" type="password" min="0" maxlength="4" readonly id="password-input">
						</div>
						<div class="modal__input-box @error('passport_number') error @enderror">
							<div class="modal__label modal__label--light-grey">Номер</div>
							<div class="modal__input-container">
							<input class="modal__input-pass modal__input modal__input--mb-none modal__input-number js-edit-input js-valid-area" name="passport_number" value="{{old('passport_number', $user->info->passport_number)}}" type="password" min="0" maxlength="6" readonly>
							<div class="modal__edit-icon js-edit-pass"></div>
							<div class="modal__pass-box">
								<div class="modal__show-icon"></div>
								<div class="modal__hidden-icon"></div>
							</div>
							</div>
						</div>
					</div>
					@error('passport_seria') <div class="error__text">{{ $message }}</div> @enderror
					@error('passport_number') <div class="error__text">{{ $message }}</div> @enderror
				</div>
				@can('update', $user)
					<input type="submit" class="button commercial-offer__btn" value="Обновить" />
				@endcan
			</div>
			</div>
			<div class="modal__container">
			<div class="modal__label">Всего отработано часов:</div>
			<div class="modal__graphic">
				<div class="js-ring-chart-wrapper">
				<div class="js-ring-chart-tooltip"></div>
				<div class="js-ring-chart-box">
					<figure class="highcharts-figure">
					<div class="js-ring-chart" data-rings="[ {
						&quot;today&quot;: { &quot;real&quot;: {{$workingHours['today']}}, &quot;goal&quot;: 8 },
						&quot;week&quot;: { &quot;real&quot;: {{$workingHours['week']}}, &quot;goal&quot;: 40 },
						&quot;month&quot;: { &quot;real&quot;: {{$workingHours['month']}}, &quot;goal&quot;: 160 }
					} ]"></div>
					</figure>
				</div>
				</div>
			</div>
			<div class="modal__activity">
				<div class="modal__activity-item">
				<div class="modal__activity-status"></div>
				<div class="modal__activity-title">Отработал часов<span> сегодня</span></div>
				</div>
				<div class="modal__timer"><span class="modal__timer-text modal__timer-text--green js-today"></span> из 8</div>
				<div class="modal__activity-item">
				<div class="modal__activity-status modal__activity-status--black"></div>
				<div class="modal__activity-title">Отработал часов<span> на этой неделе</span></div>
				</div>
				<div class="modal__timer"><span class="modal__timer-text modal__timer-text--green js-week"></span> из 40</div>
				<div class="modal__activity-item">
				<div class="modal__activity-status modal__activity-status--green"></div>
				<div class="modal__activity-title">Отработал часов<span> в этом месяце</span></div>
				</div>
				<div class="modal__timer"><span class="modal__timer-text modal__timer-text--red js-month"></span> из 70</div>
			</div>
			</div>
		</form>
		</div>
	</div>
</div>

<script>
	window.addEventListener('load', function () {
		$('.button-add-phone').bind('click', function (e) {
			e.preventDefault();
			$('.staff__phones').append(`
				<div class="staff__phone">
					<div class="staff__phone-field">
						<input class="modal__input modal__input--mb-none modal__input-phone modal__input-edit js-phone" name="phones[]" type="text">
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