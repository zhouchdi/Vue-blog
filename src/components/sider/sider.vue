<template>
    <div class="sidebar">
      <Notice></Notice>
      <Group></Group>
      <Givemoney></Givemoney>
      <Article></Article>
      <Splist></Splist>
      <Classes></Classes>
    </div>
</template>

<script>
  import Notice from '../../common/siders/notice'
  import Group from '../../common/siders/joingroup'
  import Givemoney from '../../common/siders/givemoney'
  import Article from '../../common/siders/articles'
  import Splist from '../../common/siders/splist'
  import Classes from '../../common/siders/classes'
    export default {
      name: "sider",
      components:{
        Notice:Notice,
        Group:Group,
        Givemoney:Givemoney,
        Article:Article,
        Splist:Splist,
        Classes:Classes
      }
    }
</script>

<style lang="less">
  .sidebar{
    float: left;
    width: 360px;
    position: relative;
    /*margin-left: -360px;*/
    .sidebar_fadiv{
      clear: both;
      position: relative;
      margin-bottom: 15px;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #eaeaea;
      overflow: hidden;
      width: 360px;
      .sidebar_fadiv_ul1_default{
        background-color: #fbfbfb;
        line-height: 36px;
        height: 36px;
        border-bottom: 1px solid #eaeaea;
        li{
          width: 25%;
          color: #666;
        }
      }
      .sidebar_fadiv_ul1_active{
        background-color: #fbfbfb;
        line-height: 36px;
        height: 36px;
        border-bottom: 1px solid #eaeaea;
        li{
          width: 25%;
          background-color: #fff;
          color: #666;
          border-right: 1px solid #eaeaea;
        }
      }
    }
  }

  @media (max-width:1024px){
    .sidebar{
      display: none;
    }
  }
</style>
