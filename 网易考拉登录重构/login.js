$(function(){
	$('.phoneLogin').click(function(){
		$('.mainlogin').css({display:'block'});
		$('.emailLogin').css({color: 'black'});
		$('.phoneLogin').css({color: '#e31436'});
		$('.mainemaillogin').css({display:'none'})
	});
	$('.emailLogin').click(function(){
		$('.mainemaillogin').css({display:'block'});
		$('.phoneLogin').css({color: 'black'});
		$('.emailLogin').css({color: '#e31436'});
		$('.mainlogin').css({display:'none'})
	})
	
})