define([
	"text!../../../../template/theme/ewol_theme.html",
	"css!../../../../../css/theme/ewol_theme"
],function(themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});