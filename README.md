# nuxt-egg-template
基于nuxt和egg的全栈项目脚手架，可用于快速创建项目。
## 内置功能
* jwt token鉴权
* mongoose操作数据库
* api路由分组
* axios请求响应拦截
* proxy代理
* 404页面
## 快速使用
1、clone项目
```
git clone https://github.com/lensh/nuxt-egg-template.git
```
2、初始化安装第三方依赖包
```
npm run init
```
3、启动项目
```
npm run dev
```
4、运行地址
* 页面： http://localhost:3000
* 接口： http://localhost:7001

## axios请求示例
* client

page组件内用```this.$http```请求数据
```js
async getData() {
    const res = await this.$http.get("/user");
    console.log("请求响应", res);
}
```
* server
```js
// router.js
module.exports = app => {
  const { router, controller } = app;
  const jwt = app.middleware.jwt({ app });
  router.group({ name: 'user', prefix: '/user' }, router => {
    router.get('/', jwt, controller.user.index);
  });
  router.get('/', controller.home.index);
};
```