const router = require('koa-router')()
const query = require('../../db/query.js')

router.get('/look',async ctx=>{
    let res =await query('select * from banner')
    ctx.body = res
})

router.post('/add',async ctx=>{
    let {bei,lei,pai,times} = ctx.request.body
    if(!bei||!lei||!pai||!times){
        ctx.body = {code:2,mes:'信息不完整'}
        return
    }

    let data = await query(`select * from banner where pai=${pai}`)
    console.log(data)
    if(data.data.length > 0){
        ctx.body = {code:3,mes:'此用户已存在'}
    }else{
        let res = await query(`insert into banner (bei,lei,pai,times) values ('${bei}','${lei}','${pai}','${times}')`)
        if(res.code == 1){
            ctx.body = {code:1,mes:'添加成功',res:res}
        }else{
            ctx.body = {code:0,mes:'添加失败'}
        }
    }
})

router.get('/del',async ctx=>{
    let {pai} = ctx.query
    
    let data = await query(`select * from banner where pai=${pai}`)
    if(data.data.length > 0){
        let res = await query(`delete from banner where pai=${pai}`)
        if(res.code == 1){
            ctx.body = {code:1,mes:'删除成功'}
        }else{
            ctx.body = {code:0,mes:'删除失败'}
        }
    }else{
        ctx.body = {code:3,mes:'用户已存在'}
    }
})

router.post('/update',async ctx=>{
    let {id,bei,lei,pai,times} = ctx.request.body

    let res = await query(`update banner set bei='${bei}',lei='${lei}',pai='${pai}',times='${times}' where id='${id}'`)
    if(res.code == 1){
        ctx.body = {code:1,mes:'修改成功'}
    }else{
        ctx.body = {code:0,mes:'修改失败'}
    }
})

module.exports = router