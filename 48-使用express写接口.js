
// 1.创建基本的服务器

// 基本步骤：
// 导入express模块
// const express = require('express')
// // 创建express的服务器实例
// const app = express()

// //write your code here...


// // 调用app.listen方法， 指定端口号并启动web服务器
// app.listen(80, function() {
//     console.log('Express server running at http://127.0.0.1');
// })

// 2.创建API路由模块
// apiRouter.js [路由模块]
// const express = require('express')
// const apiRouter = express.Router()

// //build your router here

// module.exports = apiRouter

// // -----------------------

// // app.js [导入注册路由模块]
// const apiRouter = require('./apiRouter.js')
// app.use('/api', apiRouter)