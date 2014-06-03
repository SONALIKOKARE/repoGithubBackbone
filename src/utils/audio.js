define(['utility'], function(utility) {
	"use strict";
	var _callbackFn, _type, _isPlaying,_completeBackFn;
	var _audio = document.createElement('audio');
	_audio.controls = false;
	_audio.addEventListener("playing", function () {
		if(!_isPlaying)_stopAudio();
		if(_callbackFn)_callbackFn();
	}, false);
	_audio.addEventListener('ended', function() {
		if(!_isPlaying)_stopAudio();
		if(_completeBackFn)_completeBackFn();
	});

	function _getFileWithExt(_path) {
		/*
			Known Browser and OS issues:
			http://createjs.com/Docs/SoundJS/classes/Sound.html
		*/
		var extension = "mp3"; // <--- For utility.isExplorer [IE] || utility.isiPad [iPad] Default is MP3
		_type = "audio/mpeg";
		if (utility.isFirefox || utility.isChrome) {
			extension = "ogg";
			_type = "audio/ogg";
		}
		return _path + extension;
	}
	function _playAudio(_path, _callback,_completeBack) {
		//console.log(_path);

		_audio.src = "";
		_callbackFn = null;
		_completeBackFn = null;
		_audio.src = _getFileWithExt(_path);
		_audio.type=_type
		_callbackFn = _callback;
		_completeBackFn = _completeBack;
		_audio.play();
		_isPlaying = true;
		return _audio;
	}
	function _stopAudio(_path) {
		_audio.src = "";
		_callbackFn = null;
		_completeBackFn = null;
		_isPlaying = false;
	}
	return {
		playAudio: _playAudio,
		stopAudio: _stopAudio
	};
});