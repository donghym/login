
## web 服务 如何处理一个请求
 

app -- Application --> web服务器的实例
url -->网络-->DNS解析-->目标服务器
 1、 如何响应这个请求 --> 路由、规则
    1、请求的方法区分
    get --
    post -- 
 ## 通过uri --> 路径

 www.baidu.com/a/a.html

 ## 定义一个api/路由 满足客户端 无论什么请求按时 （get/post/delete/put） 都可以得到响应
app.all('*',()=>{})
app.use("*",()=>{})
 ## 无论客户端使用任何 的uri,我们的服务都可以响应 ---> 日志


 2、 app.use()  --> 中间件


3、  如何做路由的拆分
 ### member
 ### sku
 ### user

