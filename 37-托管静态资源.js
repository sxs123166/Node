
// 1. express.static()
// express提供了一个非常好用的函数，叫做express.static().通过它，我们可以非常方便的创建一个
// 静态资源服务器，例如：通过如下代码就可以将public目录下的图片、CSS文件、JavaScript文件对外开放访问了

// app.use(express.static('public'))
// 现在，就可以访问public目录中的所有文件了
// http://localhost:3000/images/bg.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/login.js

// 注意：Express在指定的静态目录文件中查找文件，并对外提供资源的访问路径
// 因此，存放静态文件的目录名不会出现在URL中

// const express = require('express')
// const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// 谁先写在前面，先访问谁
// app.use(express.static('./clock'))
// app.use(express.static('./files'))


// app.listen(80, () => {
//     console.log('express server running at http://127.0.0.1');
// })

// 2. 依托多个静态资源目录
// 如果要托管多个静态资源目录，请多次调用 express.static() 函数：
// app.use(express.static('public'))
// app.use(express.static('files'))
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件

// 3.挂载路径前缀
// 如果希望在托管的静态资源访问路径之前，挂载路径前端，则可以使用如下的方式
// app.use('/public', express.static('public'))
// 现在，就可以通过带有/public前缀地址来访问public目录中的文件了
// http://localhost:3000/public/images/kitten.jpg
// http://localhost:3000/public/css/style.css
// http://localhost:3000/public/js/app.js

