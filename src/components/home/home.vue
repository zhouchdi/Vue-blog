<template>
  <div class="home_blog">
    <header>
      <Navbar></Navbar>
    </header>
    <!-- 搜索框 -->
    <Navsearch></Navsearch>
    <div class="container">
      <div>

      </div>
      <Sider></Sider> 
    </div>
  </div>
</template>

<script>
  import Navbar from '@/common/navbar/_navbar'
  import Navsearch from '@/common/navbar/navsearch'
  import Sider from '@/components/sider/sider'
    export default {
      name: "home",
      components:{
        Navbar:Navbar,
        Sider:Sider,
        Navsearch:Navsearch
      }
    }
</script>

<style lang="less">
  html{
    background-color:#f6f6f6;
  }
  .home_blog{
    background: #fff;
    header{
      max-width: 1200px;
      margin: 0 auto;
      padding: 1px 0;
      border-bottom: 1px solid #EAEAEA;
    }
    .container{
      max-width: 1200px;
      margin: 0 auto;
      padding: 0;
      position: relative;
      margin-top: 15px;
    }
  }
</style>
