define([
	"text!../template/read.html",
	"../views/theme/read_theme",
	"../js/model",
	"handlebars",
	"mediator",
	"css!../../css/read"
],function(ReadTemplate,ReadThemeTemplate,Model,handlebars,mediator){
	return function(){
		var categoryListBooks;
		this.render = function() {
			self = this;
			//alert(ReadTemplate)
			$(".dataContent, .themeChoice").removeAttr('id');
			$(".dataContent, .themeChoice").attr('id','read');
			$(".dataContent").html(ReadTemplate);
			/***To import theme***/
			var readThemeTemplate = new ReadThemeTemplate();
			readThemeTemplate.render();

			var getCategoryList = new Model();
			
			$.when(getCategoryList.getServicesData()).then(function(books) {
				//console.log(books);
				categoryListBooks = books;
				self.preRender(books);
				self.addEvent();
			});
		},
		this.preRender = function(books){
			//$("#read_template").html($(".read_template").html());
			var theTemplateScript = $("#read_template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
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
				mediator.publish("navigateTo",'home','home');
			});			
		}

	}
});