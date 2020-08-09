<template>
  <div class="operation">
    商家详情id: {{this.$route.params}}
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <span class="name">商城名称</span>
          <span class="content">asdasdasd</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <span class="name">商城地址</span>
          <span class="content">asdasdasd</span>
        </div>
      </el-col>
    </el-row>
    <!-- 商城促销信息 -->
    <div class="promotionTitle">商城促销信息</div>
    <el-table :data="mallPromotion" border style="width: 100%" class="tableBox">
      <el-table-column prop="time" label="创建时间"></el-table-column>
      <el-table-column prop="title" label="优惠券标题"></el-table-column>
      <el-table-column prop="describe" label="优惠券描述"></el-table-column>
      <el-table-column prop="zkid" label="折扣码ID"></el-table-column>
      <el-table-column prop="zkm" label="折扣码"></el-table-column>
      <el-table-column prop="zktype" label="折扣类型"></el-table-column>
      <el-table-column prop="zkvalue" label="折扣值"></el-table-column>
      <el-table-column prop="zkstarttime" label="折扣码开始时间"></el-table-column>
      <el-table-column prop="zkendtime" label="折扣码到期时间"></el-table-column>
      <el-table-column prop="pricemin" label="价格最低要求"></el-table-column>
    </el-table>

    <!-- 返回按钮 -->
    <div class="returnBtn">
      <el-button type="primary" @click="$router.go(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mallPromotion: [
        {
          time: "2020-07-21 20:14:09",
          title: "88大促限时优惠",
          describe: "88大促限时优惠88大促限时优惠",
          zkid: "00001",
          zkm: "SFDN001",
          zktype: "免运费",
          zkvalue: "--",
          zkstarttime: "2020-07-21 20:14:09",
          zkendtime: "2020-07-25 20:14:09",
          pricemin: "无限制"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
  methods: {}
};
</script>

<style lang="less" scoper>
.el-row {
  &:first-child {
    .content {
      border-top: 1px solid #f7f4f4;
    }
  }
}
.el-table {
  th {
    padding: 7px 0;
  }
}
.grid-content {
  display: flex;
  font-size: 14px;
  span {
    display: inline-block;
    &.name {
      width: 150px;
      height: 30px;
      line-height: 30px;
      background: #f5f5f5;
      padding-left: 10px;
    }
    &.content {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 20px;
      border-bottom: 1px solid #f7f4f4;
      border-right: 1px solid #f7f4f4;
    }
  }
}
.operation {
  // 促销信息
  .promotionTitle {
    font-size: 16px;
    padding: 30px 0 20px;
  }
  .returnBtn {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
