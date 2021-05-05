# tcb-js-sdk-getauthheader
Get Tencent Cloud Base SCF credentials in Node

腾讯云云开发中，当配置了云函数的HTTP访问与开启鉴权后，访问时需要通过@cloudbase/js-sdk在前端获取"x-cloudbase-credentials"

这里提供了一个可从Node环境获取的方式，通过腾讯云的自定义登陆先获取ticket，之后输入云环境就可获取访问云函数的鉴权信息。

通过使用fiddler对@cloudbase/js-sdk获取x-cloudbase-credentials进行截流，发现了其实也就是对服务器发送了两次请求，不想通过前端环境获取的同学们可以用这种方式调用，方便调试。

ticket获取文档: https://docs.cloudbase.net/api-reference/server/node-sdk/auth.html#createticket
