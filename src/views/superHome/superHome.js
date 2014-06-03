define([
	"text!../../../../template/superHome.html",
	"mediator",
	"backbone",
	"less!../../../../../../../less/superHome"
],function(superHomeTemplate, mediator){
	var self;
	return function(){
		////console.log(bxSlider);
		this.render = function() {
			self = this;
			$('.dataContent').html(superHomeTemplate);	
			self._addEvent();
		},
		this._addEvent = function(){
			var contacts = [
		        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
		        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
		        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { name: "Contact 9", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { name: "Contact 10", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
		        { name: "Contact 11", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
		        { name: "Contact 12", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
		        { name: "Contact 13", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
		    ];

		    var contact = Backbone.Model.extend({
		    	defaults:{
		    		'photo': 'assets/superHome/contactThumbnail.png'
		    	}
		    });

		    var Directory = Backbone.Collection.extend({
		    	model:contact
		    });

		    var ContactView = Backbone.View.extend({
			    tagName: "article",
			    className: "contact-container",
			    template: $("#contactTemplate").html(),
			  	events: {
		            "click button.delete": "deleteContact"
		        },
			    render: function () {
			    	//console.log('contact view render');
			    	//console.log(this.template);
			    	console.log(this.model.toJSON())
			        var tmpl = _.template(this.template);
			 
			        this.$el.html(tmpl(this.model.toJSON()));
			        //console.log(this.$el.html());
			        return this;
			    },
			   
				deleteContact: function () {
					console.log('remove');
				// remove view from page
					this.remove();
				},

			});

			var DirectoryView = Backbone.View.extend({
			    el: $("#contacts"),
			 
			    initialize: function () {
			    	//console.log('#contacts');
			        this.collection = new Directory(contacts);
			        this.render();
			    },
			 	events:{
			 		'click .add' : 'addContact'
			 	},
			 	addContact:function(){
			 		console.log('add');
			 	},
			    render: function () {
			        var that = this;
			        //console.log('render');
			        
			        _.each(this.collection.models, function (item) {
			        	//console.log('in each collection'); 
						that.renderContact(item);
			        }, this);
			    },
			 
			    renderContact: function (item) {
			    	//console.log('in each renderContact');
			    	//console.log(this.$el); 

			        var contactView = new ContactView({
			            model: item
			        });
			        console.log(contactView.render().el)
			        this.$el.append(contactView.render().el);
			    }
			});

			var directory = new DirectoryView();
		}
	}
});