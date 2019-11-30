const Controller = require('egg').Controller

class UserController extends Controller{
    async look(){
        const {ctx} = this

        const {page,limit}=ctx.query
        console.log(page,limit)
        let startIndex = (page-1) * limit
        
        const res = await ctx.service.user.look(startIndex,limit)

        ctx.body = res
    }
    async adduser(){
        const {ctx} = this
        const {names,pwd} = ctx.request.body
        console.log(names,pwd)
        // 通知service
        const res = await ctx.service.user.adduser(names,pwd)

        ctx.body = res
    }
    async del(){
        const {ctx} = this
        const {id} = ctx.request.body
        console.log(id)

        const res = await ctx.service.user.del(id)
        ctx.body = res
    }
    async update(){
        const {ctx} = this
        const {id,names,pwd}=ctx.request.body
        console.log(id,names,pwd)

        const res = await ctx.service.user.update(id,names,pwd)
        ctx.body = res
    }
}
module.exports = UserController