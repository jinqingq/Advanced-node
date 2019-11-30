const whiteList=[
    '/login','registry'
]
const jwt = require('jsonwebtoken')

module.exports = ()=>{
    return async (ctx,next)=>{
        if(whiteList.includes(ctx.path)){
            await next()
        }else{
            const token = ctx.request.headers.authorization

            if(!token){
                ctx.body = {
                    code:2,
                    mes:'您没有权限'
                }
                return
            }

            try{
                const userInfo = jwt.verify(token,ctx.app.config.keys)
                console.log(userInfo)
                await next()
            }catch(e){
                if(e.name == 'TokenExpiredError'){
                    ctx.body = {
                        code:3,
                        mes:'身份过期，请重新登录'
                    }
                }
            }
        }
    }
}