
// 1.安装JWT相关的包
// 运行如下命令，安装如下两个JWT相关的包
// npm install jsonwebtoken express-jwt

// 其中：
// jsonwebtoken用于生成jwt字符串
// express-jwt用于将JWT字符串

// 2.导入JWT相关的包
// 1)使用require()函数，分别导入JWT相关的两个包：
// const jwt = require('jsonwebtoken')
// 2) 导入用于将客户端发送过来的JWT字符串，解析还原成JSON对象的包


// 3. 定义secret密钥
// 为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个
// 用于加密和解密的secret密钥
// 1）当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串
// 2）当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密

// 3.secret密钥的本质：就是一个字符串
// const secretKey = 'itheima NO1 '

// 4.在登录成功之后生成JWT字符串
// 调用jsonwebtoken包提供的sign()方法，将用户的信息加密成JWT字符串，响应给客户端
//     //用户登录成功之后，生成JWT字符串，通过token属性响应给客户端

// 参数1: 用户的信息对象
// 参数2: 加密的密钥
// 参数3: 配置对象，可以配置当前token的有效期
// jwt.sign({username:userinfo.username}, secretKey, {expiresIn: '30s' }) //s或h均可

//登录接口
// app.post('/api/login', function(req, res) {
//     //...省略登录失败情况下的代码

//     res.send({
//         status: 200,
//         message: '登录成功！',
//         // 调用jwt.sign()生成JWT字符串，三个参数分别是：用户信息对象，加密密钥，配置对象
//         token: jwt.sign({ username: userinfo.username}, secretKey, {expiresIn: '30s'})


//     })
// })

