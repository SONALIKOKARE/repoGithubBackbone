define([
	"text!../../../../template/theme/advanced_theme.html",
	"css!../../../../../css/theme/advanced_theme"
],function(themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});