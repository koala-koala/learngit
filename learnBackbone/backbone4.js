var Note = Backbone.Model.extend({
	initialize:function(){},
	author:function(){},
	allowedToEdit:function(){
		return true;
	},
	set:function(attribute,options){
		Backbone.Model.prototype.set.apply(this,arguments);
	}

});

var PrivateNote = Note.extend({
	allowedToEdit:function(account){
		return account.owns(this);
	}
});