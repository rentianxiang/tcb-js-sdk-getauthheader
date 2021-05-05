# tcb-js-sdk-getauthheader
Get Tencent Cloud Base SCF credentials in Node

腾讯云云开发中，当配置了云函数的HTTP访问与开启鉴权后，访问时需要通过@cloudbase/js-sdk在前端获取"x-cloudbase-credentials"

这里提供了一个可从Node环境获取的方式，通过腾讯云的自定义登陆先获取ticket，之后输入云环境就可获取访问云函数的鉴权信息。

ticket获取文档: https://docs.cloudbase.net/api-reference/server/node-sdk/auth.html#createticket
