
// 1.接口跨域问题
// 刚才编写的get和post接口，存在一个很严重的问题：不支持跨域请求
// 解决跨域问题的方案主要有两种：
// 1）CORS（主流的解决方案，推荐使用）
// 2）JSONP（有缺陷的方案，只支持GET请求）

// 2. 使用CORS中间件解决跨域问题
// cors是express的一个第三方中间件，通过安装和配置cors中间件，可以很方便的解决跨域问题
// 使用步骤为如下三步：
// 1）运行 npm install cors 中间件
// 2）使用 const cors = require('cors') 导入中间件
// 3） 在路由之前调用app.use(cors())配置中间件


// 3. 什么是CORS
// CORS是由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源

// 浏览器的同源安全策略默认会组织网页“跨域”获取资源。但如果接口服务器配置了CORS相关的HTTP响应头，
// 就可以解除浏览器的跨域访问限制

// 4.CORS的注意事项
// 1） CORS主要在服务器进行配置，客户端浏览器无需做任何额外的配置，即可请求开启了CORS的接口
// 2） CORS 在浏览器中有兼容性。只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启了CORS的服务器接口

// 5.CORS响应头部-ACCESS-Control-allow-Origin
// 响应头中可以携带一个Access-Control-Allow-origin字段，其语法如下：
// Access-Control-Allow-Origin: <origin> | *
// 其中，origin 参数的值指定了允许访问该资源的外域URL
// 例如，下面的字段值只允许来自 http://itcast.cn 的请求
// res.setHeader('Access-Control-Allow-Origin', 'http://itcast.cn')

// 如果指定了Access-Control-Allow-Origin 字段的值为通配符*,表示允许来自任何域的请求，示例代码为：
// res.setHeader('Access-Control-Allow-Origin', '*')


// 6. CORS响应头部-Access-Control-Allow-Headers

// 默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头
// Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Vie wiewport-Width、Width
// Content-Type(值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded三者之一)
// 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers 对
// 额外的请求头进行说明，否则这次会请求失败

// 允许客户端额外向服务器发送Content-Type 请求头和 X-Custom-Header请求头
// 注意：多个请求头之间使用英文的逗号进行分割
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Custom-Header')

// 7. CORS 响应头部 - Access-Control-Allow-Methods
// 默认情况下，CORS仅支持客户端发起GET、POST、HEAD请求

// 如果客户端希望通过PUT,DELETE等方式请求服务器的资源，则需要在服务器端，通过 Access-Control-Allow-Methods
// 来指明实际请求所允许使用的HTTP方法

// 示例代码：
// 只允许POST、GET、DELETE、HEAD 请求方法
// res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, HEAD')
// 允许所有的HTTP请求方法
// res.setHeader('Access-Control-Allow-Methods', '*')

// 8. CORS请求的分类
// 客户端在请求CORS接口的时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类，分别是：
// 1）简单请求
// 2）预检请求

// 9.简单请求：同时满足以下两大条件的请求，就属于简单请求
// （1）请求方式 get post head 三者之一
// （2） HTTP头部信息不超过以下几种字段：无定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Vie wiewport-Width、Width
// Content-Type(值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded三者之一)

// 10. 预检请求
// 只要符合以下任何一个条件的请求，都需要进行预检请求：
// 1）请求方式为get\post\head之外的请求method类型
// 2）请求头中包含自定义头部字段
// 3）向服务器发送了 application/json 格式的数据

// 在浏览器于服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求， 所以这
// 一次的OPTION请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实的数据

// 11.简单请求和预检请求的区别
// 简单请求的特点：客户端与服务器之间只会发生一次请求
// 预检请求的特点：客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求





