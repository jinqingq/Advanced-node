// 数组里面有的  就是不需要做权限校验的 
// 数组里没有啊   是需要做权限校验的
// 所谓的白名单
const whiteList = [
    '/list',
    '/login',
    '/registry'
]

const jwt = require('jsonwebtoken')

module.exports = ()=>{
    return async (ctx,next)=>{
        //判断当前访问的接口是否需要登录
        //   /list   /delete
        console.log(ctx.url,ctx.path)


        // 不需要验证
        if(whiteList.includes(ctx.path)){
            await next();
        }else{  //需要验证
            // 获取前端传过来的token   在请求头里面
            const token = ctx.request.headers.authorization

            // 判断token   没有token就没有权限
            if(!token){g
                ctx.body = {
                    code:2,
                    mes:'没有权限',
                    start:400
                }
                return;
            }

            // 捕获异常
            try{
                const userInfo = jwt.verify(token,ctx.app.config.keys)

                console.log(userInfo,'userInfo')

                await next();
            }
            catch(e){
                console.log(e)

                if(e.name == 'TokenExpiredError'){
                    ctx.body = {
                        code:0,
                        mes:'登录过期，请重新登录'
                    }
                }
            }

        }
    }
}