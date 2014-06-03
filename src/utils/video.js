// Note*: This is not video.js plugin.
define(['utility', 'constants'], function(utility, constants) {
	"use strict";
	
	function _getVideoExt(_path) {
		_path = _getFileWithExt(_path);
		return _path;
	}

	function _getFileWithExt(_path) {
		var extension = constants.videoFormat.MP4;
		if (utility.isFirefox) {
			extension = constants.videoFormat.WEBM;
		}
		return _path + extension;
	}
	return {
		getVideoExt: _getVideoExt
	};
});