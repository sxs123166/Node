
// 1.最简单的用法
// // 在Express中使用路由最简单的方式，就是把路由挂载到app上，示例代码为：
// const express = require('express')
// // 创建Web服务器， 命名为app
// const app = express()

// //挂载路由
// app.get('/', (req, res) => {res.send('Hello,world!')})
// app.post('/', (req, res) => {res.send('Post Request')})

// // 启动web服务器
// app.listen(80, () => { console.log('server running at http://127.0.0.1')})

// 2.模块化路由
// 为了方便对路由进行模块化的处理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为
// 单独的模块。将路由抽离为单独的模块的步骤如下
// 1）创建路由模块对应的.js文件
// 2）调用express.Router()函数创建路由对象
// 3）向路由对象上挂载具体的路由
// 4）使用module.exports向外共享路由对象
// 5）使用app.use()函数注册路由模块

// 3.创建路由模块
// var express = require('express') //1.导入express
// var router = express.Router()  // 2. 创建路由对象

// router.get('/user/list', function(req, res) {
//     res.send('Get user list')
// })  //3.挂载获取用户列表的路由

// router.post('/user/add', function(req, res) {  // 4.挂载添加用户的路由
//     res.send('Add new User')
// })

// module.exports = router     //5. 向外导出路由对象

// 4.注册路由模块

// 1. 导入路由模块
// const userRouter = require('./router/user.js')

// 2. 使用app.use() 注册路由模块
// app.use(userRouter)

// 示例：
// const express = require('express')
// const app = express()

// // 1. 导入路由模块
// const router = require('40-router.js')
// // 2. 注册路由模块
// app.use(router)
// // 注意：app.use()函数的作用，就是用来注册全局中间件


// app.listen(80, ()=> {
//     console.log('http://127.0.0.1');
// })

// 5.为模块添加前缀
// 类似于托管静态资源时，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单
// 1).导入路由模块
// const userRouter = require('./router/user.js')

// 2).使用 app.use() 注册路由模块，并添加统一的访问前缀 /api
// app.use('/api', userRouter)




