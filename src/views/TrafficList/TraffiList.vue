<template>
  <div class="traffilist">
    <!-- table -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="name" label="流量主名称"></el-table-column>
      <el-table-column prop="parenid" label="父ID"></el-table-column>
      <el-table-column prop="time" label="注册时间"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="businessid" label="商务人员ID"></el-table-column>
      <el-table-column prop="balance" label="余额"></el-table-column>
      <el-table-column prop="logintime" label="末次登陆时间"></el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>

    <!-- table end -->
    <!-- <el-button @click="clickfn">click</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "600714",
          name: "王小虎",
          parenid: "600714",
          time: "2016-05-02",
          state: "正常",
          businessid: "0001",
          balance: "1000",
          logintime: "2020-07-29 08:47:23"
        },
        {
          id: "600714",
          name: "王小虎1",
          parenid: "600714",
          time: "2016-05-02",
          state: "正常",
          businessid: "0001",
          balance: "1000",
          logintime: "2020-07-29 08:47:23"
        },
        {
          id: "600714",
          name: "王小虎2",
          parenid: "600714",
          time: "2016-05-02",
          state: "正常",
          businessid: "0001",
          balance: "1000",
          logintime: "2020-07-29 08:47:23"
        },
        {
          id: "600714",
          name: "王小虎3",
          parenid: "600714",
          time: "2016-05-02",
          state: "正常",
          businessid: "0001",
          balance: "1000",
          logintime: "2020-07-29 08:47:23"
        }
      ]
    };
  },

  mounted() {
    console.log(process.env.NODE_ENV, process.env.VUE_APP_API_URL);
  },
  methods: {
    clickfn() {
      this.$axios({
        method: "GET",
        url: process.env.VUE_APP_API_URL + "order/listing",
        params: {
          page: 1,
          page_size: 20
        }
      }).then(
        ok => {
          console.log(ok);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="less" scoper></style>
