const Koa = require('koa')
const router = require('./router/index.js')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())
app.use(router.routes(),router.allowedMethods())

app.listen(3000,()=>{
    console.log('服务启动成功')
})