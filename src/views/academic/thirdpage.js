define([
	"text!../../../../template/academic/thirdpage.html",
],function(thirdpageTemplate){
	return function(){
		this.render = function() {
			//console.log(articleTemplate);
			$('#articlepage').html(thirdpageTemplate);
		}
	}
});