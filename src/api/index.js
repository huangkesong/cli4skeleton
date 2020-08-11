/*
  包含n个接口请求函数的模块
  函数的返回值: promise对象
 */
import ajax from "./ajax";
// 地址及得加 htpp:// || https:// !!!
// const DEV_BASE_URL = 'http://192.168.69.150:8080' // 开发环境走的地址
// const DEV_BASE_URL = "http://testcloud.tianchengshop.cn"; // 开发环境走的地址
// const TEST_BASE_URL = "http://testcloud.tianchengshop.cn"; // 测试环境
// const PRO_BASE_URL = "http://testcloud.tianchengshop.cn"; // 生产环境
// 根据url选择接口
// eslint-disable-next-line semi

let BASE_URL;
if (process.env.NODE_ENV === "development") {
  BASE_URL = process.env.VUE_APP_API_URL;
} else if (process.env.NODE_ENV === "stage") {
  BASE_URL = process.env.VUE_APP_API_URL;
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.VUE_APP_API_URL;
}
console.log(`当前代理地址：%c ${process.env.NODE_ENV}`, "color:red", BASE_URL);

// Demo 案例
export const reqResponse = () =>
  ajax(BASE_URL + "接口url", {}, "请求方式：POST");
/* **************************【★★★★★★ 微信授权、支付 ★★★★★★】********************* */

/* **************************【★★★★★★ 后台管理系统api - 流量主列表 ★★★★★★】********************* */
export const reqPongoTrafficManage = params => ajax(BASE_URL + "ssp_user/listing", params);

/* **************************【★★★★★★ 后台管理系统api - 订单列表、订单详情 ★★★★★★】********************* */
export const reqPongoOrderList = params => ajax(BASE_URL + "order/listing", params);
export const reqPongoOrderShow = params => ajax(BASE_URL + "order/show", params);

/* **************************【★★★★★★ 后台管理系统api - 商城列表、商城详情、审核状态 ★★★★★★】********************* */
export const reqPongoShopList = params => ajax(BASE_URL + "mall/listing", params);
export const reqPongoShopDetail = params => ajax(BASE_URL + "mall/show", params);
export const reqPongoShopStatus = params => ajax(BASE_URL + "mall/edit_status", params, "POST");

// 微信登录授权
export const reqwxAuth = params =>
  ajax(BASE_URL + "/api-portal/subscription/loginByWeixin", params);
// 根据登录授权userId获取 用户信息
export const reqwxUserInfo = params =>
  ajax(BASE_URL + "/api-portal/umsMember/getMemberById", params);
// 微信支付接口
export const reqPay = params =>
  ajax(BASE_URL + "/api-portal/subscription/payOrder", params, "POST");

/* *****************************【★★★★★★ 首页 ★★★★★★】*************************** */
// 首页Banner图片
export const reqBanner = () =>
  ajax(BASE_URL + "/api-portal/smsHomeAdvertise/list");
// 新品推荐
export const reqNewArrivals = () =>
  ajax(BASE_URL + "/api-portal/pmsProduct/reCommendList");

/* *****************************【★★★★★★ 商品列表 ★★★★★★】*************************** */
// 商品列表
export const reqShopList = params =>
  ajax(BASE_URL + "/api-portal/pmsProduct/list", params);
// 商品详情
export const reqShopDetail = ({ id }) =>
  ajax(BASE_URL + `/api-portal/pmsProduct/${id}`);
// 获取商品规格属性
export const reqShopAttr = ({ productAttributeCategoryId, type, productId }) =>
  ajax(
    BASE_URL +
      `/api-portal/pmsProduct/attributeList/${productAttributeCategoryId}?type=${type}&productId=${productId}`
  );
// 获取商品sku的库存信息
export const reqSku = params =>
  ajax(BASE_URL + "/api-portal/pmsSkuStock/getPmsSkuBySps", params, "POST");
/* *****************************【★★★★★★ 收货地址 ★★★★★★】*************************** */
// 收货地址列表
export const reqAddressList = ({ memberId }) =>
  ajax(
    BASE_URL +
      `/api-portal/ums/UmsMemberReceiveAddress/list?memberId=${memberId}`
  );
// 添加收货地址
export const reqAddaddress = params =>
  ajax(
    BASE_URL + "/api-portal/ums/UmsMemberReceiveAddress/create",
    params,
    "POST"
  );
// 查询会员收货地址表明细接口
export const reqSearch = ({ id }) =>
  ajax(BASE_URL + `/api-portal/ums/UmsMemberReceiveAddress/${id}`);
// 更新收货地址
export const reqUpdata = params =>
  ajax(
    BASE_URL + "/api-portal/ums/UmsMemberReceiveAddress/update",
    params,
    "POST"
  );
// 删除收货地址
export const reqDelAddress = ({ id }) =>
  ajax(
    BASE_URL + `/api-portal/ums/UmsMemberReceiveAddress/delete/${id}`,
    "",
    "DELETE"
  );
// 查询会员默认收货地址表明细
export const reqSearchDefaultAddress = ({ id }) =>
  ajax(
    BASE_URL +
      `/api-portal/ums/UmsMemberReceiveAddress/get/defaultAddress/${id}`,
    "",
    "POST"
  );
// 设置默认地址接口
export const reqSetDefaultAddress = ({ id }) =>
  ajax(
    BASE_URL +
      `/api-portal/ums/UmsMemberReceiveAddress/update/defaultAddress/${id}`
  );
/* *****************************【★★★★★★ 购物车 ★★★★★★】*************************** */
// 购物车列表
export const reqCart = params =>
  ajax(BASE_URL + "/api-portal/shopCart/list", params, "POST", false);
// 新增购物车
export const reqAddCart = params =>
  ajax(BASE_URL + "/api-portal/shopCart/add", params, "POST");
// 删除购物车商品
export const reqDelOneGoods = params =>
  ajax(BASE_URL + "/api-portal/shopCart/delete", params, "POST");
// 更新购物车信息
export const reqUpdataCart = params =>
  ajax(BASE_URL + "/api-portal/shopCart/update/quantity", params, "POST");
/* *****************************【★★★★★★ 订单模块 ★★★★★★】*************************** */
// 分状态查询我的订单
export const reqOrderList = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/getMyOrder", params, "POST", false);
// 根据购物车信息生成订单
export const reqSorcerCartOrder = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/generateOrder", params, "POST");
// 直接购买生成订单
export const reqBuyOrder = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/submitOrder", params, "POST");
// 查询我的订单详情
export const reqQueryOrderDetails = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/getMyOrderDetail", params, "POST");
// 取消订单
export const reqCancelOrder = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/cancelMyOrder", params, "POST");
// 订单确认收货
export const reqConfirmOrder = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/confirmMyOrder", params, "POST");
// 删除订单
export const reqDelOrder = params =>
  ajax(BASE_URL + "/api-portal/buyOrder/deleteMyOrder", params, "POST");
/* *****************************【★★★★★★ 评价 ★★★★★★】*************************** */
// 订单评价
export const reqOrderEvaluate = params =>
  ajax(BASE_URL + "/api-portal/orderEvaluate/add", params, "POST");
