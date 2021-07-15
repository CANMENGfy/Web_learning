# Day04
NPM、ES6基础

## NPM

NPM是Node.js官方提供的包管理工具，随同Node一起安装。NPM已经成了Node包的标准发布平台，用于Node包的发布、传播、依赖控制。NPM提供命令行工具，可以方便我们下载、安装、升级、删除包，也可以让你作为一个开发者发布并维护自己的包。

http://www.npmjs.com

### 使用CNPM淘宝镜像

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

$ cnpm install 安装包名称
```

### 使用NPM

* 1、创建模块

npm init [-y] 用来初始化生成一个新的package.json文件。

* 2、安装模块

npm install | i [-S | -D] 安装包名称 [-g]

* 3、卸载模块

npm uninstall 包名称

### NPM包的基本应用

以jquery为例：

```
cnpm install jquery -S
```

