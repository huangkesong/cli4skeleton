<template>
  <div class="traffilist">
    <!-- table -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="email" label="流量主名称"></el-table-column>
      <el-table-column prop="parent_id" label="父ID"></el-table-column>
      <el-table-column prop="created_at" label="注册时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="salesman_id" label="商务人员ID"></el-table-column>
      <el-table-column prop="balance" label="余额"></el-table-column>
      <el-table-column
        prop="last_logged_at"
        label="末次登陆时间"
      ></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
    <!-- table end -->
  </div>
</template>

<script>
import { reqPongoTrafficManage } from "../../api/index";
export default {
  data() {
    return {
      total: 0, // 总分页
      page: 1,
      page_size: 20,
      tableData: []
    };
  },
  created() {
    this.apiGetssp_user();
  },
  mounted() {},
  methods: {
    async apiGetssp_user() {
      const { page, page_size } = this;
      const _res = await reqPongoTrafficManage({ page: page, page_size: page_size });
      console.log(_res);
      if (_res.code === 0) {
        console.log(_res.data);
        this.total = _res.data.total_count;
        // 检测状态变化
        _res.data.items.status == 1
          ? (_res.data.items.status = "正常")
          : (_res.data.items.status = "冻结");
        this.tableData.push(_res.data.items);
      }
    }
  }
};
</script>

<style lang="less" scoper></style>
