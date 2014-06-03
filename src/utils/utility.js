define(['../js/constants', '../libs/jquery.client'], function(constants) {
	"use strict";

	//OS detection

	function _isWindows() {
		return $.client.os === constants.os.Windows;
	}

	function _isMac() {
		return $.client.os === constants.os.Mac;
	}

	function _isiPhoneiPod() {
		return $.client.os === constants.os.iPhone;
	}

	function _isiPad() {
		return $.client.os === constants.os.iPad;
	}

	//Browsers detection

	function _isChrome() {
		return $.client.browser === constants.browsers.Chrome;
	}

	function _isOmniWeb() {
		return $.client.browser === constants.browsers.OmniWeb;
	}

	function _isSafari() {
		return $.client.browser === constants.browsers.Safari;
	}

	function _isiCab() {
		return $.client.browser === constants.browsers.iCab;
	}

	function _isKonqueror() {
		return $.client.browser === constants.browsers.Konqueror;
	}

	function _isFirefox() {
		return $.client.browser === constants.browsers.Firefox;
	}

	function _isExplorer() {
		return $.client.browser === constants.browsers.Explorer;
	}

	function _isMozilla() {
		return $.client.browser === constants.browsers.Mozilla;
	}

	function _isTab() {
		if (/Android/i.test(navigator.userAgent)) {
			return true;
		} else {
			return false;
		}
	}

	//Click event;
	function _addClickEvent(selector, callbackFn) {
		if (_isiPad()) {
			$(selector).on("touchstart", callbackFn);
		} else {
			$(selector).on("click", callbackFn);
		}
	}

	//MouseOver event;
	function _addMouseEvent(selector, callbackFnOn, callbackFnOff) {
		if (_isiPad()) {
			$(selector).on("touchstart", callbackFnOn);
			$(selector).on("touchend", callbackFnOff);
			// $(selector).on("click", callbackFn);
		} else {
			$(selector).on("mouseenter", callbackFnOn);
			$(selector).on("mouseleave", callbackFnOff);
		}
	}
	return {
		isChrome: _isChrome(),
		isOmniWeb: _isOmniWeb(),
		isSafari: _isSafari(),
		isiCab: _isiCab(),
		isKonqueror: _isKonqueror(),
		isFirefox: _isFirefox(),
		isExplorer: _isExplorer(),
		isMozilla: _isMozilla(),
		isWindows: _isWindows(),
		isMac: _isMac(),
		isiPhoneiPod: _isiPhoneiPod(),
		isiPad: _isiPad(),
		isTablet: _isTab(),
		addClickEvent: _addClickEvent,
		addMouseEvent: _addMouseEvent
	}
});