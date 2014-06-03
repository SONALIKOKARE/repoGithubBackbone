define([
	"text!../../../../template/academic/article.html",
],function(articleTemplate){
	return function(){
		this.render = function() {
			//console.log(articleTemplate);
			$('#articlepage').html(articleTemplate);
		}
	}
});