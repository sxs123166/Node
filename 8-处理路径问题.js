const fs = require('fs')
// 在使用fs模块操作文件时，如果提供的路径是以./或者../开头的相对路径时，很容易出现路径动态拼接错误
// 的问题
// 原因：代码在运行的时候，会执行以node命令所处的目录，动态拼接出被操作文件的完整路径
// fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
//     if(err) {
//         return console.log('读取文件失败!' + err.message);
//     }
//     console.log('读取文件成功！' + dataStr);
// })
// 解决方案：在使用fs模块操作文件时，直接提供完整的路径，不要提供./或../开头的相对路径，从而防止路径动态拼接的问题


// 移植性性非常差，不利用维护
// fs.readFile('C://Users//dxm//Desktop//app//dxm', 'utf8', function(err, dataStr) {
//     if(err) {
//         return console.log('读取文件失败!' + err.message);
//     }
//     console.log('读取文件成功！' + dataStr);
// })

// __dirname 表示当前文件所处的目录

fs.readFile('_dirname' + '/files/1.txt', 'utf8', function(err, dataStr) {
    if(err) {
        return console.log('读取文件失败!' + err.message);
    }
    console.log('读取文件成功！' + dataStr);
})