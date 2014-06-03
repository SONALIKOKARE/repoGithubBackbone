define(["jquery"], function($) {

	'use strict';

	var serviceUrl = "/audioTiming?audioId=";
	var setParams = {};
	//var serviceHash;
	return function(params) {
		this.initialize = function(params) {
			setParams.serviceHash = params.serviceHash;
			//console.log(setParams.serviceHash);	
		},

		this.getServicesData = function() {
			//console.log('in model.js');
			var deferred = new $.Deferred();
			$.ajax({
				dataType: "json",
				url:serviceUrl+setParams.serviceHash
			}).done(function(data) {

				//console.log(data);
				deferred.resolve(data);
			}).fail(function(error) {
				//console.log('error');
				//console.log(error);
				deferred.reject(error);
			});
			return deferred.promise();
		};

		/* 
			initialize method gets called automatically 
			when new instance is created. (As a constructor) 
		*/
		this.initialize(params);
	};
});