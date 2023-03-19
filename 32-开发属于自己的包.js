
// 1.需要实现的功能
// 1）格式化日期
// 2）转义HTML中的字符
// 3）还原HTML中的特殊字符

//   1.导入自己的包
// const itheima = require('itheima-utils')

// 功能1:格式化日期
// const dt = itheima.dateFormat(new Date())
// 输出2020-01-20 10:09：45
// console.log(dt);

// 功能2:转义HTML中的字符
// const htmlStr = '<h1 style="color: red;">您好！&copy;<span>小黄！</span></h1>'
// const str = itheima.htmlEscape(htmlStr)

// console.log(str);

// 功能3:还原HTML中的字符
// const rawHTML = itheima.htmlUnEscape(str)

// console.log(rawHTML);

// 2.初始化包的基本结构
// 1）新建 itheima-tools 文件，作为包的根目录
// 2）在itheima-tools文件夹中，新建如下三个文件：
//  - package.json(包管理配置文件)
//  - index.js（包的入口文件）
//  - README.md(包的说明文档)

// 3.初始化package.json
// {
//     "name": "itheima-tools",
//     "version": "1.0.0",
//     "main": "index.js",
//     "description": "提供了格式化时间，HTMLEscape的功能",
//     "keywords": ["itheima", "dateFormat", "escape"],
//     "license": "ISC"
// }

// 更多license许可协议相关的内容，可参考https://www.jianshu.com/p/86251523e898

// 4.在index.js中定义格式化时间的方法

// 1）格式化时间的方法
// function dateFormat(dateStr) {/* 省略其余代码 */}

// // 补零的方法：
// function padZero(n) {
//     return n > 9 ? n : '0' + n
// }

// module.exports = {
//     dateFormat
// }

// 5.在index.js中定义转义HTML的方法
// function htmlescape(htmlStr) {
//     return htmlStr.replace(/<|>|"|&/g, (match) => {
//         switch(match) {
//             case '<':
//                 return '&lt;'
//             case '>': 
//                 return '&gt;'
//             case '"':
//                 return '&quot;'
//             case '&':
//                 return '&amp;'           
//         }
//     })
// }

// 6.在index.js中定义还原HTML的方法
// function htmlUnEscape(str) {
//     return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
//         switch(match) {
//             case '&lt;':
//                 return '<'
//             case '&gt;':
//                 return '>'
//             case '&quot;' :
//                 return '"'
//             case '&amp': 
//                 return '&'        
//         }
//     })
// }

// 7.将不同的功能进行模块化拆分
// 1）将格式化时间的功能， 拆分到src -> dateFormat.js中
// 2）将处理HTML字符串的功能，拆分到src -> htmlEscape.js
// 3) 在index.js中，导入两个模块，得到需要向外共享的方法
// 4） 在index.js中，使用module.exports把对应的方法共享出去


// 8.编写包的说明文档
// 包根目录中的README.md文件，是包的使用说明文档。通过他们，我们可以事先把包的使用说明，
// 以markdown的格式写出来，方便用户参考。

// README文件中具体写什么内容，没有强制性的要求。只要能够清晰的把包的作用、写法、注意事项等描述清楚即可
// 我们所创建的这个包的README.md文档中，会尝试包含以下6项内容：
// 安装方式、导入方式、格式化时间、转义HTML中的特殊字符、还原HTML中的特殊字符、开源协议


