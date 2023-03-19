
// 1.包管理配置文件
// npm规定，在项目根目录中，必须提供一个叫做package.json的包配置管理文件。用来记录与项目有关的一些配置信息
// 例如：
// 项目的名称、版本号、描述等
// 项目中用到了哪些包
// 哪些包只在开发期间会用到
// 哪些包在开发和部署时都需要用到

const moment = require("moment")

// 2. 如何记录项目中安装了哪些包
// 在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包
// 从而方便剔除node_modules目录之后，在团队成员之间共享项目的源代码

// 注意：今后在项目开发中，一定要把node_modules文件夹，添加到.gitignore文件中

// 3.快速创建package.json
// npm包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建package.json这个包管理配置
// 文件：
//   作用：在执行命令所处的目录中，快速新建package.json 文件
//    npm  init -y

// 注意：
// 1）上述命令只能在英文的目录下成功运行，所以，项目文件夹的名称一定要使用英文命名，不能使用中文，不能使用空格
// 2） 运行npm install命令安装包的时候，npm包管理工具会自动把包的名称和版本号，记录到package.json中


// 4.dependencies节点
// package.json文件中，有一个dependencies节点，专门用来记录您使用 npm install 命令安装了
// 哪些包
// npm i jquery art-template 可以同时安装多个包


// 5.一次性安装所有的包
// 当我们拿到一个移除了node_modules的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来
// 否则会报错

// 由于项目的运行依赖于 moment 这个包，如果没有提前安装好这个包，就会报类似于下面的错误
// Error: Cannot find module 'moment'

// 一次性安装所有的包 可以运行npm install命令（或 npm i）一次性安装所有的依赖包

// 执行 npm install 命令时，npm包管理工具会先读取package.json中的dependencies节点
// 读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中
// npm install

// 6.卸载包
// 可以运行npm uninstall命令，来卸载指定的包
// 使用 npm uninstall 具体的包名，来卸载包
// npm uninstall moment

// 注意：npm uninstall 命令执行成功后，会把卸载的包，自动从package.json的dependencies中移除掉

// 7.devDependencies节点
// 如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencies节点中。
// 与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到denpendencies节点中

// 安装指定的包，并记录到 devDependencies 节点中
// npm i 包名 -D
// 注意：以上命令是简写形式，等价于下面完整的写法
// npm install 包名 --save-dev
// 也可 --save-dev 包名


