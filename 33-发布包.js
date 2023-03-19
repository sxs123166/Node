
// 1.注册npm账号
// 1）访问https://www.npmjs.com/网站，点击signup按钮，进入注册用户界面
// 2）填写注册账号相关信息，FUll Name,Public Email、Username、Password
// 3) 点击Create an Account 按钮，注册账号
// 4） 登陆邮箱，点击验证链接、进行账号的验证

// 2.登陆npm账号
// npm账号注册完成后，可以在终端中执行npm login命令，依次输入用户名、密码、邮箱后，即可登录成功
// 注意：在运行 npm login命令之前，必须先把下包的服务器地址切换为npm的官方服务器，否则会导致下包失败

// 3.把包发布到npm上
// 将终端切换到包的根目录之后，运行npm publish命令，即可将包发布到npm上（注意包名不能雷同）

// 4.删除已发布的包
// 运行npm unpublish包名 --force 命令，即可从npm删除已发布的包

// 注意：
// 1）npm unpublish命令只能删除72小时以内发布的包
// 2）npm unpublish发布的包，在72小时以内不允许重复发布
// 3）发布包的时候要慎重，尽量不要往npm上发布没有意义的包


