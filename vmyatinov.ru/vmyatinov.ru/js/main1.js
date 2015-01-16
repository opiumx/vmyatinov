$(document).ready(function(){

	//adding file button to popup
	//-----------------------------------------------------------------------------------------
	$('.add-more').on('click', function(){
		$(this).prev().append($('<div class="adding-btn-item"><input type="file"/></div>')).append('  ');
	})

	//photo change color
	//-----------------------------------------------------------------------------------------

	if($('.people-box').length){
		$('.people-box').BlackAndWhite({
			hoverEffect : true,
			webworkerPath : false,
			invertHoverEffect: false,
			intensity:0,
			speed: {
				fadeIn: 200,
				fadeOut: 800
			},
			onImageReady:function(img) {
			}
		});

	}


	$(".popup-link").fancybox({
		padding : 0,
		helpers : {
			overlay : {
				locked : false,
				css : {
					'background' : 'rgba(0, 0, 0, 0.8)'

				}
			}
		}
	});


});