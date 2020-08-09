<template>
  <div class="operation">
    订单详情id： {{this.$route.params}}
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
    <!-- 商品明细 -->
    <div class="promotionTitle">商品明细</div>
    <el-table :data="mallPromotion" border style="width: 100%" class="tableBox">
      <el-table-column prop="id" label="商品ID"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="unitprice" label="单价"></el-table-column>
      <el-table-column prop="commissionprice" label="商品计佣价格"></el-table-column>
      <el-table-column prop="taxation" label="税费"></el-table-column>
      <el-table-column prop="discount" label="折扣分配扣减"></el-table-column>
      <el-table-column prop="goodsnum" label="商品数量"></el-table-column>
      <el-table-column prop="refundquantity" label="商品退款数量"></el-table-column>
      <el-table-column prop="commission" label="佣金"></el-table-column>
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
          id: "0001",
          name: "Undetectable Lace Synthetic",
          unitprice: "9.99",
          commissionprice: "9.99",
          taxation: "0.00",
          discount: "0.00",
          goodsnum: "1",
          refundquantity: "1",
          commission: "0.99"
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
