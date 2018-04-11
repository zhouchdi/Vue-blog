<template>
  <div class="home_blog">
    <header>
      <Navbar></Navbar>
    </header>
    <!-- 搜索框 -->
    <Navsearch></Navsearch>
    <div class="container">
      <div class="content-wrap">
        <div class="content">
          <div class="content-title">
            <h3>最新博文</h3>
            <div class="more"><a href="#">前端游戏视频教程</a></div>
          </div>
          <Essay></Essay>
          <EssayNoImg></EssayNoImg>
          <Essay></Essay>
          <Essay></Essay>
          <Essay></Essay>
          <Essay></Essay>
          <Essay></Essay>
          <EssayNoImg></EssayNoImg>
          <Essay></Essay>
          <Essay></Essay>
          <Essay></Essay>
          <Essay></Essay>
        </div>
        <Sider></Sider> 
      </div>
    </div>
    <!-- rollbar -->
    <Rollbar></Rollbar>
  </div>
</template>

<script>
  import Navbar from '@/common/navbar/_navbar'
  import Navsearch from '@/common/navbar/navsearch'
  import Sider from '@/components/sider/sider'
  import Essay from '@/common/summary/essay'
  import EssayNoImg from '@/common/summary/essayNoImg'
  import Rollbar from '@/common/rollbar/rollbar'
     export default {
      name: "home",
      components:{
        Navbar:Navbar,
        Sider:Sider,
        Navsearch:Navsearch,
        Essay:Essay,
        EssayNoImg:EssayNoImg,
        Rollbar:Rollbar
      },
      mounted:function(){
        // siders到底，则显示第一个sider
        $(window).scroll(function(){//为了保证兼容性，这里取两个值，哪个有值取哪一个　　
          //scrollTop就是触发滚轮事件时滚轮的高度});
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;　　
          if(parseInt(scrollTop) > 1800){
            $('div.content-wrap>.sidebar').css({
              'position':'fixed',
              'margin-left':0,
              'top':'15px',
              'right':'15px'
            });
          }else{
            $('div.content-wrap>.sidebar').css({
              'position':'relative',
              'margin-left':'-360px',
              'top':0,
              'right':0
            });
          }
        })

        // 
      }
    }
</script>

<style lang="less">
@greenColor:#8AC78F;
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
      margin:0 15px;
      .content-wrap{
        max-width: 1200px;
        margin: 0 auto;
        padding: 0;
        position: relative;
        margin-top: 15px;
        .content{
          position: relative;
          min-height: 500px;
          margin-right: 380px;
          margin-bottom: 15px;
          float: left;
          .content-title{
            overflow: hidden;
            margin-bottom:10px;
            h3{
              float: left;
              font-size: 20px;
              font-weight: normal;
            }
            .more{
              float: right;
              a{
                color:#999;
              }
              a:hover{
                color: @greenColor;
              }
            }
          }
        }
        @media (max-width:1024px) {
          .content{
            margin-right: 0;
          }
        }
      }
    }
    .container::after{
      clear: both;
    }
  }
</style>
