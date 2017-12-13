[MD学习](http://blog.csdn.net/kaitiren/article/details/38513715) 



# node学习

## node版本
		node -v

## node脚本模式
		node a.js

## node交互模式
		node

## node.js安装包及源码

[地址](https://nodejs.org/en/download/)

[历史版本地址](https://nodejs.org/dist/)

## 检测PATH环境变量是否配置了Node.js
		点击开始=》运行=》输入"cmd" => 输入命令"path"
		检查是否包含 "C:\Program Files\nodejs\"

## node升级
		npm install npm -g

## 使用 npm 命令安装模块
		npm install <Module Name>
		npm install express       本地安装
		npm install express -g    全局安装

### 本地安装
		将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录）
		如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录
		可以通过 require() 来引入本地安装的包

### 全局安装
		将安装包放在 /usr/local 下或者你 node 的安装目录
		可以直接在命令行里使用

### 具备两者功能
		如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link

## 查看安装信息
		npm list -g
		此命令可以查看所有全局安装的模块
		npm list <Module Name>
		此命令可以查看某个模块的版本号

## package.json
		package.json 位于模块的目录下，用于定义包的属性

		name - 包名。

		version - 包的版本号。

		description - 包的描述。

		homepage - 包的官网 url 。

		author - 包的作者姓名。

		contributors - 包的其他贡献者姓名。

		dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。

		repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。

		main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

		keywords - 关键字


## 卸载模块
		npm uninstall <Module Name>
		卸载后，你可以到 /node_modules/ 目录下查看包是否还存在
		或者使用以下命令查看：npm ls

## 更新模块
		npm update <Module Name>

## 搜索模块
		npm search <Module Name>

## 创建模块
		创建模块，package.json 文件是必不可少的。
		我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果

### 生成 package.json 文件

		npm init

		<!-- npm help json -->

		<!-- npm install <pkg> --save -->

		name: (node_modules) runoob                   # 模块名
		version: (1.0.0) 
		description: Node.js 测试模块(www.runoob.com)  # 描述
		entry point: (index.js) 
		test command: make test
		git repository: https://github.com/runoob/runoob.git  # Github 地址
		keywords: 
		author: 
		license: (ISC) 
		About to write to ……/node_modules/package.json:      # 生成地址


### 可以使用以下命令在 npm 资源库中注册用户（使用邮箱注册）

		$ npm adduser
		Username: mcmohd
		Password:
		Email: (this IS public) mcmohd@gmail.com

### 发布模块
		
		npm publish
		如果你以上的步骤都操作正确，你就可以跟其他模块一样使用 npm 来安装

## 版本号
		
		使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码

		语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

		如果只是修复bug，需要更新Z位。
		如果是新增了功能，但是向下兼容，需要更新Y位。
		如果有大变动，向下不兼容，需要更新X位。
		
		版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

## npm常用命令
		

[官方文档](https://npmjs.org/doc/)

		npm help 可查看所有命令
		npm help <command> 可查看某条命令的详细帮助
		npm install . -g 在package.json所在目录下使用此命令可先在本地安装当前命令行程序，可用于发布前的本地测试
		npm update <package> 可以把当前目录下node_modules子目录里边的对应模块更新至最新版本
		npm update <package> -g 可以把全局安装的对应命令行程序更新至最新版
		npm cache clear 可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人
		npm unpublish <package>@<version> 可以撤销发布自己发布过的某个版本代码

## 淘宝 NPM 镜像
		
		npm install -g cnpm --registry=https://registry.npm.taobao.org

		这样就可以使用 cnpm 命令来安装模块了

		cnpm install [name]

## Node.js REPL(交互式解释器)
		
		表示一个电脑的环境，类似 Window 系统的终端或 Unix/Linux shell，我们可以在终端中输入命令，并接收系统的响应

		Node 自带了交互式解释器，可以执行以下任务：

		读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。

		执行 - 执行输入的数据结构

		打印 - 输出结果

		循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出

		我们可以输入以下命令来启动 Node 的终端

		node

### 用法

		Node 会自动检测是否为连续的表达式，直接回车即可换行

		下划线(_)变量，下划线(_)表示：在此之前，最后输出的量

#### REPL 命令

		ctrl + c - 退出当前终端

		ctrl + c 按下两次 - 退出 Node REPL。

		ctrl + d - 退出 Node REPL.

		向上/向下 键 - 查看输入的历史命令

		tab 键 - 列出当前命令

		.help - 列出使用命令

		.break - 退出多行表达式

		.clear - 退出多行表达式

		.save filename - 保存当前的 Node REPL 会话到指定文件

		.load filename - 载入当前 Node REPL 会话的文件内容。

## Node.js 回调函数

		Node 所有 API 都支持回调函数

		异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了

		Node.js 异步编程的直接体现就是回调

		一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。
		这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求

## Node.js 事件循环

		Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高

		Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发

		Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现  ..................!!!???..................

		Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出
		每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数

### 事件驱动程序
		
		Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

		当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户

## Node.js EventEmitter
		
		EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
		当添加新的监听器时，newListener 事件会触发，
		当监听器被移除时，removeListener 事件被触发

		EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

		当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递

### EventEmitter 属性和方法
		
		EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件

		addListener(event, listener)
		为指定事件添加一个监听器到监听器数组的尾部。

		on(event, listener)
		为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

		once(event, listener)
		为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

		removeListener(event, listener)
		移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

		removeAllListeners([event])
		移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器

		setMaxListeners(n)
		默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量

		listeners(event)
		返回指定事件的监听器数组

		emit(event, [arg1], [arg2], [...])
		按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false

#### EventEmitter 类方法
		
		listenerCount(emitter, event)
		返回指定事件的监听器数量

#### EventEmitter 事件
		
		newListener		event - 字符串，事件名称	listener - 处理事件函数
		该事件在添加新监听器时被触发

		removeListener		event - 字符串，事件名称	listener - 处理事件函数
		从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引

##### error 事件
		
		EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件

		当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息

		我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃

### 继承 EventEmitter
		
		大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。
		包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类

		首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法

		其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系

## Node.js Buffer(缓冲区)
		
		JavaScript 语言自身只有字符串数据类型，没有二进制数据类型

		但在处理像TCP流或文件流时，必须使用到二进制数据。
		因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区

		在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。
		Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
		每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
		原始数据存储在 Buffer 类的实例中。
		一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存

		在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，
		但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，
		所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象

### Buffer 与字符编码
		
		Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。
		通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换

#### Node.js 目前支持的字符编码包括：

		ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

		utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。

		utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。

		ucs2 - utf16le 的别名。

		base64 - Base64 编码。

		latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

		binary - latin1 的别名。

		hex - 将每个字节编码为两个十六进制字符

### 创建 Buffer 类

		Buffer 提供了以下 API 来创建 Buffer 类：

		Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0

		Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据

		Buffer.allocUnsafeSlow(size)

		Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）

		Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。

		Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例

		Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例

### 写入缓冲区
		
		buf.write(string[, offset[, length]][, encoding])

#### 参数
		
		参数描述如下：

		string - 写入缓冲区的字符串。

		offset - 缓冲区开始写入的索引值，默认为 0 。

		length - 写入的字节数，默认为 buffer.length

		encoding - 使用的编码。默认为 'utf8' 。

		根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。 length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。

#### 返回值
		
		返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串

### 从缓冲区读取数据
		
		buf.toString([encoding[, start[, end]]])

#### 参数
		
		参数描述如下：

		encoding - 使用的编码。默认为 'utf8' 。

		start - 指定开始读取的索引位置，默认为 0。

		end - 结束位置，默认为缓冲区的末尾。

#### 返回值
		
		解码缓冲区数据并使用指定的编码返回字符串

### 将 Buffer 转换为 JSON 对象
		
		将 Node Buffer 转换为 JSON 对象的函数语法格式如下

		buf.toJSON()

### 缓冲区合并
		
		Node 缓冲区合并的语法如下所示

		Buffer.concat(list[, totalLength])

#### 参数
		
		参数描述如下：

		list - 用于合并的 Buffer 对象数组列表。

		totalLength - 指定合并后Buffer对象的总长度。

#### 返回值
		
		返回一个多个成员合并的新 Buffer 对象。

### 缓冲区比较
		
		Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入

		buf.compare(otherBuffer);

#### 参数
		
		参数描述如下：

		otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

#### 返回值

		返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

### 拷贝缓冲区
		
		Node 缓冲区拷贝语法如下所示

		buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])

#### 参数
		
		参数描述如下：

		targetBuffer - 要拷贝的 Buffer 对象。

		targetStart - 数字, 可选, 默认: 0

		sourceStart - 数字, 可选, 默认: 0

		sourceEnd - 数字, 可选, 默认: buffer.length

#### 返回值

		没有返回值。

### 缓冲区裁剪
		
		Node 缓冲区裁剪语法如下所示

		buf.slice([start[, end]])
		
#### 参数
		
		参数描述如下：

		start - 数字, 可选, 默认: 0

		end - 数字, 可选, 默认: buffer.length

#### 返回值
		
		返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

## Node.js Stream(流)
		
		Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。

		例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）

## 模块系统
		
		Node.js 中存在 4 类模块（原生模块和3种文件模块）

		尽管 require 方法极其简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同

		文件模块缓存 》原生模块 》文件模块 （所以应该不会出现覆盖）

		require方法接受以下几种参数的传递：

		http、fs、path等，原生模块。
		./mod或../mod，相对路径的文件模块。
		/pathtomodule/mod，绝对路径的文件模块。
		mod，非原生模块的文件模块。

## 路由
		
		我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码


## Node.js 全局对象
		
		JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

		在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
		
		__filename

		__filename 表示当前正在执行的脚本的文件名

```javascript
	// 输出全局变量 __filename 的值
	console.log( __filename );
```


