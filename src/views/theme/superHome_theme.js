define([
	"text!../../../../template/theme/superHome_theme.html",
	"css!../../../../../css/theme/superHome_theme"
],function(themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});