define([
	"text!../../../../template/theme/academic_theme.html",
	"css!../../../../../css/theme/academic_theme"
],function(themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});