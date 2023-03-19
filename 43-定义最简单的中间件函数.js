
// 1. 定义中间件函数
// const express = require('express')
// const app = express()

// // 定义一个最简单的中间件函数
// const mw = function(req, res, next) {
//     console.log('这是最简单的中间件函数');
//     // 把流转关系，转交给下一个中间件或路由
//     next()
// }

// app.listen(80, () => {
//     console.log('http://127.0.0.1');
// })

// 2.全局生效的中间件
// 客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件
// 通过调用app.use(中间件函数)，即可定义一个全局生效的中间件，示例代码为：

// const mw = function(req, res, next) {
//     console.log('这是最简单的中间件函数');
//     // 把流转关系，转交给下一个中间件或路由
//     next()
// }

// 全局生效的中间件
// app.use(mw)

// app.get('/', (req, res) => {
//     res.send('Home page.')
// })

// app.get('/user', (req, res) => {
//     res.send('User page')
// })

// 3.定义全局中间件的简化形式

// app.use(function(req, res, next) {
    //     console.log('这是最简单的中间件函数');
    //     next()
// })

// 4.中间件的使用
// 多个中间件之间，共享同一份req和res。基于这样的特性，我们可以在上游的中间件中，
// 统一为req和res对象添加自定义的属性或方法，供下游中间件或路由使用

// app.use((req, res, next) => {
//     //获取请求到达服务器的时间
//     const time = Date.now()
//     // 为req对象，挂载自定义属性，从而把时间共享给后面的所有路由
//     req.starttime = time
//     next()
// })


// app.get('/', (req, res) => {
//     res.send('Home page.' + req.startTime)
// })

// app.get('/user', (req, res) => {
//     res.send('User page.' + req.startTime)
// })

// 5.定义多个全局中间件
// 可以使用 app.use()连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件
// 定义的先后顺序依次进行调用，示例代码为：

// app.use(function(req, res, next) { //1.第一个全局中间件
//     console.log('调用了第一个全局中间件');
//     next()
// })

// app.use(function(req, res, next) { //2.第二个全局中间件
//     console.log('调用了第二个全局中间件');
//     next()
// })

// app.get('/user', (req, res) => { // 请求这个路由， 回依次触发上述两个全局中间件
//     res.send('Home page.')
// })

