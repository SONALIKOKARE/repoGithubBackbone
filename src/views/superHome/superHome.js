define([
	"text!../../../../template/superHome.html",
	"mediator",
	"backbone",
	"less!../../../../../../../less/superHome"
],function(superHomeTemplate, mediator){
	var self;
	return function(){
		//////console.log(bxSlider);
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
				{ name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" }
				
			];
			var extraContacts = [
				{ name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
				{ name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
				{ name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
				{ name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" }
				
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
					"click button.delete": "deleteContact",
					"click button.updateContact":"updateConatct",
					"click  button.save":"saveEdit",
					 "click button.cancel": "cancelEdit"
				},
				upadteTemplate:_.template($("#contactEditTemplate").html()),
				render: function () {
					////console.log('contact view render');
					////console.log(this.template);
					//console.log(this.model.toJSON())
					var tmpl = _.template(this.template);
			 
					this.$el.html(tmpl(this.model.toJSON()));
					////console.log(this.$el.html());
					return this;
				},
			   
				deleteContact: function () {
					//console.log('remove');
				// remove view from page
					this.remove();
				},
				cancelEdit: function () {
					this.render();
				},
				saveEdit: function(e){
					e.preventDefault();
					//console.log('save');
					var formData = {}, prev = this.model.previousAttributes();;
					 // get form data
		            $(e.target).closest("form").find(":input").not("button").each(function () {
		                var el = $(this);
		                formData[el.attr("class")] = el.val();
		                //console.log(formData);
		            });

					// update model
					this.model.set(formData);

					// update contacts array
		            _.each(contacts, function (contact) {
		            	console.log(contact);
		            	console.log(prev);
		            	
		                if (_.isEqual(contact, prev)) {
		                    contacts.splice(_.indexOf(contacts, contact), 1, formData);
		                }
		            });
				},

				updateConatct:function(){
					this.$el.html(this.upadteTemplate(this.model.toJSON()));
				},
				 

			});

			var AddContactView = Backbone.View.extend({
				/*el:'.modal',*/
				tagName: 'section',
				className:'addArticle',
				template:$('#addContactTemplate').html(),
				events:{
					'click .add': 'addContact',
					'click button.cancel': 'cancelContact'
				},
				addContact:function(){
					console.log('add contact to perticular');
				},
				cancelContact:function(){
					$('.modal').hide();
				},
				initialize:function(){
					console.log('addArticle');
					$('.modal').show();
					var tmpl = _.template(this.template);
					//console.log(this.template);
					this.$el.append(tmpl);
					console.log(this);
					return this;
				}
			});

			var DirectoryView = Backbone.View.extend({
				el: $("#contacts"),
			 
				initialize: function () {
					////console.log('#contacts');
					this.collection = new Directory(contacts);
					this.render();
				},
				events:{
					'click .addContactPopUp' : 'addContactPopUp'
				},
				addContactPopUp:function(){
					////console.log('add');
					var addContactView = new AddContactView();
					 $('.modal').append(addContactView.render().el);
				},
				
				render: function () {
					var that = this;
					////console.log('render');
					
					_.each(this.collection.models, function (item) {
						////console.log('in each collection'); 
						that.renderContact(item);
					}, this);
				},
			 
				renderContact: function (item) {
					////console.log('in each renderContact');
					////console.log(this.$el); 

					var contactView = new ContactView({
						model: item
					});
					//console.log(contactView.render().el)
					this.$el.append(contactView.render().el);
				}
			});

			var directory = new DirectoryView();
		}
	}
});