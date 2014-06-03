define([
	"text!../../../../template/ewol/ewol.html",
	"mediator",
	"../../js/model",
	"handlebars",
	"less!../../../../../../../less/ewol"
],function(ewolTemplate,mediator,Model,handlebars){
	return function(){
		var categoryListBooks;
		this.render = function() {
			self = this;
			$(".dataContent").removeAttr('id');
			$(".dataContent").attr('id','ewol');
			$(".dataContent").html(ewolTemplate);
			/***To import theme***/
			/*var ewolThemeTemplate = new EwolThemeTemplate();
			ewolThemeTemplate.render();		*/	
			var getCategoryList = new Model();
			
			$.when(getCategoryList.getServicesData()).then(function(books) {
				//console.log(books);
				categoryListBooks = books;
				self.preRender(books);
				self.addEvent();
			});
		},
		this.preRender = function(books){
			var theTemplateScript = $("#template_template").html();
			var theTemplate = Handlebars.compile (theTemplateScript);
			Handlebars.registerHelper('fullName', function(person) {
			  return person.first_name + " " + person.last_name;
			});
			$('.dataContent').html(theTemplate (books));
		},
		this.addEvent = function() {
			$('.readButton').click(function(){
				mediator.publish("openReadModal", categoryListBooks, $(this).attr('data-index'));
			});
			$('.homePage').click(function(){
				$('.dataContent').empty();
				$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','superHome');
				var currentView = $(this).attr('title');
				mediator.publish("navigateTo",'superHome');
			});
			
		}

	}
});