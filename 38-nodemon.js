
// 1.为什么要使用nodemon
// 在编写调试Node.js项目的时候，如果修改了项目的代码，则需要频繁的手动close掉，然后再重新启动，非常繁琐
// 现在，我们可以使用nodemon(http://www.npmjs.com/package/nodemon)这个工具，它能够监听
// 项目文件的变动，当代码被修改后， nodemon会帮我们自动启动项目，极大的方便了开发和调试

// 2.安装nodemon
// 在终端中，运行如下的命令，即可将nodemon安装为全局可用的工具

// npm install -g nodemon

// 3. 使用nodemon
// 当基于Node.js编写了一个网站应用的时候，传统的方式，是运行node app.js命令，来启动项目。这样做的坏处是
// 代码被修改之后，需要手动重启项目
// 现在，我们可以将node命令替换为nodemon命令，使用nodemon app.js来启动项目。这样做的好处是：
// 代码被修改之后，会被nodemon监听到，从而实现自动重启项目的效果

// nodemon app.js
