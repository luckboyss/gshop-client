/* 
包含n个接口请求函数的模块
*/
import ajax from './ajax'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax('/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = ({ longitude, latitude }) => ajax('/shops', { longitude, latitude })

// 4、根据经纬度和关键字搜索商铺列表search_shops
export const reqSearchShops = ({ geohash, keyword }) => ajax('/search_shop', { geohash, keyword })

// 5、用户名密码登陆
export const reqPwdLogin = ({ name, pwd, captcha }) => ajax('/login_pwd', { name, pwd, captcha }, 'POST')

// 6、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode', { phone })

// 7、手机号验证码登陆
export const reqSmsLogin = ({ phone, code }) => ajax('/login_sms', { phone, code }, 'POST')

// 8、根据会话获取用户信息
export const reqUserinfo = () => ajax('/userinfo')

// 9、用户登出
export const reqLogOut = () => ajax('/logout')
