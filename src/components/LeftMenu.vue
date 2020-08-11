<template>
  <div class="sidebar">
    <el-row class="menu_page">
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          mode="vertical"
          :unique-opened="true"
          :collapse="collapse"
          :default-active="$route.path"
          :default-openeds="defaultOpen"
          @open="handleOpen"
          @close="handleClose"
        >
          <div class="wrapper" ref="wrapper">
            <Menu :items="items" />
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  name: "LeftMenu",
  data() {
    return {
      collapse: false,
      defaultOpen: [],
      items: [
        {
          icon: "el-icon-menu",
          name: "流量主管理",
          path: "trafficlist",
          children: [
            {
              path: "/trafficlist",
              name: "流量主列表"
            }
          ]
        },
        {
          icon: "el-icon-s-shop",
          name: "商家管理",
          path: "store",
          children: [
            {
              path: "/storelist",
              name: "商城列表"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          name: "订单管理",
          path: "order",
          children: [
            {
              path: "/orderinfo",
              name: "订单列表"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key) {
      //当前打开的sub-menu的 key 数组
      this.defaultOpen = [key];
    },
    //点击当前一级菜单关闭
    handleClose(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  },
  components: {
    Menu
  }
};
</script>

<style lang="less" scoped>
.sidebar {
  position: relative;
  overflow: hidden;
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
  .menu_page {
    position: fixed;
    top: 71px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    min-height: 500px;
    overflow: hidden;
  }
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.fa-margin {
  margin-right: 5px;
}
.el-menu {
  border: none;
  z-index: 9999;
}
.el-menu-vertical-demo {
  width: 49px;
  &:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }
}
.el-submenu .el-menu-item {
  min-width: 180px;
}
.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
