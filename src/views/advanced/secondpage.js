define([
	"text!../../../../template/academic/secondpage.html",
],function(secondpageTemplate){
	return function(){
		this.render = function() {
			//console.log(articleTemplate);
			$('#articlepage').html(secondpageTemplate);
		}
	}
});