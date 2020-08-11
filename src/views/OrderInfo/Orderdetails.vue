<template>
  <div class="operation">
    订单详情order_id： {{this.$route.query}}
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单ID</span>
          <span class="content">{{ shopInfo.order_id }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">所属商城ID</span>
          <span class="content">{{ shopInfo.mall_id }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
       <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">广告主ID</span>
          <span class="content">{{ shopInfo.adv_uid }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">流量主ID</span>
          <span class="content">{{ shopInfo.pub_uid }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单时间</span>
          <span class="content">{{ shopInfo.created_at }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单计佣价格</span>
          <span class="content">{{ shopInfo.valid_price }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">实际支付价格</span>
          <span class="content">{{ shopInfo.payment_price }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">佣金</span>
          <span class="content">{{ shopInfo.commission }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">货币单位</span>
          <span class="content">{{ shopInfo.currency }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单状态</span>
          <span class="content">{{ shopInfo.order_status }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">配送费</span>
          <span class="content">{{ shopInfo.shipping_price }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">税费</span>
          <span class="content">{{ shopInfo.tax_price }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单总价</span>
          <span class="content">{{ shopInfo.total_price }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">折扣金额</span>
          <span class="content">{{ shopInfo.discount_price }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">商品数量</span>
          <span class="content">{{ shopInfo.sku_count }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">退款商品数</span>
          <span class="content">{{ shopInfo.refund_sku_count }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">来源设备</span>
          <span class="content">{{ shopInfo.device }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">结算状态</span>
          <span class="content">{{ shopInfo.settle_status }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">纠纷状态</span>
          <span class="content">{{ shopInfo.dispute_status }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">折扣码</span>
          <span class="content">{{ shopInfo.discount_code }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">支付类型</span>
          <span class="content">{{ shopInfo.payment_type }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">订单备注</span>
          <span class="content">少一个备注字段。。。。</span>
        </div>
      </el-col>
    </el-row>
    <!-- {{ shopInfo }} -->

    <!-- 商品明细 -->
    <div class="promotionTitle">商品明细</div>
    <el-table :data="mallPromotion" border style="width: 100%" class="tableBox">
      <el-table-column prop="order_sku_id" label="商品ID"></el-table-column>
      <el-table-column prop="sku_name" label="商品名称"></el-table-column>
      <el-table-column prop="single_price" label="单价"></el-table-column>
      <el-table-column prop="valid_total_price" label="商品计佣价格"></el-table-column>
      <el-table-column prop="tax_price" label="税费"></el-table-column>
      <el-table-column prop="discount_allocations_price" label="折扣分配扣减"></el-table-column>
      <el-table-column prop="sku_count" label="商品数量"></el-table-column>
      <el-table-column prop="refund_sku_count" label="商品退款数量"></el-table-column>
      <el-table-column prop="commission" label="佣金"></el-table-column>
    </el-table>

    <!-- 返回按钮 -->
    <div class="returnBtn">
      <el-button type="primary" @click="$router.go(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
import { reqPongoOrderShow } from "../../api/index";
export default {
  data() {
    return {
      mallPromotion: [],
      shopInfo: [],
      order_id: this.$route.query
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.apiOrdershow();
  },
  methods: {
    // 订单详情show
    async apiOrdershow() {
      const { order_id } = this;
      const _res = await reqPongoOrderShow({ order_id });
      console.log(_res);
      if (_res.code === 0) {
        console.log(_res.data);
        this.shopInfo = _res.data;
        this.mallPromotion = _res.data.sku_list;
      }
    }
  }
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
