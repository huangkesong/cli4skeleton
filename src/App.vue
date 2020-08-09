<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

// global table th title background
.el-table {
  th.is-leaf {
    background: #f5f5f5 !important;
  }
  td.activeState {
    .cell {
      color: #409EFF;
    }
  }
}
.el-pagination{
  text-align: right;
  margin-top: 20px;
}
</style>
