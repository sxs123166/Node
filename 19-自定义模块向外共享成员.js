// 在一个自定义模块中，默认情况下，module.exports = {}

const age = 20

// 向module.exports 对象上挂载 username 属性
module.exports.username = 'zs'
// 向module.exports 对象上挂载 sayHello()方法
module.exports.sayHello = function() {
    console.log('Hello');
}
module.exports.age = age


// 共享成员时的注意点：
// 使用require()方法导入模块时，导入的结果，永远module.exports指向的对象为准


