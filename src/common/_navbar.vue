<template>
  <div class="nav-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#8AC78F"
      router="true">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">视频教程</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">前端日记</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>前端日记</el-menu-item>
      <el-menu-item index="4"><a href="#" target="_blank">生活趣事</a></el-menu-item>
      <el-menu-item index="5"><a href="#" target="_blank">自我介绍</a></el-menu-item>
      <el-menu-item index="6"><a href="#" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
        // name: "_header",
        data() {
          return {
            activeIndex: '1',
          };
        },
        methods: {
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style lang="less">
  .nav-bar {
    width:80%;
    padding: 0 10vw;
  }
</style>
