@if ($paginator->lastPage() > 1)
<div class="pagination">
   <!--  <li class="{{ ($paginator->currentPage() == 1) ? ' disabled' : '' }}">
        <a href="{{ $paginator->url(1) }}">1</a>
    </li> -->
	@for ($i = 1; $i <= $paginator->lastPage(); $i++)
		<a class="pagination__link pagination__link{{ ($paginator->currentPage() == $i) ? '--active' : '' }}" href="{{ $paginator->url($i) }}">{{ $i }}</a>
    @endfor
    <!-- <li class="{{ ($paginator->currentPage() == $paginator->lastPage()) ? ' disabled' : '' }}">
        <a href="{{ $paginator->url($paginator->currentPage()+1) }}" >Next</a>
    </li> -->
</div>
@endif