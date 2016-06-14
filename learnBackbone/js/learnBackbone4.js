//定义模型类
var Book = Backbone.Model.extend({
	default:{
		name:'',
		price:'0'
	}
});
//定义初始化数据
var data = [{
	id:1,
	name:'java1',
	price:10
},{
	id:2,
	name:'java2',
	price:20
},{
	id:3,
	name:'java3',
	price:30
}];

//创建集合对象
var books = new  Backbone.Collection(data,{
	model:Book
});

// books.remove(books.models[1]);
// books.pop();
// books.shift();
console.log(books.models);

//根据id和cid查找模型对象
var book1 = books.get('c2');
// var book2 = books.getByCid('c2');废弃的方法
var book2 = books.at(2);
console.log(book1);
console.log(book2);