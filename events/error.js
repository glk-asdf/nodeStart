// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// error 事件
eventEmitter.on('error', function(err,a){
	if (err) {
		console.log(err);
	};
	if (a) {
		console.log(a);
	};
	console.log('123');
});

eventEmitter.emit('error');

console.log("程序执行完毕。");