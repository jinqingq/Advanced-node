const whiteList = [
    '/login'
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
                    code:0,
                    mes:'没有权限',
                    status:400
                }
                return
            }

            try{
                const userInfo = jwt.verify(token,ctx.app.config.keys)
                console.log(userInfo)
            }catch(e){
                console.log(e)
            }
        }
    }
}