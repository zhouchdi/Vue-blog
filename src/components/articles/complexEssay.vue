<template>
  <div class="complexEssay">
      <header>
        <Navbar></Navbar>
      </header>
      <!-- 搜索框 -->
      <Navsearch></Navsearch>
      <!-- 地址面包屑 -->
      <div class="bread">
          <Breadcrumbs></Breadcrumbs>
      </div>
      <!-- 具体内容 -->
      <div class="complexEssay_content">
          <!-- 内容 -->
          <div class="complexEssay_content_cont">
            <Articlecomplex></Articlecomplex> 
          </div> 
          <!-- 侧栏 -->
          <Sider></Sider>
      </div>
      <!-- rollbar -->
      <Rollbar></Rollbar>
      <Rollbarcomment></Rollbarcomment>
  </div>
</template>
<script>
    import Navbar from '@/common/navbar/_navbar'
    import Navsearch from '@/common/navbar/navsearch'
    import Articlecomplex from '@/common/article/articlecomplex'
    import Sider from '@/components/sider/contentsider'
    import Breadcrumbs from '@/common/article/breadcrumbs'
    import Rollbar from '@/common/rollbar/rollbar'
    import Rollbarcomment from '@/common/rollbar/rollbarcomment'
    export default {
        components:{
            Articlecomplex:Articlecomplex,
            Navbar:Navbar,
            Sider:Sider,
            Navsearch:Navsearch,
            Breadcrumbs:Breadcrumbs,
            Rollbar:Rollbar,
            Rollbarcomment:Rollbarcomment
        },
        mounted:function(){
        // 浏览器文档高度
        let screenHight = 0;
        // siders到底，则显示第一个sider
        $(window).scroll(function(){//为了保证兼容性，这里取两个值，哪个有值取哪一个　　
          //scrollTop就是触发滚轮事件时滚轮的高度});
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;　
          if(parseInt(scrollTop) > 1400){
            $('div.complexEssay_content>.sidebar').css({
              'position':'fixed',
              'margin-left':0,
              'top':'15px',
              'right':'15px'
            });
          }else{
            $('div.complexEssay_content>.sidebar').css({
              'position':'relative',
              'margin-left':'-360px',
              'top':0,
              'right':0
            });
          }

          // rollbar 滚动条的显示与消失，以及至顶部
          screenHight = document.documentElement.clientHeight  || document.body.clientHeight ;
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

            if($('div.rollbarcomment').attr('style')){
              $('div.rollbarcomment').removeAttr('style').addClass('rollbarOp1');

              let set11 = setTimeout(function(){
                if($('div.rollbarcomment').hasClass('rollbarOp0')){
                  $('div.rollbarcomment').removeClass('rollbarOp0');
                }
                clearTimeout(set11);
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

            if(!$('div.rollbarcomment').attr('style')){
              $('div.rollbarcomment').addClass('rollbarOp0');

              let set00 = setTimeout(function(){
                if($('div.rollbarcomment').hasClass('rollbarOp1')){
                  $('div.rollbarcomment').removeClass('rollbarOp1');
                }
                $('div.rollbarcomment').attr('style','display:none');
                clearTimeout(set00);
              },250);
            }
          }
        })

        // rollbar 点击回顶部
        $('div.rollbar').on('click',function(){
          $('html,body').animate({scrollTop: '0px'},'800');
        });

        // rollbarcomment 点击回评论
        $('div.rollbarcomment').on('click',function(){
            $('html,body').animate({scrollTop: $('#comment').offset().top},'800');
        });
      }
    }
</script>
<style lang="less">
    .complexEssay{
        background: #fff;
        >header{
            max-width: 1200px;
            margin: 0 auto;
            padding: 1px 0;
            border-bottom: 1px solid #EAEAEA;
        }
        // 地址面包屑
        .bread{
            border-top: 1px solid #EBEBEB;
            border-bottom:1px solid #EBEBEB;
            box-shadow: 0 1px 3px rgba(0,0,0,.04);
        }
        // 具体内容
        .complexEssay_content{
            padding: 15px;
            background-color: #f6f6f6;
            // margin-bottom: 0;
            // 内容
            .complexEssay_content_cont{
                position: relative;
                min-height: 500px;
                margin-right: 380px;
                margin-bottom: 15px;
                float: left;
            }
            // 侧栏
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
    html{
        background-color:#f6f6f6;
    }
</style>
