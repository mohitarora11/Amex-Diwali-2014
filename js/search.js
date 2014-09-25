$(function(){
	$('body').search();
	
	function changebanner(){
		
		if($('.basetop').hasClass('basetop1')){		
			$('.basetop').removeClass('basetop1').find('ul').show();
		}else{
			$('.basetop').addClass('basetop1').find('ul').hide();
		}
		setTimeout(changebanner,6000)
	}
	setTimeout(changebanner,6000)
});