var AppRouter = Backbone.Router.extend({
	route:{
		'':'main',
		'topic':'renderList',
		'topic/:id':'renderDetail',
		'*error':'renderError'
	},
	main : function() {  
        console.log('应用入口方法');  
    },  
    renderList : function() {  
        console.log('渲染列表方法');  
    },  
    renderDetail : function(id) {  
        console.log('渲染详情方法, id为: ' + id);  
    },  
    renderError : function(error) {  
        console.log('URL错误, 错误信息: ' + error);  
    }  

});
var router = new AppRouter();
Backbone.history.start();