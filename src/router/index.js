import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "index"
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
    meta: { title: "首页" },
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home/Home"),
        meta: { title: "首页" }
      },
      {
        path: "/trafficlist",
        name: "trafficlist",
        component: () => import("../views/TrafficList/TraffiList"),
        meta: { title: "流量主列表" }
      },
      {
        path: "/storelist",
        name: "storelist",
        component: () => import("../views/StoreList/StoreList.vue"),
        meta: { title: "商家列表" }
      },
      {
        path: "/operation",
        name: "operation",
        component: () => import("../views/StoreList/Operation.vue"),
        meta: { title: "商家详情" }
      },
      {
        path: "/orderinfo",
        name: "storelist",
        component: () => import("../views/OrderInfo/OrderInfo"),
        meta: { title: "订单管理" }
      },
      {
        path: "/orderdetails",
        name: "orderdetails",
        component: () => import("../views/OrderInfo/Orderdetails"),
        meta: { title: "订单详情" }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: resolve => require(["../views/login.vue"], resolve)
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
