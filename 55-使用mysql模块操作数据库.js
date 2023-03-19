
// 1. 操作数据库
// 查询 user 表中所有的数据

//查询users表中所有的数据
// db.query('SELECT * FROM users', (err, results) => {
//     //查询失败
//     if(err) return console.log(err.message);
//     // 查询成功
//     console.log(results);
// })

// 2.插入数据
// 向users 表中新增数据，其中username为Spider man,password为pcc321,示例代码为：
// 1. 要插入到users表中的数据对象
// const user = {username: 'Spider-man',password: 'pcc123'}
// 2. 待执行的SQL语句，其中英文的冒号表示占位符
// const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
// 3.使用数组的形式，依次为 ？ 占位符指定具体的值
// db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 执行语句失败了
//     if(err) return console.log(err.message); //失败
// 成功了
// 注意：如果执行的是 insert into 插入语句， 则results是一个对象
// 可以通过 affectedRows 属性， 来判断是否插入数据成功 
//     if(results.affectedRows === 1) {console.log('插入数据成功');} //成功
// })


// 3.插入数据的便捷方式
// 向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据
// // 1）要插入到 users 表中的数据对象
// const user = {username: 'Spider-man', password: 'pcc4321'}
// // 2) 待执行的SQL语句， 其中英文的 ？ 表示占位符
// const sqlStr = 'INSERT INTO users SET ?'
// // 3) 直接将数据对象当作占位符的值
// db.query(sqlStr, user, (err, results) => {
//     if(err) return console.log(err.message); // 失败
//     if(results.affectedRows === 1) {console.log('插入数据成功')} //成功
// })

// 4）更新数据
// 可以通过如下方式，更新表中的数据
// 1） 要更新的数据对象
// const user = {id:7,username: 'aaa', password: '000'}
// 2).要执行的SQL语句
// const sqlStr = 'UPDATE users SET username=?,password=? WHERE id=?'
// 3) 调用db.query() 执行sql语句的同时，使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user.username,user.password, user.id],(err, results) => {
//     if(err) return console.log(err.message); //失败
// 注意： 执行了 update 语句之后，执行的结果，也是一个对象， 可以通过 affectedRows 判断是否更新成功
//      if(results.affectedRows === 1) {console.log('更新数据成功');} //成功
// })

// 5.更新数据的便捷方式
// 更新表数据时，如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速更新表数据
// 1）要更新的数据对象
// const user = {id:7, username: 'aaa', password: '0000'}
// 2) 要执行的SQL语句
// const sqlStr = 'UPDATE users SET ? where id=?'
// 3) 调用db.query() 执行SQL语句的同时，使用数组依次为占位符指定具体的值
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if(err) return console.log(err.message);//失败
//     if(results.affectedRows === 1) {console.log('数据更新成功');} //成功
// })

// 6.删除数据
// 在删除数据时，推荐根据id这样的唯一标识，来删除对应的数据。示例如下：

// 1.要执行的SQL语句
// const sqlStr = 'DELETE FROM users WHERE id=?'
// // 2. 调用 db.query() 执行SQL语句的同时，为占位符指定具体的值
// // 注意：如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//         // 如果SQL语句中只有一个占位符，则可以省略数组
// db.query(sqlStr, 7, (err, results) => {
//     if(err) return console.log(err.message);//失败
//     if(results.affectedRows === 1) {console.log('数据更新成功');} //成功
// })        

// 7. 标记删除
// 使用DELETE语句，会真正的把数据从表中删除。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。
// 所谓的标记删除，就是在表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除
// 当用户执行了删除动作的同时，我们并没有执行DELETE语句把数据删除掉，而是执行了UPDATE语句，将这条数据对应的status字段
// 标记为删除即可

// 标记删除：使用update语句替代delete语句；只更新数据的状态，并没有真正的删除
// db.query('UPDATE USERS SET status=1 WHERE id=?', 6, (err, results) => {
//     if(err) return console.log(err.message); 
//     if(results.affectedRows === 1) {console.log('删除数据成功');}
// })

const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 6], (err, results) => {
    if(err) return console.log(err.message);
    if(results.affectedRows === 1) {console.log('删除数据成功');}
})

