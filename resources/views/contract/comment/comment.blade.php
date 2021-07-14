<ul>
	<li class="modal__comment" data-id="{{$comment->id}}">
		<div class="modal__comment-info">
			<div class="modal__text modal__comment-name">{{$comment->author ? "{$comment->author->lname} {$comment->author->fname}" : 'Пользователь удален'}}</div>
			<div class="modal__text modal__text--mr">{{$comment->created_at->format('d/m/Y')}}</div>
			<div class="modal__text">{{$comment->created_at->format('H:i')}}</div>
		</div>
		<div class="modal__text">{{$comment->content}}</div>
		@if ($contract->status == \App\Contract::ACTIVE)
			<div class="modal__action-block">
				@if ($comment->author != null)
					@if ($comment->author->id != Auth::id())
						<button class="button modal__reply">Ответить</button>
					@endif
					@if ($comment->author->id == Auth::id() && strtotime('+15 minutes', strtotime($comment->created_at)) >= time())
						<button class="button modal__edit" data-id="{{$comment->id}}">Редактировать</button>
					@endif
				@endif
			</div>
		@endif
	</li>

	@if (isset($comments[$comment->id]))
		@include ('contract.comment.list', ['collection' => $comments[$comment->id]])
	@endif
</ul>