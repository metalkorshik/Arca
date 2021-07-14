@extends('layouts.app')

@section('title', __('contract.show_title', ['number' => $contract->offer_number]))

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Контракт</div>
	</div>
</div>
@endsection
@section('page', 'contracts')
@section('content')
<style>
	.modal__comments ul {
		list-style: none;
		padding: 0;
	}
	.modal__comments ul ul {
		margin-left: 50px;
		margin-bottom: 10px;
	}
	.modal__action-block {
		display: flex;
		justify-content: flex-end;
	}
	.modal__action-block .hidden {
		display: none;
	}
	.modal__comment > .modal__text[contenteditable="true"] {
		background-color: white;
	}
	.modal__edited,
	.modal__add-cost {
		position: unset;
		margin-right: 10px;
	}

	.list tbody tr[data-id] {
		background-color: #e9eef3;
	}
	.list tbody tr.cost-detail {
		background: white;
	}
	.list .cost-detail-header th {
		padding-left: 50px;
	}
	.list .cost-detail td {
		padding-left: 70px;
	}
</style>
<div class="container">
	<div class="">
		<div class="">
		<div class="modal__title modal__title--mb-small">{{$contract->legal_entity}} {{$contract->title}}</div>
		<div class="modal__text">{{$contract->offer_number}}</div>
		<form class="modal__contract-panel" action="{{route('contract', $contract->id)}}">
			<div class="modal__expenses-container">
			<div class="modal__label modal__label--small">Расходы на дату</div>
			<div class="modal__expenses-inner">
				<input class="modal__expenses-date js-date" type="text" name="filters[date_from]" value="{{is_null($filters) ? '' : $filters['date_from']}}">
				<input class="modal__expenses-date js-date" type="text" name="filters[date_to]" value="{{is_null($filters) ? '' : $filters['date_to']}}">
				<button class="modal__btn-search">
					<div class="modal__search-icon"></div>
				</button>
				@if ($filters != null)
					<a href="{{route('contract', $contract->id)}}" class="button button--clear button button--clear--small">
						<div class="button__clear-icon"></div>
					</a>
				@endif
			</div>
			</div>
		</form>
		<div class="list__wrapper">
			<table class="list list__cost-table">
				<thead>
					<tr>
						<th>Наименования</th>
						<th>Заложено</th>
						<th>Израсходованно</th>
						<th>Итого</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					@foreach ($contract->costs as $cost)
						@php $profit = $cost->getProfit() @endphp
						<tr data-id="{{$cost->id}}">
							<td class="list__cost-title">{{$cost->title}}</td>
							<td>
								<span class="list__cost-sum">{{$cost->sum}}</span> руб.
							</td>
							<td>
								<span class="list__cost-spent">{{$cost->getSpent()}}</span> руб.
							</td>
							<td class="{{$profit < 0 ? 'warning-text' : ''}}">
								<span class="list__cost-profit">{{$profit}}</span> руб.
							</td>
							<td class="action-block">
								@can('update', $cost)
									<a href="#" class="modal__edited modal__consumption-edit-modal" data-id="{{$cost->id}}"></a>
								@endcan
								@can('create', ['\App\ContractCost', $contract])
									<a href="#" class="modal__add-cost modal__consumption-add-detail-modal" data-id="{{$cost->id}}"></a>
								@endcan
							</td>
						</tr>
						<tr class="cost-detail-header">
							<th>Дата</th>
							<th>№ счета</th>
							<th>Контрагент</th>
							<th>Номенклатура</th>
							<th>Сумма</th>
						</tr>
						@foreach ($cost->details as $detail)
							<tr class="cost-detail">
								<td>{{date('d/m/Y', strtotime($detail->date))}}</td>
								<td>{{$detail->account_number}}</td>
								<td>{{$detail->counterparty}}</td>
								<td>{{$detail->nomenclature}}</td>
								<td colspan="2">{{$detail->sum}} руб.</td>
							</tr>
						@endforeach
					@endforeach
				</tbody>
			</table>
		</div>
		@can('create', ['\App\ContractCost', $contract])
			<button class="button modal__add-consumption modal__consumption-show">Добавить расход</button>
		@endcan
		<div class="modal__table-footer">
			@can('close', $contract)
				<a class="modal__project-btn modal__close-return">Закрыть проект</a>
			@endcan
		</div>
		<!-- <div class="files">
			<div class="files__header">
			<div class="files__title">Файлы</div>
			<div class="files__file-icon"></div>
			</div>
			<div class="files__nav">
			<button class="files__button">
				<input class="files__download" type="file" onchange="javascript:downloadFiles()" id="downloadFiles">
				<div class="files__button-icon files__button-icon--cloud"></div>Загрузка
			</button>
			<button class="files__button js-btn-create-folder">
				<div class="files__button-icon files__button-icon--folder"></div>Создать папку
			</button>
			<button class="files__button">
				<div class="files__button-icon files__button-icon--update"></div>
			</button>
			<button class="files__button js-btn-transfer">
				<div class="files__button-icon files__button-icon--move"></div>Переместить
			</button>
			<button class="files__button js-btn-modal-remove">
				<div class="files__button-icon files__button-icon--remove"></div>Удалить
			</button>
			</div>
			<div class="files__inner">
			<div class="files__container" id="filesOutput">
				<div class="files__item">
				<div class="files__type-icon files__type-icon--document"></div>
				<div class="files__named">
					<div class="files__name">news-document.pdf</div>
					<div class="files__size">3 mb</div>
				</div>
				</div>
				<div class="files__item">
				<div class="files__type-icon files__type-icon--folder"></div>
				<div class="files__named">
					<div class="files__name">test folder</div>
				</div>
				</div>
				<div class="files__item">
				<div class="files__type-icon files__type-icon--folder"></div>
				<div class="files__named">
					<div class="files__name">test folder 2</div>
				</div>
				</div>
			</div>
			<div class="files__info-block" id="outputInformation">
				<div class="files__info">
				<div class="files__info-close"></div>
				<div class="files__info-image">
					<div class="files__info-type files__info-type--document"></div>
				</div>
				<div class="files__info-inner">
					<div class="files__label">Название:</div>
					<input class="input-styled files__input-name" type="text" value="news-document.pdf" placeholder="Название">
					<div class="files__info-row">
					<div class="files__label">Тип:</div>
					<div class="files__info-text files__info-text--ml">news-document.pdf</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Размер:</div>
					<div class="files__info-text files__info-text--ml">3 MB</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Ссылка:</div><a class="files__link" href="#">Кликните тут</a>
					</div>
					<div class="files__info-row files__info-row--direction">
					<div class="files__label">Последнее изменение:</div>
					<div class="files__info-text files__info-text--mt">29/10/2020</div>
					</div>
				</div>
				</div>
				<div class="files__info">
				<div class="files__info-close"></div>
				<div class="files__info-image">
					<div class="files__info-type files__info-type--document"></div>
				</div>
				<div class="files__info-inner">
					<div class="files__label">Название:</div>
					<input class="input-styled files__input-name" type="text" value="news-document.pdf" placeholder="Название">
					<div class="files__info-row">
					<div class="files__label">Тип:</div>
					<div class="files__info-text files__info-text--ml">news-document.pdf</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Размер:</div>
					<div class="files__info-text files__info-text--ml">3 MB</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Ссылка:</div><a class="files__link" href="#">Кликните тут</a>
					</div>
					<div class="files__info-row files__info-row--direction">
					<div class="files__label">Последнее изменение:</div>
					<div class="files__info-text files__info-text--mt">29/10/2020</div>
					</div>
				</div>
				</div>
				<div class="files__info">
				<div class="files__info-close"></div>
				<div class="files__info-image">
					<div class="files__info-type files__info-type--document"></div>
				</div>
				<div class="files__info-inner">
					<div class="files__label">Название:</div>
					<input class="input-styled files__input-name" type="text" value="news-document.pdf" placeholder="Название">
					<div class="files__info-row">
					<div class="files__label">Тип:</div>
					<div class="files__info-text files__info-text--ml">news-document.pdf</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Размер:</div>
					<div class="files__info-text files__info-text--ml">3 MB</div>
					</div>
					<div class="files__info-row">
					<div class="files__label">Ссылка:</div><a class="files__link" href="#">Кликните тут</a>
					</div>
					<div class="files__info-row files__info-row--direction">
					<div class="files__label">Последнее изменение:</div>
					<div class="files__info-text files__info-text--mt">29/10/2020</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div> -->
		<div class="files-modal js-create-folder">
			<div class="overlay"></div>
			<div class="files-modal__box">
			<div class="files-modal__overtitle">
				<div class="files-modal__overtitle-icon files-modal__overtitle-icon--folder"></div>
				<div class="files-modal__overtitle-title">Добавить новую папку</div>
				<div class="files-modal__close"></div>
			</div>
			<div class="files-modal__modal-inner">
				<input class="files-modal__modal-input" type="text" placeholder="Новое имя папки" id="nameFolder">
				<div class="files-modal__modal-nav">
				<button class="button button--grey files-modal__modal-button js-modal-cancel">Отмена</button>
				<button class="button files-modal__modal-button js-btn-folder">Создать новую папку</button>
				</div>
			</div>
			</div>
		</div>
		<div class="files-modal js-file-transfer">
			<div class="overlay"></div>
			<div class="files-modal__box">
			<div class="files-modal__overtitle files-modal__overtitle--orange">
				<div class="files-modal__overtitle-icon files-modal__overtitle-icon--transfer"></div>
				<div class="files-modal__overtitle-title">Переместить файл/папку</div>
				<div class="files-modal__close"></div>
			</div>
			<div class="files-modal__modal-inner">
				<div class="files-modal__select-box">
				<select class="files-modal__select">
					<option disabled selected>Папка назначения</option>
					<option>1234</option>
					<option>12345</option>
				</select>
				</div>
				<div class="files-modal__modal-nav">
				<button class="button button--grey files-modal__modal-button js-modal-cancel">Отмена</button>
				<button class="button button--orange files-modal__modal-button js-transfer-file">Переместить</button>
				</div>
			</div>
			</div>
		</div>
		<div class="files-modal js-modal-remove">
			<div class="overlay">
			<div class="files-modal__box">
				<div class="files-modal__overtitle">
				<div class="files-modal__overtitle-icon files-modal__overtitle-icon--remove"></div>
				<div class="files-modal__overtitle-title">Удаление файла</div>
				<div class="files-modal__close"></div>
				</div>
				<div class="files-modal__modal-inner">
				<div class="files-modal__text">Вы действительно хотите удалить файл?</div>
				<div class="files-modal__buttons">
					<div class="button files-modal__btn js-btn-remove">Да</div>
					<div class="button files-modal__btn js-modal-cancel">Нет</div>
				</div>
				</div>
			</div>
			</div>
		</div>
		@if ($contract->status != \App\Contract::COMMERCIAL)
			<div class="modal__title modal__title--thin">Примечание</div>
			<div class="modal__comments" id="comments">
				@if (count($comments) > 0)
					@include ('contract.comment.list', ['collection' => $comments['root']])
				@endif
			</div>
			@if ($contract->status != \App\Contract::CLOSE)
				<form action="{{route('add-comment', $contract->id)}}" method="POST" id="send-comment">
					<textarea class="modal__textarea-comment" placeholder="Введите комментарий" id="textMessage" name="content"></textarea>
					<div class="modal__request-box">
						<input type="submit" class="button" value="Оставить заметку">
					</div>
				</form>
				<script>

					function replyComment ()
					{
						let form = $('#send-comment').clone();
						form.append(`<input type="hidden" value="${$(this).parent().parent('li').attr('data-id')}" name="replyTo">`);
						form.addClass('reply-comment');
						form.submit((e) => {
							e.preventDefault();

							$.ajax({
								'url': form.attr('action'),
								'data': form.serialize(),
								'headers': {
									'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
								},
								'method': 'POST',
								success: (data) => {

									let date = new Date(data.created_at);
									$(this).parent().parent('.modal__comment').parent('ul').append(`
										<ul>
											<li class="modal__comment" data-id="${data.id}">
												<div class="modal__comment-info">
													<div class="modal__text modal__comment-name">${data.author.lname} ${data.author.fname}</div>
													<div class="modal__text modal__text--mr">${('0' + date.getDate()).slice(-2)}.${date.getMonth()}.${date.getFullYear()}</div>
													<div class="modal__text">${date.getHours()}:${date.getSeconds() + 1}</div>
												</div>
												<div class="modal__text">${data.content}</div>
												<div class="modal__action-block">
													<button class="button modal__edit" data-id="${data.id}">Редактировать</button>
												</div>
											</li>
										</ul>
									`);

									$('.modal__reply').on('click', replyComment);
									form.remove();
								}
							});
						});

						$(this).parent().parent('.modal__comment').after(form);
					}

					function editComment ()
					{
						$(this).parent().children().addClass('hidden');
						$(this).parent().append(`
							<button class="button modal__save">Сохранить</button>
						`);

						let textNode = $(`.modal__comment[data-id="${$(this).attr('data-id')}"] > .modal__text`);

						textNode.attr('contenteditable', true);
						$(this).parent().find('.modal__save').click(() => {
							$.ajax({
								'url': `${window.location.origin}/comment/${$(this).attr('data-id')}/`,
								'method': 'POST',
								'data': {
									'content': textNode.text()
								},
								success: (data) => {
									textNode.removeAttr('contenteditable');
									$(this).parent().find('.modal__save').remove();
									$(this).parent().children().removeClass('hidden');
								}
							});
						});
					}

					window.addEventListener('load', function () {
						console.log('load');
						$('#send-comment').submit(function (e) {
							e.preventDefault();
							$.ajax({
								'url': $(this).attr('action'),
								'data': $(this).serialize(),
								'method': 'POST',
								success: function (data) {

									$('#send-comment').find('textarea').val('');

									let date = new Date(data.created_at);
									$('#comments').append(`
										<ul>
											<li class="modal__comment" data-id="${data.id}">
												<div class="modal__comment-info">
													<div class="modal__text modal__comment-name">${data.author.lname} ${data.author.fname}</div>
													<div class="modal__text modal__text--mr">${('0' + date.getDate()).slice(-2)}.${date.getMonth()}.${date.getFullYear()}</div>
													<div class="modal__text">${date.getHours()}:${date.getSeconds() + 1}</div>
												</div>
												<div class="modal__text">${data.content}</div>
												<div class="modal__action-block">
													<button class="button modal__edit" data-id="${data.id}">Редактировать</button>
												</div>
											</li>
										</ul>
									`);

									$('.modal__edit').on('click', editComment);
								}
							});
						});

						$('#textMessage').focus(function () {
							$('.reply-comment').remove();
						})

						$('.modal__reply').on('click', replyComment);
						$('.modal__edit').on('click', editComment);
					});
				</script>
			@endif
		@endif
		</div>
	</div>
	</div>
	<div class="modal-close">
	<div class="modal-close__inner">
		<div class="modal-close__title">Вы точно уверены что хотите закрыть проект?</div>
		<div class="modal-close__buttons">
			{{-- <a class="button modal-close__button js-modal-yes" href="{{route('contract-close', $contract->id)}}">Да</a> --}}
			<a class="button modal-close__button modal-contracts__button js-contracts-accept js-modal-yes" data-redirect="{{route('contracts')}}?status=close" data-id="{{$contract->id}}" data-action="close" data-target="contract">Да</a>
			<a class="button modal-close__button js-modal-no">Нет</a>
		</div>
	</div>
</div>

<form class="modal modal--index modal-consumption" action="{{route('add-consumption', $contract->id)}}" method="POST">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__consumption">
			<div class="modal__header">Добавить расход</div>
			<div class="modal__consumption-inner">
				<div>
					<div class="modal__label">Названия расхода</div>
					<input class="modal__input modal__input--padding js-valid-area" type="text" name="title" required>
					<div class="modal__label">Заложенная суммы</div>
					<input class="modal__input modal__input--padding js-valid-area" type="number" min="0,01" name="sum" required>
					<button class="button modal__btn-consumption">Добавить</button>
				</div>
			</div>
		</div>
	</div>
</form>

<form class="modal modal--index modal-consumption-edit" method="POST">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__consumption">
			<div class="modal__header">Редактировать расход</div>
			<div class="modal__consumption-inner">
				<div>
					<div class="modal__label">Названия расхода</div>
					<input class="modal__input modal__input--padding js-valid-area" type="text" name="title" required>
					<div class="modal__label">Заложенная суммы</div>
					<input class="modal__input modal__input--padding js-valid-area" type="number" min="0,01" name="sum" required>
					<button class="button modal__btn-consumption">Добавить</button>
				</div>
			</div>
		</div>
	</div>
</form>

<form class="modal modal--index modal-consumption-detail" method="POST" action="">
	<div class="modal__content">
		<div class="modal__close"><img src="/src/blocks/modal/assets/img/close.svg"></div>
		<div class="modal__consumption">
			<div class="modal__header">Добавить расход</div>
			<div class="modal__consumption-inner">
				<div>
					<div class="modal__label">Израсходовано</div>
					<input class="modal__input modal__input--padding js-valid-area" type="number" min="0,01" placeholder="Сумма" name="sum" required>
					<div class="modal__label">Номер счёта</div>
					<input class="modal__input modal__input--padding" type="text" min="0" placeholder="Номер" maxlength="50" name="account_number" required>
					<div class="modal__label">Номер контрагента</div>
					<input class="modal__input modal__input--padding" type="text" min="0" placeholder="Номер" maxlength="50" name="counterparty" required>
					<div class="modal__label">Номер номенклатуры</div>
					<input class="modal__input modal__input--padding" type="text" min="0" placeholder="Номер" maxlength="50" name="nomenclature" required>
					<div class="modal__label">Дата</div>
					<input class="modal__input modal__input-date modal__input--padding js-date" type="text" min="0" placeholder="Дата" maxlength="50" id="todayInputDate" name="date" required>
					<button type="submit" class="button modal__btn-consumption">Добавить</button>
				</div>
			</div>
		</div>
	</div>
</form>
<script>
	var laravelAccess = {
		'edit_cost': '{{Auth::user()->can("create", "\App\Contract")}}',
		'add_cost_detail': '{{Auth::user()->can("create", "\App\Contract")}}'
	};
</script>
@endsection