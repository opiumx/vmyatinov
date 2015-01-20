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


	if($('.fancybox').length){
		$(".fancybox").fancybox({
			padding : 0,
			wrapCSS : 'popup-wrap',
			helpers : {
				overlay : {
					locked : false,
					css : {
						'background' : 'rgba(0, 0, 0, 0.8)'

					}
				}
			},
			beforeShow:function(){
				if(this.element.closest('.popup-link, .link a, .link-box a, .partners-list a').length) {
					return false;
				}
				$('.fancybox-inner').append('<div class="social-icon-box"><a href="./#.html" title="" target="_self" class="facebook"></a><a href="./#.html" title="" target="_self" class="vkontakte"></a></div>');
			}

		});
	}

	if($('div.rating').length){
		$('div.rating').rating();
	}



});

