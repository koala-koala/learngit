var Book= Backbone.Model.extend({
	defaults:{
		name:''
	}
});

var BookList = Backbone.Collection.extend({
	model:Book
});

var book1 = new Book({
	name:'java1'
});
// var book2 = new Book({
// 	name:'java2'
// });
// var book3 = new Book({
// 	name:'java3'
// });
var book2 = book1.clone();
book2.set('name','java2');
var book3 = book1.clone();
book3.set('name','java3');

var models = [{
	name:'java1'
},{
	name:'java2'
},{
	name:'java3'
}];

// var books = new BookList([book1,book2,book3]);
var books = new BookList(models);

console.log(books.models);