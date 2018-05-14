###### git clone 以后运行如下：
###### 运行环境：node 8.11.1 (低于这个版本可能不兼容，nextjs不兼容nodejs的v6版本)
##### 1. 运行 npm install
##### 2. 运行 npm run dev


---

```
新前端时代的服务端渲染也提了很久了，各种技术演进层出不穷。

带你领略一下基于React和Nodejs架构的服务端渲染技术，让你快速上手，开发Next服务端渲染的项目。

本文参考官方文档，做精简总结，用一些小例子，让你快速理解Next.js项目的开发。
```
Next.js是一个基于React的一个服务端渲染简约框架。它使用React语法，可以很好的实现代码的模块化，有利于代码的开发和维护。

Next.js带来了很多好的特性：

-   默认服务端渲染模式，以文件系统为基础的客户端路由
-   代码自动分隔使页面加载更快
-   （以页面为基础的）简洁的客户端路由
-   以webpack的热替换为基础的开发环境
-   使用React的JSX和ES6的module，模块化和维护更方便
-   可以运行在Express和其他Node.js的HTTP 服务器上
-   可以定制化专属的babel和webpack配置

---
###### 本文章主要记录了，参考着官方文档一步步构建react的next服务端渲染的过程。过程中遇到一些坑，记录下来，方便今后
##### 一、开始构建一个Nextjs项目
```
注意:
// 官网如此提示：
Next.js only supports React 16.
We had to drop React 15 support due to the way React 16 works and how we use it.
```

在项目的根目录下依次运行以下命令
```
// 在本地创建一个项目根目录
$ mkdir react_next

// 切换到项目根目录
$ cd react_next

// 用npm初始化项目
$ npm init -y

// 将react和next安装到本地依赖
$ npm install --save react react-dom next

// 创建文件夹 pages
$ mkdir pages
```
在package.json文件中添加如此配置：
```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```
在package文件夹下新建index.js
```
export default () => <div>Welcome to next.js!</div>
```
运行npm run dev，在浏览器中打开http://localhost:3000可以看到 “Welcome to next.js!”的页面了。
```
照官方文档的做法到这一步我应该看到页面了
然而我的控制台却曝出了一个大大的错误，说语法错误，不支持ansync这种写法
感觉可能是node的版本问题，我的node版本是6.10.2，于是更新了node版本到8重新运行npm run dev
运行成功，看到了welcome to next.js 的页面
```
##### 二、用next构建的项目中，写无状态组件时可以不用引入react（import react）
##### 三、在引入第三方组件时，加载不出来，或者报缺少loader的错如提示。需要安装next官网提到的css、sass、less等相应的包，并且按文档的_document.js配置。
##### 四、pages文件夹必须创建在根目录下
##### 五、css样式中img路径必须以static开头
```
// 例如：
.login-wapper {
  background: url('/static/images/bg-login.jpg') center center no-repeat;
  background-size: cover;
  height: 100%;
  margin-bottom: -60px; }
```
##### 六、jsx中img可以用相对路径，也可以/static开头，不需要用require导入
##### 七、在clone别人的next服务端渲染代码时，安装node-sass时总报错
```
// 看报错log提到了python，以为是没有安装pythone。于是安装了pythone，再次安装仍旧报错
// 网上说有是因为网络的原因，于是运行nrm use taobao ，后再次安装 任然报错.
// 于是想可能不是网络的原因，后来又尝试了别的几种方式都以失败告终
// 最终，抱着试试看的态度，用命令安装了淘宝镜像，再次安装 竟然成功了
// nrm use 和 npm install 安装的淘宝镜像有和不同？？
1. 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
2. 重新安装 node-sass
npm install node-sass

```
```
// 例如
<img src='/static/images/applogo.png' />
```
---
##### 要思考的问题
1. 前端路由跳转时如何使用nextjs中提供的api实现跳转？
2. nextjs项目中pages目录结构就是路由结构。
3. 如何在nextjs中使用redux？
```
1. 安装next-redux-wrapper包，在项目中使用withRedux
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
...
export default withRedux(initStore, null, mapDispatchToProps)(App)

```
4. 引入antd组件是否需要显式引入css文件？
5. 第三方组件字体图标的引入是否会有问题？
6. 开发阶段，login页面初始化时（getInitialProps），验证码请求发送成功，但在浏览器中不显示。需要配置devServer？如果需要，如何配置？

---
##### TODO：
1. 整合redux，商户平台的目录恰好和nextjs规划的目录非常相似。（withRedux）
2. 路由.使用nextjs中提供的api实现页面切换。
