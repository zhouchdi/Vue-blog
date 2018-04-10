<template>
  <div class="home_blog">
    <header>
      <Navbar></Navbar>
    </header>
    <div class="container">
      <div>

      </div>
      <Sider></Sider> 
    </div>
  </div>
</template>

<script>
  import Navbar from '../../common/navbar/_navbar'
  import Sider from '../sider/sider'
    export default {
      name: "home",
      components:{
        Navbar:Navbar,
        Sider:Sider
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
