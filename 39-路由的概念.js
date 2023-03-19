
// 1.什么是路由？
// 广义上来讲，路由就是映射关系

// 2.Express中的路由
// 在Express中，路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express中的路由分三部分组成，分别是请求的类型，请求的URL地址，处理函数，格式如下
// 即：
// app.method(path, handler)

// 3.Express中路由的例子
// 匹配GET请求，且 请求URL为
// app.get('/', function(req, res) {
    // res.send('Hello, World');
// })

// 匹配post请求，且请求URL为：
// app.post('/', function(req, res) {
    // res.send('Got a POST request');
// })

// 5.路由的匹配过程
// 每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数
// 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则Express会将这次请求
// 转交给对应的function函数进行处理

// 路由匹配的注意点：
// 1）按照定义的先后顺序进行匹配
// 2）请求的类型和请求的URL同时匹配成功，才会调用对应的处理函数

