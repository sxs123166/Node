
// 1.安装mysql模块
// mysql模块是托管于 npm 上的第三方模块。它提供了在Node.js项目中连接和操作MySQL数据库的能力。
// 想要在项目中使用它，需要先运行如下命令，将mysql安装为项目的依赖包
// (初始化项目需要使用npm init -y)
// npm install mysql

// 2.配置mysql模块
// 在使用mysql模块操作mysql数据库之前，必须先对mysql模块进行必要的配置，主要的配置步骤如下：

// 1）. 导入mysql模块
// const mysql = require('mysql')
// // 2). 建立与mysql数据库的连接
// const db = mysql.createPool({
//     host: '127.0.0.1',   //1. 数据库的IP地址
//     // user: 'root',        //2. 登陆数据库的账号
//     password: 'admin123',   //3.登陆数据库的密码
//     database: 'my_db_01'    //4.指定要操作哪个数据库
// })

// 3. 测试 mysql 模块能否正常工作
// 调用 db.query() 函数，指定要执行的SQL语句，通过回调函数拿到执行的结果：

// 检测 mysql 模块能否正常工作
// db.query('SELECT', (err, results) => {
//     if(err) return console.log(err.message);
//     // 只要能打印出 [ RowDataPacket{ '1': 1} ] 的结果，就证明数据库连接正常
//     console.log(results);
// })



