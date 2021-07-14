@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Заметки</div>
	</div>
</div>
@endsection
@section('page', 'notes')
@section('content')
<div class="container">
	<button class="button notes__add-btn">Добавить</button>
	<div class="notes__grid" id="outputNotes">
		@foreach ($notes as $note)
			<div class="notes__item" data-id="{{$note->id}}" style="background: {{$note->color}}">
				<div class="notes__box">
					<textarea name="content" class="notes__text" placeholder="Введите текст">{{$note->content}}</textarea>
					<div class="notes__bottom">
						<div class="notes__info">
							<div class="notes__date">Создано: <span>{{$note->created_at->format('d/m/Y H:i')}}</span></div>
							@if (false && $note->updated_at != null)
								<div class="notes__date">Отредактировано: <span class="notes__date-edit">{{$note->updated_at->format('d/m/Y H:i')}}</span></div>
							@endif
						</div>
						<div class="notes__colors">
							@foreach ($colors as $color)
								<div class="notes__color {{ $note->color == $color->color ? 'notes__color_selected' : ''}}" data-color="{{$color->color}}" style="background: {{$color->color}}"></div>
							@endforeach
						</div>
					</div>
				</div>
				<div class="notes__icons">
					<div class="notes__close" data-id="{{$note->id}}"></div>
				</div>
			</div>
		@endforeach
	</div>
</div>
@endsection