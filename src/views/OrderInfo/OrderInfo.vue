<template>
  <div class="orderinfo">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="order_id" label="订单ID" width="100"></el-table-column>
      <el-table-column prop="mall_id" label="所属商城ID"></el-table-column>
      <el-table-column prop="adv_uid" label="广告主ID"></el-table-column>
      <el-table-column prop="pub_uid" label="流量主ID"></el-table-column>
      <el-table-column prop="created_at" label="订单时间"></el-table-column>
      <el-table-column prop="valid_price" label="订单计佣价格"></el-table-column>
      <el-table-column prop="payment_price" label="实际支付价格"></el-table-column>
      <el-table-column prop="commission" label="佣金"></el-table-column>
      <el-table-column prop="currency" label="货币单位"></el-table-column>
      <el-table-column prop="order_status" label="订单状态"></el-table-column>
      <el-table-column prop="handle" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { reqPongoOrderList } from "../../api/index";
export default {
  data() {
    return {
      total: 0, // total
      page: 1,
      page_size: 20,
      tableData: []
    };
  },
  created() {
    this.apiGetOrderList();
  },
  methods: {
    // 初始化table数据
    async apiGetOrderList() {
      const { page, page_size } = this;
      const _res = await reqPongoOrderList({ page, page_size });
      console.log(_res);
      if (_res.code === 0) {
        console.log(_res.data);
        this.total = _res.data.total_count;
        // 转换状态
        for (let i = 0; i < _res.data.items.length; i++) {
          _res.data.items[i].order_status == 0
            ? (_res.data.items[i].order_status = "未知订单")
            : _res.data.items[i].order_status == 1 ||
              _res.data.items[i].order_status == 2
            ? (_res.data.items[i].order_status = "上游审核中")
            : _res.data.items[i].order_status == 3 ||
              _res.data.items[i].order_status == 4 ||
              _res.data.items[i].order_status == 5
            ? (_res.data.items[i].order_status = "有效订单")
            : (_res.data.items[i].order_status = "无效订单");
        }
        // 检测是否是Array
        if (Array.isArray(_res.data.items)) {
          this.tableData = _res.data.items;
        } else {
          this.tableData.push(_res.data.items);
        }
      }
    },
    // 列表详情操作
    handleClick(row) {
      console.log(row);
      const { order_id } = row;
      this.$router.push({
        path: "/orderdetails",
        query: { order_id: order_id }
      });
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" scoper></style>
