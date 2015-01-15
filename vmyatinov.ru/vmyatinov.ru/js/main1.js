$(document).ready(function(){
	$('.add-more').on('click', function(){
		$(this).prev().append($('<div class="adding-btn-item"><input type="file"/></div>')).append('  ');
	})
});