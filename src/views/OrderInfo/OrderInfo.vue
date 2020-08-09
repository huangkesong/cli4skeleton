<template>
  <div class="orderinfo">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="订单ID" width="100"></el-table-column>
      <el-table-column prop="shopid" label="所属商城ID"></el-table-column>
      <el-table-column prop="adid" label="广告主ID"></el-table-column>
      <el-table-column prop="flowid" label="流量主ID"></el-table-column>
      <el-table-column prop="ordertime" label="订单时间"></el-table-column>
      <el-table-column prop="orderprice" label="订单计佣价格"></el-table-column>
      <el-table-column prop="payprice" label="实际支付价格"></el-table-column>
      <el-table-column prop="commission" label="佣金"></el-table-column>
      <el-table-column prop="monetaryunit" label="货币单位"></el-table-column>
      <el-table-column prop="orderstate" label="订单状态"></el-table-column>
      <el-table-column prop="handle" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          shopid: "123",
          adid: "2222222",
          flowid: "600714",
          ordertime: "2020-07-29 08:47:23",
          orderprice: "29.99",
          payprice: "29.99",
          commission: "9.9",
          monetaryunit: "$",
          orderstate: "有效订单"
        },
         {
          id: "2",
          shopid: "123",
          adid: "2222222",
          flowid: "600714",
          ordertime: "2020-07-29 08:47:23",
          orderprice: "29.99",
          payprice: "29.99",
          commission: "9.9",
          monetaryunit: "$",
          orderstate: "有效订单"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      const { id } = row;
      this.$router.push({ name: "orderdetails", params: { id: id } });
    }
  }
};
</script>

<style lang="less" scoper></style>
