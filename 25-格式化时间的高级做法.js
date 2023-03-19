
// 格式化时间的高级做法
// 1）使用npm包管理工具，在项目中安装格式化时间的包moment 
// 2) 使用require() 导入格式化时间的包
// 3）参考moment的官方API文档对时间进行格式化

// 1.导入moment包
const moment = require('moment')

// 2.参考 moment 官方API文档，调用对应的方法，对时间进行格式化
// 2.1 调用moment方法，得到当前的时间
// 2.2 针对当前的时间，调用format()方法，按照指定的格式对时间进行格式化
const dt = moment().format('YYYY-MM-DD HH-mm-ss')

console.log(dt);
