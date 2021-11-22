let Koa = require('koa')
let KoaRouter = require('koa-router')

let Fly=require('flyio/src/node')
let fly = new Fly;

var jwt = require('jsonwebtoken')

// 生成应用及路由器实例
const app = new Koa()
const router = new KoaRouter()

// 核心代码
router.get('/', (ctx, next) => {
  // 获取请求参数
  // 根据请求的地址和参数处理数据
  // 响应数据
  ctx.body = '服务器返回的数据'
})

// 搜索图书的接口
let datas = require('./datas/data.json')
router.get('/searchBooks', (ctx, next) => {
  let req = ctx.query.req
  let booksArr = datas
  ctx.body = booksArr
})

// 获取用户openId的接口
router.get('/getOpenId', async (ctx, next) => {
  let code = ctx.query.code;
  let appId = 'wxabb93d365d4475a4';
  let appSecret = '8fa4c600fcd86cb0778ac8955171fad2';

  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`

  let result = await fly.get(url)
  userInfo = JSON.parse(result.data)

  let token = jwt.sign(userInfo, 'atguigu')

  ctx.body = token
})

router.get('/test', (ctx,next) => {
  console.log(ctx.request.header.authorization)
  let token = ctx.request.header.authorization
  try{
    let result = jwt.verify(token, 'atguigu')
    console.log('验证结果：' + result)
    ctx.body = '验证成功'
  }catch(e){
    ctx.body = '验证失败'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3000', () => {
  console.log('服务器启动成功')
  console.log('服务器地址：http://localhost:3000')
})
