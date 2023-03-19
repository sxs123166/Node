
// 1.什么是express?
// 官方给出的概念： express是基于Node.js平台，快速、开放、极简的web开发框架
// 通俗的理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的
// Express的本质：就是一个npm上的三方包，提供了快速创建Web服务器的便捷方法

// Express的中文官网：http://www.expressjs.com.cn

// 2.进一步理解Express
// 1)不使用Express能否创建Web服务器？
// 可以，使用Node.js提供的原生http模块即可

// 2）有了http内置模块，为什么还要用Express?
// http内置模块使用起来很复杂，开发效率低；Express是基于内置的http模块进一步封装出来的，
// 能够极大的提升开发效率

// 3）http内置模块与Express是什么关系
// 类似于浏览器中Web API和jQuery的关系，后者是基于前者进一步封装出来的

// 3.express能做什么？
// 对于前端程序员来说，最常见的两种服务器，分别是：
// 1)Web网站服务器：专门对外提供Web网页资源的服务器
// 2）API接口服务器：专门对外提供API接口的服务器
// 使用Express，我们可以方便、快速的创建Web网站的服务器或API接口的服务器

