//定义模型类
var Book = Backbone.Model.extend({
	defaults:{
		name:'',
		price:'0'
	}
	
});
//创建集合对象
var books = new Backbone.Collection(null,{
	model:Book,
	comparator:function(m1,m2){
		var price1 = m1.get('price');
		var price2 = m2.get('price');
		if(price1>price2){
			return 1;
		}else{
			return 0;
		}
	}
});
books.add({
	name:'java1',
	price:10
});
books.push({
	name:'java2',
	price:20
});
books.unshift({
	name:'java3',
	price:30
});
books.push({
	name:'java4',
	price:40
},{
	at:1
});
books.unshift({
	name:'java5',
	price:50
},{
	at:2
});
console.log(books.models);