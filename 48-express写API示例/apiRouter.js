const express = require('express')
const router = express.Router()

//在这里挂在对应的路由器
apiRouter.get('/', (req, res) => {
    // 1.获取到客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 2. 调用res.send() 方法，把数据响应给客户端
    res.send({
        status:0,   // 状态 0 表示成功， 1 表示失败
        msg: 'GET请求成功',  //状态描述
        data: query   //需要响应给客户端的具体数据
    })
})

// 定义post接口
router.post('/post', (req, res) => {
    //通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body
    // 调用 res.send() 方法， 向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    })
})

module.express = router