var Book = Backbone.Model.extend({
	defaults:{
		name:'unknown',
		author:'unknown',
		price:'0'
	},
	validate:function(data){
		if(data.price<50){
			return '书籍价格不应低于1元';
		}
		return false;
	}
});

var javabook = new Book({name:'<span>thinking in java</span>'});

var name = javabook.escape('name');
var author = javabook.get('author');
var price = javabook.get('price');

// console.log("name:"+name+" author:"+author+" price:"+price);
// console.log(javabook.attributes);

// javabook.set('name','那些年');
// javabook.set('author','九把刀');
// javabook.set('price','19.9');

// console.log("name:"+name+" author:"+author+" price:"+price);
// console.log(javabook.attributes);

// javabook.on('change', function(model) {  
//     console.log('change事件被触发');  
// });  
// 监听模型"change:name"事件  
// javabook.on('change:name', function(model, value) {  
//     console.log('change:name事件被触发');  
// });  
// 监听模型"change:author"事件  
// javabook.on('change:author', function(model, value) {  
//     console.log('change:author事件被触发');  
// });  
// 通过set()方法设置数据  
// javabook.set({  
//     name : 'Thinking in Java',  
//     author : 'unknown',  
//     price : 395.70  
// });  



// javabook.on('change:price', function(model, value) {  
//     var price = model.previous('price');  
  
//     if(price < value) {  
//         console.log('价格上涨了' + (value - price) + '元.');  
//     } else if(price > value) {  
//         console.log('价格下降了' + (price - value) + '元.');  
//     } else {  
//         console.log('价格没有发生变化.');  
//     }  
// });  
// 设置新的价格  
javabook.set('price', 0);  

javabook.on('error',function(model,error){
	console.log(error);
});
javabook.set('price', 0,{
	silent:true
}); 
javabook.set('price',0,{
	error:function(model,error){
		console.log('自定义错误：'+error);
	}
});
javabook.unset('name');
console.log(javabook.get('name'));
