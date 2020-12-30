const express = require('express');
const app = express();

const indexRouter = require('./router/index.router');
const userRouter = require('./router/user.router');
const memberRouter = require('./router/member.router');



function log_middelware (req,res,next){
    console.log('请求来了')
    next()
}

// app.use(express.static('static',{
//     extensions:["html","htm"]
// }))

app.use('/index',indexRouter);
app.all('*',log_middelware,valid_name_middleware)
app.use('/user',userRouter);
app.use('/member',memberRouter);

// 中间件的完整结构
// 1、是一个函数
// 2、err,req,res,next --> function

function demo_middleware(err,req,res,next){
    // 1. 异常
    // 2. 处理下业务功能，然后转交控制权 --next
    // 3. 响应请求 -- 结束影响 --> 当做路由的处理函数
}
function valid_name_middleware(req,res,next){
    let {name} = req.query;
    if(!name || !name.length){
        res.json({
            message:"缺少name 参数"
        })
    }else{
        next()
    }
}

 // get/post/put`/delete
 app.get('/name/:age',(req,res)=>{
     let {age}=req.params;
     res.json({
         name:"dhy",
         age
     })
 })
 

app.all('/demo',[/*中间件*/]······,(req,res)=>{
    res.json({
        message:'demo',
        method:req.method
    })
})

app.use((req,res)=>{
    res.json({
        name:'董海洋'
    })
})

app.listen(3000,()=>{
    console.log('启动成功')
})


// const http = require('http');
// const server = http.createServer((req,res)=>{

// })