define([
	"text!../../../template/readModal.html",
	"../../js/cueModel",
	"../../utils/highlight",
	"bxslider",
	"less!../../../../../../../less/readModal",
], function(modalTemplate,CueModel,highlight) {
	'use strict';
	var self, currentPage, currentAudio; 
	return function(categoryListBooks, currentPage){
		
		this.render = function(){
			currentAudio = "au008866";
			self = this;
			$(".dataContent").hide();
			$(".modal").show().html(modalTemplate);
			self.preRender(categoryListBooks, currentPage);
			
		},
		this.preRender = function(categoryListBooks, currentPage){
			var theTemplateScript = $("#readmodal_template").html();
			var theTemplate = Handlebars.compile (theTemplateScript);
			Handlebars.registerHelper('breakWords', function(options) {
			////console.log(options);
				var _string = "",
					wordCount = 0,
					wordArray = [];

				if (typeof options === 'string') {
					wordArray.push({
						value: options
					});
					options = wordArray;
				}

				for (var i = 0; i < options.length; i++) {
					var lineText = options[i].value;
					var lineWords = lineText.split(" ");
					_string += "<p>"
					for (var j = 0; j < lineWords.length; j++) {
						lineWords[j] = "<span id=readWord" + wordCount + ">" + lineWords[j] + "</span>";
						_string += lineWords[j] + ' ';
						wordCount++;
					}
					_string += "</p>"
				}

				return _string;
			});
			
			$('.modal').html(theTemplate (categoryListBooks));
			self.addEvent();
			
		},
		this.addEvent = function(){
			$('.modalClose').click(function(){
					$(".modal").empty().hide();
					$(".dataContent").show();
			});
			$('.slidePlayStop').click(function(){
				//console.log('slidePlayStop');
				self.startHighLight(currentAudio);
			});
			
			$('#readModalbxslider').bxSlider({
				onSliderLoad: function($slideElement) {
					currentAudio = $(currentPage).find('.spreadTextContainer').attr('data-audio');
					////console.log(currentAudio);
				},
				onSlideNext: function($slideElement, oldIndex, newIndex) {
					currentPage = $slideElement;
					//console.log($(currentPage).attr('data-index'));
					//console.log($(currentPage).find('.spreadTextContainer').attr('data-audio'));
					currentAudio = $(currentPage).find('.spreadTextContainer').attr('data-audio'); 
				},
				onSlidePrev: function($slideElement, oldIndex, newIndex) {
					currentPage = $slideElement;
					//console.log(currentPage);
					//console.log($(currentPage).attr('data-index'));
					//console.log($(currentPage).find('.spreadTextContainer').attr('data-audio'));
					currentAudio = $(currentPage).find('.spreadTextContainer').attr('data-audio');

				},
				nextSelector: '#slider-next',
				prevSelector: '#slider-prev',
				nextText: '<img src="../../assets/modal/modalNext.png" />',
				prevText: '<img src="../../assets/modal/modalPrevious.png" />',
				pager:false,
				infiniteLoop: false,
				hideControlOnEnd: true,
			});
			
		},
		this.startHighLight = function(currentAudio) {
			////console.log(_index);
			highlight.initialize({
				'textContainer': $(".spreadTextContainer_"+currentAudio),
				'currentAudioFile' : currentAudio
			});
			highlight.autoPlay();
		}
	}
});