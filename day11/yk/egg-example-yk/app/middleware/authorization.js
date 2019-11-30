const whiltList=[
    '/login'
]
const jwt = require('jsonwebtoken')

module.exports = ()=>{
    return async (ctx,next)=>{
        if(whiltList.includes(ctx.path)){
            await next()
        }else{
            const token = ctx.request.headers.authorization

            if(!token){
                ctx.body={
                    code:2,
                    mes:'没有权限'
                }
                return
            }

            try{
                const userInfo = jwt.verify(token,ctx.app.config.keys)
                await next()
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