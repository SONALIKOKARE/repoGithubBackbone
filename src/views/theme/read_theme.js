define([
	"../../libs/jquery",
	"text!../../../../template/theme/read_theme.html",
	/*"less!../../../../../../less/theme/read_theme"*/
],function(jquery,readTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(readTemplate);
		}
	}
});