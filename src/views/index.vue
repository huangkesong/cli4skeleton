<template>
  <div class="index">
    <!-- header -->
    <Header></Header>
    <!-- left menu -->
    <LeftMenu></LeftMenu>
    <!-- 主体部分 -->
    <div class="rightContainer" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    Header,
    LeftMenu
  }
}
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
.rightContainer.content-collapse {
  left: 48px;
}
.rightContainer {
  position: absolute;
  left: 180px;
  right: 0;
  top: 72px;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 30px;
  transition: left 0.3s ease-in-out;
}
</style>
