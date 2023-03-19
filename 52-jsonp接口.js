
// 1.回顾jsonp的概念与特点
// 概念：浏览器通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求的数据的方式
// 叫做JSONP

// 特点：
// 1）JSONP不属于真正的Ajax请求，因为它没有使用XMLHttpRequest 这个对象
// 2）JSONP 仅支持GET请求，不支持POST、PUT、DELETE等请求

// 2.创建JSONP接口的注意事项
// 如果项目中已经配置了CORS跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的接口。
// 否则JSONP接口会被处理成开启了cors的接口，示例代码为：

// // 优先创建 JSONP 接口【这个接口不会被处理成CORS接口】
// app.get('/api/jsonp', (req, res) => {})

// // 在配置 CORS 中间件 【后续所有的接口， 都会被处理成 CORS接口】
// app.use(cors())

// // 这是一个开启了cors的接口
// app.get('/api/get', (req, res) => {})

// 3.实现JSONP接口的步骤
// 1） 获取客户端发送过来的回调函数的名字
// 2）得到要通过jsonp形式发送给客户端的数据
// 3）根据前两步得到的数据，拼接出一个函数调用的字符串
// 4）把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析执行

// 4.实现jsonp接口的具体代码
// app.get('/api/jsonp', (req, res) => {
//     // 1. 获取客户端发送过来的回调函数的名字
//     const funcName = req.query.callback
//     // 2. 得到要通过 JSONP 形式发送给客户端的数据
//     const data = {name: 'zs', age: 22}
//     // 3.根据前两步得到的数据，拼接出一个函数调用的字符串
//     const scriptStr = '${funcName}${JSON.stringify(data)}'
//     // 4. 把上一步拼接得到的字符串，响应给客户端的<script>标签进行解析
//     res.send(scriptStr)
// })

// 5. 在网页中使用 Jquery发起jsonp 请求
// 调用$.ajax()函数，提供JSONP的配置选项，从而发起JSONP请求，示例代码为：
// $('#btnJSONP').on('click', function() {
//     $.ajax({
//         method: 'GET',
//         url: 'http://127.0.0.1/api/jsonp',
//         dataType: 'jsonp', //表示要发起jsonp的请求
//         success: function (res) {
//             console.log(res);
//         }
//     })
// })