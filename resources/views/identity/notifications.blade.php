@extends('layouts.app')

@section('user-panel')
<div class="container">
	<div class="user-panel__inner">
		<div class="user-panel__title">Уведомления</div>
	</div>
</div>
@endsection
@section('page', 'notifications')
@section('content')
<div class="container">
	@if (count($notices) > 0)
		<div class="notifications__inner">
			@foreach ($notices as $notice)
				<div class="notifications__item">
					<div class="notifications__close" data-id="{{$notice->id}}"></div>
					<div class="notifications__header">
					<div class="notifications__title">{{$notice->title}}</div>
					<div class="notifications__date">{{date('d/m/Y H:i', strtotime($notice->created_at))}}</div>
					</div>
					<textarea class="notifications__text" disabled>{{$notice->content}}</textarea>
				</div>
			@endforeach
		</div>
		<button class="button notifications__button-load">Загрузить еще</button>
	@else
		<h2 style="text-align: center;">Уведомлений нет</h2>
	@endif
</div>

<script>


	function remove ()
	{
		$.ajax({
			'url': `//${window.location.host}/notice/${$(this).attr('data-id')}/remove`,
			'method': 'POST',
			success: () => {
				$(this).parent().remove();
			}
		})
	}

	window.addEventListener('load', function () {

		$('.notifications__close').on('click', remove);

		$('.notifications__button-load').click(function () {
			$.ajax({
				'url': `//${window.location.host}/notice/load`,
				'data': {
					'skip': $('.notifications__inner').children().length
				},
				success: (data) => {

					if (data.notices.length == 0)
						$('.notifications__button-load').remove();
					else
					{
						data.notices.forEach((notice) => {
							$('.notifications__inner').append(`
								<div class="notifications__item">
									<div class="notifications__close" data-id="${notice.id}"></div>
									<div class="notifications__header">
									<div class="notifications__title">${notice.title}</div>
									<div class="notifications__date">${notice.created_at}</div>
									</div>
									<textarea class="notifications__text" disabled>${notice.content}</textarea>
								</div>
							`);
						});

						$('.notifications__close').on('click', remove);
					}
				}
			})
		});
	});
</script>
@endsection