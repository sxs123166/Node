
// 1.安装
// 在项目所处的目录中，运行如下的终端命令，即可将express安装到项目中使用

// npm i express@4.17.1

// 2.创建基本的Web服务器
// 1).导入express
// const express = require('express')
// 2).创建web服务器
// const app = express()

// 3) 启动web服务器
//  调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
// app.listen(80, () => {
//     console.log('express server running at http://127.0.0.1');
// })

// 3. 监听GET请求
// 通过 app.get() 方法, 可以监听客户端的GET请求，具体的语法格式如下
// 参数1:客户端请求的URL地址
// 参数2:请求对应的处理函数
        //  req:请求对象（包含了与请求相关的属性和方法）
        //   res:响应对象（包含了与响应相关的属性和方法）
app.get('请求URL', function(req, res) {/*处理函数 */})  

// 4.监听POST请求
// 通过app.post()方法，可以监听客户端的POST请求，具体的语法格式如下：
// 参数1:客户端请求的URL地址
// 参数2:请求对应的处理函数
        //   req:请求对象（包含了与请求相关的属性和方法）
        //   res:响应对象（包含了与响应相关的属性和方法）
app.get('请求URL', function(req, res) {/*处理函数 */})  

// 5.把内容响应给客户端
// 通过res.send()方法，可以把处理好的内容，发送给客户端
app.get('/user', (req, res) => {
    // 向客户端发送 JSON对象
    res.send({name: 'zs', age: 20, gender: '男'})
})

app.post('/user', (req, res) => {
    //向客户端发送文本内容
    res.send('请求成功')
})

// 6.获取URL中携带的查询参数
// 通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
app.get('/usr/:ids/:name', (req, res) => {
    // req.query默认是一个空对象
    // 客户端使用？name=zs&age=20 这种查询字符串的形式，发送到服务器的参数，
    // 可以通过 req.query对象访问到，例如：
    // req.query.name    req.query.age
    console.log(req.query);

    console.log(req.params);
    res.send(req.params);
})

// 7.获取URL中的动态参数
// 通过req.params对象，可以访问到URL中，通过：匹配的动态参数
// URL地址中，可以通过：参数名 的形式， 匹配动态参数值
app.post('/', (req, res) => {
    // req.params 默认是一个空对象
    // 里面存放着通过 ： 动态匹配到的参数值
    console.log(req.params);
})

