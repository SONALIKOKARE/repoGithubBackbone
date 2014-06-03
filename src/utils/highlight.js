define(["../js/cueModel","../utils/audio", "mediator"],
	function(Model,audio, mediator) {
	"use strict";
	var _workList=[], _cuePoint=[], params,g_intervals, _counter, themeClass;
	
	function initialize (_params){
		params = _params;
		//console.log(params);
		
		themeClass = "highlightYellow";
		_counter = 0;

		$(".spreadTextContainer p").find('.' + themeClass).removeClass(themeClass);
		if(g_intervals && g_intervals.length>0){
			for(var _in=0;_in<g_intervals.length;_in++){
				var interval = g_intervals[_in];
				clearTimeout(interval);
			}
		}
		g_intervals=[];
	};
	function autoPlay(){
		getAudioTiming();
	}

	function getAudioTiming(){
		var self = this;
		var audioTimeModel = new Model({'serviceHash':params.currentAudioFile});
		$.when(audioTimeModel.getServicesData()).then(function(response) {
			//console.log(response)
			processAudioTime(response);
			/*//console.log(params.audioURL);*/
			audio.playAudio('../audio/'+params.currentAudioFile+'.', startTimer);
		});
	}
	function startTimer(){
		//console.log(_cuePoint);
		$.each(_cuePoint, function(index, value ) {
			g_intervals.push(
				setTimeout(function(){
					highlight(index+1,_cuePoint.length,"readWord")
				},value.time)
			);
		});
		highlight(0,_cuePoint.length,"readWord")
	}

	function highlight(currentIndex, totalLength, identifier) {
		//console.log(currentIndex);
		//console.log(totalLength);
		//console.log(identifier);
		//console.log($(params.textContainer));
		var prev= currentIndex - 1;
		$(params.textContainer).find('#'+identifier+prev).removeClass(themeClass);
		$(params.textContainer).find('#'+identifier+currentIndex).addClass(themeClass);
		if(currentIndex == totalLength){
			_counter++;
			// //console.log(params);
			if(_counter < params.textContainer.length){
				//If we have more than two audio on the same screen;
				autoPlay();
				// constants.isAutoPlay = true;
			}else{
				//Completed the screen;
				debugger
				params.nextCallBack();
			}
		}
	}

	function processAudioTime(_response){
		if(_response.status == "SUCCESS"){
			_cuePoint = [];
			for(var _c=0;_c<_response.data.cuePoint.length;_c++){
				_cuePoint.push({
					'time':_response.data.cuePoint[_c].time
				})
			}
			//console.log(_cuePoint);
		}
	}
	
	return {
		initialize:initialize,
		autoPlay:autoPlay
	}
});