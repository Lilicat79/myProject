$(function(){
	// $('.left-div li').text().trim();

	$('.left-div li').click(function(event){
		var title = $(event.target).text().trim();
		switch(title){
			case '首页':
			$('.right-content').load('./pages/home.html');
			break;
			case '栏目管理':
			$('.right-content').load('./pages/column.html');
			break;
			case '咨询管理':
			$('.right-content').load('./pages/Consultation.html');
			break;
			case '用户管理':
			$('.right-content').load('./pages/user.html');
			break;
			default:
			break;

		}
	})
	$('.left-div li:first').trigger('click');
})