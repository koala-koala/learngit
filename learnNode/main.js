var fs = require('fs');
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
/*阻塞
菜鸟教程官网地址：www.runoob.com
程序执行结束!
*/
fs.readFile('input.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString());
});
console.log("程序执行结束!");
/**非阻塞，读取完后回调
程序执行结束!
菜鸟教程官网地址：www.runoob.com
**/