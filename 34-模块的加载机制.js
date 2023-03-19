
// 1.优先从缓存中加载
// 模块在第一次加载后会被缓存，这也意味着多次调用require()不会导致模块的代码被执行多次

// 注意：不论是内置模块、用户自定义模块、还是第三方模块，他们都会优先从缓存中加载，从而提高模块的加载效率

// 2.内置模块的加载机制
// 内置模块是由Node.js官方提供的模块，内置模块的加载优先级最高
// 例如：require('fs')始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs

// 3.自定义模块的加载机制
// 使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，
// 如果没有指定./或../这样的路径标识符，则node会把它当作内置模块或第三方模块进行加载

// 同时，在使用require()导入自定义模块时，如果省略了文件的扩展名，则node.js会按顺序分别尝试
// 加载以下的文件
// 1）按照确切的文件名进行加载
// 2）补全.js扩展名进行加载
// 3）补全.json扩展名进行加载
// 4)补全.node扩展名进行加载
// 5）加载失败，终端报错

// 4.第三方模块的加载机制
// 如果传递给require()的模块标识符不是一个内置模块，也没有以./或../开头，则Node.js会从当前模块的
// 父目录开始，尝试从/node_modules文件夹中加载第三方模块
// 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，查到文件系统的根目录
// 例如： 假设在C：\Users\itheima\project\foo.js文件里调用了require('tools'),则Node.js会按以下顺序查找
// 1）C:\Users\itheima\project\node_modules\tools
// 2)C:\Users\itheima\node_modules\tools
// 3)C:\Users\node_modules\tools
// 4)C:\node_modules\tools

// 5.目录作为模块
// 当把目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式
// 1）在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require()加载的入口
// 2）如果目录里没有package.json文件，或者main入口不存在或无法解析，则node.js会试图加载目录下的index.json文件
// 3）如果以上都失败了，则Node.js会在终端打印错误消息，报告模块的缺失Error:Cannot find module 'xxx'


