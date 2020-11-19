import request from '@/utils/request.js'
import { formatGetUri } from '@/utils/util.js'

const api = {}
const PORT1 = 'api'
// POST请求方式
api.category = params => request.globalRequest(`article_cat.php`, 'POST', params, 1)//必须大写，为了兼容其他应用
api.login = params => request.globalRequest(`${PORT1}/users/memberRegister`, 'POST', params, 1)
//登录
api.getOpenId = params => request.globalRequest(`${PORT1}/wx/getOpenId`, 'POST', params, 1)
//获取商品列表
api.getCakeList = params => request.globalRequest(`article_cat.php${formatGetUri(params)}`, 'GET', {}, 1)
//查询商品分类数据集合
api.queryAllProductByCate = params => request.globalRequest(`${PORT1}/product/queryAllProductByCate${formatGetUri(params)}`, 'GET', {}, 1)
//获取商品详情
api.getGoodsInfo = params => request.globalRequest(`${PORT1}/product/queryProductById${formatGetUri(params)}`, 'GET', {}, 1)
// 商品模糊查询
api.searchSome = params => request.globalRequest(`${PORT1}/product/searchSome${formatGetUri(params)}`, 'GET', {}, 1)


//添加购物车
api.addCar = params => request.globalRequest(`${PORT1}/car/addCar`, 'POST', params, 1)
//获取购物车商品
api.queryCarByUser = params => request.globalRequest(`${PORT1}/car/queryCarByUser${formatGetUri(params)}`, 'GET', {}, 1)
//修改购物车商品数量
api.editCar = params => request.globalRequest(`${PORT1}/car/editCar`, 'POST', params, 1)
//deleteMoreCar 批量删除购物车
api.deleteMoreCar = params => request.globalRequest(`${PORT1}/car/deleteMoreCar`, 'POST', params, 1)
//添加订单
api.createOrder = params => request.globalRequest(`${PORT1}/order/createOrder`, 'POST', params, 1)
//删除订单
api.deleteOrder = params => request.globalRequest(`${PORT1}/order/deleteOrder`, 'POST', params, 1)
//修改订单
api.editOrder = params => request.globalRequest(`${PORT1}/order/editOrder`, 'POST', params, 1)
//查询订单
api.queryOrdersByUser = params => request.globalRequest(`${PORT1}/order/queryOrdersByUser${formatGetUri(params)}`, 'GET', {}, 1)
//微信支付
api.wxpay = params => request.globalRequest(`${PORT1}/wxapi/wxpay`, 'POST', params, 1)

//发布评论
api.addComment = params => request.globalRequest(`${PORT1}/comment/addComment`, 'POST', params, 1)
//发布评论
api.setCommentGoods = params => request.globalRequest(`${PORT1}/comment/setCommentGoods`, 'POST', params, 1)
//查询评论列表
api.queryComment = params => request.globalRequest(`${PORT1}/comment/queryComment${formatGetUri(params)}`, 'GET', {}, 1)

//收藏商品
api.addCakeSave = params => request.globalRequest(`${PORT1}/cakeSave/addCakeSave`, 'POST', params, 1)
//checkUserSaved 校验当前用户是否收藏过该商品
api.checkUserSaved = params => request.globalRequest(`${PORT1}/cakeSave/checkUserSaved${formatGetUri(params)}`, 'GET', {}, 1)
// 取消收藏 deleteCakeSave
api.deleteCakeSave = params => request.globalRequest(`${PORT1}/cakeSave/deleteCakeSave`, 'POST', params, 1)
// 查询用户收藏列表 queryCakeSave
export default api