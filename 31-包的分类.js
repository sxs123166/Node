
// 1.项目包
// 那些被安装到项目的node_modules目录中的包，都是项目包

// 项目包又分为两类，分别是：
// 1）开发依赖包（被记录到devdependencies节点中的包，只在开发期间会用到）
// 2）核心依赖包（被记录到dependencies中的包，在开发期间和项目上线之后都会用到）

// npm i 包名 -D  //开发依赖包（会被记录到devDependencies节点下）
// npm i 包名 //核心依赖包（会被记录到dependencies节点下）

// 2.全局包
// 在执行npm install命令时，如果提供了-g参数，则会把包安装为全局包
// 全局包会被安装到C:\Users\用户目录\AppData\Roaming\npm\node_modules目录下

// npm i 包名 -g     //全局安装指定的包
// npm uninstall 包名 -g  //卸载全局安装的包

// 注意：
// 1）只有工具性质的包，才有全局安装的必要性。因为他们提供了好用的终端命令
// 2）判断某个包是否需要全局安装后才能使用，可以参考官方的使用说明

// 3.i5ting_toc
// i5ting_toc 是一个可以把 md 文档转为html页面的小工具，使用步骤为：

// 将 i5ting_toc 安装为全局包
// npm install -g i5ting_toc
// 调用 i5ting_toc， 轻松实现 md 转 html的功能
// i5ting_toc -f 要转换的md文件路径 -o

//4.规范的包结构

// 一个规范的包，它的组成结构，必须符合以下三点要求：
// 1）包必须以单独的目录而存在
// 2）包的顶级目录下要必须包含package.json这个文件夹
// 3）package.json中必须包含name,version,main三个属性，分别代表包的名字，属性，入口。

// 以上三点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考：
// https://yarnpkg.com/zh-Hans/docs/package-json

