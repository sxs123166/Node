
// 1.了解Session认证的局限性
// Session认证机制需要配合Cookie才能实现。由于Cookie默认不支持跨域访问，所以，当涉及到，前端跨域请求后端
// 接口的时候，需要做很多额外的配置，才能实现跨域Session认证

// 注意：
// 当前端请求后端接口不存在跨域问题的时候，推荐使用Session身份认证机制。
// 当前端需要跨域请求后端接口的时候，不推荐使用Session身份认证机制，推荐使用JWT认证机制

// 2.什么是JWT
// JWT是目前最流行的跨域认证解决方案

// 3.JWT的工作原理

// 用户的信息通过Token字符串的形式。保存在客户端浏览器中。服务器通过还原Token字符哈村的形式来认证用户的身份

// 4.JWT的组成部分
// JWT通常由三部分组成，分别是Header（头部）、Payload(有效载荷）、Signature(签名)
// 三者之间使用英文的"."分隔，格式为：
// Header.Payload.Signature

// payload部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串
// Header和Signature是安全性相关的部分，只是为了保证Token的安全性

// 7.JWT的使用方式
// 客户端收到服务器返回的JWT之后，通常会将它存储在localStorage或sessionStorage
// 伺候，客户端与服务器每次通信，都要带上这个JWT的字符串，从而进行身份认证。推荐的做法是把JWT放在HTTP请求头的
// Authorization字段中，格式为：
// Authorization： Bearer<token>

