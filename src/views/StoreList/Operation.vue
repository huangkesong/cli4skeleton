<template>
  <div class="operation">
    商家详情id: {{ this.$route.query }}
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">商城名称</span>
          <span class="content">{{ shopDetail.name }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <span class="name">商城地址</span>
          <span class="content">{{ shopDetail.link }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">商城生成时间</span>
          <span class="content">{{ shopDetail.created_at }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">广告主ID</span>
          <span class="content">{{ shopDetail.adv_uid }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">商城状态</span>
          <span class="content">{{ shopDetail.status }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">审核状态</span>
          <span class="content">{{ shopDetail.review_status }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">投放状态</span>
          <span class="content">{{ shopDetail.market_status }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">cookie有效期（天）</span>
          <span class="content">{{ shopDetail.cookie_duration }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">基础佣金</span>
          <span class="content">{{ shopDetail.base_commission_rate }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">订单审核期（天）</span>
          <span class="content">{{ shopDetail.review_period }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">激励措施类型</span>
          <span class="content">{{ shopDetail.incentive_type }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">绑定状态</span>
          <span class="content">{{ shopDetail.bind_status }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">同步状态</span>
          <span class="content">{{ shopDetail.last_sync_status }}</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <span class="name">末次同步时间</span>
          <span class="content">{{ shopDetail.last_sync_date }}</span>
        </div>
      </el-col>
    </el-row>

    <!-- 商城促销信息 -->
    <div class="promotionTitle">商城促销信息</div>
    <el-table :data="mallPromotion" border style="width: 100%" class="tableBox">
      <el-table-column prop="created_at" label="创建时间"></el-table-column>
      <el-table-column prop="title" label="优惠券标题"></el-table-column>
      <el-table-column prop="desc" label="优惠券描述"></el-table-column>
      <el-table-column prop="discount_code_id" label="折扣码ID"></el-table-column>
      <el-table-column prop="discount_code" label="折扣码"></el-table-column>
      <el-table-column prop="discount_type" label="折扣类型"></el-table-column>
      <el-table-column prop="discount_value" label="折扣值"></el-table-column>
      <el-table-column prop="code_start_date" label="折扣码开始时间"></el-table-column>
      <el-table-column prop="code_deadline" label="折扣码到期时间"></el-table-column>
      <el-table-column prop="price_min_require" label="价格最低要求"></el-table-column>
    </el-table>

    <!-- 返回按钮 -->
    <div class="returnBtn">
      <el-button type="primary" @click="$router.go(-1)">返回</el-button>
    </div>
  </div>
</template>

<script>
import { reqPongoShopDetail } from "../../api/index";
export default {
  data() {
    return {
      total: 0,
      page: 1,
      page_size: 20,
      shopDetail: [],
      mallPromotion: []
    };
  },
  created() {
    this.apiGetShopDetail();
  },
  methods: {
    // 获取商品详情信息
    async apiGetShopDetail() {
      const { page, page_size } = this;
      const _res = await reqPongoShopDetail({ page, page_size });
      if (_res.code === 0) {
        console.log(_res.data);
        // 根据不同类型 进行判断
        // 激励措施类型
        _res.data.incentive_type === true
          ? (_res.data.incentive_type = "没有折扣")
          : (_res.data.incentive_type = "有折扣");
        // 绑定状态
        _res.data.bind_status === 1
          ? (_res.data.bind_status = "绑定中")
          : (_res.data.bind_status = "解除绑定");
        // 同步状态
        _res.data.last_sync_status === 1
          ? (_res.data.last_sync_status = "未同步")
          : _res.data.last_sync_status === 2
          ? (_res.data.last_sync_status = "同步中")
          : _res.data.last_sync_status === 3
          ? (_res.data.last_sync_status = "同步成功")
          : _res.data.last_sync_status === 4
          ? (_res.data.last_sync_status = "同步失败")
          : (_res.data.last_sync_status = "--");
        // 折扣类型
        _res.data.promotion.discount_type === 1
          ? (_res.data.promotion.discount_type = "百分比")
          : _res.data.promotion.discount_type === 2
          ? (_res.data.promotion.discount_type = "固定值")
          : _res.data.promotion.discount_type === 3
          ? ((_res.data.promotion.discount_type = "免运费"),
            (_res.data.promotion.discount_value = "-"))
          : (_res.data.promotion.discount_type = "--");
        // 折扣码到期时间：有日期则展示具体时间，没有到期时间则展示 ‘无限制’
        _res.data.promotion.code_deadline === "" ||
        _res.data.promotion.code_deadline === null
          ? (_res.data.promotion.code_deadline = "无限制")
          : _res.data.promotion.code_deadline;
        // 价格最低要求：如果有要求则展示具体价格，没有最低要求则展示 ‘无限制’
        _res.data.promotion.price_min_require === 0
          ? (_res.data.promotion.price_min_require = "无限制")
          : _res.data.promotion.price_min_require;
        // 给element-table数据填充
        this.shopDetail = _res.data;
        this.mallPromotion.push(_res.data.promotion);
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
