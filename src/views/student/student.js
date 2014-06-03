define([
	"text!../../../../template/student/student.html",
	"mediator",
	"less!../../../../../../../less/student"
],function(studentTemplate,mediator){
	return function(){
		this.render = function() {
			self = this;
			
				$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','student');
				$(".dataContent").html(studentTemplate);

				self.addEvent();
		},
		this.addEvent = function() {
			$('.selected').show();
			$('.changeImage').click(function(){
				//$('.imageDiv').hide();
				$('.imageDiv').each(function(){
					if($(this).hasClass('selected'))
					{
						/*$(this).fadeOut(3000);*/
						$(this).hide();
						$(this).removeClass('selected');
						$(this).addClass('unselected');
					}
					else{
						/*$(this).fadeIn(3000);*/
						$(this).show();
						$(this).removeClass('unselected');
						$(this).addClass('selected');
					}
				});
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