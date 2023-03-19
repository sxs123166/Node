// exports对象
// 由于module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，
// xports和module.exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准


exports.age = 20
exports.sayHello = function () {
    console.log('Hello');
}

// exports和module.exports的使用误区
// 时刻谨记，require模块时，得到的永远是module.exports指向的对象
exports.username = 'zs'
module.exports = {
    gender: '男',
    age: 22
}

// {gender: '男', age:22}

module.exports.username = 'zs'
exports = {
    gender: '男',
    age: 22
}
// {username:'zs'}
exports.username = 'zs'
module.exports.gender = '男'
// {username:'zs', gender:'男'}
// 前两个指向的内存有所变化，因此会不一样。
// 最后一个指向的内存没变化，因此两个都有

exports = {
    username: 'zs',
    gender: '男'
}
module.exports = exports
module.exports.age = 22

// {username: 'zs', gender: '男', age: 22}