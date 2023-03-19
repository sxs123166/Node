
// 1.需求描述与实现步骤
// 自己手动模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据
// 实现步骤：
// 1） 定义中间件
// 2） 监听 req 的 data 事件
// 3）监听req 的end事件
// 4）使用 querystring 模块解析请求体数据
// 5）将解析出来的数据对象挂载为 req.body

// 2.定义中间件
// 使用app.use()来定义全局生效的中间件，代码如下：
// app.use(function(req, res, next) {
//     //中间件的业务逻辑
// })

// 3.监听 req 的 data事件

// 在中间件中，需要监听req对象的 data 事件，来获取客户端发送到服务器的数据
// 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以data事件可能会触发多次，
// 每一次触发事件时，获取到数据只是完整数据的一部分，需要手动将收到的数据进行拼接

// 定义变量，用来存储客户端发送过来的请求体数据
// let str = ""
// 监听 req 对象的 data事件（客户端发送过来的请求体数据）
// req.on('data', (chunk) => {
//     //拼接请求体数据，隐式转换为字符串
//     str += chunk
// })

// 4. 监听req的end事件
// 当请求体数据接收完毕之后，会自动触发req的end事件
// 因此，我们可以在req 的end 事件中，拿到并处理完整的请求体数据。示例代码为：

// 监听 req对象的 end事件（请求体发送数据后自动触发）
// req.on('end', () => {
//     //打印完整的请求体数据
//     console.log(str);
//     // TODO: 把字符串格式的请求体数据，解析成对象格式
// })

// 5. 使用 querystring 模块解析请求体数据
// Node.js内置了一个querystring模块，专门用来处理查询字符串。通过这个模块提供的parse()函数，
// 可以轻松把查询字符串，解析成对象的格式。示例代码为：

// 导入处理 querystring 的 Node.js 内置模块
// const qs = require('querystring')

//调用 qs.parse() 方法，把查询字符串解析为对象
// const body = qs.parse(str)

// 6.将解析出来的数据对象挂载为 req.body
// 上游的中间件和下游的中间件及路由之间，共享同一份req和res。因此，我们可以将解析出来的数据，挂载为
// req的自定义属性，命名为req.body, 供下游使用。示例代码为：
// req.on('end', () => {
//     const body = qs.parse(str) //调用 qs.parse() 方法，把查询字符串解析为对象
//     req.body = body     //将解析出来的请求体对象，挂载为req.body属性
//     next()         //最后，一定要调用next函数执行后续的执行逻辑
// })

// 7.将自定义中间件封装为模块
// 为了优化代码的结构，我们可以把自定义的中间件函数，封装为独立的模块，示例代码为：
// custom-body-parser.js模块中的代码
// const qs = require('querystring')
// function bodyParser(req, res, next){/*省略其他代码 */}
// module.exports = bodyParser  //向外导出解析请求体数据的中间件函数

//----------分割线

// 1. 导入自定义的中间件模块
// const myBodyParser = require('custom-body-parser')
// 2. 注册自定义的中间件模块
// app.use(myBodyParser)

