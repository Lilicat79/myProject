
	 $(window).scroll(function(){
	 	if($(window).scrollTop()<550 || $(window).scrollTop()>6721){
		$('.fixnav').css("display","none");
		}
		else{
			$('.fixnav').css("display","inline-block");
		}

		console.log($(window).scrollTop());
		//在对应位置变色
		if($(window).scrollTop()>691 && $(window).scrollTop()<1340){
			$('.fixnav li').eq(1).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(1).css('background','#BE95F3')
		}

		if($(window).scrollTop()>1339 && $(window).scrollTop()<1987){
			$('.fixnav li').eq(2).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(2).css('background','#BE95F3')
		}

		if($(window).scrollTop()>1987 && $(window).scrollTop()<2635){
			$('.fixnav li').eq(3).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(3).css('background','#BE95F3')
		}

		if($(window).scrollTop()>2635 && $(window).scrollTop()<3283){
			$('.fixnav li').eq(4).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(4).css('background','#BE95F3')
		}

		if($(window).scrollTop()>3283 && $(window).scrollTop()<3931){
			$('.fixnav li').eq(5).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(5).css('background','#BE95F3')
		}

		if($(window).scrollTop()>3931 && $(window).scrollTop()<4579){
			$('.fixnav li').eq(6).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(6).css('background','#BE95F3')
		}

		if($(window).scrollTop()>4579 && $(window).scrollTop()<5221){
			$('.fixnav li').eq(7).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(7).css('background','#BE95F3')
		}

		if($(window).scrollTop()>5221 && $(window).scrollTop()<5875){
			$('.fixnav li').eq(8).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(8).css('background','#BE95F3')
		}

		if($(window).scrollTop()>5875 && $(window).scrollTop()<6523){
			$('.fixnav li').eq(9).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(9).css('background','#BE95F3')
		}

		if($(window).scrollTop()>6523 ){
			$('.fixnav li').eq(10).css('background','#8E70B6')
		}else{
			$('.fixnav li').eq(10).css('background','#BE95F3')
		}
		
	 })
$(function(){
	//点击跳转
	$('#backTop').click(function(){
			$("html,body").animate({scrollTop:0}, 500);

			// return false;
		})
	$('.fixnav li').eq(1).click(function(){
		$("html,body").animate({
			scrollTop:$('#chaozhi').offset().top
		},200);

	})
	$('.fixnav li').eq(2).click(function(){
		$("html,body").animate({
			scrollTop:$('#meirong').offset().top
		},200);

	})
	$('.fixnav li').eq(3).click(function(){
		$("html,body").animate({
			scrollTop:$('#muying').offset().top
		},200);

	})
	$('.fixnav li').eq(4).click(function(){
		$("html,body").animate({
			scrollTop:$('#huli').offset().top
		},200);

	})
	$('.fixnav li').eq(5).click(function(){
		$("html,body").animate({
			scrollTop:$('#yingyang').offset().top
		},200);

	})
	$('.fixnav li').eq(6).click(function(){
		$("html,body").animate({
			scrollTop:$('#gongchang').offset().top
		},200);

	})
	$('.fixnav li').eq(7).click(function(){
		$("html,body").animate({
			scrollTop:$('#huanqiu').offset().top
		},200);

	})
	$('.fixnav li').eq(8).click(function(){
		$("html,body").animate({
			scrollTop:$('#jiaju').offset().top
		},200);

	})
	$('.fixnav li').eq(9).click(function(){
		$("html,body").animate({
			scrollTop:$('#shuma').offset().top
		},200);

	})
	$('.fixnav li').eq(10).click(function(){
		$("html,body").animate({
			scrollTop:$('#dapai').offset().top
		},200);

	})
	

})
			




