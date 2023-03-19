
// 1.为什么下包速度慢
// 在使用npm下包的时候，默认从国外的https://registry.npmjs.org/服务器进行下载，此时，网络数据的传输需要
// 经过漫长的海底光缆，因此下包速度会很慢

// 2.淘宝 NPM 镜像服务器

// 镜像：镜像是一种文件存储形式，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像

// 3.切换 npm 的下包镜像源
// 下包的镜像源，指的就是下包的服务器地址

//查看当前的下包镜像源
// npm config get registry
// 将下包的镜像源切换为淘宝镜像源
// npm config set registry=https://registry.npm.taobao.org/
// 检查镜像源是否下载成功
// npm config get registry

// 4.nrm
// 为了更方便的切换下包的镜像源，我们可以安装nrm这个小工具，利用nrm提供的终端命令，可以
// 快速查看和切换下载的镜像源

// 通过npm包管理器，将nrm安装为全局可用的工具
// npm i nrm -g
// 查看所有可用的镜像源
// nrm ls
// 将下包的镜像源切换为淘宝镜像
// nrm use taobao




