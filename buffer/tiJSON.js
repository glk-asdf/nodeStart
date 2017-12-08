var buf = Buffer.from('www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);
// 输出
// {
// 	type: 'Buffer',
// 	data: [ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ]
// }