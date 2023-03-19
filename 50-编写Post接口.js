
apiRouter.post('/post', (req, res) => {
    // 1.获取客户端通过请求体，发送到服务器的URL-encoded 数据
    const body = req.body
    // 2. 调用 res.send()方法，把数据响应给客户端
    res.send({
        status: 0, //状态0 表示成功， 1表示失败
        msg: 'POST请求成功', //状态描述消息
        data: body     //需要响应给客户端的具体数据
    })
})
// 注意：如果要获取URL-encoded 格式的请求体数据，必须配置中间件app.use(express.urlencoded({extended:false}))

