<template>
  <div class="storelist">
    <el-table :data="tableData" border style="width: 100%" class="tableBox">
      {{tableData}}
      <el-table-column prop="name" label="商城名称"></el-table-column>
      <el-table-column prop="url" label="商城地址"></el-table-column>
      <el-table-column prop="time" label="商城生成时间"></el-table-column>
      <el-table-column prop="adid" label="广告主ID"></el-table-column>
      <el-table-column prop="state" label="商城状态"></el-table-column>
      <el-table-column prop="examinestate" class-name="activeState" label="审核状态">
        <template slot-scope="scope">
          <el-button
            @click="handleClickState(scope.row)"
            type="text"
            size="small"
          >{{scope.row.examinestate}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="launchstatus" label="投放状态"></el-table-column>
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
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          name: "red",
          url: "bahee3.myshopify.com",
          time: "2020-07-21 20:14:09",
          adid: "1",
          state: "启用",
          examinestate: "未激活",
          launchstatus: "待投放"
        },
        {
          name: "yellow",
          url: "bahee3.myshopify.com",
          time: "2020-07-21 20:14:09",
          adid: "2",
          state: "启用",
          examinestate: "已激活待审核",
          launchstatus: "待投放"
        },
        {
          name: "blue",
          url: "bahee3.myshopify.com",
          time: "2020-07-21 20:14:09",
          adid: "33",
          state: "启用",
          examinestate: "审核通过",
          launchstatus: "待投放"
        },
        {
          name: "origin",
          url: "bahee3.myshopify.com",
          time: "2020-07-21 20:14:09",
          adid: "44",
          state: "启用",
          examinestate: "拒绝",
          launchstatus: "待投放"
        }
      ]
    };
  },
  methods: {
    // table -> 已激活待审核
    handleClickState(row) {
      const { examinestate } = row;
      if (examinestate === "已激活待审核") {
        this.dialogVisible = true;
      }
    },
    // table -> 操作
    handleClick(row) {
      console.log(row);
      const { adid } = row;
      this.$router.push({ name: "operation", params: { id: adid } });
    },
    // 弹层关闭事件
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="less" scoper></style>
