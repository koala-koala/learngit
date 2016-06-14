var m = new Backbone.Model();
m.on('custom',function(index){
	console.info(index);
});
for(var i=0;i<3;i++){
	m.trigger('custom',i);
}

m.off('custom');
m.trigger('custom',i);