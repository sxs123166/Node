// req请求对象
const server = http.createServer()
// req是请求对象，包含了客户端相关的数据和属性
server.on('request', req => {
    // req.url是客户端请求的url地址
    const url = req.url
    // req.method 是客户端请求的 method类型
    const method = req.method
    const str = 'Your request url is ${url}, and request method is ${method}'
    console.log(str);
})
server.listen(80, ()=> {
    console.log('server running at http://127.0.0.1');
}) 

// res响应对象
// 在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：
server.on('request', (req, res) => {
    // res是响应对象，它包含了与服务器相关的数据和属性，例如：
    const str = 'Your request url is ${url}, and request method is ${method}'
    //为了防止中文乱码的问题，需要设置响应头Content-Type的值为 text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8' )
    //把包含中文的内容，响应给客户端
    //res.end()方法的作用：
    // 向客户端发送指定的内容，并结束这次请求的处理过程
    res.end(str)
})