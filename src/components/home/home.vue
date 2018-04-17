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
          <Essay :intoHref="complexUrl"></Essay>
          <EssayNoImg :intoHref="simpleUrl"></EssayNoImg>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <EssayNoImg :intoHref="simpleUrl"></EssayNoImg>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
          <Essay :intoHref="complexUrl"></Essay>
        </div>
        <Sider></Sider> 
      </div>
    </div>
    <!-- rollbar -->
    <Rollbar></Rollbar>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import { mapState } from 'vuex'
  import Navbar from '@/common/navbar/_navbar'
  import Navsearch from '@/common/navbar/navsearch'
  import Sider from '@/components/sider/sider'
  import Essay from '@/common/summary/essay'
  import EssayNoImg from '@/common/summary/essayNoImg'
  import Rollbar from '@/common/rollbar/rollbar'
     export default {
      name: "home",
      store,
      data(){
        return {
          simpleUrl:'/simple',
          complexUrl:'/complex'
        }
      },
      computed:{
        ...mapState(['isIntoHome']),
      },
      components:{
        Navbar:Navbar,
        Sider:Sider,
        Navsearch:Navsearch,
        Essay:Essay,
        EssayNoImg:EssayNoImg,
        Rollbar:Rollbar
      },
      mounted:function(){
        // 浏览器文档高度
        let screenHight = 0;
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

          // rollbar 滚动条的显示与消失，以及至顶部
          // screenHight = document.documentElement.clientHeight  || document.body.clientHeight ;
          if(scrollTop > 30){
            if($('div.rollbar').attr('style')){
              $('div.rollbar').removeAttr('style').addClass('rollbarOp1');

              let set1 = setTimeout(function(){
                if($('div.rollbar').hasClass('rollbarOp0')){
                  $('div.rollbar').removeClass('rollbarOp0');
                }
                clearTimeout(set1);
              },250);
            }
          }else{
            if(!$('div.rollbar').attr('style')){
              $('div.rollbar').addClass('rollbarOp0');

              let set0 = setTimeout(function(){
                if($('div.rollbar').hasClass('rollbarOp1')){
                  $('div.rollbar').removeClass('rollbarOp1');
                }
                $('div.rollbar').attr('style','display:none');
                clearTimeout(set0);
              },250);
            }
          }
        })

        // rollbar 点击回顶部
        $('div.rollbar').on('click',function(){
          $('html,body').animate({scrollTop: '0px'},'800');
        });
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
    >header{
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
    >.rollbarOp1{
      opacity: 1;
      transition: all .8s;
    }
    >.rollbarOp0{
      opacity: 0;
      transition: all .8s;
    }
  }
</style>
