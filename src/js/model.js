define(["jquery"], function($) {

	'use strict';

	var serviceUrl = "//172.27.81.58/";
	var setParams = {};

	return function(params) {
		this.initialize = function(params) {
			setParams.serviceHash = "categoryListTT" /* params.serviceHash */;
		},

		this.getServicesData = function() {
			//console.log('in model.js');
			var deferred = new $.Deferred();
			$.ajax({
				dataType: "json",
				url:"/template/"
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