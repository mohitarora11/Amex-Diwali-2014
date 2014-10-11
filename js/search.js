$(function(){
	$('body').search();
	
	function changebanner(num){
		var obj = num || 0 ;
		if($('.basetop').hasClass('basetop1')){		
			$('.basetop').removeClass('basetop1').addClass('basetop2').find('ul').hide();
		}else if($('.basetop').hasClass('basetop2')){		
			$('.basetop').removeClass('basetop2').addClass('basetop3').find('ul').hide();
		}else if($('.basetop').hasClass('basetop3')){		
			$('.basetop').removeClass('basetop3').addClass('basetop4').find('ul').hide();
		}else if($('.basetop').hasClass('basetop4')){		
			$('.basetop').removeClass('basetop4').addClass('basetop0').find('ul').show();
		}else if($('.basetop').hasClass('basetop0')){		
			$('.basetop').removeClass('basetop0').addClass('basetop1').find('ul').hide();
		}		
		/*
		obj = obj +1;
		if(obj>2){
			obj = 0;
		}*/
		setTimeout(changebanner,4000)
	}
	setTimeout(changebanner,4000)
});