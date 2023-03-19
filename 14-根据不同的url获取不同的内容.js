
// 1. 核心实现步骤
//    1）获取请求的url地址
//    2）恢复默认的相应内容为404 not Found
//    3) 判断用户请求的是否为/或/index.html
//    4) 判断用户请求的是否为/about.html
//    5) 设置Content-Type响应头，防止中文乱码
//    6） 使用res.end()把内容响应给客户端

// 2.动态响应内容
// server.on('request', function(req, res) {
//     const url = req.url       //1.获取请求的url地址
//     let content = '<h1>401 Not Found</h1>'  //2.设置默认的值为401 Not Found
//     if(url === '/' || url === '/index.html') {
//         content = '<h1>首页</h1>'         //3.用户请求的是首页
//     }else if(url === './about.html') { //4.用户请求的是关于界面
//         content = '<h1>关于界面<h1/>'
//     } 
//     res.setHeader('Content-Type', 'text/html; charset=utf-8') // 5. 设置Content-type 响应头，防止中文乱码
//     res.end(content)                                          //6.把内容发送给客户端
// })

const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    // 1. 获取请求的url地址
    const url = req.url
    // 2. 设置默认的响应内容为404 not Found
    let content = '<h1>404 Not Found</h1>'
    // 3 判断用户请求的是否为/或/index.html
    // 4. 判断用户请求的是否为/about.html关于界面
    if(url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    }else if(url === '/about.html') {
        content = '<h1>关于界面</h1>'
    }
    // 5. 设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 6.使用res.end()把内容响应给客户端
    res.end(content)
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})