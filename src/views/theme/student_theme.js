define([
	"text!../../../../template/theme/student_theme.html",
	"css!../../../../../css/theme/student_theme"
],function(themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});