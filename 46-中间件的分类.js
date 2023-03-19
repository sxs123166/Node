
// 1.应用级别的分类
// 通过app.use()或app.get()或app.post(), 绑定到app实例上的中间件，叫做应用级别的中间件，代码示例如下：

// 应用级别的中间件（全局中间件）
// app.use((req, res, next) => {
//     next()
// })

// //应用级别的中间件（局部中间件）
// app.get('/', mw1, (req, res) => {
//     res.send('Home page')
// })

// 2.路由级别的中间件
// 绑定到 express.Router()实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件
// 没有任何区别。只不过，应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上，代码示例如下
// var app = express()
// var router = express.router()

 //路由级别的中间件
// router.use(function (req, res, next){
//     console.log('Time', Date.now())
//     next()
// })

// app.use('/', router)

// 3.错误级别的中间件
// 错误级别中间件的作用：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题
// 格式：错误级别中间件的function处理函数中，必须有四个形参，形参顺序从前到后，分别是(err,req,res,next)

// app.get('/', function(req, res) { //1.路由
//     throw new Error('服务器内部发生了错误') //1.1 抛出一个自定义的错误
//     res.send('Home page')
// })

// app.use(function(err, req, res, next) { //2.错误级别的中间件
//     console.log('发生了错误' + err.message); //2.1 在服务器打印错误消息
// })                                        //2.2 向客户端响应错误相关的内容

// 4.Express内置的中间件
// 自Express 4.16.0版本开始，Express内置了3个常用的中间件，极大的提高了Express项目的开发效率和体验
// 1）express.static 快速托管静态资源的内置中间件，例如：HTML文件，图片，CSS样式等（无兼容性）
// 2）express.json解析JSON格式的请求数体数据（有兼容性，仅在4.16.0+版本中可用）
// 3）express.urlencoded 解析URL-encoded 格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）

// 配置解析 application/json 格式数据的内置中间件
// app.use(express.json())
// 配置解析application/x-www-form-urlencoded 格式数据的内置中间件
// app.use(express.urlencoded({extended: false}))

// 注意：除了错误级别的中间件，其他的中间件，都必须在路由之前进行配置


// 示例：
// 1）导入express模块
// const express = require('express')
// 2) 创建 express 的服务器实例
// const app = express()

// 配置解析 application/json 格式数据的内置中间件
// app.use(express.json())
// 通过express.urlencoded() 这个中间件，解析表单中的 JSON格式的数据
// app.use(express.urlencoded({extended: false}))

// app.post('/user', (req, res) => {
//     // 在服务器，可以使用 req.body 这个属性， 来接收客户端发送过来的请求体数据
//     // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于 undefined
//     console.log(req.body);
//     res.send('ok')
// })

// app.post('/book', (req, res) => {
//     //在服务端 可以通过req, body来获取JSON格式的表单数据和url-encoded格式的数据
//     console.log(req.body);
//     res.send('ok')
// })

// 5.第三方的中间件
// 非express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载
// 并配置第三方中间件，从而提高项目的开发效率

// 例如：在express@4.16.0之前的版本中，经常使用body-parser这个第三方中间件，来解析请求体数据，
// 使用步骤为：
// 1）运行 npm install body-parser安装中间件
// 2）使用 require 导入中间件
// 3）调用app.use()注册并使用中间件

// 合上面实例对应

// 和62-65行对应
// 导入解析表单数据的中间件 body-parser
// const parser = require('body-parser')
// 使用app.use() 注册中间件
// app.use(express.urlencoded({extended: false}))

// 注意：Express内置的express.urlencoded中间件，就是基于body-parser这个第三方中间件进一步封装出来的