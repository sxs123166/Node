// 1. module对象
// 在每个.js自定义模块中都有一个moudle对象，它里面存储了和当前模块有用的信息

// 2.module.exports对象
// 在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用
// 外界用require()方法凹入自定义模块时，得到的就是module.exports所指向的对象
