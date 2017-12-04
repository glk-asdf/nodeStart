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























