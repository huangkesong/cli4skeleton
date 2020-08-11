<template>
  <div class="storelist">
    <el-table :data="tableData" border style="width: 100%" class="tableBox">
      <el-table-column prop="name" label="商城名称"></el-table-column>
      <el-table-column prop="link" label="商城地址"></el-table-column>
      <el-table-column prop="created_at" label="商城生成时间"></el-table-column>
      <el-table-column prop="adv_uid" label="广告主ID"></el-table-column>
      <el-table-column prop="status" label="商城状态"></el-table-column>
      <el-table-column prop="review_status" class-name="activeState" label="审核状态">
        <template slot-scope="scope">
          <el-button
            @click="handleClickState(scope.row)"
            type="text"
            size="small"
          >{{scope.row.review_status}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="market_status" label="投放状态"></el-table-column>
      <el-table-column fixed="right" class-name="activeState" label="操作" width="60">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- dialog 提示层 -->
    <el-dialog
      title="修改商城审核状态"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div class="btn">
        <!-- <el-button type="primary">审核通过</el-button>
        <el-button>拒绝</el-button>-->
        <div class="radiobox">
          <el-radio v-model="radio" label="1" border size="medium">审核通过</el-radio>
          <el-radio v-model="radio" label="2" border size="medium">拒绝</el-radio>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleFn">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="total"></el-pagination>
  </div>
</template>

<script>
import { reqPongoShopList, reqPongoShopStatus } from "../../api/index";
export default {
  data() {
    return {
      dialogVisible: false,
      radio: "1",
      total: 0,
      page: 1,
      page_size: 20,
      tableData: [],
      changeStatus: ""
    };
  },
  mounted() {
    this.apiGetShopList();
  },
  methods: {
    // 获取商城列表数据
    async apiGetShopList() {
      const { page, page_size } = this;
      const _res = await reqPongoShopList({ page, page_size });
      if (_res.code === 0) {
        console.log(_res.data.items);
        for (let i = 0; i < _res.data.items.length; i++) {
          // 商城状态
          _res.data.items[i].status === true
            ? (_res.data.items[i].status = "启用")
            : (_res.data.items[i].status = "废弃");
          // 审核状态
          _res.data.items[i].review_status === 0
            ? (_res.data.items[i].review_status = "未激活")
            : _res.data.items[i].review_status == 1
            ? (_res.data.items[i].review_status = "已激活待审核")
            : _res.data.items[i].review_status == 2
            ? (_res.data.items[i].review_status = "通过")
            : _res.data.items[i].review_status == 3
            ? (_res.data.items[i].review_status = "拒绝")
            : (_res.data.items[i].review_status = "--");
          // 投放状态
          _res.data.items[i].market_status === 0
            ? (_res.data.items[i].market_status = "待投放")
            : _res.data.items[i].market_status === 1
            ? (_res.data.items[i].market_status = "投放中")
            : _res.data.items[i].market_status === 2
            ? (_res.data.items[i].market_status = "停止")
            : _res.data.items[i].market_status === 3
            ? (_res.data.items[i].market_status = "冻结")
            : (_res.data.items[i].market_status = "--");
        }
        this.total = _res.data.total_count;
        this.tableData = _res.data.items;
      }
    },
    // update status
    async changeStatusFn(obj) {
      // const { mall_id: 1, status: 1 } = this;
      const _res = await reqPongoShopStatus({
        mall_id: obj.mall_id,
        status: obj.status
      });
      console.log(_res);
    },
    // table -> 已激活待审核
    handleClickState(row) {
      // let status = "";
      // if (row.review_status === "已激活待审核") {
      //   status = 1;
      // } else if (row.review_status === "拒绝") {
      //   status = 4;
      // }
      // const { id } = row;
      if (
        row.review_status === "已激活待审核" ||
        row.review_status === "拒绝"
      ) {
        this.dialogVisible = true;
        // 执行更改状态
        // this.changeStatusFn({ mall_id: id, status: status });
      }
    },
    dialogVisibleFn() {
      console.log(123);
    },
    // table -> 操作
    handleClick(row) {
      console.log(row);
      const { id } = row;
      this.$router.push({ path: "operation", query: { id: id } });
    },
    // 弹层关闭事件
    handleClose(done) {
      console.log(done);
    }
  }
};
</script>

<style lang="less" scoper>
.btn {
  text-align: center;
  .el-button:first-child {
    margin-right: 40px;
  }
  .radiobox {
    text-align: center;
    .el-radio__input {
      display: none;
    }
  }
}
</style>
