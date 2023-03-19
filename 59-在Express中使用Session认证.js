
// 1. 安装express-session中间件

// 在express项目中，只需要安装express-session中间件，即可在项目中使用Session认证
// npm install express-session

// 2.配置express-session中间件
// express-session中间件安装成功后，需要通过app.use()来注册session中间件，示例代码为：

// 1.导入session中间件
// var session = require('express-ession')

// 2. 配置Session中间件
// app.use(session({
//     secret: 'keyboard cat', //secret 属性的值可以为任意字符串
//     resave: false,        // 固定写法
//     saveUninitialized: true  //固定写法
// }))

// 3. 向session中存储数据
// 当express-session中间件存储数据后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息：
// 当express-session中间件配置成功后，即可通过req.session来访问和使用session对象，从而存储用户的关键信息
// app.post('/api/login', (req, res) => {
//     // 判断用户提交的登录信息是否正确
//     if(req.body.username !== 'admin' || req.body.password !== '000000') {
//         return res.send({status: 1, msg:'登录失败'})
//     }

//     req.session.user = req.body  //将用户的信息，存储到 Session中
//     req.session.islogin = true   //将用户的登录状态，存储到Session中

//     res.send({status: 0,msg: '登录成功'})
// })

// 4.从session中获取数据
// 可以直接从req.session对象上获取之前存储的数据，示例代码如下：
// 获取用户姓名的接口
// app.get('/api/username', (req, res) => {
//     //判断用户是否登陆
//     if(!req.session.islogin) {
//         return res.send({status:1, msg: 'fail'})
//     }

//     res.send({status:0,msg:'success',username:req.session.user.username})
// })

// 5.清空session
// 调用req.session.destroy() 函数，即可清空服务器保存的session信息。

//退出登录的窗口
// app.post('/api/logout', (req,res) => {
//     //清空当前客户端对应的session信息
//     req.session.destroy()
//     res.send({
//         status:0,
//         msg: '退出登录成功'
//     })
// })

