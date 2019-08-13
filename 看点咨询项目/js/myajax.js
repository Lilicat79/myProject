$(function(){
	var baseURL = '';
	function getAjax(url,data,method,succFun,errorFun){
		$.ajax({
			url:baseURL + url,
			data:data,
			method:'',
			success: succFun,
       		error:errorFun
		})
	}
})