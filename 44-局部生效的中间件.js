
// 不使用app.use()定义的中间件，叫做局部生效的中间件，示例代码为：
// 定义中间件函数 mw1
// const mw1 = function(req, res, next) {
//     console.log('这是中间值');
//     next()
// }

// // mw1 这个中间件只在“当前路由中生效”，这种用法属于局部生效的中间件
// app.get('/', mw1, function(req, res) {
//     res.send('Home page')
// })

// // mw1 这个中间件不会影响下面这个路由
// app.get('/user', function(req, res) {res.send('User Page')})

// 导入 express 模块
// const express = require('express')
// // 创建express的服务器实例
// const app = express()

// // 1.定义中间件函数
// const mw1 = (req, res, next) => {
//     console.log('调用了局部生效的中间件');
// }

// // 2. 创建路由
// app.get('/', (req, res) => {
//     res.send('Home page')
// })
// app.get('/user', (req, res) => {
//     res.send('User page')
// })

// // 调用 app.listen方法，指定端口号并启动服务器
// app.listen(80, function() {
//     console.log('Express server running at http://127.0.0.1');
// })

// 定义多个局部中间件
// 可以在路由中，通过如下两种等价的方式，使用多个局部中间件


// 以下两种写法是“完全等价”的,可选择任意一种方式进行使用
// app.get('/',mw1,mw2, (req, res) => {res.send('Home page')})
// app.get('/', [mw1,mw2], (req, res) => {res.send('Home page')})

